// ===== PRODUCTS =====
const products = {
  jidla:[
    {id:1, emoji:'🍕',name:'Pizza Margherita',      desc:'Rajčatová omáčka, mozarella, bazalka', price:149,tags:['bestseller']},
    {id:2, emoji:'🍔',name:'Klasický burger',        desc:'Hovězí patty, sýr, salátek, rajče',   price:129,tags:['bestseller']},
    {id:3, emoji:'🌮',name:'Tacos kuřecí',           desc:'2x tortilla, guacamole, pico de gallo',price:119,tags:[]},
    {id:4, emoji:'🍜',name:'Ramen polévka',          desc:'Vepřový vývar, nudle, vajíčko, nori', price:139,tags:['novinka']},
    {id:5, emoji:'🥗',name:'Caesar salát',           desc:'Kuřecí, parmazán, krutonky, dresink', price:109,tags:[]},
    {id:6, emoji:'🍝',name:'Pasta Bolognese',        desc:'Hovězí ragú, parmazán, čerstvá pasta',price:135,tags:['bestseller']},
    {id:7, emoji:'🌯',name:'Wrap se lososem',        desc:'Grilovaný losos, avokádo, špenát',    price:145,tags:['novinka']},
    {id:8, emoji:'🍗',name:'Grilovaná kuřecí stehna',desc:'Marinovaná, bylinkový dresing',       price:125,tags:[]},
    {id:9, emoji:'🥙',name:'Kebab talíř',            desc:'Jehněčí maso, tzatziki, pita chléb',  price:155,tags:[]},
    {id:10,emoji:'🍣',name:'Sushi set 12 ks',        desc:'Maki, nigiri, temaki, wasabi',        price:189,tags:['bestseller']},
    {id:11,emoji:'🥘',name:'Svíčková na smetaně',   desc:'Tradiční česká, houskový knedlík',    price:165,tags:[]},
    {id:12,emoji:'🫔',name:'Quesadilla zelenina',   desc:'Paprika, cuketa, cheddar, salsa',     price:115,tags:['novinka']},
  ],
  dezerty:[
    {id:101,emoji:'🍰',name:'Cheesecake jahoda',  desc:'New York style, čerstvé jahody',       price:79, tags:['bestseller']},
    {id:102,emoji:'🍫',name:'Čokoládový fondant', desc:'Teplý středek, vanilková zmrzlina',    price:89, tags:[]},
    {id:103,emoji:'🧁',name:'Red Velvet muffin',  desc:'Cream cheese frosting, máslo',         price:55, tags:['novinka']},
    {id:104,emoji:'🍮',name:'Crème brûlée',       desc:'Vanilkový krém, karamelová krusta',    price:75, tags:[]},
    {id:105,emoji:'🍩',name:'Donut glazovaný',    desc:'Čerstvý, malinová glazura',            price:45, tags:[]},
    {id:106,emoji:'🧇',name:'Waffle s ovocem',    desc:'Javorový sirup, lesní ovoce, šlehačka',price:85,tags:['bestseller']},
    {id:107,emoji:'🍨',name:'Zmrzlinový pohár',   desc:'3 kopečky, oříšky, karamel',           price:69, tags:[]},
    {id:108,emoji:'🥐',name:'Croissant s krémem', desc:'Máslové těsto, vanilkový krém',        price:49, tags:[]},
  ],
  snacky:[
    {id:201,emoji:'🥔',name:"Lay's Solené",        desc:'150g, klasické bramborové chipsy',    price:39,tags:['bestseller']},
    {id:202,emoji:'🌶️',name:'Pringles Paprika',   desc:'165g, pikantní chuť, tubička',        price:49,tags:[]},
    {id:203,emoji:'🧀',name:'Doritos Cheese',      desc:'150g, sýrová tortilla chips',         price:45,tags:[]},
    {id:204,emoji:'🔥',name:"Flamin' Hot Cheetos", desc:'140g, extra pikantní puffs',          price:55,tags:['novinka']},
    {id:205,emoji:'🥨',name:'Preclíky sůl',        desc:'200g, křupavé preclíky, hrubá sůl',  price:35,tags:[]},
    {id:206,emoji:'🍿',name:'Popcorn máslo',       desc:'90g, kinový styl, máslo a sůl',       price:42,tags:[]},
    {id:207,emoji:'🌽',name:'Nachos s dipem',      desc:'Tortilla chips + salsa + guacamole',  price:69,tags:['bestseller']},
    {id:208,emoji:'🥜',name:'Mix nuts salted',     desc:'200g, kešu, mandle, arašídy',        price:65,tags:[]},
    {id:209,emoji:'🍪',name:'Oreo originál',       desc:'154g, čokoládové sušenky s krémem',  price:38,tags:[]},
    {id:210,emoji:'🍬',name:'Haribo Goldbears',    desc:'200g, ovocné gumové medvídky',       price:42,tags:[]},
    {id:211,emoji:'🍫',name:'Snickers tyčinka',    desc:'50g, arašídy, karamel, čokoláda',    price:29,tags:['bestseller']},
    {id:212,emoji:'🎃',name:'Pringles Sour Cream', desc:'165g, smetana a cibule',             price:49,tags:[]},
  ],
  piti:[
    {id:301,emoji:'🥤',name:'Coca-Cola 0,5l',    desc:'Klasická Coca-Cola, ledová',           price:35,tags:['bestseller']},
    {id:302,emoji:'🧃',name:'Džus pomeranč',     desc:'0,3l, 100% čerstvě mačkaný',          price:45,tags:[]},
    {id:303,emoji:'💧',name:'Mattoni perlivá',   desc:'0,5l, přírodní minerální voda',        price:25,tags:[]},
    {id:304,emoji:'🍵',name:'Ledový čaj broskev',desc:'0,5l, Nestea, osvěžující',            price:32,tags:[]},
    {id:305,emoji:'⚡',name:'Red Bull Energy',   desc:'250ml, energetický nápoj',             price:49,tags:['novinka']},
    {id:306,emoji:'🥛',name:'Milkshake vanilka', desc:'400ml, čerstvé mléko, vanilka',        price:79,tags:['bestseller']},
    {id:307,emoji:'🍋',name:'Limonáda citron',   desc:'Domácí, citron, máta, med, 0,4l',     price:55,tags:[]},
    {id:308,emoji:'☕',name:'Ledová káva',        desc:'Cold brew, mléko, led, karamel',       price:65,tags:[]},
  ]
};
const TOP_IDS = [1,2,10,6,101];
const TOP_ORDERS = {1:1240,2:980,10:870,6:760,101:650};

// Valid coupon codes
const COUPONS = {
  'SLEVA10': {pct:10, label:'10% sleva'},
  'SAVE20':  {pct:20, label:'20% sleva'},
  'KRABICE': {pct:15, label:'15% sleva pro věrné zákazníky'},
  'NOVAK':   {pct:5,  label:'5% uvítací sleva'},
};

// ===== STATE =====
let cart = [];
let favourites = JSON.parse(localStorage.getItem('mkfavs')||'[]');
let currentRating = 0;
let activeFilter = 'vse';
let searchQuery = '';
let appliedCoupon = null;

// ===== AUTH STATE =====
let currentUser = JSON.parse(localStorage.getItem('mkUser')||'null');
let users = JSON.parse(localStorage.getItem('mkUsers')||'{}');
let resetTarget = null; // email for reset
let generatedCode = null;

function saveUsers(){ localStorage.setItem('mkUsers', JSON.stringify(users)); }
function saveCurrentUser(){ localStorage.setItem('mkUser', JSON.stringify(currentUser)); }

// ===== HELPERS =====
function getAllProducts(){ return Object.entries(products).flatMap(([cat,items])=>items.map(p=>({...p,category:cat}))); }
function getProduct(id){ return getAllProducts().find(p=>p.id===id); }
function getCategoryLabel(cat){ return {jidla:'Jídlo',dezerty:'Dezert',snacky:'Snack',piti:'Pití'}[cat]||cat; }

// ===== DARK MODE =====
let isDark = localStorage.getItem('mkdark')==='1';
applyTheme();
function applyTheme(){
  document.documentElement.setAttribute('data-theme', isDark?'dark':'light');
  const icon = isDark?'☀️':'🌙';
  document.getElementById('darkToggle').textContent = icon;
  const mob = document.getElementById('darkToggleMob');
  if(mob) mob.textContent = icon;
}
document.getElementById('darkToggle').addEventListener('click',()=>{ isDark=!isDark; localStorage.setItem('mkdark',isDark?'1':'0'); applyTheme(); });
document.getElementById('darkToggleMob').addEventListener('click',()=>{ isDark=!isDark; localStorage.setItem('mkdark',isDark?'1':'0'); applyTheme(); });

// ===== NAVBAR UI =====
function updateNavbarUser(){
  const authBtn = document.getElementById('authBtn');
  const authBtnMob = document.getElementById('authBtnMob');
  const sideAuthBtn = document.getElementById('sideAuthBtn');
  if(currentUser){
    authBtn.textContent = '⚙️';
    authBtn.title = 'Nastavení účtu';
    if(authBtnMob){ authBtnMob.textContent='⚙️'; }
    if(sideAuthBtn){ sideAuthBtn.textContent = `⚙️ ${currentUser.name}`; }
    document.getElementById('loginBanner').classList.add('hidden');
  } else {
    authBtn.textContent = '👤';
    authBtn.title = 'Přihlásit se';
    if(authBtnMob){ authBtnMob.textContent='👤'; }
    if(sideAuthBtn){ sideAuthBtn.textContent = '👤 Přihlásit / Registrovat'; }
    document.getElementById('loginBanner').classList.remove('hidden');
  }
}

// ===== SIDE MENU =====
const sideMenu = document.getElementById('sideMenu');
const sideOverlay = document.getElementById('sideOverlay');
document.getElementById('desktopMenuToggle').addEventListener('click',()=>{ sideMenu.classList.add('open'); sideOverlay.classList.add('active'); document.body.style.overflow='hidden'; });
document.getElementById('sideClose').addEventListener('click', closeSideMenu);
sideOverlay.addEventListener('click', closeSideMenu);
function closeSideMenu(){ sideMenu.classList.remove('open'); sideOverlay.classList.remove('active'); document.body.style.overflow=''; }
document.querySelectorAll('.side-link').forEach(a=>a.addEventListener('click',closeSideMenu));
document.getElementById('sideAuthBtn').addEventListener('click',()=>{ closeSideMenu(); handleAuthClick(); });

// ===== MOBILE MENU =====
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
mobileMenuBtn.addEventListener('click',()=>{
  const open = mobileMenu.classList.toggle('open');
  mobileMenuBtn.textContent = open ? '✕' : '☰';
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ mobileMenu.classList.remove('open'); mobileMenuBtn.textContent='☰'; }));
document.getElementById('hoursToggleMob').addEventListener('click',()=>{ mobileMenu.classList.remove('open'); mobileMenuBtn.textContent='☰'; openHoursModal(); });

// ===== AUTH MODAL =====
function handleAuthClick(){
  if(currentUser){ openAccountModal(); }
  else { openAuthModal('login'); }
}
document.getElementById('authBtn').addEventListener('click', handleAuthClick);
document.getElementById('authBtnMob').addEventListener('click', handleAuthClick);
document.getElementById('heroAuthBtn').addEventListener('click', ()=>openAuthModal('login'));
document.getElementById('loginBannerBtn').addEventListener('click', ()=>openAuthModal('login'));

function openAuthModal(view='login'){
  document.getElementById('authOverlay').classList.add('active');
  document.getElementById('authModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  showAuthView(view);
  clearAuthErrors();
}
function closeAuthModal(){
  document.getElementById('authOverlay').classList.remove('active');
  document.getElementById('authModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('authClose').addEventListener('click', closeAuthModal);
document.getElementById('authOverlay').addEventListener('click', closeAuthModal);

function showAuthView(v){
  ['loginView','registerView','forgotView','resetView'].forEach(id=>{ document.getElementById(id).style.display='none'; });
  document.getElementById(v+'View').style.display='flex';
}
function clearAuthErrors(){
  ['loginError','registerError','forgotError','resetError'].forEach(id=>{ const el=document.getElementById(id); el.classList.remove('show'); el.textContent=''; });
}
function showError(id,msg){ const el=document.getElementById(id); el.textContent=msg; el.classList.add('show'); }

// Switch views
document.getElementById('goRegister').addEventListener('click',()=>showAuthView('register'));
document.getElementById('goLogin').addEventListener('click',()=>showAuthView('login'));
document.getElementById('goForgot').addEventListener('click',()=>showAuthView('forgot'));
document.getElementById('goLoginFromForgot').addEventListener('click',()=>showAuthView('login'));

// REGISTER
document.getElementById('registerBtn').addEventListener('click',()=>{
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  if(!name){ showError('registerError','Zadej jméno!'); return; }
  if(pass.length < 4){ showError('registerError','Heslo musí mít min. 4 znaky!'); return; }
  if(pass !== pass2){ showError('registerError','Hesla se neshodují!'); return; }
  if(users[name.toLowerCase()]){ showError('registerError','Toto jméno je již obsazeno!'); return; }
  users[name.toLowerCase()] = { name, email, pass, created: Date.now() };
  saveUsers();
  currentUser = { name, email };
  saveCurrentUser();
  closeAuthModal();
  updateNavbarUser();
  renderProducts(); renderTopFoods(); renderFavourites();
  showToast(`🎉 Vítej, ${name}! Účet byl vytvořen.`);
});

// LOGIN
document.getElementById('loginBtn').addEventListener('click',()=>{
  const name = document.getElementById('loginName').value.trim();
  const pass = document.getElementById('loginPass').value;
  const u = users[name.toLowerCase()];
  if(!u || u.pass !== pass){ showError('loginError','Špatné jméno nebo heslo!'); return; }
  currentUser = { name: u.name, email: u.email };
  saveCurrentUser();
  closeAuthModal();
  updateNavbarUser();
  renderProducts(); renderTopFoods(); renderFavourites();
  showToast(`👋 Vítej zpět, ${u.name}!`);
});

// FORGOT
document.getElementById('forgotBtn').addEventListener('click',()=>{
  const email = document.getElementById('forgotEmail').value.trim();
  if(!email){ showError('forgotError','Zadej email!'); return; }
  const user = Object.values(users).find(u=>u.email===email);
  if(!user){ showError('forgotError','Email nenalezen! Zkontroluj email nebo se registruj.'); return; }
  generatedCode = String(Math.floor(100000+Math.random()*900000));
  resetTarget = email;
  document.getElementById('resetEmailInfo').textContent = `Kód odeslán pro email: ${email}`;
  document.getElementById('emailCodeDisplay').style.display = 'block';
  document.getElementById('emailCodeValue').textContent = generatedCode;
  showAuthView('reset');
});

// RESET
document.getElementById('resetBtn').addEventListener('click',()=>{
  const code = document.getElementById('resetCode').value.trim();
  const newPass = document.getElementById('resetNewPass').value;
  if(code !== generatedCode){ showError('resetError','Špatný kód!'); return; }
  if(newPass.length < 4){ showError('resetError','Heslo musí mít min. 4 znaky!'); return; }
  const user = Object.values(users).find(u=>u.email===resetTarget);
  if(user){ user.pass = newPass; saveUsers(); }
  generatedCode = null; resetTarget = null;
  closeAuthModal();
  showToast('✅ Heslo bylo změněno! Přihlas se.');
  setTimeout(()=>openAuthModal('login'),1200);
});

// Enter key support
['loginName','loginPass'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('loginBtn').click(); }));
['regName','regEmail','regPass','regPass2'].forEach(id=>document.getElementById(id).addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('registerBtn').click(); }));

// ===== ACCOUNT MODAL =====
function openAccountModal(){
  if(!currentUser) return;
  document.getElementById('accountOverlay').classList.add('active');
  document.getElementById('accountModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('accountName').textContent = currentUser.name;
  document.getElementById('accountEmailDisplay').textContent = currentUser.email || 'Email nepřidán';
  document.getElementById('accountEmailInput').value = currentUser.email || '';
  document.getElementById('couponStatus').textContent = '';
}
function closeAccountModal(){
  document.getElementById('accountOverlay').classList.remove('active');
  document.getElementById('accountModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('accountClose').addEventListener('click', closeAccountModal);
document.getElementById('accountOverlay').addEventListener('click', closeAccountModal);

document.getElementById('accountSaveEmail').addEventListener('click',()=>{
  const email = document.getElementById('accountEmailInput').value.trim();
  if(!email){ showToast('❌ Zadej platný email!'); return; }
  currentUser.email = email;
  saveCurrentUser();
  const u = users[currentUser.name.toLowerCase()];
  if(u){ u.email = email; saveUsers(); }
  document.getElementById('accountEmailDisplay').textContent = email;
  showToast('✅ Email uložen!');
});

document.getElementById('accountSavePass').addEventListener('click',()=>{
  const oldPass = document.getElementById('accountOldPass').value;
  const newPass = document.getElementById('accountNewPass').value;
  const u = users[currentUser.name.toLowerCase()];
  if(!u || u.pass !== oldPass){ showToast('❌ Stávající heslo je špatné!'); return; }
  if(newPass.length < 4){ showToast('❌ Nové heslo musí mít min. 4 znaky!'); return; }
  u.pass = newPass; saveUsers();
  document.getElementById('accountOldPass').value=''; document.getElementById('accountNewPass').value='';
  showToast('✅ Heslo bylo změněno!');
});

document.getElementById('logoutBtn').addEventListener('click',()=>{
  currentUser = null; localStorage.removeItem('mkUser');
  cart = []; appliedCoupon = null; updateCartUI();
  closeAccountModal(); updateNavbarUser();
  renderProducts(); renderTopFoods();
  showToast('👋 Byl/a jsi odhlášen/a');
});

// ===== COUPONS =====
function applyCouponCode(code, statusEl){
  const c = COUPONS[code.toUpperCase()];
  if(!c){ if(statusEl){ statusEl.textContent='❌ Neplatný kód!'; statusEl.className='coupon-status err'; } showToast('❌ Neplatný slevový kód!'); return; }
  appliedCoupon = { code: code.toUpperCase(), ...c };
  updateCartUI();
  if(statusEl){ statusEl.textContent=`✅ ${c.label} aktivována!`; statusEl.className='coupon-status ok'; }
  showToast(`🏷️ Kód aktivován: ${c.label}!`);
  // Show in cart
  const ca = document.getElementById('couponActive');
  if(ca){ ca.style.display='flex'; ca.textContent=`🏷️ ${c.label} (${c.pct}% sleva) aktivována`; }
}

document.getElementById('couponApply').addEventListener('click',()=>{
  const v = document.getElementById('couponInput').value.trim();
  applyCouponCode(v, document.getElementById('couponStatus'));
});
document.getElementById('couponInput').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('couponApply').click(); });

document.getElementById('couponQuickApply').addEventListener('click',()=>{
  const v = document.getElementById('couponQuick').value.trim();
  applyCouponCode(v, null);
});
document.getElementById('couponQuick').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('couponQuickApply').click(); });

// ===== RENDER CARD =====
function createCard(product, showCategory=false){
  const isFav = favourites.includes(product.id);
  const badge = product.tags&&product.tags.length>0 ? product.tags[0] : null;
  const badgeHTML = badge ? `<span class="product-badge ${badge}">${badge==='bestseller'?'🔥 Bestseller':'✨ Novinka'}</span>` : '';
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;
  card.innerHTML = `
    <div class="product-emoji">
      ${badgeHTML}
      <span>${product.emoji}</span>
      <button class="fav-btn ${isFav?'active':''}" data-id="${product.id}">${isFav?'❤️':'🤍'}</button>
    </div>
    <div class="product-info">
      ${showCategory?`<div class="product-cat-tag">${getCategoryLabel(product.category)}</div>`:''}
      <div class="product-name">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-footer">
        <span class="product-price">${product.price} Kč</span>
        <button class="card-add-btn">+ Přidat</button>
      </div>
    </div>`;
  card.querySelector('.card-add-btn').addEventListener('click',e=>{ e.stopPropagation(); tryAddToCart(product.id); });
  card.querySelector('.fav-btn').addEventListener('click',e=>{ e.stopPropagation(); toggleFav(product.id); });
  card.addEventListener('click',()=>tryAddToCart(product.id));
  return card;
}

function tryAddToCart(id){
  if(!currentUser){ showToast('🔒 Přihlas se pro přidání do košíku!'); openAuthModal('login'); return; }
  addToCart(id);
}

// ===== RENDER PRODUCTS =====
function renderProducts(){
  ['jidla','dezerty','snacky','piti'].forEach(cat=>{
    const grid = document.getElementById(`grid-${cat}`);
    if(!grid) return;
    grid.innerHTML = '';
    products[cat].forEach(p=>grid.appendChild(createCard(p)));
  });
}

// ===== TOP FOODS =====
function renderTopFoods(){
  const grid = document.getElementById('topFoodsGrid');
  if(!grid) return;
  grid.innerHTML = '';
  TOP_IDS.map(id=>getProduct(id)).filter(Boolean).forEach((p,i)=>{
    const rankLabels=['🥇','🥈','🥉','4','5'];
    const rankClasses=['rank-1','rank-2','rank-3','rank-4','rank-4'];
    const card = document.createElement('div');
    card.className = 'top-card';
    card.innerHTML = `
      <div class="top-card-rank ${rankClasses[i]}">${rankLabels[i]}</div>
      <div class="top-card-emoji">${p.emoji}</div>
      <div class="top-card-info">
        <div class="top-card-name">${p.name}</div>
        <div class="top-card-desc">${p.desc}</div>
        <div class="top-card-footer">
          <div>
            <div class="top-card-price">${p.price} Kč</div>
            <div class="top-card-orders">📦 ${TOP_ORDERS[p.id].toLocaleString('cs')}x</div>
          </div>
          <button class="top-card-add">+ Přidat</button>
        </div>
      </div>`;
    card.querySelector('.top-card-add').addEventListener('click',e=>{ e.stopPropagation(); tryAddToCart(p.id); });
    card.addEventListener('click',()=>tryAddToCart(p.id));
    grid.appendChild(card);
  });
}

// ===== FAVOURITES =====
function toggleFav(id){
  const idx = favourites.indexOf(id);
  if(idx===-1){ favourites.push(id); showToast('❤️ Přidáno do oblíbených!'); }
  else { favourites.splice(idx,1); showToast('💔 Odebráno z oblíbených'); }
  localStorage.setItem('mkfavs', JSON.stringify(favourites));
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b=>{ b.className=`fav-btn ${favourites.includes(id)?'active':''}`; b.textContent=favourites.includes(id)?'❤️':'🤍'; });
  renderFavourites();
}
function renderFavourites(){
  const grid = document.getElementById('grid-oblibene');
  const empty = document.getElementById('oblibeneEmpty');
  if(!grid||!empty) return;
  grid.innerHTML = '';
  if(favourites.length===0){ empty.classList.add('show'); return; }
  empty.classList.remove('show');
  favourites.forEach(id=>{ const p=getProduct(id); if(p) grid.appendChild(createCard(p,true)); });
}

// ===== SEARCH & FILTER =====
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
searchInput.addEventListener('input',()=>{ searchQuery=searchInput.value.trim().toLowerCase(); searchClear.classList.toggle('visible',searchQuery.length>0); runSearchFilter(); });
searchClear.addEventListener('click',()=>{ searchInput.value=''; searchQuery=''; searchClear.classList.remove('visible'); runSearchFilter(); });
document.querySelectorAll('.filter-chip').forEach(chip=>{ chip.addEventListener('click',()=>{ document.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active')); chip.classList.add('active'); activeFilter=chip.dataset.filter; runSearchFilter(); }); });
function runSearchFilter(){
  let results = getAllProducts();
  if(activeFilter!=='vse'){
    if(['jidla','dezerty','snacky','piti'].includes(activeFilter)) results=results.filter(p=>p.category===activeFilter);
    else results=results.filter(p=>p.tags&&p.tags.includes(activeFilter));
  }
  if(searchQuery) results=results.filter(p=>p.name.toLowerCase().includes(searchQuery)||p.desc.toLowerCase().includes(searchQuery));
  const isFiltering = searchQuery||activeFilter!=='vse';
  const wrap = document.getElementById('searchResultsWrap');
  wrap.style.display = isFiltering?'block':'none';
  if(!isFiltering) return;
  document.getElementById('searchResultsHeader').textContent = results.length>0 ? `${results.length} výsledk${results.length===1?'':results.length<5?'y':'ů'}` : 'Nic nenalezeno 😔';
  const grid = document.getElementById('searchResultsGrid');
  grid.innerHTML = '';
  results.forEach(p=>grid.appendChild(createCard(p,true)));
}

// ===== CART =====
function addToCart(id){
  const p = getProduct(id);
  if(!p) return;
  const ex = cart.find(i=>i.id===id);
  if(ex) ex.qty+=1; else cart.push({...p,qty:1});
  updateCartUI();
  showToast(`${p.emoji} ${p.name} přidáno!`);
  animateCartBtn();
}
function removeFromCart(id){ cart=cart.filter(i=>i.id!==id); updateCartUI(); }
function changeQty(id,delta){ const item=cart.find(i=>i.id===id); if(!item)return; item.qty+=delta; if(item.qty<=0)cart=cart.filter(i=>i.id!==id); updateCartUI(); }

function updateCartUI(){
  const total = cart.reduce((s,i)=>s+i.qty,0);
  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const disc = appliedCoupon ? Math.round(sub*appliedCoupon.pct/100) : 0;
  const final = sub - disc;
  ['cartCount','cartCountMob'].forEach(id=>{ const el=document.getElementById(id); if(el)el.textContent=total; });
  const itemsEl = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if(cart.length===0){ itemsEl.innerHTML=`<div class="cart-empty"><span>📦</span><p>Košík je prázdný</p><small>${currentUser?'Přidej si něco!':'Přihlas se a objednávej!'}</small></div>`; footer.style.display='none'; return; }
  itemsEl.innerHTML = cart.map(i=>`
    <div class="cart-item">
      <div class="ci-emoji">${i.emoji}</div>
      <div class="ci-info"><div class="ci-name">${i.name}</div><div class="ci-price">${i.price*i.qty} Kč</div></div>
      <div class="ci-controls">
        <button class="ci-btn" onclick="changeQty(${i.id},-1)">−</button>
        <span class="ci-qty">${i.qty}</span>
        <button class="ci-btn" onclick="changeQty(${i.id},1)">+</button>
        <button class="ci-remove" onclick="removeFromCart(${i.id})">🗑️</button>
      </div>
    </div>`).join('');
  document.getElementById('cartSubtotal').textContent = `${sub} Kč`;
  const discRow = document.getElementById('cartDiscountRow');
  if(appliedCoupon&&disc>0){ discRow.style.display='flex'; document.getElementById('cartDiscountVal').textContent=`-${disc} Kč`; } else { discRow.style.display='none'; }
  document.getElementById('cartTotal').textContent = `${final} Kč`;
  footer.style.display = 'block';
}

// ===== CART PANEL =====
function openCart(){ document.getElementById('cartPanel').classList.add('open'); document.getElementById('cartOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeCart(){ document.getElementById('cartPanel').classList.remove('open'); document.getElementById('cartOverlay').classList.remove('active'); document.body.style.overflow=''; }
document.getElementById('cartToggle').addEventListener('click',()=>{ if(!currentUser){showToast('🔒 Přihlas se pro přístup ke košíku!');openAuthModal('login');return;} openCart(); });
document.getElementById('cartToggleMob').addEventListener('click',()=>{ if(!currentUser){showToast('🔒 Přihlas se!');openAuthModal('login');return;} openCart(); });
document.getElementById('cartClose').addEventListener('click',closeCart);
document.getElementById('cartOverlay').addEventListener('click',closeCart);
function animateCartBtn(){ const b=document.getElementById('cartToggle'); b.style.transform='scale(1.13)'; setTimeout(()=>b.style.transform='',200); }

// ===== CART SCREENSHOT =====
document.getElementById('btnScreenshot').addEventListener('click', async()=>{
  const btn = document.getElementById('btnScreenshot');
  btn.textContent='⏳ Generuji...'; btn.disabled=true;
  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const disc = appliedCoupon ? Math.round(sub*appliedCoupon.pct/100) : 0;
  const final = sub-disc;
  const userName = currentUser ? currentUser.name : 'Zákazník';
  const el = document.createElement('div');
  el.style.cssText='position:fixed;top:-9999px;left:-9999px;width:440px;background:white;padding:36px 30px;font-family:sans-serif;border-radius:20px;';
  el.innerHTML=`
    <div style="text-align:center;margin-bottom:20px;">
      <div style="font-size:2.4rem;margin-bottom:5px;">📦</div>
      <div style="font-size:1.4rem;font-weight:800;color:#1a2e5a;">Moje<span style="color:#c97c1a">Krabice</span>CZ</div>
      <div style="font-size:.74rem;color:#8a93a8;margin-top:3px;">Objednávka #${Math.floor(Math.random()*90000+10000)} · ${new Date().toLocaleString('cs-CZ')}</div>
      <div style="font-size:.82rem;color:#1a2e5a;font-weight:700;margin-top:5px;">👤 ${userName}</div>
    </div>
    <div style="border-top:2px dashed #e5e7eb;padding-top:14px;margin-bottom:14px;">
      ${cart.map(i=>`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px;"><div style="display:flex;align-items:center;gap:9px;"><span style="font-size:1.3rem;">${i.emoji}</span><div><div style="font-weight:600;font-size:.85rem;color:#1a2035;">${i.name}</div><div style="font-size:.72rem;color:#8a93a8;">${i.qty}x ${i.price} Kč</div></div></div><strong style="color:#c97c1a;">${i.price*i.qty} Kč</strong></div>`).join('')}
    </div>
    ${appliedCoupon&&disc>0?`<div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:.84rem;"><span style="color:#8a93a8;">Mezisoučet:</span><span>${sub} Kč</span></div><div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:.84rem;"><span style="color:#c97c1a;font-weight:600;">🏷️ Sleva ${appliedCoupon.pct}%:</span><span style="color:#c97c1a;font-weight:700;">-${disc} Kč</span></div>`:''}
    <div style="border-top:2px solid #1a2e5a;padding-top:11px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <span style="font-weight:600;color:#1a2e5a;">Celkem:</span>
      <strong style="font-size:1.4rem;color:#1a2e5a;">${final} Kč</strong>
    </div>
    <div style="text-align:center;padding:11px;background:#fff8ef;border-radius:10px;border:1px solid #f5a62330;">
      <div style="font-size:.78rem;color:#c97c1a;font-weight:600;">Děkujeme za objednávku, ${userName}! 🙏</div>
      <div style="font-size:.7rem;color:#8a93a8;margin-top:2px;">MojeKrabiceCZ · Doručíme brzy</div>
    </div>`;
  document.body.appendChild(el);
  try{
    const canvas = await html2canvas(el,{scale:2,backgroundColor:'#fff',useCORS:true});
    const a=document.createElement('a'); a.download=`MojeKrabiceCZ-uctenka-${Date.now()}.png`; a.href=canvas.toDataURL('image/png'); a.click();
    showToast('✅ Účtenka stažena!');
  }catch(e){showToast('❌ Chyba');}
  finally{document.body.removeChild(el); btn.textContent='📸 Stáhnout účtenku'; btn.disabled=false;}
});

// ===== TOAST =====
let toastT;
function showToast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2500); }

// ===== HOURS MODAL =====
function openHoursModal(){ document.getElementById('hoursModal').classList.add('open'); document.getElementById('hoursOverlay').classList.add('active'); document.body.style.overflow='hidden'; }
function closeHoursModal(){ document.getElementById('hoursModal').classList.remove('open'); document.getElementById('hoursOverlay').classList.remove('active'); document.body.style.overflow=''; }
document.getElementById('hoursToggle').addEventListener('click', openHoursModal);
document.getElementById('hoursClose').addEventListener('click', closeHoursModal);
document.getElementById('hoursOverlay').addEventListener('click', closeHoursModal);

const HOURS={0:null,1:{open:'8:00',close:'17:00'},2:{open:'7:00',close:'16:00'},3:{open:'9:00',close:'18:00'},4:{open:'8:00',close:'12:00'},5:{open:'6:00',close:'20:00'},6:{open:'10:00',close:'12:00'}};
function initHours(){
  const now=new Date(), day=now.getDay(), mins=now.getHours()*60+now.getMinutes();
  const names=['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'];
  const h=HOURS[day]; let isOpen=false;
  if(h){const[oh,om]=h.open.split(':').map(Number),[ch,cm]=h.close.split(':').map(Number);isOpen=mins>=oh*60+om&&mins<ch*60+cm;}
  ['hoursStatusDot','hoursStatusDotMob'].forEach(id=>{const el=document.getElementById(id);if(el)el.className='hours-dot '+(isOpen?'open-now':'closed-now');});
  let icon,statusHTML;
  if(!h){icon='🔒';statusHTML=`<div class="hmt-status is-closed">Dnes zavřeno</div>`;}
  else{
    const[oh,om]=h.open.split(':').map(Number),[ch,cm]=h.close.split(':').map(Number);
    const left=ch*60+cm-mins;
    if(mins<oh*60+om){icon='⏳';statusHTML=`<div class="hmt-status">Otevíráme v <strong>${h.open}</strong></div>`;}
    else if(isOpen){icon='✅';statusHTML=`<div class="hmt-status is-open">Otevřeno · Zavíráme ${h.close} (za ${Math.floor(left/60)}h ${left%60}min)</div>`;}
    else{icon='🔒';statusHTML=`<div class="hmt-status is-closed">Zavřeno · Dnes ${h.open}–${h.close}</div>`;}
  }
  const banner=`<div class="hmt-icon">${icon}</div><div><div class="hmt-label">Dnes · ${names[day]}</div>${statusHTML}</div>`;
  ['hoursModalToday','hoursToday'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=banner;});
  document.querySelectorAll('.hm-row,.hours-row').forEach(row=>{
    if(parseInt(row.dataset.day)===day){
      row.classList.add('today');
      if(isOpen){const b=row.querySelector('[class*="badge"]');if(b){b.textContent='Právě otevřeno';b.className=(b.className.includes('hm-badge')?'hm-badge':'hours-badge')+' open-now';}}
    }
  });
}

// ===== RATING =====
const MOODS={0:{emoji:'🤔',text:'Vyber hodnocení...',color:'#8a93a8'},0.5:{emoji:'😭',text:'Naprosto hrozné...',color:'#ef4444'},1:{emoji:'😢',text:'Velmi špatné, omlouváme se',color:'#f87171'},1.5:{emoji:'😟',text:'Špatné, musíme se zlepšit',color:'#fb923c'},2:{emoji:'😞',text:'Slabé, zklamalo nás to',color:'#f97316'},2.5:{emoji:'😐',text:'Tak napůl...',color:'#eab308'},3:{emoji:'🙂',text:'Ujde to, ale máme co zlepšovat',color:'#84cc16'},3.5:{emoji:'😊',text:'Docela dobré!',color:'#22c55e'},4:{emoji:'😄',text:'Skvělé! Jsme rádi!',color:'#10b981'},4.5:{emoji:'🤩',text:'Úžasné! Skoro dokonalé!',color:'#0ea5e9'},5:{emoji:'🥳',text:'PERFEKTNÍ! Absolutní spokojenost! 🎉',color:'#8b5cf6'}};
function renderStars(){
  const row=document.getElementById('starsRow'); if(!row)return; row.innerHTML='';
  for(let i=1;i<=5;i++){
    const w=document.createElement('div'); w.style.cssText='position:relative;width:44px;height:44px;cursor:pointer;';
    const l=document.createElement('div'); l.style.cssText='position:absolute;left:0;top:0;width:50%;height:100%;z-index:2;';
    l.addEventListener('mouseenter',()=>updateStarDisplay(i-0.5)); l.addEventListener('mouseleave',()=>updateStarDisplay(currentRating)); l.addEventListener('click',()=>setRating(i-0.5));
    const r=document.createElement('div'); r.style.cssText='position:absolute;right:0;top:0;width:50%;height:100%;z-index:2;';
    r.addEventListener('mouseenter',()=>updateStarDisplay(i)); r.addEventListener('mouseleave',()=>updateStarDisplay(currentRating)); r.addEventListener('click',()=>setRating(i));
    const s=document.createElement('span'); s.className='star-display'; s.dataset.index=i; s.textContent='★';
    w.appendChild(l); w.appendChild(r); w.appendChild(s); row.appendChild(w);
  }
  updateStarDisplay(0);
}
function setRating(val){
  currentRating=val; updateStarDisplay(val);
  const m=MOODS[val]||MOODS[0];
  const em=document.getElementById('moodEmoji'), tx=document.getElementById('moodText');
  em.style.transform='scale(0.6)'; em.style.opacity='0';
  setTimeout(()=>{em.textContent=m.emoji;em.style.transform='scale(1)';em.style.opacity='1';em.style.transition='all .3s cubic-bezier(.4,0,.2,1)';},150);
  tx.textContent=m.text; tx.style.color=m.color;
  document.getElementById('ratingValue').textContent=`${val} / 5`;
  document.getElementById('btnRatingScreenshot').disabled=false;
}
function updateStarDisplay(val){
  document.querySelectorAll('.star-display').forEach((s,i)=>{
    const n=i+1;
    if(val>=n){s.style.color='#f5a623';s.style.textShadow='0 2px 8px rgba(245,166,35,.5)';s.style.background='none';s.style.webkitBackgroundClip='unset';s.style.webkitTextFillColor='unset';}
    else if(val>=n-0.5){s.style.background='linear-gradient(90deg,#f5a623 50%,#d1d5db 50%)';s.style.webkitBackgroundClip='text';s.style.webkitTextFillColor='transparent';s.style.textShadow='none';}
    else{s.style.color='#d1d5db';s.style.textShadow='none';s.style.background='none';s.style.webkitBackgroundClip='unset';s.style.webkitTextFillColor='unset';}
  });
}

// Rating screenshot
document.getElementById('btnRatingScreenshot').addEventListener('click',async()=>{
  if(!currentRating)return;
  const btn=document.getElementById('btnRatingScreenshot'); btn.textContent='⏳...'; btn.disabled=true;
  const m=MOODS[currentRating]; const comment=document.getElementById('ratingComment').value.trim();
  const userName = currentUser ? currentUser.name : 'Zákazník';
  function starsH(r){let h='';for(let i=1;i<=5;i++){if(r>=i)h+=`<span style="color:#f5a623;font-size:1.9rem;">★</span>`;else if(r>=i-0.5)h+=`<span style="background:linear-gradient(90deg,#f5a623 50%,#d1d5db 50%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:1.9rem;">★</span>`;else h+=`<span style="color:#d1d5db;font-size:1.9rem;">★</span>`;}return h;}
  const el=document.createElement('div'); el.style.cssText='position:fixed;top:-9999px;left:-9999px;width:460px;background:white;padding:38px 34px;font-family:sans-serif;border-radius:22px;';
  el.innerHTML=`
    <div style="text-align:center;margin-bottom:20px;"><div style="font-size:1.4rem;">📦</div><div style="font-size:1.35rem;font-weight:800;color:#1a2e5a;">Moje<span style="color:#c97c1a">Krabice</span>CZ</div><div style="font-size:.72rem;color:#8a93a8;">Hodnocení · ${new Date().toLocaleDateString('cs-CZ')}</div><div style="font-size:.82rem;color:#1a2e5a;font-weight:700;margin-top:4px;">👤 ${userName}</div></div>
    <div style="text-align:center;padding:24px 18px;background:${m.color}18;border-radius:14px;margin-bottom:16px;border:2px solid ${m.color}30;">
      <div style="font-size:3.5rem;margin-bottom:8px;">${m.emoji}</div>
      <div style="font-size:1.05rem;font-weight:700;color:${m.color};margin-bottom:12px;">${m.text}</div>
      <div style="display:flex;justify-content:center;gap:3px;margin-bottom:5px;">${starsH(currentRating)}</div>
      <div style="font-weight:700;color:#1a2e5a;">${currentRating} / 5 hvězdiček</div>
    </div>
    ${comment?`<div style="background:#f8f9fc;border-radius:10px;padding:13px;margin-bottom:14px;border-left:4px solid ${m.color};"><div style="font-size:.72rem;color:#8a93a8;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Komentář</div><div style="font-size:.88rem;color:#1a2035;">"${comment}"</div></div>`:''}
    <div style="text-align:center;padding:10px;background:#fff8ef;border-radius:9px;border:1px solid #f5a62330;"><div style="font-size:.76rem;color:#c97c1a;font-weight:600;">Děkujeme za hodnocení, ${userName}! 🙏</div></div>`;
  document.body.appendChild(el);
  try{
    const canvas=await html2canvas(el,{scale:2,backgroundColor:'#fff',useCORS:true});
    const a=document.createElement('a'); a.download=`MojeKrabiceCZ-hodnoceni-${currentRating}hvezd.png`; a.href=canvas.toDataURL('image/png'); a.click();
    showToast(`${m.emoji} Hodnocení staženo!`);
  }catch(e){showToast('❌ Chyba');}
  finally{document.body.removeChild(el); btn.textContent='📸 Stáhnout hodnocení jako Screenshot'; btn.disabled=false;}
});

// ===== CHAT =====
const chatToggle=document.getElementById('chatToggle'), chatPanel=document.getElementById('chatPanel'), chatClose=document.getElementById('chatClose');
const chatInput=document.getElementById('chatInput'), chatSend=document.getElementById('chatSend'), chatMessages=document.getElementById('chatMessages');
const chatBadge=document.getElementById('chatBadge');
let chatOpen=false, chatUnread=0;
const RESPONSES=[
  {kw:['ahoj','hello','čau','zdravím','dobrý den'],r:'Ahoj! 👋 Vítej u MojeKrabiceCZ! Jak ti mohu pomoci?'},
  {kw:['doručení','doručit','kdy','jak dlouho'],r:'Doručení trvá obvykle 30–45 minut od objednávky. 🚀'},
  {kw:['cena','kolik','zaplatit','platba'],r:'Ceny jsou přímo u každého produktu. Platíš online nebo hotově. 💳'},
  {kw:['sleva','kód','akce','kupón'],r:'Platné slevové kódy: SLEVA10 (10%), SAVE20 (20%), KRABICE (15%), NOVAK (5%) 🏷️'},
  {kw:['alerg','lepek','vegán','vegetar'],r:'Máme vegetariánské i bezlepkové možnosti! Napiš konkrétní potravinu a poradíme. 🥗'},
  {kw:['otevřen','zavřen','hodiny','kdy'],r:'Po 8-17 | Út 7-16 | St 9-18 | Čt 8-12 | Pá 6-20 | So 10-12 | Ne zavřeno 🕐'},
  {kw:['reklamace','problém','špatné','nespokojený'],r:'Omlouváme se! Popište problém podrobněji a okamžitě to vyřešíme. 🙏'},
  {kw:['registrace','přihlášení','účet','heslo'],r:'Zaregistruj se kliknutím na ikonu 👤 v pravém horním rohu. Registrace je zdarma!'},
];
chatToggle.addEventListener('click',()=>{ chatOpen=!chatOpen; chatPanel.classList.toggle('open',chatOpen); if(chatOpen){chatUnread=0;chatBadge.style.display='none';setTimeout(()=>chatInput.focus(),200);} });
chatClose.addEventListener('click',()=>{ chatOpen=false; chatPanel.classList.remove('open'); });
function sendMsg(){ const txt=chatInput.value.trim(); if(!txt)return; appendMsg(txt,'user'); chatInput.value=''; setTimeout(()=>{ const lower=txt.toLowerCase(); const f=RESPONSES.find(r=>r.kw.some(k=>lower.includes(k))); appendMsg(f?f.r:'Díky za zprávu! Pracovník ti odpoví za cca 2 minuty. ⏳','bot'); if(!chatOpen){chatUnread++;chatBadge.textContent=chatUnread;chatBadge.style.display='flex';} },700+Math.random()*600); }
function appendMsg(txt,who){ const m=document.createElement('div'); m.className=`chat-msg ${who}`; const now=new Date(); const time=`${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`; m.innerHTML=`${who==='bot'?'<div class="chat-avatar">👷</div>':''}<div class="chat-bubble"><div class="chat-text">${txt}</div><div class="chat-time">${time}</div></div>`; chatMessages.appendChild(m); chatMessages.scrollTop=chatMessages.scrollHeight; }
chatSend.addEventListener('click',sendMsg);
chatInput.addEventListener('keydown',e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();} });

// ===== SCROLL NAV SHADOW =====
window.addEventListener('scroll',()=>{ document.getElementById('navbar').style.boxShadow=window.scrollY>40?'0 4px 28px rgba(26,46,90,.14)':'0 2px 14px rgba(26,46,90,.06)'; });

// ===== INIT =====
renderProducts();
renderTopFoods();
renderFavourites();
updateCartUI();
updateNavbarUser();
renderStars();
initHours();
setTimeout(()=>{ if(chatMessages.children.length===0) appendMsg('Ahoj! 👋 Jsem tu pro tebe. Mohu pomoci s objednávkou nebo slevovými kódy?','bot'); },600);
