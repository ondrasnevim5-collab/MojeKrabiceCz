// ===== DATA =====
const products = {
  jidla: [
    { id: 1,  emoji: '🍕', name: 'Pizza Margherita',        desc: 'Rajčatová omáčka, mozarella, bazalka',   price: 149, tags: ['bestseller'] },
    { id: 2,  emoji: '🍔', name: 'Klasický burger',          desc: 'Hovězí patty, sýr, salátek, rajče',      price: 129, tags: ['bestseller'] },
    { id: 3,  emoji: '🌮', name: 'Tacos kuřecí',             desc: '2x tortilla, guacamole, pico de gallo',  price: 119, tags: [] },
    { id: 4,  emoji: '🍜', name: 'Ramen polévka',            desc: 'Vepřový vývar, nudle, vajíčko, nori',    price: 139, tags: ['novinka'] },
    { id: 5,  emoji: '🥗', name: 'Caesar salát',             desc: 'Kuřecí, parmazán, krutonky, dresink',    price: 109, tags: [] },
    { id: 6,  emoji: '🍝', name: 'Pasta Bolognese',          desc: 'Hovězí ragú, parmazán, čerstvá pasta',   price: 135, tags: ['bestseller'] },
    { id: 7,  emoji: '🌯', name: 'Wrap se lososem',          desc: 'Grilovaný losos, avokádo, špenát',       price: 145, tags: ['novinka'] },
    { id: 8,  emoji: '🍗', name: 'Grilovaná kuřecí stehna',  desc: 'Marinovaná, s bylinkovou omáčkou',       price: 125, tags: [] },
    { id: 9,  emoji: '🥙', name: 'Kebab talíř',              desc: 'Jehněčí maso, tzatziki, pita chléb',    price: 155, tags: [] },
    { id: 10, emoji: '🍣', name: 'Sushi set (12 ks)',         desc: 'Maki, nigiri, temaki, wasabi, sójová',  price: 189, tags: ['bestseller'] },
    { id: 11, emoji: '🥘', name: 'Svíčková na smetaně',      desc: 'Tradiční česká, houskový knedlík',       price: 165, tags: [] },
    { id: 12, emoji: '🫔', name: 'Quesadilla se zeleninou',  desc: 'Paprika, cuketa, cheddar, salsa',        price: 115, tags: ['novinka'] },
  ],
  dezerty: [
    { id: 101, emoji: '🍰', name: 'Cheesecake jahoda',    desc: 'New York style, čerstvé jahody',        price: 79,  tags: ['bestseller'] },
    { id: 102, emoji: '🍫', name: 'Čokoládový fondant',   desc: 'Teplý středek, vanilková zmrzlina',     price: 89,  tags: [] },
    { id: 103, emoji: '🧁', name: 'Red Velvet muffin',    desc: 'Cream cheese frosting, máslové těsto', price: 55,  tags: ['novinka'] },
    { id: 104, emoji: '🍮', name: 'Crème brûlée',         desc: 'Vanilkový krém, karamelová krusta',     price: 75,  tags: [] },
    { id: 105, emoji: '🍩', name: 'Donut glazovaný',      desc: 'Čerstvý, malinová glazura, sprinkles',  price: 45,  tags: [] },
    { id: 106, emoji: '🧇', name: 'Waffle s ovocem',      desc: 'Javorový sirup, lesní ovoce, šlehačka', price: 85, tags: ['bestseller'] },
    { id: 107, emoji: '🍨', name: 'Zmrzlinový pohár',     desc: '3 kopečky, oříšky, karamel, oplatka',   price: 69,  tags: [] },
    { id: 108, emoji: '🥐', name: 'Croissant s krémem',   desc: 'Máslové těsto, vanilkový krém',         price: 49,  tags: [] },
  ],
  snacky: [
    { id: 201, emoji: '🥔', name: "Lay's Solené",         desc: '150g, klasické bramborové chipsy',      price: 39,  tags: ['bestseller'] },
    { id: 202, emoji: '🌶️', name: 'Pringles Paprika',    desc: '165g, pikantní chuť, tubička',          price: 49,  tags: [] },
    { id: 203, emoji: '🧀', name: 'Doritos Cheese',       desc: '150g, sýrová tortilla chips',           price: 45,  tags: [] },
    { id: 204, emoji: '🔥', name: "Flamin' Hot Cheetos",  desc: '140g, extra pikantní puffs',            price: 55,  tags: ['novinka'] },
    { id: 205, emoji: '🥨', name: 'Preclíky sůl',         desc: '200g, křupavé preclíky, hrubá sůl',    price: 35,  tags: [] },
    { id: 206, emoji: '🍿', name: 'Popcorn máslo',        desc: '90g, kinový styl, máslo a sůl',         price: 42,  tags: [] },
    { id: 207, emoji: '🌽', name: 'Nachos s dipem',       desc: 'Tortilla chips + salsa + guacamole',   price: 69,  tags: ['bestseller'] },
    { id: 208, emoji: '🥜', name: 'Mix nuts salted',      desc: '200g, kešu, mandle, arašídy',          price: 65,  tags: [] },
    { id: 209, emoji: '🍪', name: 'Oreo originál',        desc: '154g, čokoládové sušenky s krémem',    price: 38,  tags: [] },
    { id: 210, emoji: '🍬', name: 'Haribo Goldbears',     desc: '200g, ovocné gumové medvídky',         price: 42,  tags: [] },
    { id: 211, emoji: '🍫', name: 'Snickers tyčinka',     desc: '50g, arašídy, karamel, čokoláda',      price: 29,  tags: ['bestseller'] },
    { id: 212, emoji: '🎃', name: 'Pringles Sour Cream',  desc: '165g, smetana a cibule',               price: 49,  tags: [] },
  ],
  piti: [
    { id: 301, emoji: '🥤', name: 'Coca-Cola 0,5l',       desc: 'Klasická Coca-Cola, ledová',            price: 35,  tags: ['bestseller'] },
    { id: 302, emoji: '🧃', name: 'Džus pomeranč',        desc: '0,3l, 100% čerstvě mačkaný',           price: 45,  tags: [] },
    { id: 303, emoji: '💧', name: 'Mattoni perlivá',       desc: '0,5l, přírodní minerální voda',         price: 25,  tags: [] },
    { id: 304, emoji: '🍵', name: 'Ledový čaj broskev',   desc: '0,5l, Nestea, osvěžující',              price: 32,  tags: [] },
    { id: 305, emoji: '⚡', name: 'Red Bull Energy',       desc: '250ml, energetický nápoj originál',     price: 49,  tags: ['novinka'] },
    { id: 306, emoji: '🥛', name: 'Milkshake vanilka',    desc: '400ml, čerstvé mléko, vanilka',         price: 79,  tags: ['bestseller'] },
    { id: 307, emoji: '🍋', name: 'Limonáda citron',      desc: 'Domácí, citron, máta, med, 0,4l',       price: 55,  tags: [] },
    { id: 308, emoji: '☕', name: 'Ledová káva',           desc: 'Cold brew, mléko, led, karamel',        price: 65,  tags: [] },
  ]
};

const TOP_IDS = [1, 2, 10, 6, 101]; // top 5 bestsellers
const TOP_ORDERS = { 1: 1240, 2: 980, 10: 870, 6: 760, 101: 650 };

// ===== STATE =====
let cart = [];
let favourites = JSON.parse(localStorage.getItem('mkfavs') || '[]');
let currentRating = 0;
let activeFilter = 'vse';
let searchQuery = '';

// ===== HELPERS =====
function getAllProducts() {
  return Object.entries(products).flatMap(([cat, items]) =>
    items.map(p => ({ ...p, category: cat }))
  );
}
function getProduct(id) {
  return getAllProducts().find(p => p.id === id);
}
function getCategoryLabel(cat) {
  return { jidla: 'Jídlo', dezerty: 'Dezert', snacky: 'Snack', piti: 'Pití' }[cat] || cat;
}

// ===== DARK MODE =====
const darkToggle = document.getElementById('darkToggle');
let isDark = localStorage.getItem('mkdark') === '1';
applyTheme();
darkToggle.addEventListener('click', () => {
  isDark = !isDark;
  localStorage.setItem('mkdark', isDark ? '1' : '0');
  applyTheme();
});
function applyTheme() {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  darkToggle.textContent = isDark ? '☀️' : '🌙';
}

// ===== RENDER PRODUCT CARD =====
function createCard(product, showCategory = false) {
  const isFav = favourites.includes(product.id);
  const hasBadge = product.tags && product.tags.length > 0;
  const badge = hasBadge ? product.tags[0] : null;
  const badgeLabel = badge === 'bestseller' ? '🔥 Bestseller' : badge === 'novinka' ? '✨ Novinka' : '';

  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;
  card.innerHTML = `
    <div class="product-emoji">
      ${hasBadge ? `<span class="product-badge ${badge}">${badgeLabel}</span>` : ''}
      <span>${product.emoji}</span>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${product.id}" title="Oblíbené">${isFav ? '❤️' : '🤍'}</button>
    </div>
    <div class="product-info">
      ${showCategory ? `<div class="product-cat-tag">${getCategoryLabel(product.category)}</div>` : ''}
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-footer">
        <span class="product-price">${product.price} Kč</span>
        <button class="card-add-btn">+ Přidat</button>
      </div>
    </div>`;

  card.querySelector('.card-add-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product.id);
  });
  card.querySelector('.fav-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleFav(product.id);
  });
  card.addEventListener('click', () => addToCart(product.id));
  return card;
}

// ===== RENDER ALL GRIDS =====
function renderProducts() {
  ['jidla', 'dezerty', 'snacky', 'piti'].forEach(cat => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    grid.innerHTML = '';
    products[cat].forEach(p => grid.appendChild(createCard(p)));
  });
}

// ===== TOP FOODS =====
function renderTopFoods() {
  const grid = document.getElementById('topFoodsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const topProducts = TOP_IDS.map(id => getProduct(id)).filter(Boolean);
  topProducts.forEach((p, i) => {
    const rankClass = ['rank-1','rank-2','rank-3','rank-4','rank-4'][i];
    const rankLabel = ['🥇','🥈','🥉','4','5'][i];
    const card = document.createElement('div');
    card.className = 'top-card';
    card.innerHTML = `
      <div class="top-card-rank ${rankClass}">${rankLabel}</div>
      <div class="top-card-emoji">${p.emoji}</div>
      <div class="top-card-info">
        <div class="top-card-name">${p.name}</div>
        <div class="top-card-desc">${p.desc}</div>
        <div class="top-card-footer">
          <div>
            <div class="top-card-price">${p.price} Kč</div>
            <div class="top-card-orders">📦 ${TOP_ORDERS[p.id].toLocaleString('cs')}x objednáno</div>
          </div>
          <button class="top-card-add">+ Přidat</button>
        </div>
      </div>`;
    card.querySelector('.top-card-add').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p.id);
    });
    card.addEventListener('click', () => addToCart(p.id));
    grid.appendChild(card);
  });
}

// ===== FAVOURITES =====
function toggleFav(id) {
  const idx = favourites.indexOf(id);
  if (idx === -1) {
    favourites.push(id);
    showToast('❤️ Přidáno do oblíbených!');
  } else {
    favourites.splice(idx, 1);
    showToast('💔 Odebráno z oblíbených');
  }
  localStorage.setItem('mkfavs', JSON.stringify(favourites));
  // Update all heart buttons
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.className = `fav-btn ${favourites.includes(id) ? 'active' : ''}`;
    btn.textContent = favourites.includes(id) ? '❤️' : '🤍';
  });
  renderFavourites();
}

function renderFavourites() {
  const grid = document.getElementById('grid-oblibene');
  const empty = document.getElementById('oblibeneEmpty');
  if (!grid || !empty) return;
  grid.innerHTML = '';
  if (favourites.length === 0) {
    empty.classList.add('show');
    return;
  }
  empty.classList.remove('show');
  favourites.forEach(id => {
    const p = getProduct(id);
    if (p) grid.appendChild(createCard(p, true));
  });
}

// ===== SEARCH & FILTER =====
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchResultsWrap = document.getElementById('searchResultsWrap');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const searchResultsHeader = document.getElementById('searchResultsHeader');

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.trim().toLowerCase();
  searchClear.classList.toggle('visible', searchQuery.length > 0);
  runSearchFilter();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClear.classList.remove('visible');
  runSearchFilter();
});

document.querySelectorAll('.filter-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    runSearchFilter();
  });
});

function runSearchFilter() {
  const all = getAllProducts();
  let results = all;

  if (activeFilter !== 'vse') {
    if (['jidla','dezerty','snacky','piti'].includes(activeFilter)) {
      results = results.filter(p => p.category === activeFilter);
    } else {
      results = results.filter(p => p.tags && p.tags.includes(activeFilter));
    }
  }
  if (searchQuery) {
    results = results.filter(p =>
      p.name.toLowerCase().includes(searchQuery) ||
      p.desc.toLowerCase().includes(searchQuery)
    );
  }

  const isFiltering = searchQuery || activeFilter !== 'vse';
  searchResultsWrap.style.display = isFiltering ? 'block' : 'none';

  if (!isFiltering) return;

  searchResultsHeader.textContent = results.length > 0
    ? `${results.length} výsledk${results.length === 1 ? '' : results.length < 5 ? 'y' : 'ů'} pro "${searchQuery || activeFilter}"`
    : `Nic nenalezeno 😔`;

  searchResultsGrid.innerHTML = '';
  results.forEach(p => searchResultsGrid.appendChild(createCard(p, true)));
}

// ===== CART =====
function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });
  updateCartUI();
  showToast(`${product.emoji} ${product.name} přidáno!`);
  animateCartBtn();
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); updateCartUI(); }
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const price = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartCount').textContent = total;
  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><span>📦</span><p>Košík je prázdný</p><small>Přidej si něco dobrého!</small></div>`;
    footer.style.display = 'none';
    return;
  }
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-emoji">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${item.price * item.qty} Kč</div>
      </div>
      <div class="ci-controls">
        <button class="ci-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span class="ci-qty">${item.qty}</span>
        <button class="ci-btn" onclick="changeQty(${item.id},1)">+</button>
        <button class="ci-remove" onclick="removeFromCart(${item.id})">🗑️</button>
      </div>
    </div>`).join('');
  document.getElementById('cartTotal').textContent = `${price} Kč`;
  footer.style.display = 'block';
}

// ===== CART PANEL =====
document.getElementById('cartToggle').addEventListener('click', () => {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
});
function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function animateCartBtn() {
  const btn = document.getElementById('cartToggle');
  btn.style.transform = 'scale(1.12)';
  setTimeout(() => btn.style.transform = '', 200);
}

// ===== CART SCREENSHOT =====
document.getElementById('btnScreenshot').addEventListener('click', async () => {
  const btn = document.getElementById('btnScreenshot');
  btn.textContent = '⏳ Generuji...';
  btn.disabled = true;
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:420px;background:white;padding:36px 32px;font-family:sans-serif;border-radius:20px;';
  el.innerHTML = `
    <div style="text-align:center;margin-bottom:22px;">
      <div style="font-size:2.5rem;margin-bottom:6px;">📦</div>
      <div style="font-size:1.4rem;font-weight:800;color:#1a2e5a;">Moje<span style="color:#c97c1a">Krabice</span>CZ</div>
      <div style="font-size:0.75rem;color:#8a93a8;margin-top:4px;">Objednávka #${Math.floor(Math.random()*90000+10000)} · ${new Date().toLocaleString('cs-CZ')}</div>
    </div>
    <div style="border-top:2px dashed #e5e7eb;padding-top:16px;margin-bottom:16px;">
      ${cart.map(i => `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <span style="font-size:1.4rem;">${i.emoji}</span>
            <div>
              <div style="font-weight:600;font-size:0.88rem;color:#1a2035;">${i.name}</div>
              <div style="font-size:0.75rem;color:#8a93a8;">${i.qty}x ${i.price} Kč</div>
            </div>
          </div>
          <strong style="color:#c97c1a;">${i.price * i.qty} Kč</strong>
        </div>`).join('')}
    </div>
    <div style="border-top:2px solid #1a2e5a;padding-top:12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
      <span style="font-weight:600;color:#1a2e5a;">Celkem:</span>
      <strong style="font-size:1.4rem;color:#1a2e5a;">${totalPrice} Kč</strong>
    </div>
    <div style="text-align:center;padding:12px;background:#fff8ef;border-radius:10px;">
      <div style="font-size:0.8rem;color:#c97c1a;font-weight:600;">Děkujeme za objednávku! 🙏</div>
      <div style="font-size:0.72rem;color:#8a93a8;margin-top:2px;">MojeKrabiceCZ · Doručíme brzy</div>
    </div>`;
  document.body.appendChild(el);
  try {
    const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#fff', useCORS: true });
    const a = document.createElement('a');
    a.download = `MojeKrabiceCZ-objednavka-${Date.now()}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
    showToast('✅ Screenshot stažen!');
  } catch(e) { showToast('❌ Chyba při generování'); }
  finally { document.body.removeChild(el); btn.textContent = '📸 Stáhnout Screenshot'; btn.disabled = false; }
});

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== HOURS MODAL =====
document.getElementById('hoursToggle').addEventListener('click', () => {
  document.getElementById('hoursModal').classList.add('open');
  document.getElementById('hoursOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
});
function closeHours() {
  document.getElementById('hoursModal').classList.remove('open');
  document.getElementById('hoursOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('hoursClose').addEventListener('click', closeHours);
document.getElementById('hoursOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('hoursOverlay')) closeHours();
});

// ===== OPENING HOURS =====
const HOURS = { 0:null, 1:{open:'8:00',close:'17:00'}, 2:{open:'7:00',close:'16:00'}, 3:{open:'9:00',close:'18:00'}, 4:{open:'8:00',close:'12:00'}, 5:{open:'6:00',close:'20:00'}, 6:{open:'10:00',close:'12:00'} };

function initHours() {
  const now = new Date();
  const day = now.getDay();
  const mins = now.getHours()*60+now.getMinutes();
  const names = ['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'];
  const h = HOURS[day];
  let isOpen = false;
  if (h) {
    const [oh,om]=h.open.split(':').map(Number), [ch,cm]=h.close.split(':').map(Number);
    isOpen = mins>=oh*60+om && mins<ch*60+cm;
  }
  const dot = document.getElementById('hoursStatusDot');
  if (dot) { dot.className = 'hours-dot ' + (isOpen ? 'open-now' : 'closed-now'); }

  let icon, statusHTML;
  if (!h) {
    icon='🔒'; statusHTML=`<div class="hmt-status is-closed">Dnes zavřeno</div>`;
  } else {
    const [oh,om]=h.open.split(':').map(Number),[ch,cm]=h.close.split(':').map(Number);
    const left = ch*60+cm-mins;
    if (mins<oh*60+om) { icon='⏳'; statusHTML=`<div class="hmt-status">Otevíráme v <strong>${h.open}</strong></div>`; }
    else if (isOpen) { icon='✅'; statusHTML=`<div class="hmt-status is-open">Otevřeno · Zavíráme ${h.close} (za ${Math.floor(left/60)}h ${left%60}min)</div>`; }
    else { icon='🔒'; statusHTML=`<div class="hmt-status is-closed">Dnes zavřeno · Byli jsme tu ${h.open}–${h.close}</div>`; }
  }
  const banner = `<div class="hmt-icon">${icon}</div><div><div class="hmt-label">Dnes · ${names[day]}</div>${statusHTML}</div>`;
  ['hoursModalToday','hoursToday'].forEach(id => { const el=document.getElementById(id); if(el) el.innerHTML=banner; });

  document.querySelectorAll('.hm-row, .hours-row').forEach(row => {
    if (parseInt(row.dataset.day)===day) {
      row.classList.add('today');
      if (isOpen) {
        const b = row.querySelector('.hm-badge, .hours-badge');
        if (b) { b.textContent='Právě otevřeno'; b.className=(b.classList.contains('hm-badge')?'hm-badge':'hours-badge')+' open-now'; }
      }
    }
  });
}

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenuBtn.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰';
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { mobileMenu.classList.remove('open'); mobileMenuBtn.textContent = '☰'; });
  });
}

// ===== ONLINE CHAT =====
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatPanel');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

const RESPONSES = [
  { keywords: ['dobrý den','ahoj','hello','čau','zdravím'], reply: 'Ahoj! 👋 Vítej u MojeKrabiceCZ! Jak ti můžeme pomoci?' },
  { keywords: ['doručení','doručit','dostat','kdy'], reply: 'Doručení trvá obvykle 30–45 minut od objednávky. 🚀' },
  { keywords: ['cena','kolik','zaplatit','platba'], reply: 'Ceny najdeš přímo u každého produktu. Platba probíhá online při objednávce. 💳' },
  { keywords: ['alerg','lepek','vegán','vegetar'], reply: 'Máme vegetariánské i bezlepkové možnosti! Napište nám konkrétní potravinu a poradíme. 🥗' },
  { keywords: ['otevřen','zavřen','hodiny','kdy'], reply: 'Pondělí 8-17, Úterý 7-16, Středa 9-18, Čtvrtek 8-12, Pátek 6-20, Sobota 10-12, Neděle zavřeno. 🕐' },
  { keywords: ['reclamac','problém','špatný','nespokojený'], reply: 'Omlouváme se za potíže! Popište nám problém podrobněji a okamžitě to vyřešíme. 🙏' },
  { keywords: ['sleva','akce','kupón','kód'], reply: 'Momentálně probíhá akce: každá 5. objednávka ZDARMA! Sleduj naše novinky. 🎁' },
  { keywords: ['pizza','burger','sushi','jídlo'], reply: 'Skvělý výběr! Přidej to do košíku a objednáme hned. 🍕 Potřebuješ pomoc s výběrem?' },
];
const DEFAULT_REPLY = 'Díky za zprávu! Náš pracovník ti odpoví co nejdříve. Průměrná čekací doba je 2 minuty. ⏳';

let chatOpen = false;
let chatUnread = 0;
const chatBadge = document.getElementById('chatBadge');

if (chatToggle) {
  chatToggle.addEventListener('click', () => {
    chatOpen = !chatOpen;
    chatPanel.classList.toggle('open', chatOpen);
    if (chatOpen) { chatUnread = 0; chatBadge.style.display = 'none'; chatInput.focus(); }
  });
}
if (chatClose) chatClose.addEventListener('click', () => { chatOpen = false; chatPanel.classList.remove('open'); });

function sendChatMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  appendMessage(text, 'user');
  chatInput.value = '';
  setTimeout(() => {
    const lower = text.toLowerCase();
    const found = RESPONSES.find(r => r.keywords.some(k => lower.includes(k)));
    appendMessage(found ? found.reply : DEFAULT_REPLY, 'bot');
    if (!chatOpen) { chatUnread++; chatBadge.textContent = chatUnread; chatBadge.style.display = 'flex'; }
  }, 800 + Math.random() * 600);
}

function appendMessage(text, who) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${who}`;
  const now = new Date();
  const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
  msg.innerHTML = `
    ${who==='bot' ? '<div class="chat-avatar">👷</div>' : ''}
    <div class="chat-bubble">
      <div class="chat-text">${text}</div>
      <div class="chat-time">${time}</div>
    </div>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (chatSend) chatSend.addEventListener('click', sendChatMessage);
if (chatInput) chatInput.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChatMessage(); } });

// ===== RATING =====
const MOOD_DATA = {
  0:   { emoji: '🤔', text: 'Vyber hodnocení...', color: '#8a93a8' },
  0.5: { emoji: '😭', text: 'Naprosto hrozné...', color: '#ef4444' },
  1:   { emoji: '😢', text: 'Velmi špatné, omlouváme se', color: '#f87171' },
  1.5: { emoji: '😟', text: 'Špatné, musíme se zlepšit', color: '#fb923c' },
  2:   { emoji: '😞', text: 'Slabé, zklamalo nás to', color: '#f97316' },
  2.5: { emoji: '😐', text: 'Tak napůl...', color: '#eab308' },
  3:   { emoji: '🙂', text: 'Ujde to, ale máme co zlepšovat', color: '#84cc16' },
  3.5: { emoji: '😊', text: 'Docela dobré!', color: '#22c55e' },
  4:   { emoji: '😄', text: 'Skvělé! Jsme rádi!', color: '#10b981' },
  4.5: { emoji: '🤩', text: 'Úžasné! Skoro dokonalé!', color: '#0ea5e9' },
  5:   { emoji: '🥳', text: 'PERFEKTNÍ! Absolutní spokojenost! 🎉', color: '#8b5cf6' },
};

function renderStars() {
  const row = document.getElementById('starsRow');
  if (!row) return;
  row.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'position:relative;width:44px;height:44px;cursor:pointer;';
    const left = document.createElement('div');
    left.style.cssText = 'position:absolute;left:0;top:0;width:50%;height:100%;z-index:2;';
    left.addEventListener('mouseenter', () => updateStarDisplay(i-0.5));
    left.addEventListener('mouseleave', () => updateStarDisplay(currentRating));
    left.addEventListener('click', () => setRating(i-0.5));
    const right = document.createElement('div');
    right.style.cssText = 'position:absolute;right:0;top:0;width:50%;height:100%;z-index:2;';
    right.addEventListener('mouseenter', () => updateStarDisplay(i));
    right.addEventListener('mouseleave', () => updateStarDisplay(currentRating));
    right.addEventListener('click', () => setRating(i));
    const star = document.createElement('span');
    star.className = 'star-display'; star.dataset.index = i; star.textContent = '★';
    wrap.appendChild(left); wrap.appendChild(right); wrap.appendChild(star);
    row.appendChild(wrap);
  }
  updateStarDisplay(0);
}

function setRating(val) {
  currentRating = val;
  updateStarDisplay(val);
  const m = MOOD_DATA[val] || MOOD_DATA[0];
  const emoji = document.getElementById('moodEmoji');
  const text = document.getElementById('moodText');
  emoji.style.transform='scale(0.6)'; emoji.style.opacity='0';
  setTimeout(() => { emoji.textContent=m.emoji; emoji.style.transform='scale(1)'; emoji.style.opacity='1'; }, 150);
  text.textContent = m.text; text.style.color = m.color;
  document.getElementById('ratingValue').textContent = `${val} / 5`;
  document.getElementById('btnRatingScreenshot').disabled = false;
}

function updateStarDisplay(val) {
  document.querySelectorAll('.star-display').forEach((s, i) => {
    const n = i+1;
    if (val>=n) { s.style.color='#f5a623'; s.style.textShadow='0 2px 8px rgba(245,166,35,0.5)'; s.style.background='none'; s.style.webkitBackgroundClip='unset'; s.style.webkitTextFillColor='unset'; }
    else if (val>=n-0.5) { s.style.background='linear-gradient(90deg,#f5a623 50%,#d1d5db 50%)'; s.style.webkitBackgroundClip='text'; s.style.webkitTextFillColor='transparent'; s.style.textShadow='none'; }
    else { s.style.color='#d1d5db'; s.style.textShadow='none'; s.style.background='none'; s.style.webkitBackgroundClip='unset'; s.style.webkitTextFillColor='unset'; }
  });
}

document.getElementById('btnRatingScreenshot').addEventListener('click', async () => {
  if (!currentRating) return;
  const btn = document.getElementById('btnRatingScreenshot');
  btn.textContent = '⏳ Generuji...'; btn.disabled = true;
  const mood = MOOD_DATA[currentRating];
  const comment = document.getElementById('ratingComment').value.trim();
  function starsHTML(r) {
    let h='';
    for(let i=1;i<=5;i++){
      if(r>=i) h+=`<span style="color:#f5a623;font-size:2rem;">★</span>`;
      else if(r>=i-0.5) h+=`<span style="background:linear-gradient(90deg,#f5a623 50%,#d1d5db 50%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:2rem;">★</span>`;
      else h+=`<span style="color:#d1d5db;font-size:2rem;">★</span>`;
    }
    return h;
  }
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:460px;background:white;padding:40px 36px;font-family:sans-serif;border-radius:24px;';
  el.innerHTML = `
    <div style="text-align:center;margin-bottom:22px;">
      <div style="font-size:1.5rem;">📦</div>
      <div style="font-size:1.4rem;font-weight:800;color:#1a2e5a;">Moje<span style="color:#c97c1a">Krabice</span>CZ</div>
      <div style="font-size:0.76rem;color:#8a93a8;">Hodnocení · ${new Date().toLocaleDateString('cs-CZ')}</div>
    </div>
    <div style="text-align:center;padding:26px 20px;background:${mood.color}18;border-radius:16px;margin-bottom:18px;border:2px solid ${mood.color}30;">
      <div style="font-size:3.8rem;margin-bottom:8px;">${mood.emoji}</div>
      <div style="font-size:1.1rem;font-weight:700;color:${mood.color};margin-bottom:12px;">${mood.text}</div>
      <div style="display:flex;justify-content:center;gap:4px;margin-bottom:6px;">${starsHTML(currentRating)}</div>
      <div style="font-weight:700;color:#1a2e5a;">${currentRating} / 5 hvězdiček</div>
    </div>
    ${comment?`<div style="background:#f8f9fc;border-radius:10px;padding:14px;margin-bottom:16px;border-left:4px solid ${mood.color};"><div style="font-size:0.76rem;color:#8a93a8;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Komentář</div><div style="font-size:0.9rem;color:#1a2035;">"${comment}"</div></div>`:''}
    <div style="text-align:center;padding:10px;background:#fff8ef;border-radius:10px;border:1px solid #f5a62330;">
      <div style="font-size:0.78rem;color:#c97c1a;font-weight:600;">Děkujeme za tvoje hodnocení! 🙏</div>
    </div>`;
  document.body.appendChild(el);
  try {
    const canvas = await html2canvas(el, { scale:2, backgroundColor:'#fff', useCORS:true });
    const a = document.createElement('a');
    a.download = `MojeKrabiceCZ-hodnoceni-${currentRating}hvezd.png`;
    a.href = canvas.toDataURL('image/png'); a.click();
    showToast(`${mood.emoji} Hodnocení staženo!`);
  } catch(e) { showToast('❌ Chyba'); }
  finally { document.body.removeChild(el); btn.textContent='📸 Stáhnout hodnocení jako Screenshot'; btn.disabled=false; }
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow = window.scrollY>40 ? '0 4px 30px rgba(26,46,90,0.13)' : '0 2px 20px rgba(26,46,90,0.06)';
});

// ===== INIT =====
renderProducts();
renderTopFoods();
renderFavourites();
updateCartUI();
renderStars();
initHours();

// Bot welcome message
setTimeout(() => {
  if (chatMessages && chatMessages.children.length === 0) {
    appendMessage('Ahoj! 👋 Jsem tu pro tebe. Jak ti mohu pomoci s objednávkou?', 'bot');
  }
}, 500);
