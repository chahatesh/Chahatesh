document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js');
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const archiveCards = [...document.querySelectorAll('.archive-card')];
  const filterStatus = document.getElementById('filter-status');
  const projectSearch = document.getElementById('project-search');
  const emptyState = document.getElementById('archive-empty');
  let activeFilter = 'all';

  function applyFilters() {
    const query = projectSearch?.value.trim().toLowerCase() || '';
    let count = 0;
    archiveCards.forEach(card => {
      const categoryMatches = activeFilter === 'all' || card.dataset.cat === activeFilter;
      const searchMatches = card.textContent.toLowerCase().includes(query);
      card.hidden = !categoryMatches || !searchMatches;
      if (!card.hidden) count++;
    });
    if (filterStatus) filterStatus.textContent = `${count} ${count === 1 ? 'project' : 'projects'}`;
    if (emptyState) emptyState.hidden = count > 0;
  }

  function selectFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach(button => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    applyFilters();
  }

  filterButtons.forEach(button => button.addEventListener('click', () => selectFilter(button.dataset.filter)));
  projectSearch?.addEventListener('input', applyFilters);
  document.getElementById('clear-search')?.addEventListener('click', () => {
    projectSearch.value = '';
    selectFilter('all');
    projectSearch.focus();
  });
  if (window.location.hash === '#project-search' && projectSearch) projectSearch.focus();

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  let modalTrigger = null;
  let inertRoots = [];
  const escapeHTML = text => String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    inertRoots.forEach(({ root, wasInert }) => { root.inert = wasInert; });
    inertRoots = [];
    if (modalTrigger?.isConnected) modalTrigger.focus({ preventScroll: true });
    modalTrigger = null;
  }

  function showDialog(content, trigger) {
    if (!modal || !modalBody) return;
    modalTrigger = trigger;
    modalBody.innerHTML = content;
    inertRoots = [...document.body.children]
      .filter(root => root !== modal && root.tagName !== 'SCRIPT')
      .map(root => ({ root, wasInert: root.inert }));
    inertRoots.forEach(({ root }) => { root.inert = true; });
    modal.hidden = false;
    modal.scrollTop = 0;
    document.body.classList.add('modal-open');
    modalBody.querySelector('.modal-close').addEventListener('click', closeModal);
    modalBody.querySelector('.modal-close').focus({ preventScroll: true });
  }

  document.querySelectorAll('[data-open-modal]').forEach(button => button.addEventListener('click', () => {
    const data = typeof PROJECT_CASES !== 'undefined' ? PROJECT_CASES[button.dataset.openModal] : null;
    if (!data) return;
    const architecture = data.architecture.map(item => `<li class="arch-item">${escapeHTML(item)}</li>`).join('');
    const challenges = data.challenges.map(item => `<div class="challenge-item"><h4>${escapeHTML(item.title)}</h4><p>${escapeHTML(item.text)}</p></div>`).join('');
    const links = data.links.map(link => `<a href="${escapeHTML(link.href)}" target="_blank" rel="noopener" class="btn btn-secondary">${escapeHTML(link.text)} ↗</a>`).join('');
    showDialog(`
      <div class="modal-header"><div><p class="project-meta">${escapeHTML(data.category)}</p><h2 id="modal-title">${escapeHTML(data.title)}</h2></div><button type="button" class="modal-close" aria-label="Close project">×</button></div>
      <img src="${escapeHTML(data.image)}" alt="${escapeHTML(data.title)}" class="modal-image" />
      <div class="case-block"><h3>Why I made it</h3><p>${escapeHTML(data.problem)}</p></div>
      <div class="case-block"><h3>What’s inside</h3><ul class="architecture-grid">${architecture}</ul></div>
      <div class="case-block"><h3>What took some figuring out</h3>${challenges}</div>
      <div class="case-block"><h3>Where it stands</h3><p>${escapeHTML(data.result)}</p></div>
      ${links ? `<div class="modal-actions">${links}</div>` : ''}`, button);
  }));

  document.querySelectorAll('[data-certificate]').forEach(button => button.addEventListener('click', () => {
    const title = button.dataset.title;
    showDialog(`<div class="modal-header"><h2 id="modal-title">${escapeHTML(title)}</h2><button type="button" class="modal-close" aria-label="Close image">×</button></div><img class="certificate-modal-image" src="${escapeHTML(button.dataset.certificate)}" alt="${escapeHTML(title)}" /><a class="text-link full-image-link" href="${escapeHTML(button.dataset.certificate)}" target="_blank" rel="noopener">Open full-size image <span aria-hidden="true">↗</span></a>`, button);
  }));

  if (modal) {
    modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => {
      if (modal.hidden) return;
      if (event.key === 'Escape') { event.preventDefault(); closeModal(); }
      if (event.key === 'Tab') {
        const focusable = [...modal.querySelectorAll('a[href], button, [tabindex="0"]')].filter(el => !el.hidden && !el.disabled);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
  }

  document.querySelectorAll('img').forEach(img => {
    const handleError = () => {
      const preview = img.closest('.archive-thumb');
      if (preview) { preview.hidden = true; preview.closest('.archive-card').classList.add('archive-no-image'); }
    };
    img.addEventListener('error', handleError, { once: true });
    if (img.complete && !img.naturalWidth) handleError();
  });

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('input', event => event.target.removeAttribute('aria-invalid'));
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (form.getAttribute('aria-busy') === 'true') return;
      const requiredFields = [...form.querySelectorAll('[required]')];
      const invalid = requiredFields.find(field => !field.checkValidity() || !field.value.trim());
      if (invalid) {
        status.textContent = invalid.name === 'email' && invalid.value ? 'Please enter a valid email address.' : `Please add your ${invalid.name}.`;
        status.className = 'form-status bad';
        invalid.setAttribute('aria-invalid', 'true');
        invalid.focus();
        return;
      }
      const submitButton = form.querySelector('[type="submit"]');
      const originalLabel = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
      form.setAttribute('aria-busy', 'true');
      status.textContent = '';
      try {
        const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) });
        const result = await response.json();
        if (!response.ok || !result.success) throw new Error('Message was not accepted.');
        status.textContent = 'Message sent. Thanks for getting in touch!';
        status.className = 'form-status ok';
        form.reset();
      } catch {
        status.textContent = 'Your message couldn’t be sent. Please try emailing me directly.';
        status.className = 'form-status bad';
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalLabel;
        form.removeAttribute('aria-busy');
      }
    });
  }
});
