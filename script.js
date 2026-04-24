// ===== DATA =====
const products = {
  jidla: [
    { id: 1,  emoji: '🍕', name: 'Pizza Margherita',       desc: 'Rajčatová omáčka, mozarella, bazalka',  price: 149 },
    { id: 2,  emoji: '🍔', name: 'Klasický burger',         desc: 'Hovězí patty, sýr, salátek, rajče',     price: 129 },
    { id: 3,  emoji: '🌮', name: 'Tacos kuřecí',            desc: '2x tortilla, guacamole, pico de gallo', price: 119 },
    { id: 4,  emoji: '🍜', name: 'Ramen polévka',           desc: 'Vepřový vývar, nudle, vajíčko, nori',   price: 139 },
    { id: 5,  emoji: '🥗', name: 'Caesar salát',            desc: 'Kuřecí, parmazán, krutonky, dresink',   price: 109 },
    { id: 6,  emoji: '🍝', name: 'Pasta Bolognese',         desc: 'Hovězí ragú, parmazán, čerstvá pasta',  price: 135 },
    { id: 7,  emoji: '🌯', name: 'Wrap se lososem',         desc: 'Grilovaný losos, avokádo, špenát',      price: 145 },
    { id: 8,  emoji: '🍗', name: 'Grilovaná kuřecí stehna', desc: 'Marinovaná, s bylinkovou omáčkou',      price: 125 },
    { id: 9,  emoji: '🥙', name: 'Kebab talíř',             desc: 'Jehněčí maso, tzatziki, pita chléb',   price: 155 },
    { id: 10, emoji: '🍣', name: 'Sushi set (12 ks)',        desc: 'Maki, nigiri, temaki, wasabi, sójová', price: 189 },
    { id: 11, emoji: '🥘', name: 'Svíčková na smetaně',     desc: 'Tradiční česká, houskový knedlík',      price: 165 },
    { id: 12, emoji: '🫔', name: 'Quesadilla se zeleninou', desc: 'Paprika, cuketa, cheddar, salsa',       price: 115 },
  ],
  dezerty: [
    { id: 101, emoji: '🍰', name: 'Cheesecake jahoda',    desc: 'New York style, čerstvé jahody',       price: 79 },
    { id: 102, emoji: '🍫', name: 'Čokoládový fondant',   desc: 'Teplý středek, vanilková zmrzlina',    price: 89 },
    { id: 103, emoji: '🧁', name: 'Red Velvet muffin',    desc: 'Cream cheese frosting, máslové těsto',price: 55 },
    { id: 104, emoji: '🍮', name: 'Crème brûlée',         desc: 'Vanilkový krém, karamelová krusta',    price: 75 },
    { id: 105, emoji: '🍩', name: 'Donut glazovaný',      desc: 'Čerstvý, malinová glazura, sprinkles', price: 45 },
    { id: 106, emoji: '🧇', name: 'Waffle s ovocem',      desc: 'Javorový sirup, lesní ovoce, šlehačka',price: 85 },
    { id: 107, emoji: '🍨', name: 'Zmrzlinový pohár',     desc: '3 kopečky, oříšky, karamel, oplatka',  price: 69 },
    { id: 108, emoji: '🥐', name: 'Croissant s krémem',   desc: 'Máslové těsto, vanilkový krém',        price: 49 },
  ],
  snacky: [
    { id: 201, emoji: '🥔', name: 'Lay\'s Solené',        desc: '150g, klasické bramborové chipsy',     price: 39 },
    { id: 202, emoji: '🌶️', name: 'Pringles Paprika',    desc: '165g, pikantní chuť, tubička',         price: 49 },
    { id: 203, emoji: '🧀', name: 'Doritos Cheese',       desc: '150g, sýrová tortilla chips',          price: 45 },
    { id: 204, emoji: '🔥', name: 'Flamin\' Hot Cheetos', desc: '140g, extra pikantní puffs',           price: 55 },
    { id: 205, emoji: '🥨', name: 'Preclíky sůl',         desc: '200g, křupavé preclíky, hrubá sůl',   price: 35 },
    { id: 206, emoji: '🍿', name: 'Popcorn máslo',        desc: '90g, kinový styl, máslo a sůl',        price: 42 },
    { id: 207, emoji: '🌽', name: 'Nachos s dipem',       desc: 'Tortilla chips + salsa + guacamole',  price: 69 },
    { id: 208, emoji: '🥜', name: 'Mix nuts salted',      desc: '200g, kešu, mandle, arašídy',         price: 65 },
    { id: 209, emoji: '🍪', name: 'Oreo originál',        desc: '154g, čokoládové sušenky s krémem',   price: 38 },
    { id: 210, emoji: '🍬', name: 'Haribo Goldbears',     desc: '200g, ovocné gumové medvídky',        price: 42 },
    { id: 211, emoji: '🍫', name: 'Snickers tyčinka',     desc: '50g, arašídy, karamel, čokoláda',     price: 29 },
    { id: 212, emoji: '🎃', name: 'Pringles Sour Cream',  desc: '165g, smetana a cibule, oblíbená chuť',price: 49 },
  ],
  piti: [
    { id: 301, emoji: '🥤', name: 'Coca-Cola 0,5l',       desc: 'Klasická Coca-Cola, ledová',           price: 35 },
    { id: 302, emoji: '🧃', name: 'Džus pomeranč',        desc: '0,3l, 100% čerstvě mačkaný',          price: 45 },
    { id: 303, emoji: '💧', name: 'Mattoni perlivá',      desc: '0,5l, přírodní minerální voda',        price: 25 },
    { id: 304, emoji: '🍵', name: 'Ledový čaj broskev',   desc: '0,5l, Nestea, osvěžující',             price: 32 },
    { id: 305, emoji: '⚡', name: 'Red Bull Energy',      desc: '250ml, energetický nápoj originál',    price: 49 },
    { id: 306, emoji: '🥛', name: 'Milkshake vanilka',    desc: '400ml, čerstvé mléko, vanilka, šlehačka', price: 79 },
    { id: 307, emoji: '🍋', name: 'Limonáda citron',      desc: 'Domácí, citron, máta, med, 0,4l',      price: 55 },
    { id: 308, emoji: '☕', name: 'Ledová káva',           desc: 'Cold brew, mléko, ledo, karamel',      price: 65 },
  ]
};

// ===== STATE =====
let cart = [];

// ===== RENDER PRODUCTS =====
function renderProducts() {
  const categories = ['jidla', 'dezerty', 'snacky', 'piti'];
  categories.forEach(cat => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    grid.innerHTML = '';
    products[cat].forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-emoji">
          <span>${product.emoji}</span>
          <span class="product-category-tag">${getCategoryLabel(cat)}</span>
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-desc">${product.desc}</div>
          <div class="product-footer">
            <span class="product-price">${product.price} Kč</span>
            <button class="card-add-btn" onclick="addToCart(${product.id}, '${cat}')">+ Přidat</button>
          </div>
        </div>
      `;
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('card-add-btn')) {
          addToCart(product.id, cat);
        }
      });
      grid.appendChild(card);
    });
  });
}

function getCategoryLabel(cat) {
  const labels = { jidla: 'Jídlo', dezerty: 'Dezert', snacky: 'Snack', piti: 'Pití' };
  return labels[cat] || cat;
}

// ===== CART LOGIC =====
function addToCart(productId, category) {
  const product = products[category].find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`${product.emoji} ${product.name} přidáno do košíku!`);
  animateCartBtn();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  updateCartUI();
}

function updateCartUI() {
  const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  document.getElementById('cartCount').textContent = totalCount;

  const cartItemsEl = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal = document.getElementById('cartTotal');

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <span>📦</span>
        <p>Košík je prázdný</p>
        <small>Přidej si něco dobrého!</small>
      </div>`;
    cartFooter.style.display = 'none';
    return;
  }

  cartItemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" id="ci-${item.id}">
      <div class="ci-emoji">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${item.price * item.qty} Kč</div>
      </div>
      <div class="ci-controls">
        <button class="ci-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="ci-qty">${item.qty}</span>
        <button class="ci-btn" onclick="changeQty(${item.id}, 1)">+</button>
        <button class="ci-remove" onclick="removeFromCart(${item.id})">🗑️</button>
      </div>
    </div>
  `).join('');

  cartTotal.textContent = `${totalPrice} Kč`;
  cartFooter.style.display = 'block';
}

// ===== CART PANEL TOGGLE =====
document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

function openCart() {
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== ANIMATE CART BTN =====
function animateCartBtn() {
  const btn = document.getElementById('cartToggle');
  btn.style.transform = 'scale(1.12)';
  setTimeout(() => btn.style.transform = '', 220);
}

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== SCREENSHOT =====
document.getElementById('btnScreenshot').addEventListener('click', async () => {
  const btn = document.getElementById('btnScreenshot');
  btn.textContent = '⏳ Generuji screenshot...';
  btn.disabled = true;

  // Create a receipt element for screenshot
  const receipt = document.createElement('div');
  receipt.style.cssText = `
    position: fixed; top: -9999px; left: -9999px;
    width: 420px; background: white; padding: 36px 32px;
    font-family: 'DM Sans', sans-serif; border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  `;

  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  receipt.innerHTML = `
    <div style="text-align:center; margin-bottom:24px;">
      <div style="font-size:2.8rem; margin-bottom:6px;">📦</div>
      <div style="font-family:'Syne',sans-serif; font-size:1.5rem; font-weight:800; color:#1a2e5a;">
        Moje<span style="color:#c97c1a">Krabice</span>CZ
      </div>
      <div style="font-size:0.8rem; color:#8a93a8; margin-top:4px;">Objednávka #${Math.floor(Math.random()*90000+10000)}</div>
      <div style="font-size:0.78rem; color:#8a93a8;">${new Date().toLocaleString('cs-CZ')}</div>
    </div>
    <div style="border-top:2px dashed #e5e7eb; padding-top:16px; margin-bottom:16px;">
      ${cart.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:1.4rem;">${item.emoji}</span>
            <div>
              <div style="font-weight:600; font-size:0.9rem; color:#1a2035;">${item.name}</div>
              <div style="font-size:0.78rem; color:#8a93a8;">${item.qty}x ${item.price} Kč</div>
            </div>
          </div>
          <strong style="color:#c97c1a; font-size:0.95rem;">${item.price * item.qty} Kč</strong>
        </div>
      `).join('')}
    </div>
    <div style="border-top:2px solid #1a2e5a; padding-top:14px; display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:1rem; font-weight:600; color:#1a2e5a;">Celkem:</span>
      <strong style="font-size:1.4rem; font-family:'Syne',sans-serif; color:#1a2e5a;">${totalPrice} Kč</strong>
    </div>
    <div style="text-align:center; margin-top:20px; padding:12px; background:#fff8ef; border-radius:10px;">
      <div style="font-size:0.82rem; color:#c97c1a; font-weight:600;">Děkujeme za objednávku! 🙏</div>
      <div style="font-size:0.75rem; color:#8a93a8; margin-top:2px;">MojeKrabiceCZ · Doručíme brzy</div>
    </div>
  `;

  document.body.appendChild(receipt);

  try {
    const canvas = await html2canvas(receipt, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
    });

    const link = document.createElement('a');
    link.download = `MojeKrabiceCZ-objednavka-${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    showToast('✅ Screenshot stažen!');
  } catch (err) {
    showToast('❌ Chyba při generování screenshotu');
    console.error(err);
  } finally {
    document.body.removeChild(receipt);
    btn.textContent = '📸 Stáhnout Screenshot';
    btn.disabled = false;
  }
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 30px rgba(26,46,90,0.12)';
  } else {
    nav.style.boxShadow = '0 2px 20px rgba(26,46,90,0.06)';
  }
});

// ===== INIT =====
renderProducts();
updateCartUI();
