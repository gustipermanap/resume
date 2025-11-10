const scriptQueue = [
  'assets/vendor/gusti/vendors/jquery-3.5.1.min.js',
  'assets/vendor/gusti/scripts/vlt-plugins.min.js',
  'assets/vendor/gusti/scripts/vlt-helpers.js',
  'assets/vendor/gusti/scripts/vlt-controllers.min.js'
];

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'home.tagline': 'Remote-first Full-Stack Developer',
    'home.summary':
      'I build scalable, user-focused platforms with Django, ReactJS, Flutter, Kotlin, and IoT stacks. With 9 years of remote experience, I design resilient backends, refined frontends, and connected products that keep teams shipping fast.',
    'home.buttonGithub': 'View GitHub',
    'home.buttonProject': 'Discuss a Project',
    'about.experienceTitle': 'Years<br>Experience<br>Working',
    'about.heading': 'About Me',
    'about.description':
      'I am a Full-Stack Developer who blends Django, ReactJS, Flutter, Kotlin, and IoT expertise to deliver platforms that stay fast under scale. Over the past 9 years I have led remote deliveries for e-commerce, automation, and product teams, translating user journeys into well-instrumented systems. I enjoy pairing backend rigor with polished UI flows, keeping APIs observable and frontends accessible. Remote collaboration, async communication, and clear documentation anchor every engagement.',
    'about.meta.focus': '<strong>Focus:</strong> API development, automation, IoT orchestration',
    'about.meta.availability': '<strong>Availability:</strong> Open for remote collaboration and freelance projects',
    'about.progress.fullStack': 'Full-Stack Development',
    'about.progress.iot': 'IoT & Automation',
    'about.progress.mobile': 'Mobile Development (Flutter / React Native)',
    'skills.heading': 'Skills',
    'skills.description': 'Balanced stack for shipping resilient backends, refined interfaces, and connected devices.',
    'skills.backend.title': 'Backend Engineering',
    'skills.backend.body': 'Design scalable APIs, apply clean architecture, and tune data layers for resilience.',
    'skills.backend.stack': '<strong>Stack:</strong> Django, Python, FastAPI, PostgreSQL, Redis',
    'skills.frontend.title': 'Frontend Engineering',
    'skills.frontend.body': 'Ship React and Next.js interfaces with modular components, state sync, and TailwindCSS theming.',
    'skills.frontend.stack': '<strong>Stack:</strong> ReactJS, Next.js, TailwindCSS',
    'skills.mobile.title': 'Mobile Development',
    'skills.mobile.body': 'Create cross-platform experiences with shared logic, native extensions, and offline-first UX.',
    'skills.mobile.stack': '<strong>Stack:</strong> Flutter, React Native, Kotlin',
    'skills.iot.title': 'IoT & Edge',
    'skills.iot.body': 'Integrate sensors, orchestrate MQTT pipelines, and manage hardware fleets securely.',
    'skills.iot.stack': '<strong>Stack:</strong> MQTT, ESP32, Raspberry Pi, Node-RED',
    'skills.devops.title': 'DevOps Tooling',
    'skills.devops.body': 'Automate deployments, containerize services, and maintain reliable CI/CD workflows.',
    'skills.devops.stack': '<strong>Stack:</strong> Docker, Linux, GitHub Actions, VSCode',
    'skills.collab.title': 'Collaboration',
    'skills.collab.body': 'Lead problem-solving sessions, keep async updates flowing, and drive agile delivery.',
    'skills.collab.stack': '<strong>Focus:</strong> Problem Solving, Remote Collaboration, Agile Workflow',
    'projects.smart.title': 'Smart IoT Dashboard',
    'projects.smart.meta': 'Stack: Django, ReactJS, MQTT',
    'projects.smart.description':
      'A real-time monitoring platform that ingests sensor streams over MQTT, orchestrates device control workflows, and visualizes system health for distributed hardware fleets.',
    'projects.smart.button': 'View Project',
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.meta': 'Stack: Django REST, ReactJS',
    'projects.ecommerce.description':
      'API-driven marketplace with inventory automation, analytics dashboards, and secure checkout flows that keep merchants informed in real time.',
    'projects.ecommerce.button': 'View Project',
    'projects.mobile.title': 'Cross-Platform Mobile App',
    'projects.mobile.meta': 'Stack: Flutter, Kotlin',
    'projects.mobile.description':
      'A feature-rich mobile experience with live API updates, push notifications, offline-ready caching, and Kotlin extensions for Android-specific flows.',
    'projects.mobile.button': 'View Project',
    'experience.heading': 'Experience',
    'experience.summary':
      'Delivering full-stack products end-to-end, from API design and automation to polished UI and IoT deployments.',
    'experience.remote.title': 'Full-Stack Developer · Freelance / Remote',
    'experience.remote.description':
      'Partner with product founders and enterprise teams to build web, mobile, and IoT solutions tailored to distributed operations.',
    'experience.remote.bullet1':
      'Architected and shipped multi-tenant SaaS platforms, integrating automation, analytics, and hardware telemetry.',
    'experience.remote.bullet2':
      'Led remote squads through discovery, delivery, and handover, keeping documentation and async updates crisp.',
    'experience.startup.title': 'Backend Engineer · Private Tech Startup',
    'experience.startup.description':
      'Designed and optimized Django-based services that powered data-heavy applications and partner integrations.',
    'experience.startup.bullet1':
      'Improved API performance and data throughput by refactoring query layers and adding Redis-backed caching.',
    'experience.startup.bullet2':
      'Instrumented monitoring, deployment automation, and code reviews that set the foundation for future releases.',
    'contact.heading': 'Contact',
    'contact.summary':
      'I collaborate remotely with teams across time zones to turn product briefs into shipped software. Share a challenge, and I will respond with a clear plan, timeline, and technical approach.',
    'contact.availability':
      '<strong>Availability:</strong> Open for remote collaboration and freelance projects.',
    'contact.form.heading': 'Ready to discuss your roadmap? <span class="has-accent-color">Let\'s build.</span>',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Message',
    'contact.form.success': 'Your message is successfully sent...',
    'contact.form.error': 'Sorry something went wrong!',
    'contact.form.submit': 'Send Message',
    'footer.copyright': '© Gusti 2026',
    'offcanvas.copyright': '© 2020 Copyright.<br>All rights reserved.'
  },
  id: {
    'nav.home': 'Beranda',
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.experience': 'Pengalaman',
    'nav.contact': 'Kontak',
    'home.tagline': 'Pengembang Full-Stack yang mengutamakan kerja jarak jauh',
    'home.summary':
      'Saya membangun platform terukur dan berfokus pada pengguna dengan Django, ReactJS, Flutter, Kotlin, dan tumpukan IoT. Dengan 9 tahun pengalaman remote, saya merancang backend tangguh, frontend rapi, dan produk terhubung yang menjaga tim tetap cepat mengirimkan produk.',
    'home.buttonGithub': 'Lihat GitHub',
    'home.buttonProject': 'Diskusikan Proyek',
    'about.experienceTitle': 'Tahun<br>Pengalaman<br>Bekerja',
    'about.heading': 'Tentang Saya',
    'about.description':
      'Saya adalah Full-Stack Developer yang memadukan keahlian Django, ReactJS, Flutter, Kotlin, dan IoT untuk menghadirkan platform yang tetap gesit saat skala membesar. Selama 9 tahun terakhir saya memimpin pengiriman remote untuk tim e-commerce, otomasi, dan produk, menerjemahkan perjalanan pengguna menjadi sistem yang terinstrumentasi baik. Saya menikmati menggabungkan ketelitian backend dengan alur UI yang halus, menjaga API tetap terpantau dan frontend mudah diakses. Kolaborasi jarak jauh, komunikasi asinkron, dan dokumentasi jelas selalu menjadi fondasinya.',
    'about.meta.focus': '<strong>Fokus:</strong> Pengembangan API, otomasi, orkestrasi IoT',
    'about.meta.availability': '<strong>Ketersediaan:</strong> Terbuka untuk kolaborasi remote dan proyek lepas',
    'about.progress.fullStack': 'Pengembangan Full-Stack',
    'about.progress.iot': 'IoT & Otomasi',
    'about.progress.mobile': 'Pengembangan Mobile (Flutter / React Native)',
    'skills.heading': 'Keahlian',
    'skills.description':
      'Tumpukan seimbang untuk merancang backend tangguh, antarmuka halus, dan perangkat terhubung.',
    'skills.backend.title': 'Rekayasa Backend',
    'skills.backend.body':
      'Merancang API terukur, menerapkan arsitektur bersih, dan menyetel lapisan data agar tetap andal.',
    'skills.backend.stack': '<strong>Teknologi:</strong> Django, Python, FastAPI, PostgreSQL, Redis',
    'skills.frontend.title': 'Rekayasa Frontend',
    'skills.frontend.body':
      'Membangun antarmuka React dan Next.js dengan komponen modular, sinkronisasi state, dan tema TailwindCSS.',
    'skills.frontend.stack': '<strong>Teknologi:</strong> ReactJS, Next.js, TailwindCSS',
    'skills.mobile.title': 'Pengembangan Mobile',
    'skills.mobile.body':
      'Menciptakan pengalaman lintas platform dengan logika bersama, ekstensi native, dan UX offline-first.',
    'skills.mobile.stack': '<strong>Teknologi:</strong> Flutter, React Native, Kotlin',
    'skills.iot.title': 'IoT & Edge',
    'skills.iot.body':
      'Mengintegrasikan sensor, mengorkestrasi pipeline MQTT, dan mengelola armada perangkat secara aman.',
    'skills.iot.stack': '<strong>Teknologi:</strong> MQTT, ESP32, Raspberry Pi, Node-RED',
    'skills.devops.title': 'Perangkat DevOps',
    'skills.devops.body':
      'Mengotomasi deployment, mengontainerisasi layanan, dan menjaga alur CI/CD tetap andal.',
    'skills.devops.stack': '<strong>Teknologi:</strong> Docker, Linux, GitHub Actions, VSCode',
    'skills.collab.title': 'Kolaborasi',
    'skills.collab.body':
      'Memimpin sesi pemecahan masalah, menjaga pembaruan async tetap lancar, dan mendorong pengiriman agile.',
    'skills.collab.stack': '<strong>Fokus:</strong> Problem Solving, Kolaborasi Remote, Alur Agile',
    'projects.smart.title': 'Dasbor IoT Cerdas',
    'projects.smart.meta': 'Teknologi: Django, ReactJS, MQTT',
    'projects.smart.description':
      'Platform pemantauan real-time yang menerima data sensor via MQTT, mengatur alur kontrol perangkat, dan memvisualkan kesehatan sistem untuk armada perangkat terdistribusi.',
    'projects.smart.button': 'Lihat Proyek',
    'projects.ecommerce.title': 'Platform E-Commerce',
    'projects.ecommerce.meta': 'Teknologi: Django REST, ReactJS',
    'projects.ecommerce.description':
      'Marketplace berbasis API dengan otomasi inventori, dasbor analitik, dan alur checkout aman yang membuat merchant selalu terinformasi.',
    'projects.ecommerce.button': 'Lihat Proyek',
    'projects.mobile.title': 'Aplikasi Mobile Lintas Platform',
    'projects.mobile.meta': 'Teknologi: Flutter, Kotlin',
    'projects.mobile.description':
      'Pengalaman mobile kaya fitur dengan pembaruan API langsung, notifikasi push, cache siap offline, dan ekstensi Kotlin untuk alur Android.',
    'projects.mobile.button': 'Lihat Proyek',
    'experience.heading': 'Pengalaman',
    'experience.summary':
      'Mengirimkan produk full-stack end-to-end, dari desain API dan otomasi hingga UI yang rapi dan implementasi IoT.',
    'experience.remote.title': 'Full-Stack Developer · Freelance / Remote',
    'experience.remote.description':
      'Berkolaborasi dengan founder produk dan tim enterprise untuk membangun solusi web, mobile, dan IoT yang siap untuk operasi terdistribusi.',
    'experience.remote.bullet1':
      'Merancang dan meluncurkan platform SaaS multi-tenant dengan otomasi, analitik, dan telemetri perangkat.',
    'experience.remote.bullet2':
      'Memimpin squad remote dari discovery hingga handover dengan dokumentasi dan pembaruan async yang jelas.',
    'experience.startup.title': 'Backend Engineer · Startup Teknologi Swasta',
    'experience.startup.description':
      'Merancang dan mengoptimalkan layanan berbasis Django yang mendukung aplikasi berbeban data dan integrasi mitra.',
    'experience.startup.bullet1':
      'Meningkatkan performa API dan throughput data lewat refactor layer query dan cache berbasis Redis.',
    'experience.startup.bullet2':
      'Membangun monitoring, otomasi deployment, dan code review yang menjadi dasar rilis berikutnya.',
    'contact.heading': 'Kontak',
    'contact.summary':
      'Saya berkolaborasi secara remote lintas zona waktu untuk mengubah brief produk menjadi perangkat lunak siap pakai. Bagikan tantangannya, dan saya akan merespons dengan rencana, lini masa, serta pendekatan teknis yang jelas.',
    'contact.availability':
      '<strong>Ketersediaan:</strong> Terbuka untuk kolaborasi remote dan proyek lepas.',
    'contact.form.heading': 'Siap membahas roadmap Anda? <span class="has-accent-color">Mari bangun.</span>',
    'contact.form.name': 'Nama Anda',
    'contact.form.email': 'Email Anda',
    'contact.form.message': 'Pesan',
    'contact.form.success': 'Pesan Anda berhasil dikirim...',
    'contact.form.error': 'Maaf, terjadi kesalahan!',
    'contact.form.submit': 'Kirim Pesan',
    'footer.copyright': '© Gusti 2026',
    'offcanvas.copyright': '© 2020 Hak Cipta.<br>Seluruh hak dilindungi.'
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '概要',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.experience': '経験',
    'nav.contact': 'お問い合わせ',
    'home.tagline': 'リモート主体のフルスタック開発者',
    'home.summary':
      '私は Django、ReactJS、Flutter、Kotlin、IoT スタックを組み合わせ、スケーラブルでユーザー中心のプラットフォームを構築しています。リモートでの9年の経験を通じて、堅牢なバックエンド、洗練されたフロントエンド、そしてチームの開発速度を落とさない接続プロダクトを設計してきました。',
    'home.buttonGithub': 'GitHub を見る',
    'home.buttonProject': 'プロジェクトを相談する',
    'about.experienceTitle': '年<br>の実務<br>経験',
    'about.heading': '自己紹介',
    'about.description':
      '私は Django・ReactJS・Flutter・Kotlin・IoT の専門性を組み合わせ、スケールしても高速に動作するプラットフォームを提供するフルスタック開発者です。過去9年間で、EC、オートメーション、プロダクトチーム向けにリモートでの開発をリードし、ユーザージャーニーを計測しやすいシステムへと落とし込んできました。バックエンドの堅牢さと磨き上げた UI フローを組み合わせ、API の可観測性とフロントエンドのアクセシビリティを両立させることを大切にしています。リモートでの協働、非同期コミュニケーション、明確なドキュメントが常に基盤です。',
    'about.meta.focus': '<strong>注力分野:</strong> API 開発、オートメーション、IoT オーケストレーション',
    'about.meta.availability': '<strong>稼働状況:</strong> リモート協業・フリーランス案件に対応可能',
    'about.progress.fullStack': 'フルスタック開発',
    'about.progress.iot': 'IoT とオートメーション',
    'about.progress.mobile': 'モバイル開発 (Flutter / React Native)',
    'skills.heading': 'スキル',
    'skills.description':
      '堅牢なバックエンド、磨かれたインターフェース、接続デバイスを送り出すバランスの取れたスタック。',
    'skills.backend.title': 'バックエンドエンジニアリング',
    'skills.backend.body':
      'スケーラブルな API を設計し、クリーンアーキテクチャを適用し、データ層を堅牢に調整します。',
    'skills.backend.stack': '<strong>技術:</strong> Django、Python、FastAPI、PostgreSQL、Redis',
    'skills.frontend.title': 'フロントエンドエンジニアリング',
    'skills.frontend.body':
      'モジュール式コンポーネント、状態同期、TailwindCSS テーマを備えた React / Next.js UI を構築します。',
    'skills.frontend.stack': '<strong>技術:</strong> ReactJS、Next.js、TailwindCSS',
    'skills.mobile.title': 'モバイル開発',
    'skills.mobile.body':
      '共有ロジック、ネイティブ拡張、オフラインファースト UX でクロスプラットフォーム体験を実現します。',
    'skills.mobile.stack': '<strong>技術:</strong> Flutter、React Native、Kotlin',
    'skills.iot.title': 'IoT とエッジ',
    'skills.iot.body':
      'センサーを統合し、MQTT パイプラインを制御し、ハードウェア群を安全に管理します。',
    'skills.iot.stack': '<strong>技術:</strong> MQTT、ESP32、Raspberry Pi、Node-RED',
    'skills.devops.title': 'DevOps ツールチェーン',
    'skills.devops.body':
      'デプロイを自動化し、サービスをコンテナ化し、信頼できる CI/CD を維持します。',
    'skills.devops.stack': '<strong>技術:</strong> Docker、Linux、GitHub Actions、VSCode',
    'skills.collab.title': 'コラボレーション',
    'skills.collab.body':
      '課題解決セッションをリードし、非同期アップデートを円滑にし、アジャイルなデリバリーを推進します。',
    'skills.collab.stack': '<strong>注力:</strong> 課題解決、リモートコラボ、アジャイルワークフロー',
    'projects.smart.title': 'スマート IoT ダッシュボード',
    'projects.smart.meta': '技術: Django、ReactJS、MQTT',
    'projects.smart.description':
      'MQTT 経由でセンサーのストリームを取り込み、デバイス制御ワークフローを編成し、分散ハードウェア群の健全性を可視化するリアルタイム監視基盤です。',
    'projects.smart.button': 'プロジェクトを見る',
    'projects.ecommerce.title': 'Eコマースプラットフォーム',
    'projects.ecommerce.meta': '技術: Django REST、ReactJS',
    'projects.ecommerce.description':
      '在庫自動化、分析ダッシュボード、セキュアなチェックアウトを備え、常に販売者に状況を伝える API 主導のマーケットプレイスです。',
    'projects.ecommerce.button': 'プロジェクトを見る',
    'projects.mobile.title': 'クロスプラットフォームモバイルアプリ',
    'projects.mobile.meta': '技術: Flutter、Kotlin',
    'projects.mobile.description':
      'ライブ API 更新、プッシュ通知、オフライン対応キャッシュ、Android 向け Kotlin 拡張を備えた多機能モバイル体験です。',
    'projects.mobile.button': 'プロジェクトを見る',
    'experience.heading': '経験',
    'experience.summary':
      'API 設計とオートメーションから UI・IoT 配備まで、フルスタック製品をエンドツーエンドで届けています。',
    'experience.remote.title': 'フルスタックデベロッパー · フリーランス / リモート',
    'experience.remote.description':
      'プロダクトファウンダーやエンタープライズチームと協働し、分散運用に最適化された Web・モバイル・IoT ソリューションを構築します。',
    'experience.remote.bullet1':
      'オートメーション・分析・ハードウェアテレメトリを統合したマルチテナント SaaS を設計・提供。',
    'experience.remote.bullet2':
      'リモートチームをリードし、ディスカバリーからデリバリー、ハンドオーバーまでを明確なドキュメントと非同期更新で支援。',
    'experience.startup.title': 'バックエンドエンジニア · 民間テックスタートアップ',
    'experience.startup.description':
      'データ負荷の高いアプリとパートナー連携を支える Django ベースのサービスを設計・最適化しました。',
    'experience.startup.bullet1':
      'クエリ層のリファクタと Redis キャッシュで API 性能とスループットを向上。',
    'experience.startup.bullet2':
      '監視・デプロイ自動化・コードレビューを整備し、将来のリリース基盤を構築。',
    'contact.heading': 'お問い合わせ',
    'contact.summary':
      '私はタイムゾーンを越えてリモートで協働し、プロダクトブリーフを出荷可能なソフトウェアへと具現化します。課題を共有していただければ、明確な計画・タイムライン・技術アプローチで回答します。',
    'contact.availability':
      '<strong>稼働状況:</strong> リモート協業・フリーランス案件に対応可能です。',
    'contact.form.heading':
      'ロードマップについて話しませんか？ <span class="has-accent-color">一緒に創りましょう。</span>',
    'contact.form.name': 'お名前',
    'contact.form.email': 'メールアドレス',
    'contact.form.message': 'メッセージ',
    'contact.form.success': 'メッセージは正常に送信されました。',
    'contact.form.error': '申し訳ありません、エラーが発生しました。',
    'contact.form.submit': 'メッセージを送信',
    'footer.copyright': '© Gusti 2026',
    'offcanvas.copyright': '© 2020 著作権表示。<br>無断転載を禁じます。'
  }
};

const DEFAULT_LANGUAGE = 'en';
const LANGUAGE_STORAGE_KEY = 'gusti-language';

async function includePartials() {
  const targets = Array.from(document.querySelectorAll('[data-include]'));
  for (const target of targets) {
    const file = target.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} while requesting ${file}`);
      }
      const html = await response.text();
      target.outerHTML = html;
    } catch (error) {
      console.error(`Failed to load partial: ${file}`, error);
      target.outerHTML = `<div class="include-error">Unable to load ${file}</div>`;
    }
  }
}

function loadScriptSequential(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
}

async function loadExternalScripts() {
  for (const src of scriptQueue) {
    await loadScriptSequential(src);
  }
}

async function bootstrap() {
  await includePartials();
  initI18n();
  await loadExternalScripts();
  setupWhatsAppForm();
  document.dispatchEvent(new Event('DOMContentLoaded'));
  window.dispatchEvent(new Event('load'));
}

bootstrap();

function initI18n() {
  const initialLanguage = getStoredLanguage();
  applyLanguage(initialLanguage);
  bindLanguageSwitchers();
}

function bindLanguageSwitchers() {
  const switchers = document.querySelectorAll('[data-language-switcher]');
  switchers.forEach((switcher) => {
    const controls = switcher.querySelectorAll('[data-lang]');
    controls.forEach((control) => {
      control.addEventListener('click', (event) => {
        event.preventDefault();
        const lang = control.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  });
}

function applyLanguage(lang) {
  const locale = translations[lang] ? lang : DEFAULT_LANGUAGE;
  const dictionary = translations[locale];
  document.documentElement.setAttribute('lang', locale);

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const translation = dictionary[key];
    if (!translation) {
      return;
    }
    const attrTarget = element.getAttribute('data-i18n-attr');
    if (attrTarget) {
      attrTarget.split(',').forEach((attr) => {
        const attributeName = attr.trim();
        if (attributeName) {
          element.setAttribute(attributeName, translation);
        }
      });
    } else {
      element.innerHTML = translation;
    }
  });

  updateActiveLanguage(locale);
}

function updateActiveLanguage(locale) {
  const switchers = document.querySelectorAll('[data-language-switcher]');
  switchers.forEach((switcher) => {
    const controls = switcher.querySelectorAll('[data-lang]');
    controls.forEach((control) => {
      const isActive = control.getAttribute('data-lang') === locale;
      control.classList.toggle('is-active', isActive);
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) {
    return;
  }
  persistLanguage(lang);
  applyLanguage(lang);
}

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    console.warn('Unable to access stored language preference.', error);
  }
  return DEFAULT_LANGUAGE;
}

function persistLanguage(lang) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    console.warn('Unable to persist language preference.', error);
  }
}

function setupWhatsAppForm() {
  const form = document.querySelector('.js-whatsapp-form');
  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    const phoneNumber = '6282116040700';
    const text = encodeURIComponent(
      `Halo Gusti, saya ${name || 'someone'}.\nEmail: ${email || '-'}\nPesan: ${message || '-'}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  });
}
