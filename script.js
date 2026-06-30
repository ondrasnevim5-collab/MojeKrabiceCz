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
addTap(byId('darkToggle'), toggleDark);
addTap(byId('darkToggleSide'), toggleDark);
function toggleDark(){isDark=!isDark;localStorage.setItem('mkdark',isDark?'1':'0');applyTheme();}

function byId(id){return document.getElementById(id);}

// Hide/show floating chat widget so it never blocks panel buttons
function setChatWidgetHidden(hidden){
  const w = document.querySelector('.chat-widget');
  if(w) w.classList.toggle('hidden-by-panel', hidden);
}


// ============================================================
// TAP HELPER — prevents double firing of touchend + click on mobile
// ============================================================
function addTap(el, fn) {
  if (!el) return;
  let lock = false;
  el.addEventListener('touchstart', function(){ /* enable :active styles on iOS */ }, {passive:true});
  el.addEventListener('touchend', function(e){
    e.preventDefault();
    if (lock) return;
    lock = true;
    fn(e);
    setTimeout(()=>{ lock = false; }, 500);
  }, {passive:false});
  el.addEventListener('click', function(e){
    if (lock) return;
    fn(e);
  });
}


// ============================================================
// SIDE MENU (shared desktop + mobile)
// ============================================================
const sideMenu=byId('sideMenu'), sideOverlay=byId('sideOverlay');

function openSide(){sideMenu.classList.add('open');sideOverlay.classList.add('active');document.body.style.overflow='hidden';}
function closeSide(){sideMenu.classList.remove('open');sideOverlay.classList.remove('active');document.body.style.overflow='';}

addTap(byId('menuToggle'), openSide);
addTap(byId('sideClose'), closeSide);
addTap(sideOverlay, closeSide);
document.querySelectorAll('.side-link').forEach(a=>addTap(a, closeSide));
addTap(byId('sideAuthBtn'), ()=>{closeSide();handleAuthClick();});

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
addTap(byId('authBtn'), handleAuthClick);
addTap(byId('heroAuthBtn'), ()=>openAuth('login'));
addTap(byId('loginBannerBtn'), ()=>openAuth('login'));

function openAuth(view='login'){
  byId('authOverlay').classList.add('active');
  byId('authModal').classList.add('open');
  document.body.style.overflow='hidden';
  showView(view);
  clearErrors();
  setChatWidgetHidden(true);
}
function closeAuth(){
  byId('authOverlay').classList.remove('active');
  byId('authModal').classList.remove('open');
  document.body.style.overflow='';
  setChatWidgetHidden(false);
}
addTap(byId('authClose'), closeAuth);
addTap(byId('authOverlay'), closeAuth);

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

addTap(byId('goRegister'), ()=>showView('register'));
addTap(byId('goLogin'), ()=>showView('login'));
addTap(byId('goForgot'), ()=>showView('forgot'));
addTap(byId('goLoginFromForgot'), ()=>showView('login'));

// Register
addTap(byId('registerBtn'), doRegister);
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
addTap(byId('loginBtn'), doLogin);
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
addTap(byId('forgotBtn'), doForgot);
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
addTap(byId('resetBtn'), doReset);
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
  updatePermToggles();
  renderQRCode();
  setChatWidgetHidden(true);
}
function closeAccount(){
  byId('accountOverlay').classList.remove('active');
  byId('accountModal').classList.remove('open');
  document.body.style.overflow='';
  setChatWidgetHidden(false);
}
addTap(byId('accountClose'), closeAccount);
addTap(byId('accountOverlay'), closeAccount);

function fillAccountModal(){
  byId('profileName').textContent=currentUser.name;
  byId('profileEmail').textContent=currentUser.email||'Email nepřidán';
  byId('accountEmailInput').value=currentUser.email||'';
  byId('accountNewName').value=currentUser.name||'';
  byId('couponStatus').textContent='';
  updateAvatarEl(byId('profileAvatar'),currentUser.avatar);
}

// ============================================================
// PERMISSIONS: Microphone & Notifications
// ============================================================
function updatePermToggles(){
  // Mic permission state
  const micToggle = byId('micPermToggle');
  const micGranted = localStorage.getItem('mkMicPerm')==='1';
  micToggle.classList.toggle('on', micGranted);
  byId('micPermDesc').textContent = micGranted ? 'Povoleno — AI hovor funguje' : 'Pro AI hovor se zaměstnancem';

  // Notification permission state
  const notifToggle = byId('notifPermToggle');
  const notifState = ('Notification' in window) ? Notification.permission : 'unsupported';
  notifToggle.classList.toggle('on', notifState==='granted');
  if(notifState==='granted') byId('notifPermDesc').textContent='Povoleno — dostaneš upozornění';
  else if(notifState==='denied') byId('notifPermDesc').textContent='Zablokováno v prohlížeči';
  else byId('notifPermDesc').textContent='Pojď si objednat jídlo z Chrome';

  // Show/hide frequency picker based on granted state
  byId('notifFreqWrap').style.display = notifState==='granted' ? 'block' : 'none';

  // Highlight saved frequency choice
  const savedFreq = localStorage.getItem('mkNotifFreq') || 'never';
  document.querySelectorAll('.freq-chip').forEach(c=>{
    c.classList.toggle('active', c.dataset.freq === savedFreq);
  });
}

addTap(byId('micPermToggle'), async ()=>{
  const isOn = byId('micPermToggle').classList.contains('on');
  if(isOn){
    localStorage.setItem('mkMicPerm','0');
    updatePermToggles();
    toast('🎙️ Mikrofon vypnut pro appku. Pro úplné zablokování uprav nastavení prohlížeče.');
    return;
  }
  try{
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    stream.getTracks().forEach(t=>t.stop());
    localStorage.setItem('mkMicPerm','1');
    toast('✅ Mikrofon povolen! AI hovor teď funguje.');
  }catch(e){
    toast('❌ Mikrofon byl zamítnut. Povol ho v nastavení prohlížeče.');
  }
  updatePermToggles();
});

addTap(byId('notifPermToggle'), async ()=>{
  if(!('Notification' in window)){ toast('❌ Notifikace nejsou v tomto prohlížeči podporovány'); return; }
  const isOn = byId('notifPermToggle').classList.contains('on');
  if(isOn){
    toast('🔔 Pro úplné vypnutí notifikací uprav nastavení prohlížeče (zámek 🔒 vedle adresy)');
    return;
  }
  const perm = await Notification.requestPermission();
  if(perm==='granted'){
    toast('✅ Notifikace povoleny! Vyber si dole jak často.');
    try{ new Notification('MojeKrabiceCZ 📦', { body:'Pojď si objednat jídlo! 🍕🍔🍰' }); }catch(e){}
    scheduleNotifications();
  } else if(perm==='denied'){
    toast('❌ Notifikace byly zamítnuty');
  }
  updatePermToggles();
});

// Frequency chip selection
document.querySelectorAll('.freq-chip').forEach(chip=>{
  addTap(chip, ()=>{
    document.querySelectorAll('.freq-chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    localStorage.setItem('mkNotifFreq', chip.dataset.freq);
    const labelMap={'60000':'každou 1 minutu','3600000':'každou 1 hodinu','43200000':'každých 12 hodin','86400000':'každých 24 hodin','never':'nikdy'};
    toast(`🔔 Nastaveno: ${labelMap[chip.dataset.freq]}`);
    scheduleNotifications();
  });
});

// ============================================================
// NOTIFICATION SCHEDULER (works while tab is open)
// ============================================================
let notifSchedulerInterval = null;
function scheduleNotifications(){
  clearInterval(notifSchedulerInterval);
  if(!('Notification' in window) || Notification.permission!=='granted') return;
  const freq = localStorage.getItem('mkNotifFreq') || 'never';
  if(freq==='never') return;
  const ms = parseInt(freq);
  if(!ms || isNaN(ms)) return;

  const MESSAGES = [
    'Pojď si objednat jídlo! 🍕 Čekáme na tebe.',
    'Hlad? MojeKrabiceCZ má skvělé nabídky! 🍔',
    'Nezapomeň — máme nové dezerty! 🍰',
    'Tvoje oblíbená pizza čeká na objednávku 🍕',
    'Sleva SLEVA10 stále platí! 🏷️ Objednej teď.',
  ];

  notifSchedulerInterval = setInterval(()=>{
    if(Notification.permission!=='granted') return;
    const msg = MESSAGES[Math.floor(Math.random()*MESSAGES.length)];
    try{ new Notification('MojeKrabiceCZ 📦', { body: msg }); }catch(e){}
  }, ms);
}
// Auto-start scheduler on page load if permission already granted
if('Notification' in window && Notification.permission==='granted'){
  scheduleNotifications();
}

// ============================================================
// QR CODE
// ============================================================
const SITE_URL = 'https://ondrasnevim5-collab.github.io/MojeKrabiceCz/';

function renderQRCode(){
  const canvas = byId('qrCanvas');
  if(!canvas || typeof QRious==='undefined') return;
  new QRious({
    element: canvas,
    value: SITE_URL,
    size: 200,
    background: '#ffffff',
    foreground: '#1a2e5a',
    level: 'H'
  });
}

addTap(byId('qrDownloadBtn'), ()=>{
  const canvas = byId('qrCanvas');
  if(!canvas) return;
  const a = document.createElement('a');
  a.download = 'MojeKrabiceCZ-QR.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
  toast('✅ QR kód stažen!');
});
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
addTap(byId('accountSaveName'), ()=>{
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
addTap(byId('accountSaveEmail'), ()=>{
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
addTap(byId('accountSavePass'), ()=>{
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
addTap(byId('logoutBtn'), ()=>{
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
addTap(byId('couponApply'), ()=>applyCode(byId('couponInput').value.trim(),byId('couponStatus')));
byId('couponInput').addEventListener('keydown',e=>{if(e.key==='Enter')byId('couponApply').click();});
addTap(byId('couponQuickApply'), ()=>applyCode(byId('couponQuick').value.trim(),null));
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

function openCart(){byId('cartPanel').classList.add('open');byId('cartOverlay').classList.add('active');document.body.style.overflow='hidden';setChatWidgetHidden(true);}
function closeCart(){byId('cartPanel').classList.remove('open');byId('cartOverlay').classList.remove('active');document.body.style.overflow='';setChatWidgetHidden(false);}
addTap(byId('cartToggle'), ()=>{if(!currentUser){toast('🔒 Přihlas se!');openAuth('login');return;}openCart();});
addTap(byId('cartClose'), closeCart);
addTap(byId('cartOverlay'), closeCart);
function animCart(){const b=byId('cartToggle');b.style.transform='scale(1.12)';setTimeout(()=>b.style.transform='',180);}

// ============================================================
// CART SCREENSHOT
// ============================================================
addTap(byId('btnScreenshot'), async()=>{
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
  // Wait for avatar image to fully load before capturing (fixes blank/broken photo in receipt)
  const imgInEl = el.querySelector('img');
  if(imgInEl && !imgInEl.complete){
    await new Promise(resolve=>{
      imgInEl.onload=resolve;
      imgInEl.onerror=resolve;
      setTimeout(resolve, 1500); // safety timeout
    });
  }
  try{
    const cv=await html2canvas(el,{scale:2,backgroundColor:'#fff',useCORS:true,allowTaint:true});
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
addTap(byId('hoursToggle'), openHours);
addTap(byId('hoursClose'), closeHours);
addTap(byId('hoursOverlay'), closeHours);
function openHours(){byId('hoursModal').classList.add('open');byId('hoursOverlay').classList.add('active');document.body.style.overflow='hidden';setChatWidgetHidden(true);}
function closeHours(){byId('hoursModal').classList.remove('open');byId('hoursOverlay').classList.remove('active');document.body.style.overflow='';setChatWidgetHidden(false);}

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

addTap(byId('btnRatingScreenshot'), async()=>{
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
// CHAT — smart with product detection & AI delay
// ============================================================
const chatFab=byId('chatToggle'),chatPanelEl=byId('chatPanel'),chatCloseBtn=byId('chatClose');
const chatInputEl=byId('chatInput'),chatSendBtn=byId('chatSend'),chatMsgs=byId('chatMessages');
const chatBadge=byId('chatBadge');
let chatOpen=false,chatUnread=0;

const PRODUCT_KW=[
  {kw:['pizza','margherita'],id:1},{kw:['burger','hamburger'],id:2},
  {kw:['tacos','taco'],id:3},{kw:['ramen'],id:4},
  {kw:['caesar','salát'],id:5},{kw:['pasta','bolognese'],id:6},
  {kw:['wrap','losos'],id:7},{kw:['kuřecí','stehna'],id:8},
  {kw:['kebab'],id:9},{kw:['sushi'],id:10},
  {kw:['svíčková'],id:11},{kw:['quesadilla'],id:12},
  {kw:['cheesecake'],id:101},{kw:['fondant','čokoládový dort'],id:102},
  {kw:['muffin'],id:103},{kw:['crème','brulee','brulée'],id:104},
  {kw:['donut'],id:105},{kw:['waffle','vafle'],id:106},
  {kw:['zmrzlina','pohár'],id:107},{kw:['croissant'],id:108},
  {kw:["lay's",'lays','chipsy brambor'],id:201},{kw:['pringles'],id:202},
  {kw:['doritos'],id:203},{kw:['cheetos','flamin'],id:204},
  {kw:['preclík'],id:205},{kw:['popcorn'],id:206},
  {kw:['nachos'],id:207},{kw:['nuts','oříšky'],id:208},
  {kw:['oreo'],id:209},{kw:['haribo','medvídky'],id:210},
  {kw:['snickers'],id:211},{kw:['coca','cola'],id:301},
  {kw:['džus','pomeranč juice'],id:302},{kw:['mattoni','voda mineral'],id:303},
  {kw:['ledový čaj','ice tea'],id:304},{kw:['red bull','energy drink'],id:305},
  {kw:['milkshake','shake'],id:306},{kw:['limonáda'],id:307},
  {kw:['cold brew','ledová káva'],id:308},
];

const CHAT_RESPONSES=[
  {kw:['ahoj','hello','čau','zdravím','dobrý den'],r:'Ahoj! 👋 Vítej u MojeKrabiceCZ! Jak ti mohu pomoci?'},
  {kw:['doručení','doručit','jak dlouho'],r:'Doručení trvá obvykle 30–45 minut. 🚀'},
  {kw:['cena','kolik','zaplatit','platba'],r:'Ceny najdeš u každého produktu. Platba online nebo hotově. 💳'},
  {kw:['sleva','kód','kupón'],r:'Kódy: SLEVA10 (10%), SAVE20 (20%), KRABICE (15%), NOVAK (5%) 🏷️'},
  {kw:['alerg','lepek','vegán'],r:'Máme vegetariánské i bezlepkové možnosti! 🥗'},
  {kw:['otevřen','zavřen','hodiny'],r:'Po 8-17 | Út 7-16 | St 9-18 | Čt 8-12 | Pá 6-20 | So 10-12 | Ne zavřeno 🕐'},
  {kw:['reklamace','problém','špatné'],r:'Omlouváme se! Popište problém a okamžitě to vyřešíme. 🙏'},
  {kw:['registrace','přihlášení','účet'],r:'Klikni na 👤 v navbaru. Registrace je zdarma!'},
  {kw:['profilovka','avatar','fotka'],r:'V ⚙️ nastavení si nahraješ profilovku kliknutím na 📷!'},
  {kw:['hovor','zavolat','volat'],r:'Klikni na zelené 📞 tlačítko vpravo dole — spustí se AI hovor! 🎙️'},
];

addTap(chatFab, ()=>{
  chatOpen=!chatOpen;
  chatPanelEl.classList.toggle('open',chatOpen);
  if(chatOpen){chatUnread=0;chatBadge.style.display='none';setTimeout(()=>chatInputEl.focus(),200);}
});
addTap(chatCloseBtn, ()=>{chatOpen=false;chatPanelEl.classList.remove('open');});
addTap(byId('callLaunchBtn'), openCallPanel);

function detectProduct(text){
  const lower=text.toLowerCase();
  for(const e of PRODUCT_KW){ if(e.kw.some(k=>lower.includes(k))) return getP(e.id); }
  return null;
}

let typingEl=null;
function showTyping(){
  if(typingEl) return;
  typingEl=document.createElement('div'); typingEl.className='chat-msg bot'; typingEl.id='typingInd';
  typingEl.innerHTML='<div class="chat-msg-av">👷</div><div class="chat-bubble"><div class="chat-txt" style="display:flex;gap:4px;align-items:center;padding:8px 12px"><span style="width:7px;height:7px;background:var(--muted);border-radius:50%;animation:tdot .8s 0s infinite alternate"></span><span style="width:7px;height:7px;background:var(--muted);border-radius:50%;animation:tdot .8s .2s infinite alternate"></span><span style="width:7px;height:7px;background:var(--muted);border-radius:50%;animation:tdot .8s .4s infinite alternate"></span></div></div>';
  if(!document.querySelector('#tdotStyle')){const s=document.createElement('style');s.id='tdotStyle';s.textContent='@keyframes tdot{from{opacity:.3;transform:translateY(0)}to{opacity:1;transform:translateY(-4px)}}';document.head.appendChild(s);}
  chatMsgs.appendChild(typingEl); chatMsgs.scrollTop=chatMsgs.scrollHeight;
}
function hideTyping(){if(typingEl){typingEl.remove();typingEl=null;}}

function sendMsg(){
  const txt=chatInputEl.value.trim(); if(!txt) return;
  appendMsg(txt,'user'); chatInputEl.value='';
  const lower=txt.toLowerCase();
  const wantsAdd=lower.includes('přidej')||lower.includes('přidat')||lower.includes('chci')||lower.includes('dej')||lower.includes('objednat');
  const prod=detectProduct(lower);

  if(prod&&wantsAdd&&currentUser){
    addToCart(prod.id);
    setTimeout(()=>appendMsg(`✅ ${prod.emoji} <strong>${prod.name}</strong> přidáno do košíku! (${prod.price} Kč) 🛒`,'bot'),400);
    return;
  }
  if(prod&&wantsAdd&&!currentUser){
    setTimeout(()=>appendMsg(`🔒 Nejdřív se přihlas (👤 nahoře). Pak ti ${prod.emoji} <strong>${prod.name}</strong> přidám hned!`,'bot'),400);
    return;
  }
  if(prod&&!wantsAdd){
    setTimeout(()=>appendMsg(`${prod.emoji} <strong>${prod.name}</strong> je za ${prod.price} Kč. Chceš ho přidat? Napiš "přidej ${prod.name}" 😊`,'bot'),400);
    return;
  }

  const f=CHAT_RESPONSES.find(r=>r.kw.some(k=>lower.includes(k)));
  if(f){ setTimeout(()=>appendMsg(f.r,'bot'),400+Math.random()*300); return; }

  // Unknown → typing indicator then delayed AI response
  showTyping();
  const delay=7000+Math.random()*6000;
  setTimeout(()=>{
    hideTyping();
    const replies=['Díky za zprávu! Zaměstnanec ti odpoví co nejdříve. ⏳ Nebo zavolej na 📞 AI!','Tvůj dotaz byl předán. Chvíli strpení! Nebo zkus AI hovor 📞','Zaznamenáno! Zaměstnanec se ozve brzy. Mezitím zkus naše 📞 AI volání!'];
    appendMsg(replies[Math.floor(Math.random()*replies.length)],'bot');
    if(!chatOpen){chatUnread++;chatBadge.textContent=chatUnread;chatBadge.style.display='flex';}
  },delay);
}

function appendMsg(html,who){
  const m=document.createElement('div'); m.className=`chat-msg ${who}`;
  const now=new Date(); const t=`${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;
  m.innerHTML=`${who==='bot'?'<div class="chat-msg-av">👷</div>':''}<div class="chat-bubble"><div class="chat-txt">${html}</div><div class="chat-time">${t}</div></div>`;
  chatMsgs.appendChild(m); chatMsgs.scrollTop=chatMsgs.scrollHeight;
}
addTap(chatSendBtn, sendMsg);
chatInputEl.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}});

// ============================================================
// AI VOICE CALL
// ============================================================
const callPanelEl=byId('callPanel');
let callActive=false,callMuted=false,callTimerInt=null,callSeconds=0;
let recognition=null,synth=window.speechSynthesis,isRecording=false;

const AI_VOICE=[
  {kw:['ahoj','dobrý den','zdravím'],r:'Ahoj! Vítej u MojeKrabiceCZ. Co si dáš dnes?'},
  {kw:['pizza'],r:'Výborná volba! Pizza Margherita za 149 korun. Přidám ji do košíku?'},
  {kw:['burger','hamburger'],r:'Klasický burger za 129 korun. Přidám ho?'},
  {kw:['sushi'],r:'Sushi set dvanáct kusů za 189 korun. Velmi oblíbené! Přidat?'},
  {kw:['dezert','dort','sladké'],r:'Máme cheesecake za 79, fondant za 89, nebo waffle za 85 korun. Co dáš?'},
  {kw:['přidat','chci','dej','objednat','ano','jo','ok'],r:'Skvěle! Přidávám do košíku. Potřebuješ ještě něco?'},
  {kw:['sleva','kód'],r:'Kódy: SLEVA10 deset procent, SAVE20 dvacet procent, KRABICE patnáct procent.'},
  {kw:['doručení','kdy'],r:'Doručení trvá třicet až čtyřicet pět minut.'},
  {kw:['nashledanou','čau','díky','konec','stačí'],r:'Děkujeme za hovor! Dobrou chuť. Nashledanou!'},
  {kw:['košík'],r:'Košík najdeš v pravém horním rohu. Chceš přidat konkrétní jídlo?'},
  {kw:['ne','nechci'],r:'Rozumím! Pokud budeš potřebovat, zavolej znovu. 😊'},
];

addTap(byId('callFab'), openCallPanel);
addTap(byId('callClose'), endCall);
addTap(byId('callEndBtn'), endCall);

function openCallPanel(){
  callPanelEl.classList.add('open');
  callActive=true; callSeconds=0;
  byId('callTimer').textContent='0:00';
  byId('callStatusTxt').textContent='Připojuji hovor…';
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  const hint = SR ? 'Stiskni 🎙️ a mluv!' : 'Tento prohlížeč nepodporuje rozpoznávání řeči — AI bude simulovat odpovědi, ale hlasem ti odpoví normálně.';
  byId('callTranscript').innerHTML=`<p class="call-hint">${hint}</p>`;
  byId('callWave').classList.remove('active');
  byId('callMicBtn').classList.remove('recording');
  byId('callMicBtn').textContent='🎙️';
  setTimeout(()=>{
    byId('callStatusTxt').textContent='Hovor aktivní ✅';
    startCallTimer();
    speakAI('Dobrý den, vítejte u MojeKrabiceCZ! Jsem váš AI asistent. Mohu vám pomoci s objednávkou? Stiskněte mikrofon a mluvte.');
  },1000);
}
function endCall(){
  callPanelEl.classList.remove('open'); callActive=false;
  clearInterval(callTimerInt); stopRecognition();
  if(synth) synth.cancel();
  byId('callWave').classList.remove('active');
  isRecording=false;
}
function startCallTimer(){
  clearInterval(callTimerInt);
  callTimerInt=setInterval(()=>{
    callSeconds++;
    const m=Math.floor(callSeconds/60),s=callSeconds%60;
    byId('callTimer').textContent=`${m}:${String(s).padStart(2,'0')}`;
  },1000);
}

addTap(byId('callMicBtn'), toggleMic);

function toggleMic(){ if(!callActive)return; isRecording?stopRecognition():startRecognition(); }

function startRecognition(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  isRecording=true;
  byId('callMicBtn').classList.add('recording'); byId('callMicBtn').textContent='🔴';
  byId('callStatusTxt').textContent='Poslouchám…'; byId('callWave').classList.add('active');
  if(!SR){
    addCallLine('Ty: [Hovoříš... simuluji odpověď]','user-said');
    setTimeout(()=>{ stopRecognitionUI(); simulateVoiceReply(); },2500);
    return;
  }
  recognition=new SR(); recognition.lang='cs-CZ'; recognition.interimResults=false;
  recognition.onresult=e=>{
    const said=e.results[0][0].transcript;
    addCallLine(`Ty: ${said}`,'user-said');
    processVoice(said);
  };
  recognition.onerror=e=>{ stopRecognitionUI(); if(e.error!=='aborted') simulateVoiceReply(); };
  recognition.onend=()=>stopRecognitionUI();
  try{recognition.start();}catch(e){stopRecognitionUI();}
}
function stopRecognition(){ isRecording=false; stopRecognitionUI(); if(recognition){try{recognition.stop();}catch(e){} recognition=null;} }
function stopRecognitionUI(){
  isRecording=false;
  byId('callMicBtn').classList.remove('recording'); byId('callMicBtn').textContent='🎙️';
  byId('callStatusTxt').textContent='Hovor aktivní ✅'; byId('callWave').classList.remove('active');
}

function processVoice(text){
  const lower=text.toLowerCase();
  const wantsAdd=lower.includes('přidej')||lower.includes('chci')||lower.includes('přidat')||lower.includes('dej')||lower.includes('ano')||lower.includes('jo');
  const prod=detectProduct(lower);
  if(prod&&wantsAdd&&currentUser){
    addToCart(prod.id);
    const reply=`Skvělé! Přidal jsem ${prod.name} do košíku za ${prod.price} korun. Potřebuješ ještě něco?`;
    speakAI(reply); addCallLine(`AI: ${reply}`,'ai-said');
    toast(`${prod.emoji} ${prod.name} přidáno hlasem!`); return;
  }
  if(prod&&wantsAdd&&!currentUser){
    const r='Pro přidání do košíku se musíš nejdřív přihlásit. Klikni na ikonu uživatele.';
    speakAI(r); addCallLine(`AI: ${r}`,'ai-said'); return;
  }
  const f=AI_VOICE.find(r=>r.kw.some(k=>lower.includes(k)));
  const reply=f?f.r:'Bohužel jsem nerozuměl. Zkus říct název jídla nebo se zeptej na ceny.';
  speakAI(reply); addCallLine(`AI: ${reply}`,'ai-said');
}
function simulateVoiceReply(){
  const r=['Co si dáš dnes? Máme skvělou pizzu nebo sushi!','Chceš přidat něco do košíku? Řekni název jídla!','Mohu ti doporučit Klasický burger nebo Cheesecake.'][Math.floor(Math.random()*3)];
  speakAI(r); addCallLine(`AI: ${r}`,'ai-said');
}
function speakAI(text){
  if(callMuted||!synth)return;
  synth.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang='cs-CZ'; u.rate=0.92; u.pitch=1.05; u.volume=1;
  const vs=synth.getVoices();
  const v=vs.find(v=>v.lang.startsWith('cs'))||vs.find(v=>v.lang.startsWith('sk'));
  if(v)u.voice=v;
  u.onstart=()=>{byId('callWave').classList.add('active');};
  u.onend=()=>{byId('callWave').classList.remove('active');};
  synth.speak(u);
}
function addCallLine(txt,cls){
  const t=byId('callTranscript');
  const hint=t.querySelector('.call-hint'); if(hint)hint.remove();
  const p=document.createElement('p'); p.className=cls; p.textContent=txt;
  t.appendChild(p); t.scrollTop=t.scrollHeight;
}
addTap(byId('callMuteBtn'), ()=>{
  callMuted=!callMuted;
  byId('callMuteBtn').textContent=callMuted?'🔇':'🔊';
  byId('callMuteBtn').classList.toggle('muted',callMuted);
  if(callMuted&&synth)synth.cancel();
});

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
setTimeout(()=>{
  if(chatMsgs.children.length===0)
    appendMsg('Ahoj! 👋 Napiš název jídla pro přidání do košíku, nebo zavolej AI zaměstnanci 📞','bot');
},700);
if(window.speechSynthesis) window.speechSynthesis.onvoiceschanged=()=>window.speechSynthesis.getVoices();
