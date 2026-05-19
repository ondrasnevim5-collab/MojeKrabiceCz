// ============================================================
// PRODUCTS
// ============================================================
const products = {
  jidla:[
    {id:1, emoji:'🍕',name:'Pizza Margherita',       desc:'Rajčatová omáčka, mozarella, bazalka',  price:149,tags:['bestseller']},
    {id:2, emoji:'🍔',name:'Klasický burger',         desc:'Hovězí patty, sýr, salátek, rajče',     price:129,tags:['bestseller']},
    {id:3, emoji:'🌮',name:'Tacos kuřecí',            desc:'2x tortilla, guacamole, pico de gallo', price:119,tags:[]},
    {id:4, emoji:'🍜',name:'Ramen polévka',           desc:'Vepřový vývar, nudle, vajíčko, nori',   price:139,tags:['novinka']},
    {id:5, emoji:'🥗',name:'Caesar salát',            desc:'Kuřecí, parmazán, krutonky, dresink',   price:109,tags:[]},
    {id:6, emoji:'🍝',name:'Pasta Bolognese',         desc:'Hovězí ragú, parmazán, čerstvá pasta',  price:135,tags:['bestseller']},
    {id:7, emoji:'🌯',name:'Wrap se lososem',         desc:'Grilovaný losos, avokádo, špenát',      price:145,tags:['novinka']},
    {id:8, emoji:'🍗',name:'Grilovaná kuřecí stehna', desc:'Marinovaná, bylinkový dresing',          price:125,tags:[]},
    {id:9, emoji:'🥙',name:'Kebab talíř',             desc:'Jehněčí maso, tzatziki, pita chléb',   price:155,tags:[]},
    {id:10,emoji:'🍣',name:'Sushi set 12 ks',         desc:'Maki, nigiri, temaki, wasabi',          price:189,tags:['bestseller']},
    {id:11,emoji:'🥘',name:'Svíčková na smetaně',    desc:'Tradiční česká, houskový knedlík',       price:165,tags:[]},
    {id:12,emoji:'🫔',name:'Quesadilla zelenina',    desc:'Paprika, cuketa, cheddar, salsa',        price:115,tags:['novinka']},
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
const TOP_IDS=[1,2,10,6,101];
const TOP_ORDERS={1:1240,2:980,10:870,6:760,101:650};
const COUPONS={'SLEVA10':{pct:10,label:'10% sleva'},'SAVE20':{pct:20,label:'20% sleva'},'KRABICE':{pct:15,label:'15% pro věrné'},'NOVAK':{pct:5,label:'5% uvítací sleva'}};

// ============================================================
// STATE
// ============================================================
let cart=[], favs=JSON.parse(localStorage.getItem('mkfavs')||'[]');
let currentRating=0, activeFilter='vse', searchQ='', appliedCoupon=null;
let currentUser=JSON.parse(localStorage.getItem('mkUser')||'null');
let users=JSON.parse(localStorage.getItem('mkUsers')||'{}');
let resetTarget=null, genCode=null;

function saveUsers(){localStorage.setItem('mkUsers',JSON.stringify(users));}
function saveCU(){localStorage.setItem('mkUser',JSON.stringify(currentUser));}

// ============================================================
// HELPERS
// ============================================================
function allProds(){return Object.entries(products).flatMap(([cat,items])=>items.map(p=>({...p,category:cat})));}
function getP(id){return allProds().find(p=>p.id===id);}
function catLabel(c){return {jidla:'Jídlo',dezerty:'Dezert',snacky:'Snack',piti:'Pití'}[c]||c;}

// ============================================================
// DARK MODE
// ============================================================
let isDark=localStorage.getItem('mkdark')==='1';
applyTheme();
function applyTheme(){
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  const ico=isDark?'☀️':'🌙';
  byId('darkToggle').textContent=ico;
  const sw=byId('darkToggleSide');
  if(sw) sw.classList.toggle('on',isDark);
}
byId('darkToggle').addEventListener('click',toggleDark);
byId('darkToggleSide').addEventListener('click',toggleDark);
function toggleDark(){isDark=!isDark;localStorage.setItem('mkdark',isDark?'1':'0');applyTheme();}

function byId(id){return document.getElementById(id);}

// ============================================================
// SIDE MENU (shared desktop + mobile)
// ============================================================
const sideMenu=byId('sideMenu'), sideOverlay=byId('sideOverlay');

function openSide(){sideMenu.classList.add('open');sideOverlay.classList.add('active');document.body.style.overflow='hidden';}
function closeSide(){sideMenu.classList.remove('open');sideOverlay.classList.remove('active');document.body.style.overflow='';}

byId('menuToggle').addEventListener('click',openSide);
byId('sideClose').addEventListener('click',closeSide);
sideOverlay.addEventListener('click',closeSide);
document.querySelectorAll('.side-link').forEach(a=>a.addEventListener('click',()=>{closeSide();}));
byId('sideAuthBtn').addEventListener('click',()=>{closeSide();handleAuthClick();});

// ============================================================
// NAVBAR UI
// ============================================================
function updateNavUI(){
  const loggedIn=!!currentUser;
  byId('authBtn').textContent=loggedIn?'⚙️':'👤';
  byId('authBtn').title=loggedIn?'Nastavení účtu':'Přihlásit se';
  byId('loginBanner').classList.toggle('hidden',loggedIn);
  byId('sideAuthBtn').textContent=loggedIn?`⚙️ ${currentUser.name}`:'👤 Přihlásit / Registrovat';

  const sideAv=byId('sideAvatar');
  const sideName=byId('sideUserName');
  const sideEmail=byId('sideUserEmail');
  if(loggedIn){
    sideName.textContent=currentUser.name;
    sideEmail.textContent=currentUser.email||'Email nepřidán';
    updateAvatarEl(sideAv, currentUser.avatar);
  } else {
    sideName.textContent='Nepřihlášen';
    sideEmail.textContent='Přihlas se pro objednávky';
    sideAv.innerHTML='👤';
  }
}

function updateAvatarEl(el, avatarData){
  if(!el) return;
  if(avatarData){
    el.innerHTML=`<img src="${avatarData}" alt="avatar"/>`;
  } else {
    el.innerHTML='👤';
  }
}

// ============================================================
// AUTH MODAL
// ============================================================
function handleAuthClick(){
  if(currentUser) openAccount();
  else openAuth('login');
}
byId('authBtn').addEventListener('click',handleAuthClick);
byId('heroAuthBtn').addEventListener('click',()=>openAuth('login'));
byId('loginBannerBtn').addEventListener('click',()=>openAuth('login'));

function openAuth(view='login'){
  byId('authOverlay').classList.add('active');
  byId('authModal').classList.add('open');
  document.body.style.overflow='hidden';
  showView(view);
  clearErrors();
}
function closeAuth(){
  byId('authOverlay').classList.remove('active');
  byId('authModal').classList.remove('open');
  document.body.style.overflow='';
}
byId('authClose').addEventListener('click',closeAuth);
byId('authOverlay').addEventListener('click',closeAuth);

function showView(v){
  ['login','register','forgot','reset'].forEach(n=>{
    const el=byId(n+'View'); if(el) el.style.display='none';
  });
  const el=byId(v+'View'); if(el) el.style.display='flex';
}
function clearErrors(){
  ['loginError','registerError','forgotError','resetError'].forEach(id=>{
    const el=byId(id); if(el){el.classList.remove('show');el.textContent='';}
  });
}
function showErr(id,msg){const el=byId(id);if(el){el.textContent=msg;el.classList.add('show');}}

byId('goRegister').addEventListener('click',()=>showView('register'));
byId('goLogin').addEventListener('click',()=>showView('login'));
byId('goForgot').addEventListener('click',()=>showView('forgot'));
byId('goLoginFromForgot').addEventListener('click',()=>showView('login'));

// Register
byId('registerBtn').addEventListener('click',doRegister);
function doRegister(){
  const name=byId('regName').value.trim();
  const email=byId('regEmail').value.trim();
  const pass=byId('regPass').value;
  const pass2=byId('regPass2').value;
  if(!name){showErr('registerError','Zadej jméno!');return;}
  if(pass.length<4){showErr('registerError','Heslo musí mít min. 4 znaky!');return;}
  if(pass!==pass2){showErr('registerError','Hesla se neshodují!');return;}
  if(users[name.toLowerCase()]){showErr('registerError','Toto jméno je obsazeno!');return;}
  users[name.toLowerCase()]={name,email,pass,created:Date.now(),avatar:null};
  saveUsers();
  currentUser={name,email,avatar:null};
  saveCU();
  closeAuth();
  updateNavUI();
  renderAll();
  toast(`🎉 Vítej, ${name}! Účet vytvořen.`);
}

// Login
byId('loginBtn').addEventListener('click',doLogin);
function doLogin(){
  const name=byId('loginName').value.trim();
  const pass=byId('loginPass').value;
  const u=users[name.toLowerCase()];
  if(!u||u.pass!==pass){showErr('loginError','Špatné jméno nebo heslo!');return;}
  currentUser={name:u.name,email:u.email,avatar:u.avatar||null};
  saveCU();
  closeAuth();
  updateNavUI();
  renderAll();
  toast(`👋 Vítej zpět, ${u.name}!`);
}

// Forgot
byId('forgotBtn').addEventListener('click',doForgot);
function doForgot(){
  const email=byId('forgotEmail').value.trim();
  if(!email){showErr('forgotError','Zadej email!');return;}
  const u=Object.values(users).find(u=>u.email===email);
  if(!u){showErr('forgotError','Email nenalezen!');return;}
  genCode=String(Math.floor(100000+Math.random()*900000));
  resetTarget=email;
  byId('resetEmailInfo').textContent=`Kód pro email: ${email}`;
  byId('emailCodeDisplay').style.display='block';
  byId('emailCodeValue').textContent=genCode;
  showView('reset');
}

// Reset
byId('resetBtn').addEventListener('click',doReset);
function doReset(){
  const code=byId('resetCode').value.trim();
  const np=byId('resetNewPass').value;
  if(code!==genCode){showErr('resetError','Špatný kód!');return;}
  if(np.length<4){showErr('resetError','Heslo musí mít min. 4 znaky!');return;}
  const u=Object.values(users).find(u=>u.email===resetTarget);
  if(u){u.pass=np;saveUsers();}
  genCode=null;resetTarget=null;
  closeAuth();
  toast('✅ Heslo změněno! Přihlas se.');
  setTimeout(()=>openAuth('login'),1000);
}

// Enter keys
[['loginName','loginBtn'],['loginPass','loginBtn'],['regPass2','registerBtn'],['resetCode','resetBtn'],['resetNewPass','resetBtn'],['forgotEmail','forgotBtn']].forEach(([inp,btn])=>{
  const el=byId(inp); if(el) el.addEventListener('keydown',e=>{if(e.key==='Enter') byId(btn).click();});
});

// ============================================================
// ACCOUNT MODAL
// ============================================================
function openAccount(){
  if(!currentUser) return;
  byId('accountOverlay').classList.add('active');
  byId('accountModal').classList.add('open');
  document.body.style.overflow='hidden';
  fillAccountModal();
}
function closeAccount(){
  byId('accountOverlay').classList.remove('active');
  byId('accountModal').classList.remove('open');
  document.body.style.overflow='';
}
byId('accountClose').addEventListener('click',closeAccount);
byId('accountOverlay').addEventListener('click',closeAccount);

function fillAccountModal(){
  byId('profileName').textContent=currentUser.name;
  byId('profileEmail').textContent=currentUser.email||'Email nepřidán';
  byId('accountEmailInput').value=currentUser.email||'';
  byId('accountNewName').value=currentUser.name||'';
  byId('couponStatus').textContent='';
  updateAvatarEl(byId('profileAvatar'),currentUser.avatar);
}

// Avatar upload
byId('avatarInput').addEventListener('change',function(){
  const file=this.files[0]; if(!file) return;
  if(!file.type.startsWith('image/')){toast('❌ Vyber obrázek!');return;}
  if(file.size>2*1024*1024){toast('❌ Obrázek je příliš velký (max 2MB)');return;}
  const reader=new FileReader();
  reader.onload=function(e){
    const data=e.target.result;
    currentUser.avatar=data; saveCU();
    const u=users[currentUser.name.toLowerCase()];
    if(u){u.avatar=data;saveUsers();}
    updateAvatarEl(byId('profileAvatar'),data);
    updateNavUI();
    toast('✅ Profilovka uložena!');
  };
  reader.readAsDataURL(file);
});

// Save name
byId('accountSaveName').addEventListener('click',()=>{
  const newName=byId('accountNewName').value.trim();
  if(!newName){toast('❌ Zadej jméno!');return;}
  if(newName.toLowerCase()!==currentUser.name.toLowerCase()&&users[newName.toLowerCase()]){toast('❌ Toto jméno je obsazeno!');return;}
  const oldKey=currentUser.name.toLowerCase();
  const u=users[oldKey];
  if(u){
    delete users[oldKey];
    u.name=newName;
    users[newName.toLowerCase()]=u;
    saveUsers();
  }
  currentUser.name=newName; saveCU();
  fillAccountModal(); updateNavUI();
  toast(`✅ Jméno změněno na "${newName}"!`);
});

// Save email
byId('accountSaveEmail').addEventListener('click',()=>{
  const email=byId('accountEmailInput').value.trim();
  if(!email){toast('❌ Zadej platný email!');return;}
  currentUser.email=email; saveCU();
  const u=users[currentUser.name.toLowerCase()];
  if(u){u.email=email;saveUsers();}
  byId('profileEmail').textContent=email;
  updateNavUI();
  toast('✅ Email uložen!');
});

// Save password
byId('accountSavePass').addEventListener('click',()=>{
  const op=byId('accountOldPass').value;
  const np=byId('accountNewPass').value;
  const u=users[currentUser.name.toLowerCase()];
  if(!u||u.pass!==op){toast('❌ Stávající heslo je špatné!');return;}
  if(np.length<4){toast('❌ Heslo musí mít min. 4 znaky!');return;}
  u.pass=np;saveUsers();
  byId('accountOldPass').value='';byId('accountNewPass').value='';
  toast('✅ Heslo změněno!');
});

// Logout
byId('logoutBtn').addEventListener('click',()=>{
  currentUser=null;localStorage.removeItem('mkUser');
  cart=[];appliedCoupon=null;updateCartUI();
  closeAccount();updateNavUI();renderAll();
  toast('👋 Byl/a jsi odhlášen/a');
});

// ============================================================
// COUPONS
// ============================================================
function applyCode(code,statusEl){
  const c=COUPONS[code.toUpperCase()];
  if(!c){if(statusEl){statusEl.textContent='❌ Neplatný kód!';statusEl.className='coupon-status err';}toast('❌ Neplatný slevový kód!');return;}
  appliedCoupon={code:code.toUpperCase(),...c};
  updateCartUI();
  if(statusEl){statusEl.textContent=`✅ ${c.label} aktivována!`;statusEl.className='coupon-status ok';}
  toast(`🏷️ ${c.label} aktivována!`);
  const bar=byId('couponActiveBar');
  if(bar){bar.style.display='block';bar.textContent=`🏷️ ${c.label} aktivována`;}
}
byId('couponApply').addEventListener('click',()=>applyCode(byId('couponInput').value.trim(),byId('couponStatus')));
byId('couponInput').addEventListener('keydown',e=>{if(e.key==='Enter')byId('couponApply').click();});
byId('couponQuickApply').addEventListener('click',()=>applyCode(byId('couponQuick').value.trim(),null));
byId('couponQuick').addEventListener('keydown',e=>{if(e.key==='Enter')byId('couponQuickApply').click();});

// ============================================================
// RENDER CARD
// ============================================================
function makeCard(p,showCat=false){
  const isFav=favs.includes(p.id);
  const badge=p.tags&&p.tags.length?p.tags[0]:null;
  const badgeHTML=badge?`<span class="p-badge ${badge}">${badge==='bestseller'?'🔥 Bestseller':'✨ Novinka'}</span>`:'';
  const card=document.createElement('div');
  card.className='p-card'; card.dataset.id=p.id;
  card.innerHTML=`
    <div class="p-emoji">
      ${badgeHTML}
      <span>${p.emoji}</span>
      <button class="fav-btn ${isFav?'active':''}" data-id="${p.id}">${isFav?'❤️':'🤍'}</button>
    </div>
    <div class="p-body">
      ${showCat?`<div class="p-cat">${catLabel(p.category)}</div>`:''}
      <div class="p-name">${p.name}</div>
      <div class="p-desc">${p.desc}</div>
      <div class="p-foot">
        <span class="p-price">${p.price} Kč</span>
        <button class="add-btn">+ Přidat</button>
      </div>
    </div>`;

  // Touch-friendly: use touchend for add button
  const addBtn=card.querySelector('.add-btn');
  addBtn.addEventListener('click',e=>{e.stopPropagation();tryAdd(p.id);});
  addBtn.addEventListener('touchend',e=>{e.preventDefault();e.stopPropagation();tryAdd(p.id);});

  const favBtn=card.querySelector('.fav-btn');
  favBtn.addEventListener('click',e=>{e.stopPropagation();toggleFav(p.id);});
  favBtn.addEventListener('touchend',e=>{e.preventDefault();e.stopPropagation();toggleFav(p.id);});

  // Card tap = add (only when not tapping fav/add btn)
  card.addEventListener('click',e=>{
    if(e.target.closest('.fav-btn')||e.target.closest('.add-btn')) return;
    tryAdd(p.id);
  });
  return card;
}

function tryAdd(id){
  if(!currentUser){toast('🔒 Přihlas se pro přidání do košíku!');openAuth('login');return;}
  addToCart(id);
}

// ============================================================
// RENDER ALL
// ============================================================
function renderAll(){renderProducts();renderTopFoods();renderFavs();}

function renderProducts(){
  ['jidla','dezerty','snacky','piti'].forEach(cat=>{
    const g=byId(`grid-${cat}`); if(!g) return;
    g.innerHTML='';
    products[cat].forEach(p=>g.appendChild(makeCard(p)));
  });
}

function renderTopFoods(){
  const g=byId('topGrid'); if(!g) return; g.innerHTML='';
  TOP_IDS.map(id=>getP(id)).filter(Boolean).forEach((p,i)=>{
    const rl=['r1','r2','r3','r4','r4'];
    const rl2=['🥇','🥈','🥉','4','5'];
    const c=document.createElement('div'); c.className='top-card';
    c.innerHTML=`
      <div class="top-rank ${rl[i]}">${rl2[i]}</div>
      <div class="top-emoji">${p.emoji}</div>
      <div class="top-info">
        <div class="top-name">${p.name}</div>
        <div class="top-desc">${p.desc}</div>
        <div class="top-foot">
          <div><div class="top-price">${p.price} Kč</div><div class="top-orders">📦 ${TOP_ORDERS[p.id].toLocaleString('cs')}x</div></div>
          <button class="top-add">+ Přidat</button>
        </div>
      </div>`;
    const btn=c.querySelector('.top-add');
    btn.addEventListener('click',e=>{e.stopPropagation();tryAdd(p.id);});
    btn.addEventListener('touchend',e=>{e.preventDefault();e.stopPropagation();tryAdd(p.id);});
    c.addEventListener('click',e=>{if(e.target.closest('.top-add'))return;tryAdd(p.id);});
    g.appendChild(c);
  });
}

function renderFavs(){
  const g=byId('grid-oblibene'), emp=byId('oblibeneEmpty');
  if(!g||!emp) return;
  g.innerHTML='';
  if(favs.length===0){emp.classList.add('show');return;}
  emp.classList.remove('show');
  favs.forEach(id=>{const p=getP(id);if(p)g.appendChild(makeCard(p,true));});
}

function toggleFav(id){
  const i=favs.indexOf(id);
  if(i===-1){favs.push(id);toast('❤️ Přidáno do oblíbených!');}
  else{favs.splice(i,1);toast('💔 Odebráno z oblíbených');}
  localStorage.setItem('mkfavs',JSON.stringify(favs));
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(b=>{
    b.className=`fav-btn ${favs.includes(id)?'active':''}`;
    b.textContent=favs.includes(id)?'❤️':'🤍';
  });
  renderFavs();
}

// ============================================================
// SEARCH & FILTER
// ============================================================
const siEl=byId('searchInput'), scEl=byId('searchClear');
siEl.addEventListener('input',()=>{
  searchQ=siEl.value.trim().toLowerCase();
  scEl.classList.toggle('visible',searchQ.length>0);
  doSearch();
});
scEl.addEventListener('click',()=>{siEl.value='';searchQ='';scEl.classList.remove('visible');doSearch();});
document.querySelectorAll('.chip').forEach(c=>{
  c.addEventListener('click',()=>{
    document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active'));
    c.classList.add('active'); activeFilter=c.dataset.filter; doSearch();
  });
});
function doSearch(){
  let res=allProds();
  if(activeFilter!=='vse'){
    if(['jidla','dezerty','snacky','piti'].includes(activeFilter)) res=res.filter(p=>p.category===activeFilter);
    else res=res.filter(p=>p.tags&&p.tags.includes(activeFilter));
  }
  if(searchQ) res=res.filter(p=>p.name.toLowerCase().includes(searchQ)||p.desc.toLowerCase().includes(searchQ));
  const isF=searchQ||activeFilter!=='vse';
  const wrap=byId('searchResults'); wrap.style.display=isF?'block':'none';
  if(!isF) return;
  byId('searchResultsLabel').textContent=res.length>0?`${res.length} výsledk${res.length===1?'':res.length<5?'y':'ů'}`:'Nic nenalezeno 😔';
  const g=byId('searchResultsGrid'); g.innerHTML='';
  res.forEach(p=>g.appendChild(makeCard(p,true)));
}

// ============================================================
// CART
// ============================================================
function addToCart(id){
  const p=getP(id); if(!p) return;
  const ex=cart.find(i=>i.id===id);
  if(ex) ex.qty+=1; else cart.push({...p,qty:1});
  updateCartUI(); toast(`${p.emoji} ${p.name} přidáno!`); animCart();
}
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);updateCartUI();}
function changeQty(id,d){const it=cart.find(i=>i.id===id);if(!it)return;it.qty+=d;if(it.qty<=0)cart=cart.filter(i=>i.id!==id);updateCartUI();}

function updateCartUI(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const disc=appliedCoupon?Math.round(sub*appliedCoupon.pct/100):0;
  const final=sub-disc;
  ['cartCount'].forEach(id=>{const el=byId(id);if(el)el.textContent=total;});
  const body=byId('cartItems'), foot=byId('cartFoot');
  if(cart.length===0){
    body.innerHTML=`<div class="empty-state show"><span>📦</span><p>Košík je prázdný</p><small>${currentUser?'Přidej si něco!':'Přihlas se a objednávej!'}</small></div>`;
    foot.style.display='none'; return;
  }
  body.innerHTML=cart.map(i=>`
    <div class="cart-item">
      <div class="ci-em">${i.emoji}</div>
      <div class="ci-info"><div class="ci-name">${i.name}</div><div class="ci-price">${i.price*i.qty} Kč</div></div>
      <div class="ci-ctrl">
        <button class="ci-btn" onclick="changeQty(${i.id},-1)">−</button>
        <span class="ci-qty">${i.qty}</span>
        <button class="ci-btn" onclick="changeQty(${i.id},1)">+</button>
        <button class="ci-del" onclick="removeFromCart(${i.id})">🗑️</button>
      </div>
    </div>`).join('');
  byId('cartSub').textContent=`${sub} Kč`;
  const dr=byId('discountRow');
  if(appliedCoupon&&disc>0){dr.style.display='flex';byId('discountVal').textContent=`-${disc} Kč`;}else{dr.style.display='none';}
  byId('cartTotal').textContent=`${final} Kč`;
  foot.style.display='block';
}

function openCart(){byId('cartPanel').classList.add('open');byId('cartOverlay').classList.add('active');document.body.style.overflow='hidden';}
function closeCart(){byId('cartPanel').classList.remove('open');byId('cartOverlay').classList.remove('active');document.body.style.overflow='';}
byId('cartToggle').addEventListener('click',()=>{if(!currentUser){toast('🔒 Přihlas se!');openAuth('login');return;}openCart();});
byId('cartClose').addEventListener('click',closeCart);
byId('cartOverlay').addEventListener('click',closeCart);
function animCart(){const b=byId('cartToggle');b.style.transform='scale(1.12)';setTimeout(()=>b.style.transform='',180);}

// ============================================================
// CART SCREENSHOT
// ============================================================
byId('btnScreenshot').addEventListener('click',async()=>{
  const btn=byId('btnScreenshot'); btn.textContent='⏳ Generuji…'; btn.disabled=true;
  const sub=cart.reduce((s,i)=>s+i.price*i.qty,0);
  const disc=appliedCoupon?Math.round(sub*appliedCoupon.pct/100):0;
  const final=sub-disc;
  const name=currentUser?currentUser.name:'Zákazník';
  const avatarHTML=currentUser&&currentUser.avatar?`<img src="${currentUser.avatar}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #c97c1a;margin-bottom:4px;display:block;margin-left:auto;margin-right:auto;"/>`:'<div style="font-size:2.5rem;margin-bottom:4px;text-align:center;">👤</div>';
  const el=document.createElement('div');
  el.style.cssText='position:fixed;top:-9999px;left:-9999px;width:440px;background:white;padding:34px 28px;font-family:sans-serif;border-radius:18px;';
  el.innerHTML=`
    <div style="text-align:center;margin-bottom:18px;">
      <div style="font-size:2rem;margin-bottom:4px;">📦</div>
      <div style="font-size:1.35rem;font-weight:800;color:#1a2e5a;">Moje<span style="color:#c97c1a">Krabice</span>CZ</div>
      <div style="font-size:.7rem;color:#8a93a8;margin-top:3px;">Objednávka #${Math.floor(Math.random()*90000+10000)} · ${new Date().toLocaleString('cs-CZ')}</div>
      <div style="margin-top:8px;">${avatarHTML}</div>
      <div style="font-size:.84rem;font-weight:700;color:#1a2e5a;">👤 ${name}</div>
    </div>
    <div style="border-top:2px dashed #e5e7eb;padding-top:12px;margin-bottom:12px;">
      ${cart.map(i=>`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;"><div style="display:flex;align-items:center;gap:8px;"><span style="font-size:1.2rem;">${i.emoji}</span><div><div style="font-weight:600;font-size:.82rem;color:#1a2035;">${i.name}</div><div style="font-size:.68rem;color:#8a93a8;">${i.qty}× ${i.price} Kč</div></div></div><strong style="color:#c97c1a;">${i.price*i.qty} Kč</strong></div>`).join('')}
    </div>
    ${appliedCoupon&&disc>0?`<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:5px;"><span style="color:#8a93a8;">Mezisoučet:</span><span>${sub} Kč</span></div><div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:5px;"><span style="color:#c97c1a;font-weight:600;">🏷️ Sleva ${appliedCoupon.pct}%:</span><span style="color:#c97c1a;font-weight:700;">-${disc} Kč</span></div>`:''}
    <div style="border-top:2px solid #1a2e5a;padding-top:10px;display:flex;justify-content:space-between;align-items:center;margin-bottom:13px;">
      <span style="font-weight:600;color:#1a2e5a;">Celkem:</span>
      <strong style="font-size:1.35rem;color:#1a2e5a;">${final} Kč</strong>
    </div>
    <div style="text-align:center;padding:10px;background:#fff8ef;border-radius:9px;border:1px solid #f5a62330;">
      <div style="font-size:.76rem;color:#c97c1a;font-weight:600;">Děkujeme, ${name}! 🙏</div>
      <div style="font-size:.66rem;color:#8a93a8;margin-top:1px;">MojeKrabiceCZ · Doručíme brzy</div>
    </div>`;
  document.body.appendChild(el);
  try{
    const cv=await html2canvas(el,{scale:2,backgroundColor:'#fff',useCORS:true});
    const a=document.createElement('a'); a.download=`MojeKrabiceCZ-uctenka-${Date.now()}.png`; a.href=cv.toDataURL('image/png'); a.click();
    toast('✅ Účtenka stažena!');
  }catch(e){toast('❌ Chyba');}
  finally{document.body.removeChild(el);btn.textContent='📸 Stáhnout účtenku';btn.disabled=false;}
});

// ============================================================
// TOAST
// ============================================================
let toastT;
function toast(msg){const t=byId('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),2500);}

// ============================================================
// HOURS
// ============================================================
const HOURS={0:null,1:{o:'8:00',c:'17:00'},2:{o:'7:00',c:'16:00'},3:{o:'9:00',c:'18:00'},4:{o:'8:00',c:'12:00'},5:{o:'6:00',c:'20:00'},6:{o:'10:00',c:'12:00'}};
byId('hoursToggle').addEventListener('click',openHours);
byId('hoursClose').addEventListener('click',closeHours);
byId('hoursOverlay').addEventListener('click',closeHours);
function openHours(){byId('hoursModal').classList.add('open');byId('hoursOverlay').classList.add('active');document.body.style.overflow='hidden';}
function closeHours(){byId('hoursModal').classList.remove('open');byId('hoursOverlay').classList.remove('active');document.body.style.overflow='';}

function initHours(){
  const now=new Date(),day=now.getDay(),mins=now.getHours()*60+now.getMinutes();
  const names=['Neděle','Pondělí','Úterý','Středa','Čtvrtek','Pátek','Sobota'];
  const h=HOURS[day]; let isOpen=false;
  if(h){const[oh,om]=h.o.split(':').map(Number),[ch,cm]=h.c.split(':').map(Number);isOpen=mins>=oh*60+om&&mins<ch*60+cm;}
  const dot=byId('hoursStatusDot');if(dot)dot.className='hours-dot '+(isOpen?'open-now':'closed-now');
  let ico,st;
  if(!h){ico='🔒';st=`<div class="htb-status is-closed">Dnes zavřeno</div>`;}
  else{
    const[oh,om]=h.o.split(':').map(Number),[ch,cm]=h.c.split(':').map(Number),left=ch*60+cm-mins;
    if(mins<oh*60+om){ico='⏳';st=`<div class="htb-status">Otevíráme v <strong>${h.o}</strong></div>`;}
    else if(isOpen){ico='✅';st=`<div class="htb-status is-open">Otevřeno · Zavíráme ${h.c} (za ${Math.floor(left/60)}h ${left%60}min)</div>`;}
    else{ico='🔒';st=`<div class="htb-status is-closed">Zavřeno · Dnes ${h.o}–${h.c}</div>`;}
  }
  const banner=`<div class="htb-icon">${ico}</div><div><div class="htb-label">Dnes · ${names[day]}</div>${st}</div>`;
  ['hoursModalToday','hoursToday'].forEach(id=>{const el=byId(id);if(el)el.innerHTML=banner;});
  document.querySelectorAll('.hours-row').forEach(row=>{
    if(parseInt(row.dataset.day)===day){
      row.classList.add('today');
      if(isOpen){const b=row.querySelector('.hours-badge');if(b){b.textContent='Právě otevřeno';b.className='hours-badge open-now';}}
    }
  });
}

// ============================================================
// RATING
// ============================================================
const MOODS={
  0:{e:'🤔',t:'Vyber hodnocení…',c:'#8a93a8'},
  0.5:{e:'😭',t:'Naprosto hrozné…',c:'#ef4444'},
  1:{e:'😢',t:'Velmi špatné',c:'#f87171'},
  1.5:{e:'😟',t:'Špatné, musíme se zlepšit',c:'#fb923c'},
  2:{e:'😞',t:'Slabé, zklamalo nás',c:'#f97316'},
  2.5:{e:'😐',t:'Tak napůl…',c:'#eab308'},
  3:{e:'🙂',t:'Ujde to, ale zlepšujeme se',c:'#84cc16'},
  3.5:{e:'😊',t:'Docela dobré!',c:'#22c55e'},
  4:{e:'😄',t:'Skvělé! Jsme rádi!',c:'#10b981'},
  4.5:{e:'🤩',t:'Úžasné! Skoro dokonalé!',c:'#0ea5e9'},
  5:{e:'🥳',t:'PERFEKTNÍ! Absolutní spokojenost! 🎉',c:'#8b5cf6'},
};

function buildStars(){
  const row=byId('starsRow'); if(!row) return; row.innerHTML='';
  for(let i=1;i<=5;i++){
    const w=document.createElement('div'); w.style.cssText='position:relative;width:44px;height:44px;cursor:pointer;flex-shrink:0;';
    const l=document.createElement('div'); l.style.cssText='position:absolute;left:0;top:0;width:50%;height:100%;z-index:2;';
    const r=document.createElement('div'); r.style.cssText='position:absolute;right:0;top:0;width:50%;height:100%;z-index:2;';
    // Mouse events
    l.addEventListener('mouseenter',()=>showStars(i-0.5)); l.addEventListener('mouseleave',()=>showStars(currentRating)); l.addEventListener('click',()=>setRating(i-0.5));
    r.addEventListener('mouseenter',()=>showStars(i)); r.addEventListener('mouseleave',()=>showStars(currentRating)); r.addEventListener('click',()=>setRating(i));
    // Touch events for mobile
    l.addEventListener('touchend',e=>{e.preventDefault();setRating(i-0.5);});
    r.addEventListener('touchend',e=>{e.preventDefault();setRating(i);});
    const s=document.createElement('span'); s.className='star-d'; s.dataset.i=i; s.textContent='★';
    w.appendChild(l); w.appendChild(r); w.appendChild(s); row.appendChild(w);
  }
  showStars(0);
}

function setRating(val){
  currentRating=val; showStars(val);
  const m=MOODS[val]||MOODS[0];
  const em=byId('moodEmoji'),tx=byId('moodText');
  em.style.transform='scale(0.6)'; em.style.opacity='0';
  setTimeout(()=>{em.textContent=m.e;em.style.transform='scale(1)';em.style.opacity='1';em.style.transition='all .28s';},130);
  tx.textContent=m.t; tx.style.color=m.c;
  byId('ratingValue').textContent=`${val} / 5`;
  byId('btnRatingScreenshot').disabled=false;
}
function showStars(val){
  document.querySelectorAll('.star-d').forEach((s,i)=>{
    const n=i+1;
    if(val>=n){s.style.color='#f5a623';s.style.textShadow='0 2px 7px rgba(245,166,35,.5)';s.style.background='none';s.style.webkitBackgroundClip='unset';s.style.webkitTextFillColor='unset';}
    else if(val>=n-0.5){s.style.background='linear-gradient(90deg,#f5a623 50%,#d1d5db 50%)';s.style.webkitBackgroundClip='text';s.style.webkitTextFillColor='transparent';s.style.textShadow='none';}
    else{s.style.color='#d1d5db';s.style.textShadow='none';s.style.background='none';s.style.webkitBackgroundClip='unset';s.style.webkitTextFillColor='unset';}
  });
}

byId('btnRatingScreenshot').addEventListener('click',async()=>{
  if(!currentRating) return;
  const btn=byId('btnRatingScreenshot'); btn.textContent='⏳…'; btn.disabled=true;
  const m=MOODS[currentRating]; const comment=byId('ratingComment').value.trim();
  const name=currentUser?currentUser.name:'Zákazník';
  const avatarHTML=currentUser&&currentUser.avatar?`<img src="${currentUser.avatar}" style="width:50px;height:50px;border-radius:50%;object-fit:cover;border:2px solid #c97c1a;display:block;margin:0 auto 5px;"/>`:'<div style="font-size:2rem;text-align:center;margin-bottom:5px;">👤</div>';
  function stH(r){let h='';for(let i=1;i<=5;i++){if(r>=i)h+=`<span style="color:#f5a623;font-size:1.8rem;">★</span>`;else if(r>=i-0.5)h+=`<span style="background:linear-gradient(90deg,#f5a623 50%,#d1d5db 50%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:1.8rem;">★</span>`;else h+=`<span style="color:#d1d5db;font-size:1.8rem;">★</span>`;}return h;}
  const el=document.createElement('div'); el.style.cssText='position:fixed;top:-9999px;left:-9999px;width:450px;background:white;padding:36px 30px;font-family:sans-serif;border-radius:20px;';
  el.innerHTML=`
    <div style="text-align:center;margin-bottom:18px;"><div style="font-size:1.3rem;">📦</div><div style="font-size:1.3rem;font-weight:800;color:#1a2e5a;">Moje<span style="color:#c97c1a">Krabice</span>CZ</div><div style="font-size:.68rem;color:#8a93a8;">Hodnocení · ${new Date().toLocaleDateString('cs-CZ')}</div><div style="margin-top:8px;">${avatarHTML}</div><div style="font-size:.8rem;font-weight:700;color:#1a2e5a;">👤 ${name}</div></div>
    <div style="text-align:center;padding:22px 16px;background:${m.c}18;border-radius:13px;margin-bottom:14px;border:2px solid ${m.c}30;">
      <div style="font-size:3.2rem;margin-bottom:7px;">${m.e}</div>
      <div style="font-size:1rem;font-weight:700;color:${m.c};margin-bottom:11px;">${m.t}</div>
      <div style="display:flex;justify-content:center;gap:3px;margin-bottom:5px;">${stH(currentRating)}</div>
      <div style="font-weight:700;color:#1a2e5a;">${currentRating} / 5 hvězdiček</div>
    </div>
    ${comment?`<div style="background:#f8f9fc;border-radius:9px;padding:11px;margin-bottom:12px;border-left:4px solid ${m.c};"><div style="font-size:.68rem;color:#8a93a8;font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Komentář</div><div style="font-size:.84rem;color:#1a2035;">"${comment}"</div></div>`:''}
    <div style="text-align:center;padding:9px;background:#fff8ef;border-radius:9px;"><div style="font-size:.74rem;color:#c97c1a;font-weight:600;">Děkujeme za hodnocení, ${name}! 🙏</div></div>`;
  document.body.appendChild(el);
  try{
    const cv=await html2canvas(el,{scale:2,backgroundColor:'#fff',useCORS:true});
    const a=document.createElement('a'); a.download=`MojeKrabiceCZ-hodnoceni-${currentRating}hvezd.png`; a.href=cv.toDataURL('image/png'); a.click();
    toast(`${m.e} Hodnocení staženo!`);
  }catch(e){toast('❌ Chyba');}
  finally{document.body.removeChild(el);btn.textContent='📸 Stáhnout hodnocení';btn.disabled=false;}
});

// ============================================================
// CHAT
// ============================================================
const chatFab=byId('chatToggle'),chatPanelEl=byId('chatPanel'),chatCloseBtn=byId('chatClose');
const chatInputEl=byId('chatInput'),chatSendBtn=byId('chatSend'),chatMsgs=byId('chatMessages');
const chatBadge=byId('chatBadge');
let chatOpen=false,chatUnread=0;
const RESPONSES=[
  {kw:['ahoj','hello','čau','zdravím','dobrý den'],r:'Ahoj! 👋 Vítej u MojeKrabiceCZ! Jak ti mohu pomoci?'},
  {kw:['doručení','doručit','kdy','jak dlouho'],r:'Doručení trvá obvykle 30–45 minut od objednávky. 🚀'},
  {kw:['cena','kolik','zaplatit','platba'],r:'Ceny najdeš přímo u každého produktu. Platba online nebo hotově. 💳'},
  {kw:['sleva','kód','akce','kupón'],r:'Platné kódy: SLEVA10 (10%), SAVE20 (20%), KRABICE (15%), NOVAK (5%) 🏷️'},
  {kw:['alerg','lepek','vegán','vegetar'],r:'Máme vegetariánské i bezlepkové možnosti! Napiš konkrétní potravinu. 🥗'},
  {kw:['otevřen','zavřen','hodiny'],r:'Po 8-17 | Út 7-16 | St 9-18 | Čt 8-12 | Pá 6-20 | So 10-12 | Ne zavřeno 🕐'},
  {kw:['reklamace','problém','špatné','nespokojený'],r:'Omlouváme se! Popište problém a okamžitě to vyřešíme. 🙏'},
  {kw:['registrace','přihlášení','účet','heslo'],r:'Klikni na ikonu 👤 v pravém horním rohu. Registrace je zdarma!'},
  {kw:['profilovka','avatar','fotka','foto'],r:'V nastavení účtu (⚙️) si můžeš nahrát profilovku kliknutím na 📷!'},
];
chatFab.addEventListener('click',()=>{chatOpen=!chatOpen;chatPanelEl.classList.toggle('open',chatOpen);if(chatOpen){chatUnread=0;chatBadge.style.display='none';setTimeout(()=>chatInputEl.focus(),200);}});
chatCloseBtn.addEventListener('click',()=>{chatOpen=false;chatPanelEl.classList.remove('open');});
function sendMsg(){
  const txt=chatInputEl.value.trim(); if(!txt) return;
  appendMsg(txt,'user'); chatInputEl.value='';
  setTimeout(()=>{
    const lower=txt.toLowerCase();
    const f=RESPONSES.find(r=>r.kw.some(k=>lower.includes(k)));
    appendMsg(f?f.r:'Díky za zprávu! Pracovník ti odpoví za cca 2 minuty. ⏳','bot');
    if(!chatOpen){chatUnread++;chatBadge.textContent=chatUnread;chatBadge.style.display='flex';}
  },600+Math.random()*500);
}
function appendMsg(txt,who){
  const m=document.createElement('div'); m.className=`chat-msg ${who}`;
  const now=new Date(); const t=`${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
  m.innerHTML=`${who==='bot'?'<div class="chat-msg-av">👷</div>':''}<div class="chat-bubble"><div class="chat-txt">${txt}</div><div class="chat-time">${t}</div></div>`;
  chatMsgs.appendChild(m); chatMsgs.scrollTop=chatMsgs.scrollHeight;
}
chatSendBtn.addEventListener('click',sendMsg);
chatInputEl.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}});

// ============================================================
// SCROLL SHADOW
// ============================================================
window.addEventListener('scroll',()=>{
  byId('navbar').style.boxShadow=window.scrollY>40?'0 4px 24px rgba(26,46,90,.13)':'0 2px 12px rgba(26,46,90,.05)';
});

// ============================================================
// INIT
// ============================================================
renderAll();
updateCartUI();
updateNavUI();
buildStars();
initHours();
setTimeout(()=>{if(chatMsgs.children.length===0)appendMsg('Ahoj! 👋 Mohu pomoct s objednávkou nebo slevovými kódy?','bot');},700);
