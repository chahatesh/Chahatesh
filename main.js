document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    const setMenuState = open => {
      mobileNav.classList.toggle('open', open);
      menuToggle.textContent = open ? 'close' : 'menu';
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    menuToggle.addEventListener('click', () => {
      setMenuState(!mobileNav.classList.contains('open'));
    });    document.querySelectorAll('.mobile-nav a').forEach(link => {
      link.addEventListener('click', () => setMenuState(false));
    });
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    let current = window.scrollY < 100 ? 'home' : '';
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 140) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Modal data
  const PROJECT_CASES = {
    atlas: {
      title: 'Atlas AI',
      category: 'AI · vision · voice · robotics',
      image: 'https://user-cdn.hackclub-assets.com/019fccdf-1afe-7972-9eec-9ec147c3f0c9/Screenshot%202026-08-04%20085839.png',
      problem: 'Most AI helpers forget past chats and cannot touch real machines. Atlas is my fix.',
      architecture: ['AI helpers', 'Memory store', 'Vision system', 'Voice input', 'Tool use', 'Local + cloud AI', 'Robot connection'],
      challenges: [
        { title: 'Too much context', text: 'Long tasks fill the memory. I save the important parts and cut repeats.' },
        { title: 'Passing work', text: 'Helpers lose track of tasks. One main helper keeps the plan.' },
        { title: 'Slow vision', text: 'Camera images are slow to read. I process the useful parts in the background.' }
      ],
      result: 'Still building. Goal: one helper that gets both software and the real world.',
      links: []
    },
    arm: {
      title: '4-DOF Robotic Arm',
      category: 'robotics · CAD · electronics',
      image: 'https://cdn.hackclub.com/019fccf0-1264-7f60-b32c-f24f5a67ba58/IMG_9954%20(1).png',
      problem: 'Robot arms are expensive and hard to change. I designed and printed my own instead.',
      architecture: ['Onshape CAD', '3D-printed parts', 'MG995 servos', 'Arduino control', 'Movement math', 'Changeable tool mount'],
      challenges: [
        { title: 'Burned servos', text: 'V1 burned three servos — the force was not spread well. V2 got stronger mounts.' },
        { title: 'Finding the angles', text: 'Getting the joint angles right took many tries.' },
        { title: 'Loose joints', text: 'Joints needed bracing to stay accurate after many moves.' }
      ],
      result: 'It works. Gripper, suction tool, or camera can be added later.',
      links: [{ text: 'Files', href: 'https://www.printables.com/model/1784586-mg955-servo-robot-arm' }]
    },
    studypath: {
      title: 'StudyPath',
      category: 'learning app · web app',
      image: 'https://cdn.hackclub.com/019fccf2-eef1-7a34-8722-6ff4cdaae387/Screenshot%202026-08-04%20092439.png',
      problem: 'Normal quizzes give everyone the same work. StudyPath adapts to each student.',
      architecture: ['React app', 'Firebase login and data', 'Cloud Functions', 'Review system', 'Teacher dashboard'],
      challenges: [
        { title: 'More students', text: 'At 1,000+ students I made the data faster and saved common results on-device.' },
        { title: 'Slow starts', text: 'Some features were slow on first run. I changed how scores are saved.' },
        { title: 'Smart review', text: 'Questions come back right before a student would forget them.' }
      ],
      result: '1,000+ students practiced STEM with it.',
      links: [
        { text: 'GitHub', href: 'https://github.com/chahatesh/StudyPath' },
        { text: 'Live site', href: 'https://studypath.wasmer.app/' }
      ]
    }
  };

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  let modalTrigger = null;

  function openModal(key) {
    const data = PROJECT_CASES[key];
    if (!data || !modal || !modalBody) return;

    const arch = data.architecture.map(t => `<div class="arch-item">${t}</div>`).join('');
    const challenges = data.challenges.map(c => `
      <div class="challenge-item">
        <h4>${c.title}</h4>
        <p>${c.text}</p>
      </div>
    `).join('');
    const links = data.links.map(l =>
      `<a href="${l.href}" target="_blank" rel="noopener" class="btn btn-secondary">${l.text} →</a>`
    ).join('');

    modalBody.innerHTML = `
      <div class="modal-header">
        <div>
          <h2 id="modal-title">${data.title}</h2>
        </div>
        <button type="button" class="modal-close" aria-label="Close case study">×</button>
      </div>
      <img src="${data.image}" alt="${data.title}" class="modal-image" loading="lazy" />
      <div class="case-block">
        <h3>Problem</h3>
        <p>${data.problem}</p>
      </div>
      <div class="case-block">
        <h3>How it works</h3>
        <div class="architecture-grid">${arch}</div>
      </div>
      <div class="case-block">
        <h3>Challenges</h3>
        <div class="challenge-list">${challenges}</div>
      </div>
      <div class="case-block">
        <h3>What happened</h3>
        <p>${data.result}</p>
      </div>
      ${links ? `<div class="modal-actions">${links}</div>` : ''}
    `;

    modalTrigger = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeButton = modalBody.querySelector('.modal-close');
    closeButton.addEventListener('click', closeModal);
    closeButton.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalTrigger && typeof modalTrigger.focus === 'function') modalTrigger.focus();
    modalTrigger = null;
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(btn.dataset.openModal);
    });
  });

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }



  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.querySelector('.form-status');

  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      const invalidField = [...form.querySelectorAll('[required]')].find(field => !field.checkValidity());
      if (invalidField) {
        const fieldName = invalidField.name === 'email' && invalidField.value
          ? 'a valid email address'
          : (invalidField.name || 'the required fields');
        status.textContent = `Please add ${fieldName}.`;
        status.className = 'form-status bad';
        invalidField.setAttribute('aria-invalid', 'true');
        invalidField.focus();
        return;
      }

      form.querySelectorAll('[aria-invalid="true"]').forEach(field => field.removeAttribute('aria-invalid'));
      const data = new FormData(form);

      const submitBtn = form.querySelector('#submit-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data
        });
        const result = await res.json();

        if (result.success) {
          status.textContent = 'Message sent. I will get back to you soon.';
          status.className = 'form-status ok';
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send message';
          }
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        status.textContent = 'Something went wrong. Please email me directly.';
        status.className = 'form-status bad';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send message';
        }
      }
    });
  }
});
