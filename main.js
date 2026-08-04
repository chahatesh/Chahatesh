document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  const ALL_PROJECTS = [
    {
      title: 'Atlas AI',
      categories: ['ai'],
      status: 'In Development',
      image: 'https://cdn.hackclub.com/019fccdf-1afe-7972-9eec-9ec147c3f0c9/Screenshot%202026-08-04%20085839.png',
      tech: ['Python', 'LLMs', 'Computer Vision', 'Agentic AI'],
      description: 'My most ambitious project yet — an intelligent AI assistant with long-term memory, vision, voice, tool calling, workflow automation, and future robotics integration. Currently in closed development.'
    },
    {
      title: 'Understand',
      categories: ['ai'],
      image: 'https://cdn.hackclub.com/019fccf8-7bec-7f63-b0cd-d416628d934e/Screenshot%202026-08-04%20093047.png',
      tech: ['Python', 'OpenAI', 'Electron', 'Computer Vision'],
      description: 'An AI desktop assistant that sees your screen, identifies bugs, and generates prompts for other AI tools so you never have to describe a screenshot manually again.',
      links: [
        { text: 'GitHub →', href: 'https://github.com/chahatesh/Understand', primary: true },
        { text: 'Demo →', href: 'https://github.com/chahatesh/Understand/releases', primary: false }
      ]
    },
    {
      title: 'Neural Navigator',
      categories: ['ai'],
      image: 'https://cdn.hackclub.com/019fcd23-e546-7a10-acba-7bcf304efaa9/Screenshot%202026-08-04%20101801.png',
      tech: ['JavaScript', 'Node.js', 'NLP', 'MongoDB'],
      description: 'An AI-powered knowledge database that semantically links notes and answers natural-language questions. Top-10 finalist in the Connecticut Lieutenant Governor\'s Coding Challenge.',
      links: [
        { text: 'GitHub →', href: 'https://github.com/chahatesh/Neural-Navigator', primary: true },
        { text: 'Demo →', href: 'https://neural-navigator--chahatesh.replit.app/', primary: false }
      ]
    },
    {
      title: 'Robotic Arm',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fccf0-1264-7f60-b32c-f24f5a67ba58/IMG_9954%20(1).png',
      tech: ['Onshape', '3D Printing', 'Servos', 'Kinematics'],
      description: 'A fully functional robotic arm built from scratch — custom CAD, 3D-printed components, multiple servos, and forward/inverse kinematics.',
      links: [{ text: 'Files →', href: 'https://www.printables.com/model/1784586-mg955-servo-robot-arm', primary: true }]
    },
    {
      title: 'Versatile XY Gantry',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fccfa-dd92-7ba2-9d65-190e979e4052/Screenshot%202026-07-30%20115514.png',
      tech: ['CAD', 'Linear Motion', 'Stepper Motors', 'Automation'],
      description: 'A modular, expandable motion platform designed for robotics, automation, CNC, and other engineering applications.',
      links: [{ text: '3D File →', href: 'https://cad.onshape.com/documents/9da4eec7b662b0f1e534ab21/w/bc1797026b485face401b90d/e/d9868a8ba112fb367924a744', primary: true }]
    },
    {
      title: 'SmartSchedule AI',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fccff-734f-797d-ad9b-5d4965f22dda/Screenshot%202026-08-04%20093826.png',
      tech: ['ESP32', 'OLED', 'Voice Input', 'AI'],
      description: 'An ESP32-powered smart planner featuring AI assistance, OLED display, voice input, timers, and scheduling tools.',
      links: [
        { text: 'GitHub →', href: 'https://github.com/chahatesh/SmartSchedule', primary: true },
        { text: 'Demo →', href: 'https://smartschedule.wasmer.app/', primary: false }
      ]
    },
    {
      title: 'Self-Balancing Robot',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fcd04-46d5-7608-8103-5c235707e21b/IMG_9674.png',
      tech: ['ESP32', 'IMU', 'PID Control', 'Motor Control'],
      description: 'Designed and programmed a two-wheel self-balancing robot using PID control and IMU sensors.',
      links: [{ text: 'GitHub →', href: 'https://github.com/chahatesh/Self-Balancing-Robot', primary: true }]
    },
    {
      title: 'ESP32 Robot Car',
      categories: ['robotics'],
      image: 'https://placehold.co/800x500/141416/FFFFFF.webp?text=ESP32+Robot+Car',
      tech: ['ESP32', 'Wi-Fi', 'Motor Driver', 'Embedded C'],
      description: 'Developed a Wi-Fi controlled robotic platform while experimenting with wireless communication, motor control, and embedded programming.',
      links: [{ text: 'No Link', href: '#', primary: false }]
    },
    {
      title: 'Stackable Battery Holder',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fcd26-2803-78ce-a613-62f09a019223/14.png',
      tech: ['Onshape', '3D Printing', 'Product Design'],
      description: 'Designed a modular, stackable battery storage system optimized for organization and efficient 3D printing.',
      links: [{ text: 'Makerworld →', href: 'https://makerworld.com/en/models/3117060-best-stackable-battery-holder-fast-and-useful?from=search#profileId-3515834', primary: true }]
    },
    {
      title: 'Arduino Projects',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fcd27-4623-7af5-b8d9-7d2f2775cc54/IMG_0038.MOV',
      tech: ['Arduino', 'OLED', 'Sensors', 'Audio'],
      description: 'Various embedded systems involving OLED displays, sensors, wireless communication, motor control, audio playback, and automation.',
      links: [{ text: 'YouTube →', href: 'https://www.youtube.com/@CKInnovates', primary: true }]
    },
    {
      title: 'VEX IQ Robotics',
      categories: ['robotics'],
      image: 'https://cdn.hackclub.com/019fcd29-e14d-73f8-9b8b-419509e6aeb2/maxresdefault.jpg',
      tech: ['C++', 'Sensors', 'Autonomous', 'CAD'],
      description: 'State-qualifying robot builds for 2025 and 2026. Designed drivetrains, sensor-based autonomous routines, and high-scoring lift mechanisms.',
      links: [{ text: 'Details →', href: 'https://events.vex.com/teams/VIQRC/23761A', primary: true }]
    },
    {
      title: 'WebOS',
      categories: ['web'],
      image: 'https://cdn.hackclub.com/019fccfe-2aba-7f17-b846-abc93675fc06/Screenshot%202026-08-04%20093704.png',
      tech: ['JavaScript', 'HTML/CSS', 'SPA'],
      description: 'A browser-based desktop operating system featuring custom applications including AI, notes, weather, calculator, browser, music, and settings.',
      links: [{ text: 'GitHub →', href: 'https://github.com/chahatesh/Web-OS', primary: true }]
    },
    {
      title: 'Portfolio Website',
      categories: ['web'],
      image: 'https://cdn.hackclub.com/019fcd2b-00b6-78e5-8fd4-3b8f05dc7e7e/Screenshot%202026-08-04%20102558.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'The site you\'re looking at — a frosted-glass, animated, responsive portfolio with case-study modals, timelines, and live counters.',
      links: [{ text: 'GitHub →', href: 'https://github.com/chahatesh/Chahatesh', primary: true }]
    },
    {
      title: 'StudyPath',
      categories: ['education'],
      image: 'https://cdn.hackclub.com/019fccf2-eef1-7a34-8722-6ff4cdaae387/Screenshot%202026-08-04%20092439.png',
      tech: ['React', 'Firebase', 'ML', 'EdTech'],
      description: 'An adaptive learning platform used by 1,000+ students. It personalizes quiz difficulty and timing using a spaced-repetition model tuned to each learner.',
      links: [
        { text: 'GitHub →', href: 'https://github.com/chahatesh/StudyPath', primary: true },
        { text: 'Live Site →', href: 'https://studypath.wasmer.app/', primary: false }
      ]
    }
  ];

  function renderProjects(projectsToRender) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projectsToRender.map(project => {
      const statusBadge = project.status ? `<span class="project-status">${project.status}</span>` : '';
      const links = (project.links || []).map(link =>
        `<a href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank"' : ''} class="btn ${link.primary ? 'btn-primary' : 'btn-secondary'}">${link.text}</a>`
      ).join('');

      return `
        <article class="glass tilt project-card reveal" data-category="${project.categories.join(' ')}">
          <img src="${project.image}" alt="${project.title}" class="thumb" loading="lazy" decoding="async" />
          ${statusBadge}
          <h3>${project.title}</h3>
          <div class="tech-stack">
            ${project.tech.map(t => `<span>${t}</span>`).join('')}
          </div>
          <p>${project.description}</p>
          <div class="card-actions">
            ${links}
          </div>
        </article>
      `;
    }).join('');
  }

  const loader = document.querySelector('.page-loader');
  if (loader && !prefersReducedMotion) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 900);
    });
  } else if (loader) {
    loader.classList.add('hidden');
  }

  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const count = isTouch ? 14 : 40;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.opacity = (Math.random() * 0.4 + 0.15).toFixed(2);
      particle.style.animationDuration = (Math.random() * 7 + 5) + 's';
      particle.style.animationDelay = (Math.random() * 5) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') document.body.classList.add('light-mode');

  function updateThemeIcon() {
    if (!themeToggle) return;
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateThemeIcon();
    });
  }

  if (!isTouch && !prefersReducedMotion) {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  document.querySelectorAll('.kinetic-line').forEach(line => {
    const text = line.textContent.trim();
    line.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.setProperty('--i', i);
      line.appendChild(span);
    });
  });

  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeReveals(root = document) {
    root.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
      const group = el.closest('.featured-grid, .achievements-grid, .skills-grid, .testimonials-grid, .stats-grid, .projects-grid, .leadership-grid, .about-layout, .awards-section');
      const sameGroup = group ? Array.from(group.querySelectorAll('.reveal')) : [];
      const index = group ? sameGroup.indexOf(el) : 0;
      el.style.setProperty('--i', index);
      el.dataset.observed = 'true';
      revealObserver.observe(el);
    });
  }

  const nav = document.querySelector('nav');
  const progress = document.getElementById('progress-bar');

  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 40);

    if (progress) {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      progress.style.width = pct + '%';
    }

    document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav a[href^="#"]').forEach(link => {
      const id = link.getAttribute('href').slice(1);
      const section = document.getElementById(id);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      link.classList.toggle('active', rect.top <= 160 && rect.bottom >= 160);
    });

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        document.body.classList.remove('spot-amber', 'spot-blue', 'spot-violet');
        if (['projects', 'achievements', 'other-projects'].includes(sec.id)) document.body.classList.add('spot-amber');
        else if (['journey', 'skills', 'about'].includes(sec.id)) document.body.classList.add('spot-blue');
        else if (['testimonials', 'leadership', 'mission'].includes(sec.id)) document.body.classList.add('spot-violet');
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (prefersReducedMotion) {
          el.textContent = el.dataset.target + (el.dataset.suffix || '');
        } else {
          animateCounter(el);
        }
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const duration = 2200;

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  const spotlight = document.getElementById('spotlight');
  window.addEventListener('mousemove', e => {
    if (spotlight) {
      spotlight.style.setProperty('--x', e.clientX + 'px');
      spotlight.style.setProperty('--y', e.clientY + 'px');
    }
  });

  document.querySelectorAll('.glass').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mx', x + 'px');
      el.style.setProperty('--my', y + 'px');

      if (!prefersReducedMotion && el.classList.contains('tilt')) {
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -7;
        const rotateY = ((x - cx) / cx) * 7;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
      }
    });

    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '50%');
      if (el.classList.contains('tilt')) el.style.transform = '';
    });
  });

  const timeline = document.querySelector('.timeline');
  const trackProgress = document.querySelector('.timeline-progress');

  function updateTimeline() {
    if (!timeline || !trackProgress || prefersReducedMotion) return;

    const rect = timeline.getBoundingClientRect();
    const winH = window.innerHeight;
    const start = rect.top + window.scrollY - winH * 0.65;
    const end = rect.bottom + window.scrollY - winH * 0.35;
    const current = window.scrollY;
    const total = end - start;
    let pct = ((current - start) / total) * 100;
    pct = Math.max(0, Math.min(100, pct));
    trackProgress.style.height = pct + '%';
  }

  if (timeline) {
    window.addEventListener('scroll', updateTimeline, { passive: true });
    window.addEventListener('resize', updateTimeline);
    updateTimeline();
  }

  const itemObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        itemObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.timeline-item').forEach(el => itemObserver.observe(el));

  const projectGrid = document.getElementById('projects-grid');
  const searchInput = document.getElementById('search');
  const categoryBtns = document.querySelectorAll('.category-btn');

  if (projectGrid) {
    renderProjects(ALL_PROJECTS);
    observeReveals(projectGrid);

    function filterProjects() {
      const query = (searchInput?.value || '').toLowerCase();
      const activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';
      const cards = projectGrid.querySelectorAll('.project-card');

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();
        const tech = Array.from(card.querySelectorAll('.tech-stack span')).map(s => s.textContent.toLowerCase()).join(' ');
        const categories = card.dataset.category.toLowerCase().split(' ');

        const matchesSearch = (title + ' ' + desc + ' ' + tech).includes(query);
        const matchesCategory = activeCategory === 'all' || categories.includes(activeCategory);

        card.classList.toggle('hidden', !(matchesSearch && matchesCategory));
      });
    }

    searchInput?.addEventListener('input', filterProjects);
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProjects();
      });
    });
  }

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');

  const PROJECT_CASES = {
    atlas: {
      title: 'Atlas AI',
      category: 'AI · Agentic AI · Computer Vision · Robotics Integration',
      image: 'https://cdn.hackclub.com/019fccdf-1afe-7972-9eec-9ec147c3f0c9/Screenshot%202026-08-04%20085839.png',
      github: 'https://github.com',
      demo: '#',
      problem: 'Most AI assistants forget context after a session and can\'t act on the physical world. Atlas AI is designed to be a persistent, multi-modal AI that remembers, sees, speaks, uses tools, automates workflows, and eventually controls robots and physical devices.',
      architecture: ['Multi-agent orchestration', 'Long-term memory vector store', 'Computer vision pipeline', 'Voice I/O', 'Tool calling framework', 'Local + cloud LLM routing', 'Workflow automation engine', 'Robotics control interface'],
      challenges: [
        { title: 'Memory retention', text: 'Designing a vector memory that stores facts, preferences, and conversation history, then retrieves them contextually when needed.' },
        { title: 'Multi-agent coordination', text: 'Splitting complex tasks between specialized agents without losing coherence or duplicating work.' },
        { title: 'Real-time vision', text: 'Processing camera and desktop feeds with low latency so the assistant can react to what it sees.' },
        { title: 'Hardware integration', text: 'Bridging high-level AI decisions to low-level robot actuators through a clean command interface.' }
      ],
      result: 'Currently in active development. Once complete, Atlas AI will serve as a unified personal assistant that understands both digital and physical contexts.'
    },
    arm: {
      title: 'Robotic Arm',
      category: 'Robotics · Mechanical Engineering · CAD · Embedded Systems',
      image: 'https://cdn.hackclub.com/019fccf0-1264-7f60-b32c-f24f5a67ba58/IMG_9954%20(1).png',
      github: 'https://github.com',
      demo: 'https://www.printables.com/model/1784586-mg955-servo-robot-arm',
      problem: 'Off-the-shelf robotic arms are expensive and closed-source. I wanted to design a fully custom, 3D-printed arm to learn kinematics, mechanical design, and embedded control from the ground up.',
      architecture: ['Custom Onshape CAD', '3D printed PLA/PETG components', 'Servo motor actuation', 'Custom control PCB / Arduino', 'Forward & inverse kinematics solver', 'Modular end-effector mount'],
      challenges: [
        { title: 'Mechanical backlash', text: 'Tight tolerances and bracing were needed to keep joints accurate after repeated motion.' },
        { title: 'Inverse kinematics', text: 'Solving joint angles for a desired end-effector position in real time on limited hardware.' },
        { title: 'Electronics integration', text: 'Routing power and PWM signals cleanly to multiple servos without noise or voltage drops.' }
      ],
      result: 'A fully functional, open-arm platform that can be expanded with grippers, suction tools, or computer vision for pick-and-place tasks.'
    },
    studypath: {
      title: 'StudyPath',
      category: 'EdTech · Adaptive Learning · Web App',
      image: 'https://cdn.hackclub.com/019fccf2-eef1-7a34-8722-6ff4cdaae387/Screenshot%202026-08-04%20092439.png',
      github: 'https://github.com/chahatesh/StudyPath',
      demo: 'https://studypath.wasmer.app/',
      problem: 'Traditional quizzes assume every student is at the same level. StudyPath personalizes each quiz in real time, adjusting difficulty and repetition based on performance so every minute of study counts.',
      architecture: ['React PWA', 'Firebase Auth + Firestore', 'Cloud Functions', 'Custom spaced-repetition model', 'Admin analytics dashboard'],
      challenges: [
        { title: 'Scaling to 1,000+ active students', text: 'I optimized Firestore with composite indexes, batched writes during peak hours, and cached frequently accessed question banks on the client.' },
        { title: 'Cold starts in Cloud Functions', text: 'Scheduled keep-alive pings plus denormalized scoring data minimized recursive reads and lag.' },
        { title: 'Adaptive algorithm', text: 'A custom difficulty balancer combines item-response theory with spaced repetition so questions reappear exactly when memory is about to fade.' }
      ],
      result: 'Trusted by over 1,000 students to improve retention, quiz scores, and confidence across STEM subjects.'
    },
    understand: {
      title: 'Understand',
      category: 'AI · Computer Vision · Desktop Assistant',
      image: 'https://cdn.hackclub.com/019fccf8-7bec-7f63-b0cd-d416628d934e/Screenshot%202026-08-04%20093047.png',
      github: 'https://github.com',
      demo: '#',
      problem: 'Developers and designers lose hours switching between their screen and AI chat windows, manually describing bugs and UI issues. Understand gives your desktop vision: it captures the screen, identifies problems, and crafts optimized prompts automatically.',
      architecture: ['OpenAI GPT-4 Vision', 'Python / FastAPI backend', 'Electron desktop shell', 'OpenCV preprocessing', 'In-memory context cache'],
      challenges: [
        { title: 'Latency on screenshots', text: 'Encoding full-resolution frames was slow. Solution: crop to regions of interest, compress smartly, and run inference asynchronously.' },
        { title: 'Privacy-first design', text: 'No raw screen data is stored; frames are processed in-memory and discarded immediately after inference.' },
        { title: 'Prompt accuracy', text: 'Generic prompts produced weak results. I built structured prompt templates tuned for UI debugging and code explanation.' }
      ],
      result: 'Cuts the bug-reporting loop from minutes of typing to a single click, making AI assistance feel truly contextual.'
    },
    neural: {
      title: 'Neural Navigator',
      category: 'AI · Knowledge Base · NLP',
      image: 'https://cdn.hackclub.com/019fcd23-e546-7a10-acba-7bcf304efaa9/Screenshot%202026-08-04%20101801.png',
      github: 'https://github.com',
      demo: '#',
      problem: 'Students scatter notes across Notion, Docs, screenshots, and bookmarks. Studying becomes archaeology. Neural Navigator builds a connected knowledge graph that understands natural questions, even when the exact keyword is forgotten.',
      architecture: ['React + Vite frontend', 'Node.js / Express API', 'MongoDB + Redis cache', 'OpenAI embeddings', 'Vector semantic search'],
      challenges: [
        { title: 'Semantic search quality', text: 'Short, messy notes created weak embeddings. Solution: chunk content, add course-context metadata, and rerank results.' },
        { title: 'Real-time graph updates', text: 'Worker queues update the knowledge graph in the background so the UI stays snappy while notes are added.' },
        { title: 'Explainable connections', text: 'Users can hover any node to see why concepts are linked, building trust in AI-made recommendations.' }
      ],
      result: 'Earned top honors in the Connecticut Lieutenant Governor\'s Coding Challenge and advanced to the final 10 competitors statewide.'
    }
  };

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const key = btn.dataset.openModal;
      if (PROJECT_CASES[key]) openModal(PROJECT_CASES[key]);
    });
  });

  function openModal(data) {
    if (!modal || !modalBody) return;

    const architectureHTML = data.architecture.map(t => `<div class="arch-item">${t}</div>`).join('');
    const challengesHTML = data.challenges.map(c => `
      <div class="challenge-item">
        <h4>${c.title}</h4>
        <p>${c.text}</p>
      </div>
    `).join('');

    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-title-wrap">
          <h2>${data.title}</h2>
          <span class="modal-category">${data.category}</span>
        </div>
        <button class="modal-close" aria-label="Close">×</button>
      </div>
      <img src="${data.image}" alt="${data.title}" class="modal-image" loading="lazy" />
      <div class="case-body">
        <div class="glass case-block">
          <h3>Problem Statement</h3>
          <p>${data.problem}</p>
        </div>
        <div class="glass case-block">
          <h3>System Architecture</h3>
          <div class="architecture-grid">${architectureHTML}</div>
        </div>
        <div class="case-block">
          <h3>Technical Challenges & Solutions</h3>
          <div class="challenge-list">${challengesHTML}</div>
        </div>
        <div class="glass case-block">
          <h3>Outcome</h3>
          <p>${data.result}</p>
        </div>
        <div class="modal-actions">
          <a href="${data.github}" target="_blank" class="btn btn-primary">View on GitHub →</a>
          <a href="${data.demo}" class="btn btn-secondary">Live Demo →</a>
        </div>
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    modalBody.querySelector('.modal-close').addEventListener('click', closeModal);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  }

  document.querySelectorAll('.carousel').forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', e => {
      isDown = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => isDown = false);
    carousel.addEventListener('mouseup', () => isDown = false);

    carousel.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.6;
      carousel.scrollLeft = scrollLeft - walk;
    });
  });

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.querySelector('.form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      const data = new FormData(contactForm);

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: data
        });
        const result = await res.json();

        if (result.success) {
          formStatus.textContent = 'Message sent! I’ll get back to you soon.';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error(result.message);
        }
      } catch {
        formStatus.textContent = 'Something went wrong. You can still email me directly.';
        formStatus.className = 'form-status error';
      }
    });
  }

  observeReveals();
});
