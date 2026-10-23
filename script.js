// متغير لتحديد حالة اللغة الحالية (افتراضياً عربية)
let isArabic = true;

// قاموس الترجمة بين العربية والإنجليزية
const data = {
  ar: {
    langBtn: "English",
    tickerLabel: "عاجل",
    tickerText: "قوات مكافحة الإرهاب تطلق عملية أمنية استباقية لملاحقة خلايا داعش التكفيرية...",
    cat1: "كردستان (الأجزاء الأربعة)",
    cat2: "حركة الحرية",
    cat3: "الدول الإقليمية",
    cat4: "ملف داعش والتطرف",
    cat5: "الأرشيف الحقوقي",
    cat6: "تحليلات وآراء",
    heroCat: "ميداني / مكافحة الإرهاب",
    heroTitle: "عملية أمنية خاصة تستهدف قادة بارزين من تنظيم داعش في ريف الحسكة",
    heroDesc: "نفذت الوحدات الخاصة عملية خاطفة بالتنسيق مع التحالف الدولي أسفرت عن تفكيك شبكة لجمع الأموال والتخطيط للهجمات.",
    card1Title: "دراسة حول استراتيجية التغيير الديمغرافي في المناطق المحتلة",
    card1Desc: "توثيق شامل بالخرائط والمستندات لأهم الانتهاكات والتهجير القسري للمدنيين.",
    card2Title: "تصعيد الهجمات بالطائرات المسيرة الإقليمية على البنية التحتية",
    card2Desc: "استهداف محطات الكهرباء والماء يتسبب في أزمة إنسانية متصاعدة للمواطنين.",
    socialTitle: "القنوات الرسمية",
    latestTitle: "آخر التحديثات",
    footerDesc: "منصة إخبارية مستقلة توثق التطورات الميدانية والسياسية في كردستان والشرق الأوسط."
  },
  en: {
    langBtn: "العربية",
    tickerLabel: "BREAKING",
    tickerText: "Counter-Terrorism Units launch proactive operation targeting ISIS sleeper cells...",
    cat1: "Kurdistan (4 Parts)",
    cat2: "Freedom Movement",
    cat3: "Regional Regimes",
    cat4: "ISIS & Terror File",
    cat5: "Rights Archive",
    cat6: "Analysis & Opinion",
    heroCat: "Tactical / Anti-Terror",
    heroTitle: "Special Security Operation Targets High-Ranking ISIS Commanders in Hasakah Countryside",
    heroDesc: "Special forces executed a swift operation coordinated with the International Coalition, dismantling a financing & attack planning network.",
    card1Title: "Study on Demographic Change Strategy in Occupied Territories",
    card1Desc: "Comprehensive documentation with maps and files on forced displacement of civilians.",
    card2Title: "Escalation of Regional Drone Strikes Targeting Vital Infrastructure",
    card2Desc: "Strikes on power and water stations trigger an escalating humanitarian crisis.",
    socialTitle: "Official Channels",
    latestTitle: "Latest Updates",
    footerDesc: "Independent news portal documenting tactical and political developments in Kurdistan and the Middle East."
  }
};

// دالة التحويل الديناميكي عند الضغط على زر تغيير اللغة
function toggleLanguage() {
  isArabic = !isArabic;
  const lang = isArabic ? 'ar' : 'en';
  const body = document.body;

  if (isArabic) {
    body.classList.remove('ltr');
    body.setAttribute('dir', 'rtl');
    body.setAttribute('lang', 'ar');
  } else {
    body.classList.add('ltr');
    body.setAttribute('dir', 'ltr');
    body.setAttribute('lang', 'en');
  }

  // تحديث نصوص العناصر داخل الصفحة
  document.getElementById('lang-toggle').innerText = data[lang].langBtn;
  document.getElementById('ticker-label').innerText = data[lang].tickerLabel;
  document.getElementById('ticker-text').innerText = data[lang].tickerText;
  document.getElementById('cat-1').innerText = data[lang].cat1;
  document.getElementById('cat-2').innerText = data[lang].cat2;
  document.getElementById('cat-3').innerText = data[lang].cat3;
  document.getElementById('cat-4').innerText = data[lang].cat4;
  document.getElementById('cat-5').innerText = data[lang].cat5;
  document.getElementById('cat-6').innerText = data[lang].cat6;
  document.getElementById('hero-cat').innerText = data[lang].heroCat;
  document.getElementById('hero-title').innerText = data[lang].heroTitle;
  document.getElementById('hero-desc').innerText = data[lang].heroDesc;
  document.getElementById('card1-title').innerText = data[lang].card1Title;
  document.getElementById('card1-desc').innerText = data[lang].card1Desc;
  document.getElementById('card2-title').innerText = data[lang].card2Title;
  document.getElementById('card2-desc').innerText = data[lang].card2Desc;
  document.getElementById('social-widget-title').innerText = data[lang].socialTitle;
  document.getElementById('sidebar-latest-title').innerText = data[lang].latestTitle;
  document.getElementById('footer-desc').innerText = data[lang].footerDesc;
}