// ─── CAFE DATA ───────────────────────────────────────────────────────

const MENU_ITEMS = [
  // HOT DRINKS
  {
    id: 1, category: 'hot', name: 'Signature Espresso', nameAr: 'إسبريسو أكوش',
    desc: 'Double shot, rich crema, served in a warm ceramic demitasse.',
    sizes: [{ label: 'Single', price: 8 }, { label: 'Double', price: 12 }],
    addons: ['Extra Shot +3', 'Oat Milk +3', 'Almond Milk +3'],
    gradient: 'linear-gradient(145deg, #3d1a00, #7a3510)',
    emoji: '☕'
  },
  {
    id: 2, category: 'hot', name: 'Flat White', nameAr: 'فلات وايت',
    desc: 'Velvety microfoam, two ristretto shots, perfect balance.',
    sizes: [{ label: 'Small', price: 14 }, { label: 'Regular', price: 17 }],
    addons: ['Extra Shot +3', 'Oat Milk +3', 'Soy Milk +3', 'Hazelnut Syrup +4'],
    gradient: 'linear-gradient(145deg, #2a1000, #5c2d11)',
    emoji: '☕'
  },
  {
    id: 3, category: 'hot', name: 'Caramel Macchiato', nameAr: 'ماكياتو كراميل',
    desc: 'Espresso, steamed milk, vanilla, drizzled caramel.',
    sizes: [{ label: 'Medium', price: 18 }, { label: 'Large', price: 22 }],
    addons: ['Extra Shot +3', 'Oat Milk +3', 'Extra Caramel +3', 'Vanilla Syrup +3'],
    gradient: 'linear-gradient(145deg, #3d2200, #8a5020)',
    emoji: '🍮'
  },
  {
    id: 4, category: 'hot', name: 'Matcha Latte', nameAr: 'ماتشا لاتيه',
    desc: 'Ceremonial grade matcha, oat milk, hint of honey.',
    sizes: [{ label: 'Medium', price: 20 }, { label: 'Large', price: 24 }],
    addons: ['Oat Milk +0', 'Almond Milk +3', 'Honey +2', 'Extra Matcha +4'],
    gradient: 'linear-gradient(145deg, #0a2010, #1a4a20)',
    emoji: '🍵'
  },
  // COLD DRINKS
  {
    id: 5, category: 'cold', name: 'Cold Brew', nameAr: 'كولد برو',
    desc: '18-hour steeped, smooth, low-acid, served over ice.',
    sizes: [{ label: 'Regular', price: 18 }, { label: 'Large', price: 22 }],
    addons: ['Oat Milk +3', 'Vanilla Syrup +3', 'Brown Sugar +3', 'Extra Ice +0'],
    gradient: 'linear-gradient(145deg, #0a0a14, #1e1e3a)',
    emoji: '🧊'
  },
  {
    id: 6, category: 'cold', name: 'Iced Caramel Latte', nameAr: 'لاتيه كراميل بارد',
    desc: 'Double espresso, whole milk, caramel sauce, shaken with ice.',
    sizes: [{ label: 'Medium', price: 20 }, { label: 'Large', price: 24 }],
    addons: ['Extra Shot +3', 'Oat Milk +3', 'Less Ice +0', 'Extra Caramel +3'],
    gradient: 'linear-gradient(145deg, #2a1400, #6a3518)',
    emoji: '🧊'
  },
  {
    id: 7, category: 'cold', name: 'Watermelon Cooler', nameAr: 'كولر البطيخ',
    desc: 'Fresh watermelon, mint, lime, sparkling water.',
    sizes: [{ label: 'Regular', price: 16 }, { label: 'Large', price: 20 }],
    addons: ['Extra Mint +2', 'No Sparkling +0', 'Extra Lime +2'],
    gradient: 'linear-gradient(145deg, #2a0010, #6a1530)',
    emoji: '🍉'
  },
  // BLENDED
  {
    id: 8, category: 'blended', name: 'Mocha Frappe', nameAr: 'مو چا فرابيه',
    desc: 'Rich chocolate, espresso, blended with ice, whipped cream.',
    sizes: [{ label: 'Medium', price: 22 }, { label: 'Large', price: 26 }],
    addons: ['Extra Shot +3', 'Oat Milk +3', 'No Whipped Cream +0', 'Double Chocolate +4'],
    gradient: 'linear-gradient(145deg, #14080a, #3d1220)',
    emoji: '🍫'
  },
  {
    id: 9, category: 'blended', name: 'Mango Tango Smoothie', nameAr: 'سموذي المانجو',
    desc: 'Alphonso mango, banana, coconut milk, ginger.',
    sizes: [{ label: 'Medium', price: 20 }, { label: 'Large', price: 24 }],
    addons: ['Extra Mango +4', 'Protein Powder +6', 'Coconut Milk +0'],
    gradient: 'linear-gradient(145deg, #2a1800, #6a3a00)',
    emoji: '🥭'
  },
  // FOOD
  {
    id: 10, category: 'food', name: 'Toasted Club Sandwich', nameAr: 'كلوب ساندويش',
    desc: 'Grilled chicken, cheddar, lettuce, tomato, chipotle mayo, sourdough.',
    sizes: [{ label: 'Regular', price: 32 }],
    addons: ['Extra Cheese +5', 'Spicy Sauce +3', 'Fries +10', 'No Lettuce +0'],
    gradient: 'linear-gradient(145deg, #1a1200, #3a2a08)',
    emoji: '🥪'
  },
  {
    id: 11, category: 'food', name: 'Truffle Fries', nameAr: 'بطاطس التروفل',
    desc: 'Crispy fries, truffle oil, parmesan, fresh herbs.',
    sizes: [{ label: 'Regular', price: 22 }, { label: 'Large', price: 28 }],
    addons: ['Extra Parmesan +4', 'Spicy Level +0', 'Dipping Sauce +5'],
    gradient: 'linear-gradient(145deg, #1e1600, #3a2a00)',
    emoji: '🍟'
  },
  {
    id: 12, category: 'food', name: 'Chocolate Lava Cake', nameAr: 'كيك اللافا',
    desc: 'Warm dark chocolate cake, molten center, vanilla ice cream.',
    sizes: [{ label: '1 Piece', price: 24 }, { label: '2 Pieces', price: 40 }],
    addons: ['Extra Ice Cream +8', 'No Ice Cream +0', 'Caramel Drizzle +4'],
    gradient: 'linear-gradient(145deg, #100606, #2a0e0e)',
    emoji: '🎂'
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'hot', label: '☕ Hot Drinks' },
  { id: 'cold', label: '🧊 Cold Drinks' },
  { id: 'blended', label: '🥤 Blended' },
  { id: 'food', label: '🍽️ Bites' },
];

// ─── CART STATE ─────────────────────────────────────────────────────
const cart = { items: [], open: false };

function getCartTotal() {
  return cart.items.reduce((sum, item) => sum + item.linePrice, 0);
}

function addToCart(menuItem, size, addons, qty) {
  const addonTotal = addons.reduce((s, a) => {
    const match = a.match(/\+(\d+)/);
    return s + (match ? parseInt(match[1]) : 0);
  }, 0);
  const linePrice = (size.price + addonTotal) * qty;
  cart.items.push({
    id: Date.now(),
    name: menuItem.name,
    size: size.label,
    addons: addons,
    qty,
    unitPrice: size.price + addonTotal,
    linePrice,
  });
  updateCartBadge();
  renderCartItems();
  showToast(`${menuItem.name} added to your order ✓`);
  if (!cart.open) openCart();
}

function removeFromCart(id) {
  const idx = cart.items.findIndex(i => i.id === id);
  if (idx > -1) { cart.items.splice(idx, 1); updateCartBadge(); renderCartItems(); }
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    const count = cart.items.reduce((s, i) => s + i.qty, 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
  const totalEl = document.querySelector('.cart-total-amount');
  if (totalEl) totalEl.textContent = `₪${getCartTotal()}`;
}

function openCart() {
  cart.open = true;
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cart.open = false;
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const list = document.getElementById('cart-items');
  const emptyState = document.getElementById('cart-empty');
  if (!list) return;

  if (cart.items.length === 0) {
    list.innerHTML = '';
    if (emptyState) emptyState.style.display = 'flex';
    updateCartBadge();
    return;
  }
  if (emptyState) emptyState.style.display = 'none';

  list.innerHTML = cart.items.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.size}${item.addons.length ? ' · ' + item.addons.slice(0,2).join(', ') : ''}</div>
        <div class="cart-item-price">₪${item.linePrice}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>
  `).join('');
  updateCartBadge();
}

// ─── MENU RENDERING ──────────────────────────────────────────────────
function renderMenuFilters() {
  const container = document.getElementById('menu-filters');
  if (!container) return;
  container.innerHTML = CATEGORIES.map((c, i) => `
    <button class="filter-btn ${i === 0 ? 'active' : ''}" data-cat="${c.id}">${c.label}</button>
  `).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterMenu(btn.dataset.cat);
    });
  });
}

function filterMenu(cat) {
  const cards = document.querySelectorAll('.menu-card');
  cards.forEach(card => {
    const show = cat === 'all' || card.dataset.category === cat;
    card.style.display = show ? 'flex' : 'none';
    if (show) card.style.animation = 'fadeInUp 0.35s ease both';
  });
}

function renderMenuCards() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  grid.innerHTML = MENU_ITEMS.map(item => `
    <div class="menu-card" data-category="${item.category}" data-id="${item.id}">
      <div class="menu-card-img img-ph" style="background: ${item.gradient};">
        <span class="menu-emoji">${item.emoji}</span>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-top">
          <h3 class="menu-card-name">${item.name}</h3>
          <p class="menu-card-name-ar ar">${item.nameAr}</p>
          <p class="menu-card-desc">${item.desc}</p>
        </div>

        <div class="menu-size-wrap">
          <p class="menu-section-label">Size & Price</p>
          <div class="menu-sizes">
            ${item.sizes.map((s, i) => `
              <label class="size-option">
                <input type="radio" name="size-${item.id}" value="${i}" ${i === 0 ? 'checked' : ''} />
                <span class="size-pill">${s.label}<span class="size-price">₪${s.price}</span></span>
              </label>
            `).join('')}
          </div>
        </div>

        <details class="addons-wrap">
          <summary class="addons-toggle">
            Customize <span class="addons-count">${item.addons.length} options</span>
          </summary>
          <div class="addons-list">
            ${item.addons.map(a => `
              <label class="addon-option">
                <input type="checkbox" value="${a}" />
                <span class="addon-label">${a}</span>
              </label>
            `).join('')}
          </div>
        </details>

        <div class="menu-card-footer">
          <div class="qty-stepper">
            <button class="qty-btn" onclick="adjustQty(this, -1)">−</button>
            <span class="qty-val">1</span>
            <button class="qty-btn" onclick="adjustQty(this, 1)">+</button>
          </div>
          <button class="add-to-order-btn btn btn-cafe btn-sm" onclick="handleAddToCart(this, ${item.id})">
            Add to Order
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function adjustQty(btn, delta) {
  const val = btn.parentElement.querySelector('.qty-val');
  const current = parseInt(val.textContent);
  const next = Math.max(1, current + delta);
  val.textContent = next;
}

function handleAddToCart(btn, itemId) {
  const card = btn.closest('.menu-card');
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const checkedSize = card.querySelector(`input[name="size-${itemId}"]:checked`);
  const sizeIndex = checkedSize ? parseInt(checkedSize.value) : 0;
  const size = item.sizes[sizeIndex];
  const qty = parseInt(card.querySelector('.qty-val').textContent);
  const addons = [...card.querySelectorAll('.addon-option input:checked')].map(i => i.value);

  btn.textContent = 'Added ✓';
  btn.style.background = '#5a9a00';
  setTimeout(() => { btn.textContent = 'Add to Order'; btn.style.background = ''; }, 1500);

  addToCart(item, size, addons, qty);
}

// ─── ORDER SUBMIT ────────────────────────────────────────────────────
function handlePlaceOrder() {
  const name = document.getElementById('order-name').value.trim();
  const table = document.getElementById('order-table').value.trim();
  const phone = document.getElementById('order-phone').value.trim();

  if (!name) { showToast('Please enter your name', 'error'); return; }
  if (!table) { showToast('Please enter your table number', 'error'); return; }
  if (cart.items.length === 0) { showToast('Your cart is empty!', 'error'); return; }

  // Simulate order placement
  const orderNum = Math.floor(Math.random() * 9000) + 1000;
  showToast(`Order #${orderNum} placed! Preparing now ☕`);
  cart.items = [];
  renderCartItems();
  closeCart();
  document.getElementById('order-name').value = '';
  document.getElementById('order-table').value = '';
  document.getElementById('order-phone').value = '';
}

// ─── INIT ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderMenuFilters();
  renderMenuCards();
  renderCartItems();

  // Cart toggle
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', () => cart.open ? closeCart() : openCart());

  const cartOverlay = document.getElementById('cart-overlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  const closeCartBtn = document.getElementById('close-cart');
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

  const placeOrderBtn = document.getElementById('place-order-btn');
  if (placeOrderBtn) placeOrderBtn.addEventListener('click', handlePlaceOrder);
});
