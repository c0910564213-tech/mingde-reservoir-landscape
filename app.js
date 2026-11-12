// Master Plan Hotspots Data
const pinsData = {
  1: {
    title: "柴窯藝境與匠人創作區 (明德窯)",
    badge: "文化產業核心 ． 職人合院",
    desc: "以歷史明德柴窯為人文靈魂，保存四天三夜柴燒落灰之美。將廢棄陶片與失敗陶甕轉化為園區步道鋪面與樹牌，提供陶藝拉坯、捏陶體驗與客庄茶器展售。",
    img: "images/image87.png",
    points: [
      "明德柴窯歷史登窯結構現地原貌保存",
      "藝術家駐村工作坊與客庄合院美學轉化",
      "柴燒茶器與老田寮野茶跨界茶席",
      "手作柑橘醬陶罐文創體驗工坊"
    ]
  },
  2: {
    title: "茶橘森林與里山食農區 (橙香森林)",
    badge: "農業生產引擎 ． 食農採摘",
    desc: "以大面積老欉桶柑果園與老田寮梯田茶山為主體，全面落實草生友善農法。結合全景玻璃屋景觀餐廳、魯冰花海與四季採果動線，打造全臺指標性里山農業場域。",
    img: "images/image4.png",
    points: [
      "秋冬採橘趣季節性食農教育體驗動線",
      "順應等高線梯田茶園與魯冰花景觀花海",
      "高架觀景平台：遠眺明德水庫大壩與群山湖光",
      "四季產地餐桌旬味料理（桶柑茶飲與客家風味餐）"
    ]
  },
  3: {
    title: "森林野奢露營與靜心區 (小路彎彎)",
    badge: "深度停留核心 ． LID 營地",
    desc: "依托向陽緩坡與天然次生林相，推動低衝擊開發（LID）。採用離地高架帳篷與木棧道，減少地表土方開挖，維護夜間條背螢火蟲與野生動物移動廊道。",
    img: "images/image5.png",
    points: [
      "低衝擊高架木構露營平台，排水透水性極佳",
      "全區夜間低光害照明設計，保護螢火蟲生態",
      "山林微氣候清風漫步徑與晨曦觀霧平台",
      "動靜互補：日間採果茶席，夜間星空旅宿"
    ]
  },
  4: {
    title: "水岸生態緩衝與迎賓入口區",
    badge: "水質水量保護 ． 安全咽喉",
    desc: "緊臨水庫路與縣道 126 線。嚴格遵守 61m 滿水位標高與 15~30m 水岸生態緩衝退縮，設置全區透水植生停車場、低碳接駁點，並於最低點構築自然污水淨化人工濕地。",
    img: "images/image49.png",
    points: [
      "全區最低點污水淨化沉砂池與自然生態草溝",
      "珍稀一級保育類柴棺龜水陸兩棲生態廊道",
      "水庫路入口視覺導視與低碳慢行引導系統",
      "落實零溢流環保承諾，杜絕農藥化肥逕流入庫"
    ]
  },
  5: {
    title: "東北高地眺望平台與視覺地標",
    badge: "制高景觀點 ． 樹冠線限制",
    desc: "座落於基地東北向開闊山稜高點，俯瞰整片明德水庫湖光山色與周邊起伏丘陵。建築簷高嚴格限制在 10.5 公尺以下，順應地形融入天際線。",
    img: "images/image36.png",
    points: [
      "360 度明德水庫全景視野與海棠島遠眺",
      "輕量化木鋼複合構造，順應等高線點狀配置",
      "微氣候引風遮陽設計，夏涼冬防冷風",
      "銜接環湖自行車道與外環登山漫遊動線"
    ]
  },
  6: {
    title: "滯洪沉砂池與自然跌水階梯",
    badge: "水保專項計畫 ． 分級沉降",
    desc: "因應山坡地黏土質地易受暴雨淋洗沖刷之挑戰，於天然谷地設置分級跌水消能石階與生態沉砂滯洪池，延緩洪峰並淨化地表逕流。",
    img: "images/image48.png",
    points: [
      "順應等高線自然跌水階，減緩暴雨地表逕流沖蝕",
      "香菇草、蘆葦、水竹芋多層次水生植物生化過濾",
      "兼具微型水生昆蟲與水鳥棲息觀察功能",
      "杜絕非點源污染，落實水庫水質水量永續保護"
    ]
  }
};

// Gallery Database
const galleryItems = [
  { src: "images/image88.png", title: "全區彩色平面配置圖 (Master Plan 總圖)", cat: "planning" },
  { src: "images/image87.png", title: "全區機能泡泡圖與空間架構", cat: "planning" },
  { src: "images/image89.png", title: "空間剖立面圖與景觀透視效果圖", cat: "planning" },
  { src: "images/image83.png", title: "三大規劃願景（工藝復興 ． 環境共生 ． 永續慢活）", cat: "planning" },
  { src: "images/image85.png", title: "空間發展策略「點、線、面」立體佈局圖", cat: "planning" },
  { src: "images/image86.png", title: "四大核心設計手法圖說", cat: "planning" },
  
  { src: "images/image44.png", title: "基地高空航拍全景與自然地理範圍", cat: "site" },
  { src: "images/image57.png", title: "基地現況索引圖 (4MB 高清大地圖)", cat: "site" },
  { src: "images/image48.png", title: "基地等高線高程與微地形分析圖", cat: "site" },
  { src: "images/image45.png", title: "地籍權屬與土地地號分析圖", cat: "site" },
  { src: "images/image46.png", title: "基地內部農路與周邊聯外交通系統圖", cat: "site" },
  { src: "images/image47.png", title: "都市計畫 / 非都市計畫分區管制圖", cat: "site" },
  { src: "images/image50.png", title: "基地建築位置與坡度剖面圖", cat: "site" },
  
  { src: "images/image22.png", title: "山坡地坡度分級分析圖 (1~6 級坡，5.5MB)", cat: "env" },
  { src: "images/image49.png", title: "基地水文與地表逕流匯流分析圖", cat: "env" },
  { src: "images/image24.png", title: "植栽與動植物生態調查圖 (柴棺龜/鳳蝶，5.8MB)", cat: "env" },
  { src: "images/image18.png", title: "微氣候與四季溫差分析圖", cat: "env" },
  { src: "images/image78.png", title: "SWOT 潛力與限制整合分析矩陣圖", cat: "env" },
  { src: "images/image79.png", title: "課題探討與空間心智圖 (2MB)", cat: "env" },
  { src: "images/image80.png", title: "課題對策與發展目標樹 (Goal Tree)", cat: "env" },
  
  { src: "images/image58.png", title: "案例一：苗栗苑裡 華陶窯柴窯園林", cat: "cases" },
  { src: "images/image60.png", title: "華陶窯與本基地條件對比圖", cat: "cases" },
  { src: "images/image62.jpeg", title: "案例二：南投水里 水里蛇窯空間再生", cat: "cases" },
  { src: "images/image64.jpeg", title: "水里蛇窯陶片再生美學", cat: "cases" },
  { src: "images/image66.jpeg", title: "案例三：苗栗銅鑼 銅鑼茶廠現代茶景", cat: "cases" },
  { src: "images/image68.jpeg", title: "銅鑼茶廠無邊水景與茶園融合", cat: "cases" },
  { src: "images/image70.jpeg", title: "案例四：宜蘭冬山 東風綠活食農轉型", cat: "cases" },
  { src: "images/image74.jpeg", title: "案例五：苗栗大湖 山美學水岸露營", cat: "cases" },
  
  { src: "images/image90.png", title: "田野專訪：明德窯負責人 陳奶奶訪談現場", cat: "field" },
  { src: "images/image91.png", title: "傳統柴燒登窯與四天三夜柴火歲月", cat: "field" },
  { src: "images/image28.png", title: "周邊聚落廟宇與常民信仰分佈圖", cat: "field" },
  { src: "images/image43.png", title: "周邊景點競合分析（日新島/海棠島）", cat: "field" }
];

function initAll() {
  try { initTabs(); } catch(e) { console.error("Tabs error", e); }
  try { initMapPins(); } catch(e) { console.error("Pins error", e); }
  try { initCharts(); } catch(e) { console.error("Charts error", e); }
  try { initCalculator(); } catch(e) { console.error("Calculator error", e); }
  try { initChecklist(); } catch(e) { console.error("Checklist error", e); }
  try { initGallery(); } catch(e) { console.error("Gallery error", e); }
  try { initLightbox(); } catch(e) { console.error("Lightbox error", e); }
  try { initAudio(); } catch(e) { console.error("Audio error", e); }
  try { initCursorToggle(); } catch(e) { console.error("Cursor error", e); }
  try { initLiveClock(); } catch(e) { console.error("Clock error", e); }
  try { initBgSwitch(); } catch(e) { console.error("Bg error", e); }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}

// 1. Tab Navigation Function
function initTabs() {
  const tabBtns = document.querySelectorAll(".nav-tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  function switchTab(targetName) {
    tabBtns.forEach(btn => {
      const match = (btn.dataset.tab === targetName);
      if (match) {
        btn.classList.add("active", "bg-emerald-600", "text-white", "shadow-sm");
        btn.classList.remove("text-slate-600", "bg-white", "hover:bg-slate-100");
      } else {
        btn.classList.remove("active", "bg-emerald-600", "text-white", "shadow-sm");
        btn.classList.add("text-slate-600", "hover:bg-slate-100");
      }
    });

    tabPanels.forEach(panel => {
      const isTarget = (panel.id === `tab-${targetName}`);
      if (isTarget) {
        panel.classList.remove("hidden");
        panel.style.display = "block";
      } else {
        panel.classList.add("hidden");
        panel.style.display = "none";
      }
    });

    if (targetName === "gallery") {
      renderGallery("all");
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tab = btn.dataset.tab;
      if (tab) {
        switchTab(tab);
      }
    });
  });

  switchTab("overview");
}

// 2. Master Plan Interactive Pins & Chips
function initMapPins() {
  const pins = document.querySelectorAll(".map-spot-pin");
  const chips = document.querySelectorAll(".zone-quick-chip");

  function setZone(id) {
    const d = pinsData[id];
    if (!d) return;

    const elTitle = document.getElementById("pin-title");
    const elBadge = document.getElementById("pin-badge");
    const elDesc = document.getElementById("pin-desc");
    const elImg = document.getElementById("pin-img");
    const elPoints = document.getElementById("pin-points");

    if (elTitle) elTitle.textContent = d.title;
    if (elBadge) elBadge.textContent = d.badge;
    if (elDesc) elDesc.textContent = d.desc;
    if (elImg) elImg.src = d.img;

    if (elPoints) {
      elPoints.innerHTML = "";
      d.points.forEach(p => {
        const li = document.createElement("li");
        li.className = "flex items-start gap-2 text-xs text-slate-700";
        li.innerHTML = `<i class="fa-solid fa-check text-emerald-600 mt-0.5"></i><span>${p}</span>`;
        elPoints.appendChild(li);
      });
    }

    pins.forEach(p => {
      const isActive = (p.dataset.pin === String(id));
      p.classList.toggle("bg-amber-500", isActive);
      p.classList.toggle("bg-emerald-600", !isActive);
      p.classList.toggle("scale-125", isActive);
    });

    chips.forEach(c => {
      const isActive = (c.dataset.pin === String(id));
      c.classList.toggle("bg-emerald-600", isActive);
      c.classList.toggle("text-white", isActive);
      c.classList.toggle("bg-slate-100", !isActive);
      c.classList.toggle("text-slate-700", !isActive);
    });
  }

  pins.forEach(pin => {
    pin.addEventListener("click", () => setZone(pin.dataset.pin));
  });

  chips.forEach(chip => {
    chip.addEventListener("click", () => setZone(chip.dataset.pin));
  });

  setZone(1);
}

// 3. Chart.js Initializations
function initCharts() {
  if (typeof Chart === "undefined") {
    console.warn("Chart.js not loaded. Skipping charts.");
    return;
  }

  const ctxSlope = document.getElementById("chart-slope");
  if (ctxSlope) {
    new Chart(ctxSlope, {
      type: "doughnut",
      data: {
        labels: ["平緩微坡 (<15%, 一二級)", "中度緩坡 (15-30%, 三四級)", "陡坡禁建 (>30%, 五六級)"],
        datasets: [{
          data: [42.5, 35.8, 21.7],
          backgroundColor: ["#10b981", "#3b82f6", "#ef4444"],
          borderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: "#334155", font: { size: 10 } } }
        }
      }
    });
  }

  const ctxLand = document.getElementById("chart-land");
  if (ctxLand) {
    new Chart(ctxLand, {
      type: "pie",
      data: {
        labels: ["老欉桶柑果園 (生產)", "等高線野茶梯田 (生產)", "森林與水土水岸 (生態)", "休閒住宿與體驗設施 (硬體)"],
        datasets: [{
          data: [46.2, 28.5, 17.7, 7.6],
          backgroundColor: ["#f59e0b", "#10b981", "#06b6d4", "#ec4899"],
          borderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom", labels: { color: "#334155", font: { size: 10 } } }
        }
      }
    });
  }

  const ctxSeason = document.getElementById("chart-season");
  if (ctxSeason) {
    new Chart(ctxSeason, {
      type: "bar",
      data: {
        labels: ["春 (柚花茶香)", "初夏 (螢火蟲)", "盛夏 (露營)", "秋 (美人茶)", "初冬 (採桶柑)", "寒冬 (柴燒陶)"],
        datasets: [{
          label: "人流指數",
          data: [85, 95, 78, 88, 100, 75],
          backgroundColor: "#10b981",
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { grid: { color: "#e2e8f0" }, ticks: { color: "#64748b" } },
          x: { grid: { display: false }, ticks: { color: "#64748b" } }
        },
        plugins: { legend: { display: false } }
      }
    });
  }
}

// 4. Interactive Calculator
function initCalculator() {
  const sliderTotal = document.getElementById("calc-total-area");
  const sliderAgri = document.getElementById("calc-agri-pct");
  const sliderSlopeH = document.getElementById("calc-slope-height");

  function recalculate() {
    if (!sliderTotal || !sliderAgri || !sliderSlopeH) return;
    const total = parseFloat(sliderTotal.value) || 10.5;
    const agriPct = parseFloat(sliderAgri.value) || 92;
    const slopeH = parseFloat(sliderSlopeH.value) || 12;

    document.getElementById("val-total-area").textContent = `${total} 公頃`;
    document.getElementById("val-agri-pct").textContent = `${agriPct}%`;
    document.getElementById("val-slope-height").textContent = `${slopeH} 公尺`;

    const agriArea = (total * agriPct / 100).toFixed(2);
    const facilityArea = (total * (100 - agriPct) / 100).toFixed(2);
    const facilityPct = (100 - agriPct).toFixed(1);

    document.getElementById("res-agri-area").textContent = `${agriArea} 公頃`;
    document.getElementById("res-facility-area").textContent = `${facilityArea} 公頃 (${facilityPct}%)`;

    const badgeAgri = document.getElementById("badge-agri-check");
    if (badgeAgri) {
      if (agriPct >= 90) {
        badgeAgri.className = "px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300";
        badgeAgri.textContent = "合規 (≥90%)";
      } else {
        badgeAgri.className = "px-2 py-0.5 rounded text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300";
        badgeAgri.textContent = "未達 90% 紅線";
      }
    }

    const setbackFoot = Math.max(3, Math.min(15, slopeH / 2));
    const setbackTop = Math.max(2, Math.min(15, slopeH / 3));

    document.getElementById("res-setback-foot").textContent = `${setbackFoot.toFixed(1)} 公尺 (D ≥ H/2)`;
    document.getElementById("res-setback-top").textContent = `${setbackTop.toFixed(1)} 公尺 (D ≥ H/3)`;
  }

  [sliderTotal, sliderAgri, sliderSlopeH].forEach(s => {
    if (s) {
      s.addEventListener("input", recalculate);
      s.addEventListener("change", recalculate);
    }
  });

  recalculate();
}

// 5. Checklist Scorecard
function initChecklist() {
  const boxes = document.querySelectorAll(".defense-checkbox");
  const counter = document.getElementById("checklist-score");
  const progress = document.getElementById("checklist-bar");

  function update() {
    if (!boxes.length) return;
    let checked = 0;
    boxes.forEach(b => { if (b.checked) checked++; });
    const pct = Math.round((checked / boxes.length) * 100);

    if (counter) counter.textContent = `${pct}%`;
    if (progress) progress.style.width = `${pct}%`;
  }

  boxes.forEach(b => b.addEventListener("change", update));
  update();
}

// 6. Gallery
let currentFilterCat = "all";
function renderGallery(cat = "all") {
  const grid = document.getElementById("gallery-full-grid");
  if (!grid) return;
  grid.innerHTML = "";
  currentFilterCat = cat;

  const items = (cat === "all") ? galleryItems : galleryItems.filter(i => i.cat === cat);

  items.forEach(item => {
    const d = document.createElement("div");
    d.className = "group relative rounded-xl overflow-hidden border border-slate-200 bg-white cursor-pointer shadow-sm hover:shadow-md hover:border-emerald-500 transition-all";
    d.innerHTML = `
      <div class="h-44 overflow-hidden bg-slate-100">
        <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
      </div>
      <div class="p-3">
        <h5 class="text-xs font-semibold text-slate-800 line-clamp-1 group-hover:text-emerald-700 transition-colors">${item.title}</h5>
      </div>
    `;
    d.addEventListener("click", () => openLightbox(item.src, item.title));
    grid.appendChild(d);
  });
}

function initGallery() {
  const filterBtns = document.querySelectorAll(".gal-filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "bg-emerald-600", "text-white");
        b.classList.add("bg-slate-100", "text-slate-700");
      });
      btn.classList.add("active", "bg-emerald-600", "text-white");
      btn.classList.remove("bg-slate-100", "text-slate-700");
      renderGallery(btn.dataset.cat);
    });
  });

  renderGallery("all");
}

// 7. Lightbox
function initLightbox() {
  const modal = document.getElementById("app-lightbox");
  const closeBtn = document.getElementById("lightbox-close-btn");
  if (!modal) return;

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("modal-active")) {
      closeLightbox();
    }
  });
}

function openLightbox(src, caption) {
  const modal = document.getElementById("app-lightbox");
  const img = document.getElementById("lightbox-modal-img");
  const cap = document.getElementById("lightbox-modal-cap");

  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption || "";
  modal.classList.add("modal-active");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("app-lightbox");
  if (!modal) return;
  modal.classList.remove("modal-active");
  modal.style.display = "none";
  document.body.style.overflow = "";
}

// 8. Ambient Sound
function initAudio() {
  const audioBtn = document.getElementById("btn-ambient-audio");
  if (!audioBtn) return;
  let audioCtx = null;
  let isPlaying = false;
  let noise = null;
  let gain = null;

  audioBtn.addEventListener("click", () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        
        const buf = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
        const out = buf.getChannelData(0);
        let b0=0, b1=0, b2=0;
        for (let i = 0; i < out.length; i++) {
          const w = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + w * 0.0555;
          b1 = 0.99332 * b1 + w * 0.0750;
          b2 = 0.96900 * b2 + w * 0.1538;
          out[i] = (b0 + b1 + b2) * 0.05;
        }

        noise = audioCtx.createBufferSource();
        noise.buffer = buf;
        noise.loop = true;

        const filter = audioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 400;

        gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 2);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);
        noise.start();

        isPlaying = true;
        audioBtn.classList.add("text-emerald-700", "border-emerald-500", "bg-emerald-50");
      } catch (e) {
        console.warn("Audio Context Error", e);
      }
    } else {
      if (gain && audioCtx) {
        gain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        setTimeout(() => {
          if (noise) noise.stop();
          if (audioCtx) audioCtx.close();
        }, 1000);
      }
      isPlaying = false;
      audioBtn.classList.remove("text-emerald-700", "border-emerald-500", "bg-emerald-50");
    }
  });
}

// 9. Teapot Cursor Mode
function initCursorToggle() {
  const btn = document.getElementById("cursor-mode-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    document.body.classList.toggle("teapot-cursor");
    const active = document.body.classList.contains("teapot-cursor");
    btn.innerHTML = active ? `<i class="fa-solid fa-mug-hot"></i> 模式：客庄茶器` : `<i class="fa-solid fa-compass"></i> 模式：標準巡航`;
  });
}

// 10. Live Clock
function initLiveClock() {
  const clockEl = document.getElementById("live-ticker-time");
  if (!clockEl) return;
  function update() {
    const d = new Date();
    clockEl.textContent = d.toLocaleTimeString("zh-TW", { hour12: false });
  }
  setInterval(update, 1000);
  update();
}

// 11. Mountain Waterfront Background Switcher (Bright Sunny Mode)
function initBgSwitch() {
  const btn = document.getElementById("btn-bg-switch");
  const label = document.getElementById("bg-switch-label");
  const backdrop = document.querySelector(".lake-backdrop");
  if (!btn || !backdrop) return;

  const bgList = [
    { name: "晴空水岸：空拍全景", img: "images/image44.png" },
    { name: "明亮水岸：山林湖光", img: "images/image75.jpeg" },
    { name: "澄澈水岸：水天一色", img: "images/image68.jpeg" },
    { name: "晨曦水岸：水庫湖畔", img: "images/image3.png" }
  ];

  let currentIdx = 0;

  btn.addEventListener("click", () => {
    currentIdx = (currentIdx + 1) % bgList.length;
    const item = bgList[currentIdx];
    backdrop.style.backgroundImage = `
      linear-gradient(to bottom, rgba(240, 253, 250, 0.75) 0%, rgba(248, 250, 252, 0.82) 45%, rgba(236, 253, 245, 0.90) 100%),
      url('${item.img}')
    `;
    if (label) label.textContent = item.name;
  });
}
