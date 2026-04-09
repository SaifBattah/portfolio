// ─── BARBERSHOP DATA ─────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'haircut', icon: '✂️',
    name: 'Haircut', nameAr: 'حلاقة راس',
    desc: 'Classic to contemporary cuts, tailored to your face shape. Scissor or clipper finish.',
    price: 35, duration: '30 min',
    tags: ['Classic', 'Fade', 'Modern'],
    popular: true,
  },
  {
    id: 'beard', icon: '🪒',
    name: 'Beard Trim', nameAr: 'حلاقة لحية',
    desc: 'Precision shaping, clean edging, hot towel finish. You bring the beard, we bring the craft.',
    price: 25, duration: '20 min',
    tags: ['Shaping', 'Edging', 'Hot Towel'],
  },
  {
    id: 'skincare', icon: '✨',
    name: 'Skin Care', nameAr: 'العناية بالبشرة',
    desc: 'Deep cleanse, face mask, and skin treatment. Your skin deserves the same attention as your fade.',
    price: 45, duration: '45 min',
    tags: ['Deep Cleanse', 'Face Mask', 'Treatment'],
  },
  {
    id: 'fullpackage', icon: '👑',
    name: 'Full Package', nameAr: 'الباقة الكاملة',
    desc: 'Haircut + Beard Trim + Skin Care. The complete Akoosh experience from scalp to skin.',
    price: 90, duration: '90 min',
    tags: ['Best Value', 'Complete'],
    popular: true,
  },
  {
    id: 'kidcut', icon: '🧒',
    name: "Kid's Cut", nameAr: 'قصة أطفال',
    desc: 'Patient, precise cuts for the little ones. Clean finish, no fuss.',
    price: 20, duration: '20 min',
    tags: ['Under 12', 'Gentle'],
  },
  {
    id: 'shave', icon: '🪒',
    name: 'Hot Towel Shave', nameAr: 'حلاقة كاملة',
    desc: 'Traditional straight razor shave, hot towel prep, premium aftercare.',
    price: 30, duration: '30 min',
    tags: ['Traditional', 'Razor'],
  },
];

const BARBERS = [
  {
    id: 'barber1', name: 'Khaled',
    title: 'Senior Barber',
    specialties: ['Fades', 'Beard Design', 'Classic Cuts'],
    experience: '6 yrs',
    rating: 4.9, reviews: 214,
    gradient: 'linear-gradient(145deg, #0a0a14, #1a1a30)',
    initial: 'K'
  },
  {
    id: 'barber2', name: 'Ahmad',
    title: 'Fade Specialist',
    specialties: ['Skin Fades', 'Modern Cuts', 'Line-ups'],
    experience: '4 yrs',
    rating: 4.8, reviews: 189,
    gradient: 'linear-gradient(145deg, #0f0a00, #1e1400)',
    initial: 'A'
  },
  {
    id: 'barber3', name: 'Omar',
    title: 'Style & Grooming',
    specialties: ['Skin Care', 'Beard Work', 'Texture'],
    experience: '5 yrs',
    rating: 4.9, reviews: 156,
    gradient: 'linear-gradient(145deg, #0a0f0a, #0f1e0f)',
    initial: 'O'
  },
];

const GALLERY_ITEMS = [
  { id: 1, category: 'fade', label: 'Skin Fade', barber: 'Khaled', emoji: '💈', gradient: 'linear-gradient(145deg, #0a0a14, #2a2a50)' },
  { id: 2, category: 'haircut', label: 'Textured Crop', barber: 'Ahmad', emoji: '✂️', gradient: 'linear-gradient(145deg, #14080a, #3a1020)' },
  { id: 3, category: 'beard', label: 'Beard Design', barber: 'Omar', emoji: '🪒', gradient: 'linear-gradient(145deg, #0a0f0a, #1a3018)' },
  { id: 4, category: 'fade', label: 'Mid Fade', barber: 'Ahmad', emoji: '💈', gradient: 'linear-gradient(145deg, #0a0a18, #1a1a40)' },
  { id: 5, category: 'haircut', label: 'French Crop', barber: 'Khaled', emoji: '✂️', gradient: 'linear-gradient(145deg, #1a0a08, #3a1a10)' },
  { id: 6, category: 'beard', label: 'Full Beard Shape', barber: 'Omar', emoji: '🪒', gradient: 'linear-gradient(145deg, #0a1208, #1a2a14)' },
  { id: 7, category: 'fade', label: 'High Fade', barber: 'Khaled', emoji: '💈', gradient: 'linear-gradient(145deg, #100a0a, #2a1818)' },
  { id: 8, category: 'haircut', label: 'Side Part', barber: 'Ahmad', emoji: '✂️', gradient: 'linear-gradient(145deg, #0a0a10, #181828)' },
  { id: 9, category: 'fade', label: 'Bald Fade', barber: 'Omar', emoji: '💈', gradient: 'linear-gradient(145deg, #080a0a, #101820)' },
];

// ─── BOOKING STATE ───────────────────────────────────────────────────
const booking = {
  step: 1,
  service: null,
  barber: null,
  date: null,
  time: null,
};

// ─── STEP NAVIGATION ─────────────────────────────────────────────────
function goToStep(n) {
  booking.step = n;
  document.querySelectorAll('.booking-step').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === n);
    el.style.display = i + 1 === n ? 'block' : 'none';
  });
  document.querySelectorAll('.step-indicator').forEach((el, i) => {
    el.classList.toggle('active', i + 1 === n);
    el.classList.toggle('done', i + 1 < n);
  });
  document.getElementById('booking-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ─── STEP 1 — SERVICES ───────────────────────────────────────────────
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICES.map(s => `
    <div class="service-card ${booking.service?.id === s.id ? 'selected' : ''}" onclick="selectService('${s.id}')">
      ${s.popular ? '<span class="popular-badge">Popular</span>' : ''}
      <div class="service-card-icon">${s.icon}</div>
      <div class="service-card-body">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-name-ar ar">${s.nameAr}</p>
        <p class="service-desc">${s.desc}</p>
        <div class="service-tags">
          ${s.tags.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>
      <div class="service-card-footer">
        <div class="service-price">₪${s.price}</div>
        <div class="service-duration">${s.duration}</div>
      </div>
    </div>
  `).join('');
}

function selectService(id) {
  booking.service = SERVICES.find(s => s.id === id);
  document.querySelectorAll('.service-card').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.service-card').forEach((el, i) => {
    if (SERVICES[i].id === id) el.classList.add('selected');
  });
  const nextBtn = document.getElementById('step1-next');
  if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }
}

// ─── STEP 2 — BARBER ─────────────────────────────────────────────────
function renderBarbers() {
  const grid = document.getElementById('barbers-grid');
  if (!grid) return;

  const anyBarber = {
    id: 'any', initial: '?', name: 'No Preference',
    title: 'First Available', specialties: ['Any Style'],
    experience: 'All team', rating: null, reviews: null,
    gradient: 'linear-gradient(145deg, #111, #222)',
  };

  const all = [anyBarber, ...BARBERS];

  grid.innerHTML = all.map(b => `
    <div class="barber-card ${booking.barber?.id === b.id ? 'selected' : ''}" onclick="selectBarber('${b.id}')">
      <div class="barber-avatar" style="background: ${b.gradient};">
        <span class="barber-initial">${b.initial}</span>
      </div>
      <div class="barber-info">
        <h3 class="barber-name">${b.name}</h3>
        <p class="barber-title">${b.title}</p>
        <div class="barber-specs">
          ${b.rating ? `<span class="stars">${'★'.repeat(Math.round(b.rating))}</span><span class="spec-text">${b.rating} (${b.reviews})</span>` : ''}
          <span class="spec-text">${b.experience}</span>
        </div>
        <div class="barber-tags">
          ${b.specialties.map(t => `<span class="chip">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function selectBarber(id) {
  booking.barber = id === 'any' ? { id: 'any', name: 'First Available' } : BARBERS.find(b => b.id === id);
  document.querySelectorAll('.barber-card').forEach(el => el.classList.remove('selected'));
  event?.target?.closest('.barber-card')?.classList.add('selected');
  const nextBtn = document.getElementById('step2-next');
  if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }
}

// ─── STEP 3 — DATE & TIME ────────────────────────────────────────────
function renderCalendar() {
  const cal = document.getElementById('mini-cal');
  if (!cal) return;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  let html = `
    <div class="cal-header">
      <span class="cal-month">${MONTHS[month]} ${year}</span>
    </div>
    <div class="cal-grid">
      ${DAYS.map(d => `<div class="cal-day-label">${d}</div>`).join('')}
      ${Array(firstDay).fill('<div></div>').join('')}
      ${Array.from({length: daysInMonth}, (_, i) => {
        const d = i + 1;
        const date = new Date(year, month, d);
        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const isSunday = date.getDay() === 0;
        const disabled = isPast || isSunday;
        const isSelected = booking.date === `${year}-${month+1}-${d}`;
        return `<button class="cal-day ${disabled ? 'disabled' : ''} ${isSelected ? 'selected' : ''}"
          ${disabled ? 'disabled' : `onclick="selectDate(${year}, ${month+1}, ${d})"`}
          >${d}</button>`;
      }).join('')}
    </div>
  `;
  cal.innerHTML = html;
}

function selectDate(year, month, day) {
  booking.date = `${year}-${month}-${day}`;
  booking.time = null;
  renderCalendar();
  renderTimeSlots(day);
}

function renderTimeSlots(day) {
  const wrap = document.getElementById('time-slots');
  if (!wrap) return;
  const slots = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30'];
  // Pseudo-random "booked" slots based on day
  const booked = slots.filter((_, i) => (i + day) % 3 === 0);

  wrap.innerHTML = `
    <p class="slots-label">Available Times</p>
    <div class="time-slots-grid">
      ${slots.map(t => {
        const isBooked = booked.includes(t);
        const isSelected = booking.time === t;
        return `<button class="time-slot ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}"
          ${isBooked ? 'disabled' : `onclick="selectTime('${t}')"`}
          >${t}</button>`;
      }).join('')}
    </div>
  `;

  const nextBtn = document.getElementById('step3-next');
  if (nextBtn && booking.time) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }
}

function selectTime(t) {
  booking.time = t;
  document.querySelectorAll('.time-slot').forEach(el => {
    el.classList.toggle('selected', el.textContent.trim() === t);
  });
  const nextBtn = document.getElementById('step3-next');
  if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }
}

// ─── STEP 4 — CONFIRM ────────────────────────────────────────────────
function renderSummary() {
  const el = document.getElementById('booking-summary');
  if (!el || !booking.service) return;
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const [y, m, d] = booking.date ? booking.date.split('-') : ['-','-','-'];
  el.innerHTML = `
    <div class="summary-row"><span>Service</span><strong>${booking.service.name} / ${booking.service.nameAr}</strong></div>
    <div class="summary-row"><span>Barber</span><strong>${booking.barber?.name || 'Any'}</strong></div>
    <div class="summary-row"><span>Date</span><strong>${d} ${MONTHS[parseInt(m)-1]} ${y}</strong></div>
    <div class="summary-row"><span>Time</span><strong>${booking.time}</strong></div>
    <div class="summary-row"><span>Duration</span><strong>${booking.service.duration}</strong></div>
    <div class="summary-row total-row"><span>Estimated Price</span><strong>₪${booking.service.price}</strong></div>
  `;
}

function handleConfirmBooking() {
  const name = document.getElementById('book-name')?.value.trim();
  const phone = document.getElementById('book-phone')?.value.trim();
  if (!name) { showToast('Please enter your name', 'error'); return; }
  if (!phone) { showToast('Please enter your phone number', 'error'); return; }

  const ref = 'AK-' + Math.floor(Math.random() * 90000 + 10000);
  const confirmEl = document.getElementById('booking-confirm');
  const formEl = document.getElementById('step4-form');
  if (formEl) formEl.style.display = 'none';
  if (confirmEl) {
    confirmEl.style.display = 'flex';
    confirmEl.querySelector('.confirm-ref').textContent = ref;
  }
  showToast(`Booking confirmed! Ref: ${ref} ✓`);
}

// ─── GALLERY ─────────────────────────────────────────────────────────
function renderGallery(cat = 'all') {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  const filtered = cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === cat);
  grid.innerHTML = filtered.map(item => `
    <div class="gallery-item" style="background: ${item.gradient};">
      <div class="gallery-emoji">${item.emoji}</div>
      <div class="gallery-overlay">
        <div class="gallery-info">
          <div class="gallery-label">${item.label}</div>
          <div class="gallery-barber">by ${item.barber}</div>
        </div>
        <a href="#book" class="gallery-book-btn">Book This →</a>
      </div>
    </div>
  `).join('');
}

function initGalleryFilters() {
  const filters = document.querySelectorAll('.gallery-filter');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.cat);
    });
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderBarbers();
  renderCalendar();
  renderGallery();
  initGalleryFilters();
  goToStep(1);

  // Step navigation buttons
  document.getElementById('step1-next')?.addEventListener('click', () => { if (booking.service) goToStep(2); });
  document.getElementById('step2-next')?.addEventListener('click', () => { if (booking.barber) goToStep(3); });
  document.getElementById('step3-next')?.addEventListener('click', () => {
    if (booking.date && booking.time) { renderSummary(); goToStep(4); }
  });
  document.getElementById('step4-confirm')?.addEventListener('click', handleConfirmBooking);

  // Back buttons
  document.getElementById('step2-back')?.addEventListener('click', () => goToStep(1));
  document.getElementById('step3-back')?.addEventListener('click', () => goToStep(2));
  document.getElementById('step4-back')?.addEventListener('click', () => goToStep(3));
});
