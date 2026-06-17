// --- データ ---
const recipesData = [
  {
    t: "看板をギョウシ",
    d: "帰り道の看板の文章を全文読んで心の中でツッコミする",
    i: "🪧",
    s: ["#帰り道", "#その他", "#移動中"],
    m: ["#ギョウシ", "#ギャグ・シュール"],
    c: "#FFE600",
    s1: "帰り道にある、一番文字がびっしり書かれている看板を見つけます。",
    s2: "立ち止まらずに歩きながら、脳内でキレキレのツッコミを入れます。これぞ日常のサボりです。",
  },
  {
    t: "小石の経歴捏造",
    d: "道端の小石がハワイ生まれかもしれないと想像する",
    i: "🪨",
    s: ["#帰り道", "#移動中"],
    m: "#想像・妄想",
    c: "#FF578A",
    s1: "道端に転がっている小石に目をつけます。なければ、コンクリートの材料となった砂でも問題ありません。",
    s2: "「キラウェア火山生まれ。風に吹かれ誰かに蹴られここまで来たのだ」などとバックボーンを捏造します。もしかしたら、本当かもしれません。",
  },
  {
    t: "戦闘力スカウター",
    d: "すれ違う人の「優しさ戦闘力」を勝手に計測する",
    i: "🕶️",
    s: "#帰り道",
    m: "#想像・妄想",
    c: "#FF578A",
    s1: "前から歩いてくる人をターゲットに定めます。",
    s2: "脳内にスカウターを装着し、「優しさ戦闘力…530000か…！」と勝手に計測してリスペクトします。",
  },
  {
    t: "白線タイムアタック",
    d: "横断歩道の白い部分だけを踏んで素早く渡り切る",
    i: "🦓",
    s: "#帰り道",
    m: "#アクティブ",
    c: "#00E5B5",
  },
  {
    t: "野良猫アテレコ",
    d: "見かけた野良猫の鳴き声に渋いイケボでアテレコする",
    i: "🐈",
    s: "#帰り道",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
  {
    t: "架空のBGM再生",
    d: "今の自分の歩き方に合わせて脳内で壮大なBGMを流す",
    i: "🎧",
    s: "#帰り道",
    m: "#癒やし",
    c: "#FFE600",
  },
  {
    t: "マイ吊り革企画会議",
    d: "どんな形の吊り革がほしいか考える",
    i: "🚞",
    s: ["#帰り道", "#移動中", "#電車の中"],
    m: "#想像・妄想",
    c: "#00E5B5",
    s1: "吊り革を眺めます。なければ、吊り革をググります。",
    s2: "自分がほしい吊り革を考えます。どこでもひっかけられるフック付き？星型？手がひんやりして夏でも快適？珪藻土でできていてハンカチがわり、手汗も吸収？",
  },
  {
    t: "影踏みマスター",
    d: "他人の影を絶対に踏まないように忍者のように歩く",
    i: "🥷",
    s: "#帰り道",
    m: "#アクティブ",
    c: "#FF578A",
  },
  {
    t: "星ネーミングライツ",
    d: "星を手に入れたら、なんて名前をつける？",
    i: "🌟",
    s: ["#帰り道", "#布団の中"],
    m: "#想像・妄想",
    c: "#FFE600",
    s1: "頭の中に夜空を描きます。なければ、汚れた画面を見ます。",
    s2: "その中の一つが、自分の星であると強く信じます。",
    s3: "名前をつけます。年齢や生態系を考えてみてもすてきですね。",
  },
  {
    t: "帰り道RTA",
    d: "昨日より1秒でも早く家に着くように競歩で帰る",
    i: "⏱️",
    s: "#帰り道",
    m: "#アクティブ",
    c: "#00E5B5",
  },
  {
    t: "お布団で深呼吸",
    d: "寝る前に3回、お腹を極限まで膨らませて深呼吸する",
    i: "🛌",
    s: "#お布団の中",
    m: "#癒やし",
    c: "#00E5B5",
  },
  {
    t: "天井の木目動物",
    d: "天井の模様を繋げて新しいモンスターを生み出す",
    i: "🪵",
    s: "#お布団の中",
    m: "#ギョウシ",
    c: "#FFE600",
  },
  {
    t: "足の指と本気の握手",
    d: "手の指と足の指を絡ませて今日一日を労い合う",
    i: "🤝",
    s: "#お布団の中",
    m: "#ギャグ・シュール",
    c: "#FF578A",
  },
  {
    t: "脳内模様替え",
    d: "目を閉じて、部屋の家具を全て空中に浮かべてみる",
    i: "🛋️",
    s: "#お布団の中",
    m: "#想像・妄想",
    c: "#FFE600",
  },
  {
    t: "ふとん簀巻き",
    d: "布団を体に巻き付けて完全なイモムシになりきる",
    i: "🐛",
    s: "#お布団の中",
    m: "#癒やし",
    c: "#00E5B5",
  },
  {
    t: "毛布で洞窟探検",
    d: "毛布の中に潜り、スマホのライトで未知の洞窟を探検",
    i: "🔦",
    s: "#お布団の中",
    m: "#アクティブ",
    c: "#FFE600",
  },
  {
    t: "明日の朝ごはん会議",
    d: "明日の朝に食べる最高のトーストの焼き加減を妄想する",
    i: "🍞",
    s: "#お布団の中",
    m: "#癒やし",
    c: "#FF578A",
  },
  {
    t: "まくらと和解",
    d: "まくらに顔を埋めて「今日もよろしく頼むぞ」と呟く",
    i: "☁️",
    s: "#お布団の中",
    m: "#ギャグ・シュール",
    c: "#FF578A",
  },
  {
    t: "羊を数える（物理）",
    d: "本当に羊が柵を越える姿をリアルに100匹まで想像する",
    i: "🐑",
    s: "#お布団の中",
    m: "#想像・妄想",
    c: "#00E5B5",
  },
  {
    t: "目玉焼きアート",
    d: "目玉焼きにケチャップで今日の気分の顔を描く",
    i: "🍳",
    s: "#朝",
    m: "#アクティブ",
    c: "#FF578A",
  },
  {
    t: "太陽にウインク",
    d: "カーテンを開けた瞬間、太陽に向かってキザにウインク",
    i: "☀️",
    s: "#朝",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
  {
    t: "洗面所ライブ",
    d: "歯磨きをしながら鏡の自分に向かって熱唱のフリをする",
    i: "🎤",
    s: "#朝",
    m: "#アクティブ",
    c: "#00E5B5",
  },
  {
    t: "寝癖のネーミング",
    d: "今日の寝癖に「トルネード・スプラッシュ」と名付ける",
    i: "🌪️",
    s: "#朝",
    m: "#想像・妄想",
    c: "#FFE600",
  },
  {
    t: "靴下ガチャ",
    d: "目を閉じて引き出しから靴下を2枚選び、そのまま履く",
    i: "🧦",
    s: "#朝",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
  {
    t: "一杯の水を神の雫に",
    d: "朝イチの水を「これは伝説の霊薬だ」と思い込んで飲む",
    i: "💧",
    s: "#朝",
    m: "#想像・妄想",
    c: "#00E5B5",
  },
  {
    t: "スヌーズとの対話",
    d: "スヌーズが鳴るたびに「まだ早い」と論理的に説得する",
    i: "⏰",
    s: "#朝",
    m: "#ギャグ・シュール",
    c: "#FF578A",
  },
  {
    t: "朝の匂いソムリエ",
    d: "窓を開けて、今日の空気の匂いをワインのように評価する",
    i: "🍷",
    s: "#朝",
    m: "#癒やし",
    c: "#FF578A",
  },
  {
    t: "パジャマでランウェイ",
    d: "ベッドからリビングまで、モデル歩きで華麗に移動する",
    i: "🚶‍♀️",
    s: "#朝",
    m: "#アクティブ",
    c: "#FFE600",
  },
  {
    t: "ニュースキャスターごっこ",
    d: "今日の天気をアナウンサー風の美声で自分に報告する",
    i: "📺",
    s: "#朝",
    m: "#ギャグ・シュール",
    c: "#00E5B5",
  },
  {
    t: "無音コーヒータイム",
    d: "スマホを置いて、音を立てずにコーヒーの香りだけを楽しむ",
    i: "☕",
    s: "#休憩時間",
    m: "#癒やし",
    c: "#FFE600",
  },
  {
    t: "エアロクロ",
    d: "何もない空間にろくろがあるつもりで陶芸家の動きをする",
    i: "🏺",
    s: "#休憩時間",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
  {
    t: "雲の形占い",
    d: "窓から見える雲の形で、今日の午後の運勢を勝手に占う",
    i: "☁️",
    s: "#休憩時間",
    m: "#想像・妄想",
    c: "#00E5B5",
  },
  {
    t: "ペン回しマスター",
    d: "ペン回しを3回連続で成功させるまで仕事・勉強に戻らない",
    i: "🖊️",
    s: "#休憩時間",
    m: "#アクティブ",
    c: "#FF578A",
  },
  {
    t: "デスク下足指ストレッチ",
    d: "靴の中で足の指を思いっきりパーに広げて解放する",
    i: "🦶",
    s: "#休憩時間",
    m: "#癒やし",
    c: "#FF578A",
  },
  {
    t: "タイピングASMR",
    d: "キーボードを無駄にカタカタ叩いてプログラマーを気取る",
    i: "⌨️",
    s: "#休憩時間",
    m: "#ギャグ・シュール",
    c: "#00E5B5",
  },
  {
    t: "付箋アート",
    d: "使わない付箋を重ねて、小さなピラミッドを建設する",
    i: "📝",
    s: "#休憩時間",
    m: "#ギョウシ",
    c: "#FFE600",
  },
  {
    t: "脳内ビーチリゾート",
    d: "目を閉じて波の音を想像し、南国のビーチにワープする",
    i: "🏖️",
    s: "#休憩時間",
    m: "#想像・妄想",
    c: "#FF578A",
  },
  {
    t: "ストレッチで天井を突く",
    d: "背伸びをして、本当に天井に手が届きそうな顔をする",
    i: "🙆",
    s: "#休憩時間",
    m: "#アクティブ",
    c: "#FFE600",
  },
  {
    t: "お茶の温度を当てる",
    d: "マグカップを触って、お茶の温度を小数点まで予想する",
    i: "🌡️",
    s: "#休憩時間",
    m: "#ギョウシ",
    c: "#00E5B5",
  },
  {
    t: "シャワーマイク",
    d: "シャワーヘッドをマイクに見立ててお風呂で熱唱する",
    i: "🚿",
    s: "#お風呂",
    m: "#アクティブ",
    c: "#FF578A",
  },
  {
    t: "湯船で無重力",
    d: "湯船の中で体を浮かせて、宇宙空間にいる設定を楽しむ",
    i: "🚀",
    s: "#お風呂",
    m: "#癒やし",
    c: "#FF578A",
  },
  {
    t: "泡のアート",
    d: "ボディソープの泡で頭の上に巨大なツノを作る",
    i: "🫧",
    s: "#お風呂",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
  {
    t: "水滴レース",
    d: "鏡を垂れる水滴を2つ選び、どっちが先に落ちるか実況する",
    i: "💧",
    s: "#お風呂",
    m: "#ギョウシ",
    c: "#00E5B5",
  },
  {
    t: "一口30回チャレンジ",
    d: "最初の一口だけ、絶対に30回噛むまで飲み込まない",
    i: "🍽️",
    s: "#食事中",
    m: "#アクティブ",
    c: "#FF578A",
  },
  {
    t: "美食家コメント",
    d: "コンビニ弁当に対して、高級フレンチの評論家風にコメント",
    i: "🧐",
    s: "#食事中",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
  {
    t: "食材の産地に感謝",
    d: "サラダのトマトを見て「太陽の恵みよ…」と壮大に感謝する",
    i: "🍅",
    s: "#食事中",
    m: "#想像・妄想",
    c: "#FFE600",
  },
  {
    t: "お箸ドラム",
    d: "食べる前にお箸でテーブルを2回だけタタッと叩く",
    i: "🥢",
    s: "#食事中",
    m: "#アクティブ",
    c: "#00E5B5",
  },
  {
    t: "最後の晩餐ごっこ",
    d: "「これが人生最後の食事だ…」と極限まで味わって食べる",
    i: "🤤",
    s: "#食事中",
    m: "#想像・妄想",
    c: "#FF578A",
  },
  {
    t: "鏡に向かって変顔",
    d: "ふと鏡を見た瞬間、自分ができる全力の変顔を1秒だけする",
    i: "🤪",
    s: "#その他",
    m: "#ギャグ・シュール",
    c: "#FFE600",
  },
];

// --- データの多重化・自動補完処理 ---
const dummyRecipes = recipesData.map((r, i) => {
  const sits = Array.isArray(r.s) ? r.s : [r.s];
  const mods = Array.isArray(r.m) ? r.m : [r.m];

  return {
    id: i + 1,
    title: r.t,
    desc: r.d,
    icon: r.i,
    tags: [...sits, ...mods],
    situations: sits,
    moods: mods,
    color: r.c,
    step1: r.s1 || r.d + "の準備をします。",
    step2:
      r.s2 ||
      "全力で、誰にもバレないように心の中で実践します。これぞ日常のサボりです。",
    step3:
      r.s3 || "最後に、心の中で小さくガッツポーズをして達成感を噛み締めます。",
  };
});

// --- 状態管理 ---
let isMenuOpen = false;
let isSpinning = false;
let selectedSituations = []; // 複数選択（配列）に完全対応！
let selectedMoods = []; // 複数選択（配列）に完全対応！
let activeFilters = [];
let clearedRecipes = JSON.parse(localStorage.getItem("clearedRecipes") || "[]");
let wishlistRecipes = JSON.parse(
  localStorage.getItem("wishlistRecipes") || "[]",
);
let gachaCount = 0;

// --- 初期化 ---
document.addEventListener("DOMContentLoaded", () => {
  const scrollTarget = localStorage.getItem("scrollToTarget");

  if (document.getElementById("gacha-machine")) {
    initGachaIcons();
    initSearchTags();
    window.addEventListener("scroll", checkScrollForHeader);

    // 安全なlocalStorageスクロール制御
    if (scrollTarget === "lottery") {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      localStorage.removeItem("scrollToTarget");
      const forceScroll = () => {
        if (document.getElementById("lottery-section"))
          scrollToElement("lottery-section");
      };
      setTimeout(forceScroll, 100);
      window.addEventListener("load", () => {
        setTimeout(forceScroll, 100);
      });
    }
  }

  if (document.getElementById("recipe-list-grid")) {
    const params = new URLSearchParams(window.location.search);
    const tag = params.get("tag");
    if (tag) activeFilters.push(tag);
    renderRecipeList();
  }
  if (document.getElementById("detail-title")) updateRecipeDetailView();
  if (document.getElementById("done-title")) updateDoneView();
  if (document.getElementById("memory-list-grid")) renderMemoryList();
  if (document.getElementById("wishlist-grid")) renderWishlist();
});

// --- ナビゲーション ---
function navigateTo(view, recipeId = null) {
  let url = "";
  if (view === "home") url = "index.html";
  else if (view === "recipe-list") url = "recipe-list.html";
  else if (view === "recipe-detail") url = "recipe-detail.html";
  else if (view === "done") url = "done.html";
  else if (view === "memory-list") url = "memory-list.html";
  else if (view === "wishlist") url = "wishlist.html";

  if (recipeId) url += "?id=" + recipeId;
  window.location.href = url;
}

function navigateToWithFilter(tag) {
  window.location.href = "recipe-list.html?tag=" + encodeURIComponent(tag);
}

function goToLottery() {
  closeMenu();
  if (document.getElementById("lottery-section")) {
    setTimeout(() => {
      scrollToElement("lottery-section");
    }, 300);
  } else {
    localStorage.setItem("scrollToTarget", "lottery");
    window.location.href = "index.html";
  }
}

function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) {
    const header = document.getElementById("global-header");
    const headerOffset = header ? header.offsetHeight : 0;
    let extraOffset = id === "lottery-section" ? 80 : 0;
    const offsetPosition =
      el.getBoundingClientRect().top +
      window.scrollY -
      headerOffset +
      extraOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
}

// --- ヘッダー・メニュー色自動切り替え ---
function checkScrollForHeader() {
  const headerOffset = 120;
  const scrollY = window.scrollY + headerOffset;
  const about = document.getElementById("about-section");
  const lottery = document.getElementById("lottery-section");
  const search = document.getElementById("search-section");
  const memory = document.getElementById("memory-section");

  let newColor = "bg-brand-main";
  let btnColor = "bg-white";

  if (memory && scrollY >= memory.offsetTop) {
    newColor = "bg-brand-accent";
    btnColor = "bg-white";
  } else if (search && scrollY >= search.offsetTop) {
    newColor = "bg-brand-mint";
    btnColor = "bg-white";
  } else if (lottery && scrollY >= lottery.offsetTop) {
    newColor = "bg-white";
    btnColor = "bg-brand-main";
  } else if (about && scrollY >= about.offsetTop) {
    newColor = "bg-brand-main";
    btnColor = "bg-white";
  }

  applyHeaderColor(newColor, btnColor);
}

function applyHeaderColor(headerColor, btnColor) {
  const header = document.getElementById("global-header");
  if (header) {
    header.classList.remove(
      "bg-brand-main",
      "bg-white",
      "bg-brand-mint",
      "bg-brand-accent",
    );
    header.classList.add(headerColor);
  }
  const homeBtn = document.getElementById("home-btn");
  if (homeBtn) {
    homeBtn.classList.remove(
      "bg-brand-main",
      "bg-white",
      "bg-brand-mint",
      "bg-brand-accent",
    );
    homeBtn.classList.add(btnColor);
  }
}

// --- メニュー開閉 ---
function toggleMenu() {
  isMenuOpen = !isMenuOpen;
  const overlay = document.getElementById("side-menu-overlay");
  const panel = document.getElementById("side-menu-panel");
  const bg = document.getElementById("side-menu-bg");
  const main = document.getElementById("main-content");
  const header = document.getElementById("global-header");
  const line1 = document.getElementById("menu-line-1");
  const line2 = document.getElementById("menu-line-2");
  const line3 = document.getElementById("menu-line-3");

  if (isMenuOpen) {
    overlay.classList.remove("pointer-events-none", "opacity-0");
    overlay.classList.add("opacity-100");
    bg.classList.add("pointer-events-auto");
    panel.classList.remove("translate-x-full", "pointer-events-none");
    panel.classList.add("translate-x-0", "pointer-events-auto");
    main.classList.add("blur-md", "brightness-90", "pointer-events-none");
    header.classList.add("blur-md", "brightness-90", "pointer-events-none");
    if (line1 && line2 && line3) {
      line1.classList.remove("translate-y-0", "rotate-0");
      line1.classList.add("translate-y-[8px]", "rotate-45");
      line2.classList.remove("opacity-100");
      line2.classList.add("opacity-0");
      line3.classList.remove("translate-y-0", "rotate-0");
      line3.classList.add("-translate-y-[8px]", "-rotate-45");
    }
  } else {
    closeMenu();
  }
}

function closeMenu() {
  isMenuOpen = false;
  document
    .getElementById("side-menu-overlay")
    .classList.add("pointer-events-none", "opacity-0");
  document.getElementById("side-menu-overlay").classList.remove("opacity-100");
  document
    .getElementById("side-menu-bg")
    .classList.remove("pointer-events-auto");
  document
    .getElementById("side-menu-panel")
    .classList.add("translate-x-full", "pointer-events-none");
  document
    .getElementById("side-menu-panel")
    .classList.remove("translate-x-0", "pointer-events-auto");
  document
    .getElementById("main-content")
    .classList.remove("blur-md", "brightness-90", "pointer-events-none");
  document
    .getElementById("global-header")
    .classList.remove("blur-md", "brightness-90", "pointer-events-none");
  const line1 = document.getElementById("menu-line-1");
  const line2 = document.getElementById("menu-line-2");
  const line3 = document.getElementById("menu-line-3");
  if (line1 && line2 && line3) {
    line1.classList.remove("translate-y-[8px]", "rotate-45");
    line1.classList.add("translate-y-0", "rotate-0");
    line2.classList.remove("opacity-0");
    line2.classList.add("opacity-100");
    line3.classList.remove("-translate-y-[8px]", "-rotate-45");
    line3.classList.add("translate-y-0", "rotate-0");
  }
}

// --- ガチャ機能 ---
function initGachaIcons() {
  const container = document.getElementById("gacha-icons");
  const icons = ["🪧", "🛌", "🍳", "☕", "🚿"];
  let html = "";
  for (let i = 0; i < 10; i++) {
    html += `<div class="bg-white border-[3px] border-brand-dark rounded-xl md:rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_#1e293b] mx-2 text-2xl md:text-3xl">${icons[i % icons.length]}</div>`;
  }
  container.innerHTML = html;
}

function playGacha() {
  if (isSpinning) return;
  isSpinning = true;
  gachaCount++;

  const btn = document.getElementById("gacha-btn");
  btn.innerHTML = "まわし中... 🌀";
  btn.classList.add("bg-slate-400", "scale-95");
  btn.classList.remove("bg-brand-accent");
  document.getElementById("gacha-machine").classList.add("animate-shake");

  document.getElementById("gacha-empty").classList.add("hidden");
  document.getElementById("gacha-result").classList.add("hidden");

  setTimeout(() => {
    // 10回ごとのSSRシークレット演出
    if (gachaCount % 10 === 0) {
      document.getElementById("gacha-res-title").textContent =
        "【SSR】ガチャ回しすぎの達人🏆";
      document.getElementById("gacha-res-desc").textContent =
        "「もしかして、全部のレシピを出そうとしてる…？」10回も回してくれたあなたに、特大の拍力を送ります！一旦スマホを置いて、お茶でも飲みませんか？🍵";
      document.getElementById("gacha-res-icon").innerHTML = "🎰";
      document.getElementById("gacha-res-tags").innerHTML =
        '<span class="text-xs md:text-sm px-3 py-1.5 bg-brand-accent border-[3px] border-brand-dark rounded-full font-black shadow-[2px_2px_0px_0px_#1e293b] text-white">#シークレット</span>';
      document.getElementById("gacha-detail-btn").classList.add("hidden");

      const doneBtn = document.getElementById("gacha-done-btn");
      doneBtn.innerHTML = "✨ 感謝して受け取る ✨";
      doneBtn.onclick = () => {
        triggerConfetti();
        setTimeout(triggerConfetti, 300);
        setTimeout(triggerConfetti, 600);
      };
    } else {
      const result =
        dummyRecipes[Math.floor(Math.random() * dummyRecipes.length)];
      document.getElementById("gacha-res-title").textContent = r = result.title;
      document.getElementById("gacha-res-desc").textContent = result.desc;
      document.getElementById("gacha-res-icon").innerHTML = result.icon;

      const tagsHtml = result.tags
        .map(
          (t) =>
            `<span onclick="navigateToWithFilter('${t}')" class="text-xs md:text-sm px-3 py-1.5 bg-brand-main border-[3px] border-brand-dark rounded-full font-black shadow-[2px_2px_0px_0px_#1e293b] text-brand-dark cursor-pointer hover:bg-white active:scale-95 transition-all inline-block">${t}</span>`,
        )
        .join("");
      document.getElementById("gacha-res-tags").innerHTML = tagsHtml;

      document.getElementById("gacha-detail-btn").classList.remove("hidden");
      document.getElementById("gacha-detail-btn").onclick = () =>
        navigateTo("recipe-detail", result.id);

      const doneBtn = document.getElementById("gacha-done-btn");
      doneBtn.innerHTML = "🎉 やってみた！";
      doneBtn.onclick = () => actionDone(result.id);
    }

    document.getElementById("gacha-result").classList.remove("hidden");
    document.getElementById("gacha-result").classList.add("animate-pop-in");

    isSpinning = false;
    btn.innerHTML = "がちゃをまわす ✨";
    btn.classList.remove("bg-slate-400", "scale-95");
    btn.classList.add("bg-brand-accent");
    document.getElementById("gacha-machine").classList.remove("animate-shake");
  }, 400);
}

// --- 複数選択タグ検索機能 ---
function initSearchTags() {
  const sitTags = [
    "#帰り道",
    "#布団の中",
    "#朝",
    "#休憩時間",
    "#お風呂",
    "#食事中",
    "#移動中",
    "#電車の中",
    "#その他",
  ];
  const moodTags = [
    "#癒やし",
    "#アクティブ",
    "#ギョウシ",
    "#想像・妄想",
    "#ギャグ・シュール",
  ];

  const renderTags = (tags, activeArray, containerId, setFuncStr) => {
    const html = tags
      .map((tag) => {
        const isActive = activeArray.includes(tag);
        const cls = isActive
          ? "bg-brand-dark text-white"
          : "bg-white text-brand-dark";
        return `<button onclick="${setFuncStr}('${tag}')" class="px-4 py-2 rounded-full border-[3px] border-brand-dark font-black text-xs md:text-sm shadow-[2px_2px_0px_0px_#1e293b] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#1e293b] active:translate-y-[2px] active:shadow-none transition-all ${cls}">${tag}</button>`;
      })
      .join("");
    document.getElementById(containerId).innerHTML = html;
  };

  window.setSit = (tag) => {
    if (selectedSituations.includes(tag)) {
      selectedSituations = selectedSituations.filter((t) => t !== tag);
    } else {
      selectedSituations.push(tag);
    }
    initSearchTags();
  };

  window.setMood = (tag) => {
    if (selectedMoods.includes(tag)) {
      selectedMoods = selectedMoods.filter((t) => t !== tag);
    } else {
      selectedMoods.push(tag);
    }
    initSearchTags();
  };

  renderTags(sitTags, selectedSituations, "search-situation-tags", "setSit");
  renderTags(moodTags, selectedMoods, "search-mood-tags", "setMood");
}

function executeSearch() {
  let matched = dummyRecipes.filter((r) => {
    // ▼ 複数選択対応のANDロジック（選んだタグをすべて満たしているかチェック）
    const sitMatch =
      selectedSituations.length === 0 ||
      selectedSituations.every((sit) => r.situations.includes(sit));
    const moodMatch =
      selectedMoods.length === 0 ||
      selectedMoods.every((mood) => r.moods.includes(mood));
    return sitMatch && moodMatch;
  });

  const container = document.getElementById("search-result-container");
  if (matched.length > 0) {
    let gridHtml = matched
      .map((r, idx) => {
        const tagsHtml = r.tags
          .map(
            (t) =>
              `<span onclick="event.stopPropagation(); navigateToWithFilter('${t}')" class="text-[10px] md:text-xs px-2.5 py-1 bg-slate-100 text-brand-dark border-[2px] border-brand-dark rounded-full font-black cursor-pointer hover:bg-brand-main active:scale-95 transition-all inline-block">${t}</span>`,
          )
          .join("");
        const isCleared = clearedRecipes.includes(r.id);
        const badgeHtml = isCleared
          ? `<div class="absolute -top-3 -right-3 bg-brand-accent text-white border-[3px] border-brand-dark w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_0px_#1e293b] transform rotate-12 z-10">💮</div>`
          : "";
        return `
          <div onclick="navigateTo('recipe-detail', ${r.id})" class="bg-white rounded-[32px] p-6 border-[3px] border-brand-dark shadow-[6px_6px_0px_0px_#1e293b] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#1e293b] active:translate-y-2 active:shadow-none transition-all cursor-pointer flex flex-col relative text-left animate-fade-up group" style="animation-delay: ${(idx % 10) * 50}ms">
            <div class="flex gap-4 items-start mb-4">
              <div class="w-16 h-16 bg-[${r.color}] border-[3px] border-brand-dark rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#1e293b] shrink-0 text-3xl md:text-4xl transform -rotate-3 transition-transform group-hover:scale-105 text-brand-dark">${r.icon}</div>
              <div class="flex-1">
                <h3 class="font-black text-lg md:text-xl mb-1 leading-tight text-brand-dark">${r.title}</h3>
              </div>
            </div>
            <p class="text-xs md:text-sm font-bold text-slate-600 mb-4 line-clamp-3 flex-1">${r.desc}</p>
            <div class="flex flex-wrap gap-2 mt-auto">${tagsHtml}</div>
            ${badgeHtml}
          </div>`;
      })
      .join("");
    container.innerHTML = `<div class="mt-10 animate-pop-in"><h3 class="font-black text-xl md:text-2xl mb-6 text-brand-dark border-l-[6px] border-brand-accent pl-4">${matched.length} 件のレシピが見つかりました！</h3><div class="grid grid-cols-1 sm:grid-cols-2 gap-6">${gridHtml}</div></div>`;
  } else {
    container.innerHTML = `<div class="mt-10 animate-pop-in"><div class="bg-slate-50 border-[3px] border-brand-dark border-dashed rounded-[32px] p-10 text-center shadow-[4px_4px_0px_0px_rgba(30,41,59,0.1)]"><div class="mb-4 opacity-50 flex justify-center text-5xl text-brand-dark">🥺</div><h4 class="text-xl font-black text-brand-dark mb-2">レシピが見つかりません</h4><p class="text-sm font-bold text-slate-500">別のタグの組み合わせを試してみてね！</p></div></div>`;
  }
}

function resetSearch() {
  selectedSituations = [];
  selectedMoods = [];
  initSearchTags();
  document.getElementById("search-result-container").innerHTML = "";
}

// --- レシピ一覧画面機能 ---
function addFilter(tag, event) {
  if (event) event.stopPropagation();
  if (!activeFilters.includes(tag)) activeFilters.push(tag);
  renderRecipeList();
}
function removeFilter(tag, event) {
  if (event) event.stopPropagation();
  activeFilters = activeFilters.filter((t) => t !== tag);
  renderRecipeList();
}
function clearAllFilters() {
  activeFilters = [];
  renderRecipeList();
}

function renderRecipeList() {
  let filteredRecipes = dummyRecipes;
  if (activeFilters.length > 0) {
    filteredRecipes = dummyRecipes.filter((r) =>
      activeFilters.every((f) => r.tags.includes(f)),
    );
  }

  const titleContainer = document.getElementById("recipe-list-title-container");
  if (activeFilters.length > 0) {
    const filterBadges = activeFilters
      .map(
        (tag) =>
          `<span class="inline-flex items-center text-sm md:text-base bg-white text-brand-dark px-3 py-1 rounded-full border-[3px] border-brand-dark shadow-[2px_2px_0px_0px_#1e293b] ml-2 cursor-pointer hover:bg-slate-100 active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e293b] align-middle transition-all" onclick="removeFilter('${tag}', event)">${tag} <span class="ml-1 text-sm font-black">✖</span></span>`,
      )
      .join("");
    titleContainer.innerHTML = `<h2 class="font-black text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0px_#1e293b] flex flex-wrap items-center gap-y-2">レシピ一覧 ${filterBadges}</h2>`;
  } else {
    titleContainer.innerHTML = `<h2 class="font-black text-2xl md:text-3xl text-white drop-shadow-[2px_2px_0px_0px_#1e293b]" id="recipe-list-title">レシピ一覧 (${dummyRecipes.length}件)</h2>`;
  }

  const grid = document.getElementById("recipe-list-grid");
  if (filteredRecipes.length === 0) {
    grid.innerHTML = `
      <div class="col-span-1 sm:col-span-2 lg:col-span-3 bg-white border-[3px] border-brand-dark border-dashed rounded-[32px] p-12 text-center shadow-[4px_4px_0px_0px_rgba(30,41,59,0.1)] mt-4">
          <div class="flex justify-center mb-6 opacity-50 text-brand-dark text-6xl">🥺</div>
          <h4 class="text-xl font-black text-brand-dark mb-2">レシピが見つかりません</h4>
          <p class="text-sm font-bold text-slate-500 mb-6">選択したタグの組み合わせに合うレシピがないみたい。<br>タグを減らしてみてね！</p>
          <button onclick="clearAllFilters()" class="w-full bg-brand-main text-brand-dark border-[3px] border-brand-dark rounded-[24px] py-4 font-black text-base shadow-[6px_6px_0px_0px_#1e293b] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#1e293b] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-2 max-w-sm mx-auto">
            すべてのタグをクリア
          </button>
      </div>`;
    return;
  }

  let html = "";
  filteredRecipes.forEach((r, idx) => {
    const isCleared = clearedRecipes.includes(r.id);
    const tagsHtml = r.tags
      .map(
        (t) =>
          `<span onclick="addFilter('${t}', event)" class="text-[10px] md:text-xs px-2.5 py-1 bg-slate-100 text-brand-dark border-[2px] border-brand-dark rounded-full font-black cursor-pointer hover:bg-brand-main active:scale-95 transition-all inline-block">${t}</span>`,
      )
      .join("");
    const badgeHtml = isCleared
      ? `<div class="absolute -top-3 -right-3 bg-brand-accent text-white border-[3px] border-brand-dark w-10 h-10 rounded-full flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_0px_#1e293b] transform rotate-12 z-10">💮</div>`
      : "";
    html += `
      <div onclick="navigateTo('recipe-detail', ${r.id})" class="bg-white rounded-[32px] p-6 border-[3px] border-brand-dark shadow-[6px_6px_0px_0px_#1e293b] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#1e293b] active:translate-y-2 active:shadow-none transition-all cursor-pointer flex flex-col relative animate-fade-up group" style="animation-delay: ${(idx % 10) * 50}ms">
        <div class="flex gap-4 items-start mb-4">
          <div class="w-16 h-16 bg-[${r.color}] border-[3px] border-brand-dark rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_#1e293b] shrink-0 text-3xl md:text-4xl transform -rotate-3 transition-transform group-hover:scale-105 text-brand-dark">${r.icon}</div>
          <div class="flex-1">
            <h3 class="font-black text-lg md:text-xl mb-1 leading-tight text-brand-dark">${r.title}</h3>
          </div>
        </div>
        <p class="text-xs md:text-sm font-bold text-slate-600 mb-4 line-clamp-3 flex-1">${r.desc}</p>
        <div class="flex flex-wrap gap-2 mt-auto">${tagsHtml}</div>
        ${badgeHtml}
      </div>`;
  });
  grid.innerHTML = html;
}

// --- 詳細画面・DONE画面・コレクション画面の制御 ---
function updateRecipeDetailView() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const r = dummyRecipes.find((recipe) => recipe.id === id);
  if (!r) return;

  document.getElementById("detail-icon-container").className =
    `w-24 h-24 md:w-32 md:h-32 bg-[${r.color}] rounded-3xl border-[3px] border-brand-dark flex items-center justify-center shadow-[4px_4px_0px_0px_#1e293b] shrink-0 mb-8 transform -rotate-3 text-brand-dark animate-fade-up`;
  document.getElementById("detail-icon").textContent = r.icon;
  document.getElementById("detail-title").textContent = r.title;

  // ステップ1, 2, 3の流し込み
  document.getElementById("detail-step1").textContent = r.step1;
  document.getElementById("detail-step2").textContent = r.step2;

  const step3El = document.getElementById("detail-step3");
  if (step3El) step3El.textContent = r.step3;

  const tagsHtml = r.tags
    .map(
      (t) =>
        `<span onclick="navigateToWithFilter('${t}')" class="px-4 py-2 rounded-full border-[3px] border-brand-dark font-black text-sm bg-white text-brand-dark shadow-[2px_2px_0px_0px_#1e293b] cursor-pointer hover:bg-brand-main active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#1e293b] transition-all inline-block">${t}</span>`,
    )
    .join("");
  document.getElementById("detail-tags").innerHTML = tagsHtml;

  document.getElementById("detail-share-btn").onclick = () => actionShare(r);
  document.getElementById("detail-done-btn").onclick = () => actionDone(r.id);

  // やっってみたリストボタンの連動
  const wishBtn = document.getElementById("detail-wish-btn");
  if (wishBtn) {
    if (wishlistRecipes.includes(r.id)) {
      wishBtn.innerHTML = "🌟 リスト追加済";
      wishBtn.classList.remove("bg-white");
      wishBtn.classList.add("bg-brand-main");
    } else {
      wishBtn.innerHTML = "⭐ やってみたい";
      wishBtn.classList.remove("bg-brand-main");
      wishBtn.classList.add("bg-white");
    }
    wishBtn.onclick = () => actionWishlist(r.id);
  }
}

function updateDoneView() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const r = dummyRecipes.find((recipe) => recipe.id === id);
  if (!r) return;

  document.getElementById("done-title").textContent = `「${r.title}」`;
  document.getElementById("done-share-btn").onclick = () => actionShare(r);
  triggerConfetti();
}

function renderMemoryList() {
  const myMemories = dummyRecipes.filter((r) => clearedRecipes.includes(r.id));
  document.getElementById("memory-count").textContent =
    `${myMemories.length} 個`;

  const grid = document.getElementById("memory-list-grid");
  const empty = document.getElementById("memory-empty");

  if (myMemories.length > 0) {
    grid.classList.remove("hidden");
    empty.classList.add("hidden");
    let html = "";
    myMemories.forEach((r, idx) => {
      const rotation = idx % 2 === 0 ? "rotate-2" : "-rotate-2";
      html += `
        <div onclick="navigateTo('recipe-detail', ${r.id})" class="bg-white border-[3px] border-brand-dark rounded-[24px] p-4 shadow-[6px_6px_0px_0px_#1e293b] cursor-pointer hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#1e293b] active:translate-y-2 active:shadow-none transition-all ${rotation} animate-fade-up group" style="animation-delay: ${(idx % 10) * 50}ms">
          <div class="aspect-square bg-slate-100 border-[3px] border-brand-dark rounded-[16px] mb-3 flex items-center justify-center overflow-hidden relative">
            <div class="absolute inset-0 bg-[${r.color}] opacity-20"></div>
            <div class="relative z-10 text-4xl md:text-5xl text-brand-dark transform transition-transform group-hover:scale-110">${r.icon}</div>
            <div class="absolute top-1 right-1 bg-brand-accent text-white border-[2px] border-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_0px_#1e293b] transform -rotate-12 z-20">💮</div>
          </div>
          <p class="font-black text-xs md:text-sm line-clamp-2 leading-tight text-brand-dark">${r.title}</p>
        </div>`;
    });
    grid.innerHTML = html;
  } else {
    grid.classList.add("hidden");
    empty.classList.remove("hidden");
  }
}

// --- やっってみたリスト機能 ---
function actionWishlist(recipeId) {
  if (wishlistRecipes.includes(recipeId)) {
    wishlistRecipes = wishlistRecipes.filter((id) => id !== recipeId);
  } else {
    wishlistRecipes.push(recipeId);
  }
  localStorage.setItem("wishlistRecipes", JSON.stringify(wishlistRecipes));
  updateRecipeDetailView();
}

function renderWishlist() {
  const grid = document.getElementById("wishlist-grid");
  const empty = document.getElementById("wishlist-empty");
  if (!grid) return;

  const myWishes = dummyRecipes.filter((r) => wishlistRecipes.includes(r.id));

  if (myWishes.length > 0) {
    grid.classList.remove("hidden");
    empty.classList.add("hidden");
    let html = "";
    myWishes.forEach((r, idx) => {
      const rotation = idx % 2 === 0 ? "rotate-2" : "-rotate-2";
      const isCleared = clearedRecipes.includes(r.id);
      const badgeHtml = isCleared
        ? `<div class="absolute -top-2 -right-2 bg-brand-accent text-white border-[2px] border-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_0px_#1e293b] transform rotate-12 z-20">💮</div>`
        : "";

      html += `
        <div onclick="navigateTo('recipe-detail', ${r.id})" class="bg-white border-[3px] border-brand-dark rounded-[24px] p-4 shadow-[6px_6px_0px_0px_#1e293b] cursor-pointer hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#1e293b] active:translate-y-2 active:shadow-none transition-all ${rotation} animate-fade-up group" style="animation-delay: ${(idx % 10) * 50}ms">
          <div class="aspect-square bg-slate-100 border-[3px] border-brand-dark rounded-[16px] mb-3 flex items-center justify-center overflow-hidden relative">
            <div class="absolute inset-0 bg-[${r.color}] opacity-20"></div>
            <div class="relative z-10 text-4xl md:text-5xl text-brand-dark transform transition-transform group-hover:scale-110">${r.icon}</div>
            ${badgeHtml}
          </div>
          <p class="font-black text-xs md:text-sm line-clamp-2 leading-tight text-brand-dark">${r.title}</p>
        </div>`;
    });
    grid.innerHTML = html;
  } else {
    grid.classList.add("hidden");
    empty.classList.remove("hidden");
  }
}

// --- エフェクト ＆ アクション ---
function triggerConfetti() {
  if (!window.confetti) return;
  const end = Date.now() + 1000;
  const colors = ["#00E5B5", "#FF578A", "#FFE600", "#ffffff", "#1e293b"];
  (function frame() {
    window.confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: colors,
    });
    window.confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: colors,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

function actionDone(recipeId) {
  if (!clearedRecipes.includes(recipeId)) {
    clearedRecipes.push(recipeId);
    localStorage.setItem("clearedRecipes", JSON.stringify(clearedRecipes));
  }
  navigateTo("done", recipeId);
}

async function actionShare(recipe) {
  triggerConfetti();
  const text = `「${recipe.title}」をやってみたよ！\n${recipe.desc}\n\n日常に、もうひとつ、わくわくをプラス！「ぷらすきっぷ」\n#ぷらすきっぷ ${recipe.tags.join(" ")}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: "ぷらすきっぷ", text: text });
    } catch (err) {
      console.log("シェアキャンセル", err);
    }
  } else {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, "_blank");
  }
}
