(function() {

var projects = {
  bed: {
    type: 'HIS Module · Real-Time Bed Management',
    title: 'Real-Time Bed Dashboard',
    desc: 'Interactive visual floor map representing each hospital department floor-by-floor, divided into rooms with a physical representation of bed distribution. Designed to give hospital staff full real-time visibility and control over every bed.',
    features: [
      { icon: '🗺️', title: 'Floor-by-Floor Map', text: 'Each department is rendered as a visual floor showing rooms and their exact bed layout, mirroring the physical hospital structure.' },
      { icon: '🎨', title: 'Color-Coded Status', text: 'Every bed is color-coded by status: occupied, clean, reserved, broken, or booked — giving instant visual clarity at a glance.' },
      { icon: '🖱️', title: 'Drag & Drop Actions', text: 'Staff can move, add, delete, or update beds directly on the map. Patient transfers between beds are done via drag-and-drop.' },
      { icon: '👤', title: 'Patient Info on Demand', text: 'Clicking an occupied bed shows the patient\'s info, admission details, and allows initiating a transfer or status change.' }
    ],
    tech: ['ASP.NET', 'SVG', 'Drag & Drop', 'WebSockets', 'SQL Server', 'C#'],
    screenshots: [
      { src: '', label: 'Bed Dashboard — Full Floor View' },
      { src: '', label: 'Patient Info Panel' }
    ],
    code: [
      { lang: 'C#', desc: 'Real-time bed status update via WebSocket',
        snippet: '' }
    ]
  },
  drug: {
    type: 'HIS Module · AI Drug Safety',
    title: 'Drug Conflict AI',
    desc: 'AI-powered medication safety engine that validates prescriptions against patient profiles and detects dangerous multi-drug interactions. Trained on a proprietary drug interaction dataset with bilingual Arabic–English output.',
    features: [
      { icon: '🧬', title: 'Patient Safety Validation', text: 'Checks each drug against the patient\'s demographics, allergies, organ conditions, and medical history to flag contraindications.' },
      { icon: '⚠️', title: 'Multi-Drug Interaction Detection', text: 'Analyzes combinations of drugs prescribed together and detects dangerous interactions that could occur when taken concurrently.' },
      { icon: '📊', title: 'Severity Grading', text: 'Results are classified as Major, Moderate, or Safe — with clear clinical reasoning for each finding.' },
      { icon: '🌐', title: 'Bilingual Output', text: 'All results and explanations are displayed in both Arabic and English to support multilingual clinical teams.' }
    ],
    tech: ['LLM Fine-Tuning', 'Hugging Face', 'LangChain', 'NLP', 'Python', 'ASP.NET', 'SQL Server'],
    screenshots: [
      { src: '', label: 'Drug Conflict AI — Analysis Results' },
      { src: '', label: 'Prescription Input Screen' }
    ],
    code: [
      { lang: 'C#', desc: 'Drug conflict and patient safety validation',
        snippet: '' }
    ]
  },
  appt: {
    type: 'HIS Module · Appointment Scheduling',
    title: 'Appointment Scheduling Module',
    desc: 'A fully rebuilt appointment system replacing a broken legacy module. Introduced slot-based booking for accuracy, a visual calendar with drag-and-drop, and real-time quota tracking per resource and service type.',
    features: [
      { icon: '🔧', title: 'Full Rebuild from Scratch', text: 'The original system had broken logic and inaccurate scheduling. This was rebuilt entirely with a new data model and booking engine.' },
      { icon: '🕐', title: 'Slot-Based Booking', text: 'Appointments are booked into precise time slots per resource and service type, eliminating double-bookings and scheduling gaps.' },
      { icon: '📅', title: 'Visual Calendar', text: 'Day and week view calendar with color-coded appointments. Supports drag-and-drop rescheduling and real-time updates.' },
      { icon: '📋', title: 'Quota Tracking', text: 'Each resource shows remaining appointment quota and additional quota in real time, helping staff manage capacity efficiently.' }
    ],
    tech: ['ASP.NET', 'DevExpress', 'SQL Server', 'Drag & Drop', 'Stored Procedures', 'C#'],
    screenshots: [
      { src: '', label: 'Appointment Calendar — Week View' },
      { src: '', label: 'Slot Picker Dialog' }
    ],
    code: [
      { lang: 'SQL', desc: 'Stored procedure for available slot generation',
        snippet: '' }
    ]
  },
  dynscreen: {
    type: 'HIS Module · No-Code Screen Generation',
    title: 'Dynamic Screen Builder',
    desc: 'A no-code module generator that takes plain-text prompts and automatically scaffolds fully functional ASP.NET pages — with validation, business logic, and database integration — dramatically reducing development time.',
    features: [
      { icon: '💬', title: 'Prompt-to-Page', text: 'Developers describe a screen in plain text. The system parses the prompt, generates a JSON configuration, and builds the full page automatically.' },
      { icon: '⚙️', title: 'Auto-Generated Logic', text: 'Generated pages include input validation, business logic handlers, and full database CRUD operations — no manual coding required.' },
      { icon: '🗄️', title: 'Database Integration', text: 'The builder automatically creates the required SQL tables, stored procedures, and binds the page to the database schema.' },
      { icon: '⚡', title: 'Development Speed', text: 'Reduced screen development time dramatically by eliminating repetitive boilerplate coding for standard HIS data-entry modules.' }
    ],
    tech: ['ASP.NET', 'JSON', 'Code Generation', 'SQL Server', 'LLM Prompting', 'C#'],
    screenshots: [
      { src: '', label: 'Screen Builder Interface' },
      { src: '', label: 'Generated Page Example' }
    ],
    code: [
      { lang: 'C#', desc: 'JSON config to ASP.NET page scaffolding',
        snippet: 'C# %&gt;"</span>);\n    <span class="code-kw">foreach</span> (<span class="code-kw">var</span> field <span class="code-kw">in</span> config.Fields)\n    {\n        sb.<span class="code-fn">AppendLine</span>(<span class="code-fn">RenderField</span>(field));\n        sb.<span class="code-fn">AppendLine</span>(<span class="code-fn">RenderValidation</span>(field));\n    }\n    <span class="code-fn">CreateStoredProcedure</span>(config.TableName, config.Fields);\n    <span class="code-kw">return</span> sb.<span class="code-fn">ToString</span>();\n}' }
    ]
  },
    pos: {
    type: 'Freelance · Desktop + Mobile',
    title: 'POS Project',
    desc: 'A complete business management platform built across 3 stages for multiple clients. Started as a core POS desktop app and evolved into a full operations suite with loyalty programs, mobile sync, and tax invoicing.',
    features: [
      { icon: '🏪', title: 'Stage 1 — Core POS', text: 'Sales management, inventory tracking, expiry alerts, payment processing. Admin and cashier dashboards with profitability and stock-level reporting.' },
      { icon: '💳', title: 'Stage 2 — Advanced Features', text: 'Debts tracking page, smart card loyalty program with points accumulation for tiered discounts, multiple payment methods, discount engine, and bundle item pricing.' },
      { icon: '📱', title: 'Stage 3 — Mobile and Reporting', text: 'Extended inventory actions, REST API integration with a companion mobile app for warehouse and sales teams. New reporting modules and full tax invoice generation.' }
    ],
    tech: ['C#', 'Windows Forms', '.NET Framework', 'SQL Server', 'REST API', 'Smart Cards', 'Mobile Sync'],
    screenshots: [
      { src: '', label: 'Main POS Dashboard' },
      { src: '', label: 'Loyalty Program Screen' },
      { src: '', label: 'Inventory Management' },
      { src: '', label: 'Tax Invoice Generator' }
    ],
    code: [
      { lang: 'C#', desc: 'Loyalty points tier discount calculation',
        snippet: '' },
      { lang: 'C#', desc: 'REST API sync endpoint for mobile app',
        snippet: '' }
    ]
  },
  voice: {
    type: 'Academic · Graduation Project · AI',
    title: 'AI Voice Agent for Restaurants',
    desc: 'An AI-powered voice assistant that acts as a drive-thru receptionist. Automates the full order-taking flow using speech recognition, NLP, and AI logic.',
    features: [
      { icon: '🎙️', title: 'Speech Recognition', text: 'Converts customer speech to text in real time, supporting natural conversational patterns including interruptions and corrections.' },
      { icon: '🧠', title: 'NLP and Intent Detection', text: 'Understands ordering, menu queries, order modifications, and pricing requests — routing each to the correct response flow.' },
      { icon: '🍔', title: 'Order Management', text: 'Takes and confirms orders, handles customizations, suggests popular items or add-ons, and calculates totals.' },
      { icon: '📞', title: 'Call Automation', text: 'Handles inbound restaurant calls end-to-end without human involvement, reducing staff workload during peak hours.' }
    ],
    tech: ['Python', 'Speech Recognition', 'NLP', 'LangChain', 'AI Logic'],
    screenshots: [
      { src: '', label: 'Voice Agent Flow Diagram' },
      { src: '', label: 'Order Processing Interface' }
    ],
    code: [
      { lang: 'Python', desc: 'Intent classification and order routing',
        snippet: '' }
    ]
  },

  akoosh: {
    type: 'Freelance · Web Platform',
    title: 'AKOOSH — Cafe & Barbershop',
    desc: 'A dual-brand web platform for two businesses sharing one space — a specialty cafe and a modern barbershop. Features a cinematic split-screen landing, full menu, appointment booking, bilingual Arabic/English content, location info, and a complete social hub.',
    features: [
      { icon: '🎬', title: 'Split-Screen Landing', text: 'Cinematic full-viewport hero that expands toward whichever side the user hovers — cafe or barbershop — with smooth CSS transitions and brand-specific color themes.' },
      { icon: '☕', title: 'Cafe Menu', text: 'Full categorized menu with bilingual item cards (Arabic + English), pricing, descriptions, and a smooth ordering flow.' },
      { icon: '✂️', title: 'Barbershop Booking', text: 'Services grid with pricing, appointment booking form, barber profiles, and working hours per day.' },
      { icon: '🌐', title: 'Bilingual & Social', text: 'Full Arabic + English support with RTL handling. Social hub connecting TikTok, Instagram, Snapchat, WhatsApp, and Facebook.' }
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Responsive Design', 'Bilingual / RTL'],
    screenshots: [],
    code: [
      { lang: 'CSS', desc: 'Split-screen hover expansion effect',
        snippet: '' }
    ],
    demoUrl: 'https://saifbattah.github.io/portfolio/akoosh/index.html'
  }
};

  function openModal(key) {
    var p = projects[key];
    if (!p) return;
    document.getElementById('modalType').textContent = p.type;
    document.getElementById('modalTitle').textContent = p.title;
    renderDesc(p); renderScreenshots(p); renderCode(p);
    // Show Demo tab only for bed module
    var demoTab = document.getElementById('demoTab');
    if (key === 'bed') { demoTab.style.display = ''; renderDemo(); }
    else { demoTab.style.display = 'none'; document.getElementById('panel-demo').innerHTML = ''; }
    document.querySelectorAll('.modal-tab').forEach(function(t){ t.classList.remove('active'); });
    document.querySelectorAll('.modal-tab')[0].classList.add('active');
    document.querySelectorAll('.modal-panel').forEach(function(x){ x.classList.remove('active'); });
    document.getElementById('panel-desc').classList.add('active');
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderDesc(p) {
    var el = document.getElementById('panel-desc');
    var feat = p.features.map(function(f){
      return '<div class="modal-feature"><span class="modal-feature-icon">'+f.icon+'</span><div class="modal-feature-text"><strong>'+f.title+':</strong> '+f.text+'</div></div>';
    }).join('');
    var tech = p.tech.map(function(t){ return '<span class="tech-pill">'+t+'</span>'; }).join('');
    el.innerHTML = '<p class="modal-desc-text">'+p.desc+'</p><div class="modal-features">'+feat+'</div><div class="modal-tech-list">'+tech+'</div>';
  }

  var sliderIndex = 0;
  var sliderImages = [];

  function renderScreenshots(p) {
    var el = document.getElementById('panel-screenshots');
    sliderImages = p.screenshots.filter(function(s){ return s.src !== ''; });
    if (sliderImages.length === 0) {
      el.innerHTML = '<div class="screenshot-upload-hint">No screenshots added yet.<br><span>Share your screenshots in the chat</span> and they will be embedded here!</div>';
      return;
    }
    sliderIndex = 0;
    el.innerHTML = buildSlider();
  }

  function buildSlider() {
    var s = sliderImages[sliderIndex];
    var dots = sliderImages.map(function(_, i){
      return '<div class="slider-dot'+(i===sliderIndex?' active':'')+'" data-slide="'+i+'"></div>';
    }).join('');
    return '<div class="slider-wrap">'
      + '<div class="slider-viewport" data-lightbox-src="'+s.src+'" data-lightbox-label="'+s.label+'">'
      + '<img id="sliderImg" src="'+s.src+'" alt="'+s.label+'" />'
      + '<div class="modal-screenshot-overlay"><span>&#x26F6; Full Screen</span></div>'
      + '</div>'
      + '<div class="slider-nav">'
      + '<button class="slider-btn" id="sliderPrev">&#8592;</button>'
      + '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;">'
      + '<div class="slider-dots" id="sliderDots">'+dots+'</div>'
      + '<div class="slider-caption" id="sliderCaption">'+s.label+' ('+(sliderIndex+1)+' / '+sliderImages.length+')</div>'
      + '</div>'
      + '<button class="slider-btn" id="sliderNext">&#8594;</button>'
      + '</div>'
      + '</div>';
  }

  function goSlide(idx) {
    sliderIndex = (idx + sliderImages.length) % sliderImages.length;
    var el = document.getElementById('panel-screenshots');
    el.innerHTML = buildSlider();
  }

  function renderDemo() {
    var statuses = {
      occupied: { color: '#f97316', bg: '#fff3eb', icon: '🧑', label: 'Occupied' },
      clean:    { color: '#22c55e', bg: '#f0fdf4', icon: '🧹', label: 'Clean' },
      reserved: { color: '#3b82f6', bg: '#eff6ff', icon: '📋', label: 'Reserved' },
      broken:   { color: '#ef4444', bg: '#fef2f2', icon: '🔧', label: 'Broken' },
      booked:   { color: '#a855f7', bg: '#faf5ff', icon: '✅', label: 'Booked' },
      empty:    { color: '#94a3b8', bg: '#f8fafc', icon: '🛏️', label: 'Empty' }
    };

    var rooms = [
      { name: 'ICU — Floor 1', beds: [
        {id:'E04102', status:'occupied', patient:'Ahmad Karimi, 58M'},
        {id:'E04177', status:'occupied', patient:'Sara Hasan, 34F'},
        {id:'E03451', status:'clean',    patient:null},
        {id:'E04121', status:'booked',   patient:'Pending Admission'},
        {id:'E04116', status:'occupied', patient:'Omar Nasser, 71M'},
        {id:'E04118', status:'reserved', patient:'OR Transfer'},
        {id:'E07218', status:'broken',   patient:null},
        {id:'E04168', status:'occupied', patient:'Fatima Ali, 45F'},
        {id:'E06983', status:'clean',    patient:null},
        {id:'E04137', status:'occupied', patient:'Khalid Sami, 62M'},
      ]},
      { name: 'Radiology — Floor 2', beds: [
        {id:'E04212', status:'empty',    patient:null},
        {id:'E04073', status:'occupied', patient:'Layla Issa, 29F'},
        {id:'E06481', status:'clean',    patient:null},
        {id:'E04240', status:'booked',   patient:'Scheduled 14:00'},
        {id:'E07481', status:'occupied', patient:'Nour Saleh, 55M'},
        {id:'E07688', status:'occupied', patient:'Rami Khalil, 48M'},
        {id:'E05003', status:'reserved', patient:'Post-Op Hold'},
        {id:'E07445', status:'clean',    patient:null},
        {id:'E24422', status:'broken',   patient:null},
      ]}
    ];

    var bedSVG = function(st) {
      var s = statuses[st];
      return '<svg viewBox="0 0 72 52" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;background:'+s.bg+'">'
        + '<rect x="4" y="28" width="64" height="18" rx="3" fill="#ddd"/>'
        + '<rect x="4" y="20" width="64" height="10" rx="2" fill="#e8e8e8"/>'
        + '<rect x="4" y="10" width="18" height="22" rx="3" fill="#ccc"/>'
        + (st==='occupied'||st==='booked'||st==='reserved' ? '<ellipse cx="36" cy="16" rx="6" ry="7" fill="'+s.color+'" opacity="0.8"/><rect x="22" y="21" width="28" height="14" rx="3" fill="'+s.color+'" opacity="0.6"/>' : '')
        + (st==='clean' ? '<text x="36" y="30" text-anchor="middle" font-size="14">🧹</text>' : '')
        + (st==='broken' ? '<text x="36" y="30" text-anchor="middle" font-size="14">🔧</text>' : '')
        + '</svg>';
    };

    var roomsHTML = rooms.map(function(room){
      var bedsHTML = room.beds.map(function(b){
        var s = statuses[b.status];
        return '<div class="demo-bed" data-bed-id="'+b.id+'" data-bed-status="'+b.status+'" data-bed-patient="'+(b.patient||'')+'" style="border-color:'+s.color+'">'
          + '<div class="demo-bed-header" style="background:'+s.color+';color:#fff">'
          + '<span>'+s.icon+'</span>'
          + '</div>'
          + bedSVG(b.status)
          + '<div class="demo-bed-id" style="color:'+s.color+'">'+b.id+'</div>'
          + '</div>';
      }).join('');
      return '<div class="demo-room"><div class="demo-room-title">'+room.name+'</div><div class="demo-beds">'+bedsHTML+'</div></div>';
    }).join('');

    var legendHTML = Object.keys(statuses).map(function(k){
      return '<div class="demo-legend-item"><div class="demo-legend-dot" style="background:'+statuses[k].color+'"></div>'+statuses[k].label+'</div>';
    }).join('');

    document.getElementById('panel-demo').innerHTML =
      '<div style="margin-bottom:0.75rem;font-size:0.82rem;color:var(--muted);font-family:\'JetBrains Mono\',monospace;">Click any bed to change its status &nbsp;·&nbsp; Hover to see patient info</div>'
      + '<div class="demo-wrap">'
      + '<div class="demo-topbar"><span class="demo-topbar-title">🏥 Inpatient Department — Bed Management Dashboard</span><span style="font-size:11px;opacity:0.7">Live Demo</span></div>'
      + '<div class="demo-legend">'+legendHTML+'</div>'
      + '<div class="demo-body" id="demoBedBody">'+roomsHTML+'</div>'
      + '</div>'
      + '<div class="demo-tooltip" id="demoTooltip"></div>'
      + '<div class="demo-status-menu" id="demoMenu">'
      + Object.keys(statuses).map(function(k){
          return '<div class="demo-status-option" data-set-status="'+k+'"><div class="demo-status-dot" style="background:'+statuses[k].color+'"></div>'+statuses[k].label+'</div>';
        }).join('')
      + '</div>';

    // Interaction
    var tooltip = document.getElementById('demoTooltip');
    var menu = document.getElementById('demoMenu');
    var activeBed = null;

    document.getElementById('demoBedBody').addEventListener('mouseover', function(e){
      var bed = e.target.closest('.demo-bed');
      if (!bed) { tooltip.style.display='none'; return; }
      var patient = bed.getAttribute('data-bed-patient');
      var status  = bed.getAttribute('data-bed-status');
      var id      = bed.getAttribute('data-bed-id');
      tooltip.innerHTML = '<strong style="color:var(--accent)">'+id+'</strong><br>Status: '+statuses[status].icon+' '+statuses[status].label+(patient?'<br>Patient: '+patient:'');
      tooltip.style.display = 'block';
    });
    document.getElementById('demoBedBody').addEventListener('mousemove', function(e){
      tooltip.style.left = (e.clientX+14)+'px';
      tooltip.style.top  = (e.clientY-10)+'px';
    });
    document.getElementById('demoBedBody').addEventListener('mouseleave', function(){
      tooltip.style.display = 'none';
    });
    document.getElementById('demoBedBody').addEventListener('click', function(e){
      var bed = e.target.closest('.demo-bed');
      if (!bed) return;
      activeBed = bed;
      var rect = bed.getBoundingClientRect();
      menu.style.display = 'block';
      menu.style.left = rect.left+'px';
      menu.style.top  = (rect.bottom+6)+'px';
      tooltip.style.display = 'none';
      e.stopPropagation();
    });
    menu.addEventListener('click', function(e){
      var opt = e.target.closest('[data-set-status]');
      if (!opt || !activeBed) return;
      var newStatus = opt.getAttribute('data-set-status');
      var s = statuses[newStatus];
      activeBed.setAttribute('data-bed-status', newStatus);
      activeBed.style.borderColor = s.color;
      // update header
      var hdr = activeBed.querySelector('.demo-bed-header');
      hdr.style.background = s.color;
      hdr.innerHTML = '<span>'+s.icon+'</span>';
      // update SVG
      var tmp = document.createElement('div');
      tmp.innerHTML = bedSVGfn(newStatus, s);
      var oldSvg = activeBed.querySelector('svg');
      activeBed.replaceChild(tmp.firstElementChild, oldSvg);
      // update id label color
      activeBed.querySelector('.demo-bed-id').style.color = s.color;
      menu.style.display = 'none';
      activeBed = null;
    });
    document.addEventListener('click', function(){ menu.style.display='none'; });

    function bedSVGfn(st, s) {
      return '<svg viewBox="0 0 72 52" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;background:'+s.bg+'">'
        + '<rect x="4" y="28" width="64" height="18" rx="3" fill="#ddd"/>'
        + '<rect x="4" y="20" width="64" height="10" rx="2" fill="#e8e8e8"/>'
        + '<rect x="4" y="10" width="18" height="22" rx="3" fill="#ccc"/>'
        + (st==='occupied'||st==='booked'||st==='reserved' ? '<ellipse cx="36" cy="16" rx="6" ry="7" fill="'+s.color+'" opacity="0.8"/><rect x="22" y="21" width="28" height="14" rx="3" fill="'+s.color+'" opacity="0.6"/>' : '')
        + (st==='clean' ? '<text x="36" y="30" text-anchor="middle" font-size="14">🧹</text>' : '')
        + (st==='broken' ? '<text x="36" y="30" text-anchor="middle" font-size="14">🔧</text>' : '')
        + '</svg>';
    }
  }

  function renderCode(p) {
    document.getElementById('panel-code').innerHTML = p.code.map(function(c){
      return '<div class="modal-code-block"><div class="modal-code-header"><span class="modal-code-lang">'+c.lang+'</span><span class="modal-code-desc">'+c.desc+'</span></div><pre>'+c.snippet+'</pre></div>';
    }).join('');
  }

  // ── Project Page Builder ───────────────────────────────────────
  function openProjectPage(key) {
    window.open('modules/' + key + '.html', '_blank');
  }





  // ── Event delegation — no inline onclick needed ───────────────
  document.addEventListener('click', function(e) {
    // Open modal
    var opener = e.target.closest('[data-project]');
    if (opener) {
      var projectKey = opener.getAttribute('data-project');
      if (projectKey === 'akoosh') {
        console.log('[AKOOSH] Project button clicked — opening project page');
      }
      openProjectPage(projectKey);
      return;
    }

    // Close modal button
    var closer = e.target.closest('[data-action="close"]');
    if (closer) { closeModal(); return; }

    // Click modal overlay backdrop
    if (e.target.id === 'modalOverlay') { closeModal(); return; }

    // Tab switch
    var tab = e.target.closest('[data-tab]');
    if (tab) {
      var tabId = tab.getAttribute('data-tab');
      document.querySelectorAll('.modal-tab').forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.modal-panel').forEach(function(x){ x.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('panel-' + tabId).classList.add('active');
      return;
    }

    // Slider prev/next/dots
    if (e.target.id === 'sliderPrev' || e.target.closest('#sliderPrev')) { goSlide(sliderIndex - 1); return; }
    if (e.target.id === 'sliderNext' || e.target.closest('#sliderNext')) { goSlide(sliderIndex + 1); return; }
    var dot = e.target.closest('[data-slide]');
    if (dot) { goSlide(parseInt(dot.getAttribute('data-slide'))); return; }

    // Open lightbox
    var shot = e.target.closest('[data-lightbox-src]');
    if (shot) {
      var src   = shot.getAttribute('data-lightbox-src');
      var label = shot.getAttribute('data-lightbox-label');
      document.getElementById('lightboxImg').src = src;
      document.getElementById('lightboxImg').alt = label;
      document.getElementById('lightboxLabel').textContent = label;
      document.getElementById('lightbox').classList.add('open');
      return;
    }

    // Close lightbox
    if (e.target.id === 'lightbox' || e.target.id === 'lightboxClose') {
      document.getElementById('lightbox').classList.remove('open');
      return;
    }
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
      if (document.getElementById('lightbox').classList.contains('open')) {
        document.getElementById('lightbox').classList.remove('open');
      } else {
        closeModal();
      }
    }
  });

  // Nav highlight on scroll
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');
    var cur = '';
    sections.forEach(function(s){ if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
    navLinks.forEach(function(a){ a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--accent)' : ''; });
  });

  // ── Contact form — open mailto on send ───────────────────────
  var contactBtn = document.getElementById('contactSendBtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function () {
      var name    = (document.getElementById('contactName').value    || '').trim();
      var email   = (document.getElementById('contactEmail').value   || '').trim();
      var message = (document.getElementById('contactMessage').value || '').trim();

      if (!name && !message) {
        contactBtn.textContent = 'Please fill in your message ↑';
        setTimeout(function () { contactBtn.textContent = 'Send Message →'; }, 2000);
        return;
      }

      var subject = encodeURIComponent('Portfolio Inquiry' + (name ? ' from ' + name : ''));
      var body    = encodeURIComponent(
        (name  ? 'Name: '  + name  + '\n' : '') +
        (email ? 'Email: ' + email + '\n' : '') +
        (name || email ? '\n' : '') +
        (message || '')
      );

      window.location.href = 'mailto:Saifbattahbusiness@gmail.com?subject=' + subject + '&body=' + body;

      contactBtn.textContent = 'Opening email client ✓';
      contactBtn.style.background = '#10b981';
      setTimeout(function () {
        contactBtn.textContent = 'Send Message →';
        contactBtn.style.background = '';
      }, 3000);
    });
  }

})();