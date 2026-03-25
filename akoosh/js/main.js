// ─── SHARED UTILITIES ───────────────────────────────────────────────

// Navbar scroll effect
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// Active subnav highlight
function initSubnav() {
  const links = document.querySelectorAll('.subnav-links a');
  if (!links.length) return;
  const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = [...links].find(l => l.getAttribute('href') === '#' + e.target.id);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => obs.observe(s));
}

// Mobile hamburger
function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');
  if (!btn || !mobileNav) return;
  btn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
  if (closeBtn) closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 60;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// Toast notification
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  const bg = type === 'success' ? 'var(--accent)' : type === 'error' ? '#ff4d4d' : 'var(--surface-3)';
  const color = type === 'success' ? '#000' : '#fff';
  t.style.cssText = `
    position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(20px);
    background: ${bg}; color: ${color}; padding: 12px 24px; border-radius: 50px;
    font-family: var(--font-body); font-size: 0.82rem; font-weight: 700;
    letter-spacing: 0.08em; z-index: 9998; opacity: 0; transition: all 0.35s ease;
    white-space: nowrap; box-shadow: 0 8px 28px rgba(0,0,0,0.4);
  `;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => t.remove(), 400);
  }, 3000);
}

// Footer shared HTML
function renderFooter(containerId, accent) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="footer-logo">AKOOSH</span>
            <p>Where your look gets its edge.<br>Where your day gets its fuel.</p>
            <div class="social-pills">
              <a href="#" class="social-pill">TikTok</a>
              <a href="#" class="social-pill">Instagram</a>
              <a href="#" class="social-pill">Facebook</a>
              <a href="#" class="social-pill">Snapchat</a>
            </div>
          </div>
          <div>
            <p class="footer-col-title">Navigate</p>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="cafe.html">Cafe</a></li>
              <li><a href="barbershop.html">Barbershop</a></li>
              <li><a href="index.html#location">Our Location</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Services</p>
            <ul class="footer-links">
              <li><a href="cafe.html#menu">Menu</a></li>
              <li><a href="cafe.html#amenities">Amenities</a></li>
              <li><a href="barbershop.html#services">Services</a></li>
              <li><a href="barbershop.html#book">Book Appointment</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Contact</p>
            <ul class="footer-links">
              <li><a href="tel:+970XXXXXXXXX">📞 +970 XXX XXX XXX</a></li>
              <li><a href="https://wa.me/970XXXXXXXXX" target="_blank">💬 WhatsApp</a></li>
              <li><a href="#">📍 [Your Address]</a></li>
              <li><a href="#">✉️ hello@akoosh.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2025 Akoosh. All rights reserved.</p>
          <p>Crafted with ♥ for the culture.</p>
        </div>
      </div>
    </footer>
  `;
}

// Init all shared
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initSubnav();
  initHamburger();
  initSmoothScroll();
});
