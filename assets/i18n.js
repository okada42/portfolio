/*
 * Bilingual dictionary for the studio portfolio.
 * Key   = the original source string as written in index.html (HTML text, attributes, or JS data).
 * Value = [Japanese, English]. A null Japanese entry means "keep the source text" (already natural Japanese).
 */
window.I18N_DICT = {
    // ---- Page / header -------------------------------------------------------------------------
    "Studio Portfolio | Senior Engineer & UI/UX Designer (15+ Years)": ["スタジオ・ポートフォリオ｜シニアエンジニア & UI/UXデザイナー（実務15年以上）", "Studio Portfolio | Senior Engineer & UI/UX Designer (15+ Years)"],
    "[ STUDIO ARCHIVE // GREETING ]": ["[ スタジオアーカイブ // ごあいさつ ]", "[ STUDIO ARCHIVE // GREETING ]"],
    "WELCOME": ["ようこそ", "WELCOME"],
    "ポートフォリオをご覧いただきありがとうございます": [null, "Thank you for visiting my portfolio."],
    "[ 15+ YEARS ARCHITECTURE & DESIGN ]": ["[ 設計・デザイン実務 15年以上 ]", "[ 15+ YEARS ARCHITECTURE & DESIGN ]"],
    "STUDIO ARCHIVE": ["スタジオアーカイブ", "STUDIO ARCHIVE"],
    "// Engineering & Automation": ["// エンジニアリング & 業務自動化", "// Engineering & Automation"],
    "[Studio 3D]": ["[3Dスタジオ]", "[Studio 3D]"],
    "[Automation Demo]": ["[自動化デモ]", "[Automation Demo]"],
    "[Career & Profile]": ["[経歴・プロフィール]", "[Career & Profile]"],
    "[Contact / Links]": ["[お問い合わせ・リンク]", "[Contact / Links]"],
    "[Automation]": ["[自動化デモ]", "[Automation]"],
    "[Career]": ["[経歴]", "[Career]"],
    "[Contact]": ["[お問い合わせ]", "[Contact]"],
    "▶ ご相談": ["▶ ご相談", "▶ Contact"],
    "・お見積り": ["・お見積もり", " / Get a Quote"],

    // ---- Studio overlay ------------------------------------------------------------------------
    "[ PROJECT FRAME ]": ["[ 実績フレーム ]", "[ PROJECT FRAME ]"],
    "▶ クリックして詳細を表示": ["▶ クリックで詳細を表示", "▶ Click for details"],
    "[ ARCHITECTURAL STUDIO ]": ["[ 3Dスタジオ ]", "[ ARCHITECTURAL STUDIO ]"],
    "▶ Reset View": ["▶ 視点をリセット", "▶ Reset View"],
    "デスク中央上の「スキル本棚」、左右の「壁掛け実績ギャラリー（全8作品）」、および「PCモニター」をクリックすると、詳細情報と業務成果をご確認いただけます。": [
        "デスク上の「スキル本棚」、壁に掛かった「実績ギャラリー（全8作品）」、そして「モニター」をクリックすると、詳しい内容と成果をご覧いただけます。",
        "Click the skill bookshelf above the desk, the gallery of 8 projects on the wall, or the monitor to see details and results."],
    "〇 左ギャラリー (4作)": ["〇 左ギャラリー（4作品）", "〇 Left gallery (4)"],
    "〇 中央スキル本棚": ["〇 スキル本棚", "〇 Skill bookshelf"],
    "〇 右ギャラリー (4作)": ["〇 右ギャラリー（4作品）", "〇 Right gallery (4)"],
    "〇 PCワークステーション": ["〇 ワークステーション", "〇 Workstation"],
    "[操作ガイド]": ["[操作ガイド]", "[Controls]"],
    "〇 ドラッグ: 視点回転": ["〇 ドラッグ：視点を回転", "〇 Drag: rotate view"],
    "〇 スクロール: ズーム": ["〇 スクロール：ズーム", "〇 Scroll: zoom"],
    "〇 クリック: 作品・書籍・挨拶再生": ["〇 クリック：作品・本・あいさつ", "〇 Click: projects, books, greeting"],
    "Day": ["昼", "Day"],
    "Night": ["夜", "Night"],
    "▶ 挨拶を再生": ["▶ あいさつを見る", "▶ Play greeting"],
    "[ 全8作品": ["[ 全8作品", "[ All 8 projects"],
    "・書籍一覧 / Index": ["・スキル一覧", " & skills / Index"],
    "Day / Night": ["昼／夜の切り替え", "Day / Night"],

    // ---- Automation view -----------------------------------------------------------------------
    "[ WORKFLOW AUTOMATION SCREENING ROOM ]": ["[ 業務自動化シアター ]", "[ WORKFLOW AUTOMATION SCREENING ROOM ]"],
    "PC業務自動化・AI連携 ライブデモンストレーション": ["PC業務の自動化・AI連携 ライブデモ", "Live Demo: PC Task Automation & AI Integration"],
    "「手作業のExcel集計・CSV加工・メール送信・Webデータ収集」などの反復業務を、Python・GAS・AI APIで自動化した実例シミュレーションです。導入前後の工数削減効果をリアルタイムでご確認いただけます。": [
        "Excelの集計、CSVの加工、メール送信、Webからのデータ収集といった繰り返し作業を、Python・GAS・AI APIで自動化した実例のシミュレーションです。導入前後でどれだけ工数が減るのか、その場でご確認いただけます。",
        "A simulation of real projects where repetitive work—Excel aggregation, CSV processing, sending emails and collecting web data—was automated with Python, GAS and AI APIs. See the before-and-after time savings in real time."],
    "[ CASE 01 // DATA PIPELINE ]": ["[ 事例 01 // データパイプライン ]", "[ CASE 01 // DATA PIPELINE ]"],
    "大量CSV/Excel集計・DB自動同期": ["大量のCSV・Excel集計とDB自動同期", "Bulk CSV/Excel aggregation & automatic DB sync"],
    "手作業 120分/日 → 自動化 3.8秒": ["手作業 1日120分 → 自動化後 3.8秒", "Manual: 120 min/day → Automated: 3.8 s"],
    "[ CASE 02 // AI + EMAIL OPS ]": ["[ 事例 02 // AI × メール業務 ]", "[ CASE 02 // AI + EMAIL OPS ]"],
    "問い合わせAI分類・見積ドラフト自動生成": ["問い合わせのAI分類と見積もり下書きの自動作成", "AI inquiry triage & automatic quote drafts"],
    "手作業 45分/件 → 自動化 4.2秒": ["手作業 1件45分 → 自動化後 4.2秒", "Manual: 45 min/inquiry → Automated: 4.2 s"],
    "[ CASE 03 // AWS & REPORT ]": ["[ 事例 03 // AWS × レポート ]", "[ CASE 03 // AWS & REPORT ]"],
    "AWS監視ログ解析・週次レポート自動配信": ["AWS監視ログの解析と週次レポートの自動配信", "AWS log analysis & automated weekly reports"],
    "手作業 180分/週 → 自動化 完全無人": ["手作業 週180分 → 自動化後 完全無人", "Manual: 180 min/week → Automated: fully hands-off"],
    "▶ 自動化プロセスを実行する": ["▶ 自動化を実行する", "▶ Run the automation"],
    "[ BEFORE: 従来の手動作業 ]": ["[ 導入前：これまでの手作業 ]", "[ BEFORE: Manual workflow ]"],
    "STEP 01": ["ステップ 01", "STEP 01"],
    "STEP 02": ["ステップ 02", "STEP 02"],
    "STEP 03": ["ステップ 03", "STEP 03"],
    "API自動取得": ["APIで自動取得", "Auto-fetch via API"],
    "検証・AI整形": ["検証・AIで整形", "Validate & AI cleanup"],
    "DB同期・通知": ["DB同期・通知", "DB sync & notify"],
    "待機中": ["待機中", "Waiting"],
    "処理実行中...": ["処理中…", "Running..."],
    "完了 ✓": ["完了 ✓", "Done ✓"],
    "[ AFTER: Python / AI 自動実行パイプライン ]": ["[ 導入後：Python・AIによる自動パイプライン ]", "[ AFTER: Python / AI automated pipeline ]"],
    "[SYSTEM] Ready. 「▶ 自動化プロセスを実行する」ボタンを押して動作を確認してください。": [
        "[SYSTEM] 準備完了。「▶ 自動化を実行する」ボタンを押して、動きをご確認ください。",
        "[SYSTEM] Ready. Press “▶ Run the automation” to see it in action."],
    "導入効果:": ["導入効果：", "Impact:"],
    "月間約40時間の工数削減・ヒューマンエラーゼロ化": ["月あたり約40時間の工数削減、人的ミスはゼロに", "About 40 hours saved per month, with zero human error"],
    "▶ 同様の業務自動化を相談する": ["▶ 同じような自動化を相談する", "▶ Discuss a similar automation"],

    // ---- Career view ---------------------------------------------------------------------------
    "[ CAREER & PROFESSIONAL PROFILE ]": ["[ 経歴・プロフィール ]", "[ CAREER & PROFESSIONAL PROFILE ]"],
    "15年以上の開発・デザイン実績と支援領域": ["15年以上の開発・デザイン実績と対応領域", "15+ Years of Development & Design — What I Offer"],
    "Webアプリケーション開発・UI/UXデザインからAWSインフラ構築、AI・Pythonを活用した業務自動化まで、ビジネス成果から逆算した実用的なシステム設計を一貫してご提供します。": [
        "Webアプリ開発やUI/UXデザインから、AWSのインフラ構築、AIとPythonを使った業務自動化まで。ビジネスの成果から逆算した、実用的なシステムづくりを一貫してお手伝いします。",
        "From web application development and UI/UX design to AWS infrastructure and AI/Python-powered automation, I deliver practical systems designed backwards from your business goals."],
    "[ EXPERIENCE ]": ["[ 実務経験 ]", "[ EXPERIENCE ]"],
    "15+ 年": ["15年以上", "15+ yrs"],
    "システム開発・デザイン実務": ["システム開発・デザインの実務", "Hands-on development & design"],
    "[ CORE STACK ]": ["[ 主な技術 ]", "[ CORE STACK ]"],
    "Full-Stack": ["フルスタック", "Full-Stack"],
    "[ AUTOMATION ]": ["[ 自動化 ]", "[ AUTOMATION ]"],
    "Claude Code / GAS / API連携": ["Claude Code / GAS / API連携", "Claude Code / GAS / API integration"],
    "[ AVAILABILITY ]": ["[ 対応可能日 ]", "[ AVAILABILITY ]"],
    "平日・土日": ["平日・土日とも対応", "Weekdays & weekends"],
    "柔軟なスケジュール・迅速対応": ["柔軟なスケジュールで、すばやく対応", "Flexible schedule, fast response"],
    "[ 主な支援領域と提供価値 ]": ["[ 主な対応領域とご提供できる価値 ]", "[ Services & Value ]"],
    "▶ Webシステム・予約/業務アプリ開発": ["▶ Webシステム・予約／業務アプリ開発", "▶ Web systems, booking & business apps"],
    "〇 PHP (Laravel) / Python / React を用いた堅牢なWebシステム構築": ["〇 PHP（Laravel）・Python・Reactによる堅牢なWebシステム構築", "〇 Robust web systems with PHP (Laravel), Python and React"],
    "〇 高負荷・同時アクセス時の排他制御やデータ整合性を重視したDB設計": ["〇 アクセス集中時の排他制御やデータ整合性を重視したDB設計", "〇 Database design focused on locking and data integrity under heavy concurrent load"],
    "〇 既存システムの改修、保守運用、長期的な機能拡張への対応": ["〇 既存システムの改修・保守運用・長期的な機能追加", "〇 Improving existing systems, maintenance and long-term feature growth"],
    "▶ 業務プロセス自動化・AI活用支援": ["▶ 業務プロセスの自動化・AI活用", "▶ Process automation & AI adoption"],
    "〇 Python / GAS を活用した定型業務・Excel/CSV集計の完全自動化": ["〇 Python・GASによる定型業務やExcel／CSV集計の完全自動化", "〇 Full automation of routine work and Excel/CSV reporting with Python and GAS"],
    "〇 複数SaaS・ツール（Gmail・スプレッドシート・各種API）のデータ連携": ["〇 複数のSaaS・ツール（Gmail、スプレッドシート、各種API）のデータ連携", "〇 Data integration across SaaS tools (Gmail, Sheets and various APIs)"],
    "〇 生成AI（Claude等）を組み込んだ社内業務効率化ツールの構築": ["〇 生成AI（Claudeなど）を組み込んだ社内向け効率化ツールの開発", "〇 Internal productivity tools with generative AI (e.g. Claude) built in"],
    "▶ UI/UXデザイン・LP/Webサイト制作": ["▶ UI/UXデザイン・LP／Webサイト制作", "▶ UI/UX design, landing pages & websites"],
    "〇 Figma / Photoshop / Illustrator を用いた洗練された画面設計": ["〇 Figma・Photoshop・Illustratorによる洗練された画面デザイン", "〇 Polished interface design with Figma, Photoshop and Illustrator"],
    "〇 開発前の1ページ・プロトタイプ提示による認識齟齬の防止": ["〇 開発前に1ページのプロトタイプをお見せし、認識のズレを防止", "〇 A one-page prototype before development to keep everyone aligned"],
    "〇 ユーザーが迷わず成果につながる導線設計とレスポンシブ実装": ["〇 ユーザーが迷わず成果につながる導線設計とレスポンシブ対応", "〇 Clear user flows that drive results, fully responsive"],
    "▶ AWSクラウドインフラ構築・運用保守": ["▶ AWSクラウドの構築・運用保守", "▶ AWS cloud infrastructure & operations"],
    "〇 EC2 / RDS / S3 / CloudWatch を用いた安定稼働環境の構築": ["〇 EC2・RDS・S3・CloudWatchによる安定稼働環境の構築", "〇 Stable production environments on EC2, RDS, S3 and CloudWatch"],
    "〇 障害発生時のインフラ・アプリ両面からの迅速な原因切り分けと復旧": ["〇 障害時はインフラ・アプリの両面からすばやく原因を切り分けて復旧", "〇 Fast root-cause isolation and recovery across infrastructure and application"],
    "〇 IAMセキュリティ管理、バックアップ設計、AWS利用料金の最適化": ["〇 IAMのセキュリティ管理、バックアップ設計、AWS利用料金の最適化", "〇 IAM security, backup design and AWS cost optimization"],
    "[ 経歴・プロジェクト実績タイムライン ]": ["[ 経歴・プロジェクト実績 ]", "[ Career & Project Timeline ]"],
    "2022 - PRESENT // INDEPENDENT LEAD ENGINEER & DESIGNER": ["2022年〜現在 // フリーランス リードエンジニア & デザイナー", "2022 - PRESENT // INDEPENDENT LEAD ENGINEER & DESIGNER"],
    "AI連携・業務自動化・フルスタック開発支援": ["AI連携・業務自動化・フルスタック開発", "AI integration, automation & full-stack development"],
    "企業のDX推進パートナーとして、Python/GASによる業務自動化パイプライン構築、高負荷対応の予約管理システム開発、AWS本番環境の運用・コスト削減（平均25〜30%削減）、およびUI/UXリニューアルを多数統括。": [
        "企業のDX推進パートナーとして、Python／GASによる業務自動化パイプラインの構築、アクセス集中に強い予約管理システムの開発、AWS本番環境の運用とコスト削減（平均25〜30%）、UI/UXリニューアルなど、数多くのプロジェクトを統括。",
        "As a DX partner to companies, led many projects: Python/GAS automation pipelines, high-traffic booking systems, AWS production operations and cost reduction (25–30% on average), and UI/UX redesigns."],
    "2016 - 2022 // SENIOR WEB APPLICATION ARCHITECT": ["2016年〜2022年 // シニアWebアプリケーションアーキテクト", "2016 - 2022 // SENIOR WEB APPLICATION ARCHITECT"],
    "大規模Webサービス・クラウドインフラ設計構築": ["大規模Webサービスとクラウドインフラの設計・構築", "Large-scale web services & cloud infrastructure"],
    "PHP (Laravel) および Python を中心とした業務基幹システム、BtoB/BtoCプラットフォームの設計から開発、AWS移行プロジェクトをリード。セキュリティ要件定義、データベース最適化、開発チームの標準化を推進。": [
        "PHP（Laravel）とPythonを中心に、基幹業務システムやBtoB／BtoCプラットフォームの設計・開発、AWS移行プロジェクトをリード。セキュリティ要件の定義、データベースの最適化、開発チームの標準化も推進。",
        "Led the design and development of core business systems and B2B/B2C platforms centered on PHP (Laravel) and Python, as well as AWS migration projects. Drove security requirements, database optimization and team-wide standards."],
    "2010 - 2016 // WEB DEVELOPER & UI DESIGNER": ["2010年〜2016年 // Web開発者 & UIデザイナー", "2010 - 2016 // WEB DEVELOPER & UI DESIGNER"],
    "Webサイト・UI/UXデザインおよびフロント/バックエンド開発": ["Webサイト・UI/UXデザインとフロントエンド／バックエンド開発", "Websites, UI/UX design and front/back-end development"],
    "コーポレートサイト、ECサイト、WebアプリケーションのUIデザインからHTML/CSS/JavaScriptおよびPHPバックエンド実装まで一貫して担当。デザインとエンジニアリングの双方の視点を持つ基盤を確立。": [
        "コーポレートサイト、ECサイト、WebアプリのUIデザインから、HTML／CSS／JavaScript、PHPによるバックエンド実装までを一貫して担当。デザインとエンジニアリング、両方の視点を持つ土台を築く。",
        "Handled everything from UI design for corporate sites, e-commerce and web apps to HTML/CSS/JavaScript and PHP back-end implementation—building a foundation in both design and engineering."],

    // ---- Contact view --------------------------------------------------------------------------
    "[ RECEPTION DESK & CONNECTIONS ]": ["[ 受付・各種リンク ]", "[ RECEPTION DESK & CONNECTIONS ]"],
    "お問い合わせ・各種プラットフォーム連携": ["お問い合わせ・各種プラットフォーム", "Contact & Platforms"],
    "新規システム開発、業務自動化、AWS運用保守、UI/UXデザインのご相談など、お気軽にお問い合わせください。平日・土日を問わず迅速にご返信いたします。": [
        "新規システム開発、業務自動化、AWSの運用保守、UI/UXデザインなど、どんなことでもお気軽にご相談ください。平日・土日を問わず、すぐにご返信いたします。",
        "New system development, automation, AWS operations, UI/UX design—feel free to get in touch about anything. I reply quickly, weekdays and weekends alike."],
    "[ クラウドソーシング・外部プロフィール ]": ["[ クラウドソーシング・外部プロフィール ]", "[ Freelance Platforms & Profiles ]"],
    "Lancers (ランサーズ)": ["ランサーズ（Lancers）", "Lancers"],
    "法人案件・継続運用・システム開発のご依頼": ["法人案件・継続運用・システム開発のご依頼", "Corporate projects, ongoing support & system development"],
    "▶ Open": ["▶ 開く", "▶ Open"],
    "CrowdWorks (クラウドワークス)": ["クラウドワークス（CrowdWorks）", "CrowdWorks"],
    "業務自動化・Webアプリ・AWS構築のご相談": ["業務自動化・Webアプリ・AWS構築のご相談", "Automation, web apps & AWS setup"],
    "coconala (ココナラ)": ["ココナラ（coconala）", "coconala"],
    "スポット開発・自動化スクリプト・UI改善": ["スポット開発・自動化スクリプト・UI改善", "One-off development, automation scripts & UI improvements"],
    "コードサンプル・自動化ツール・技術検証": ["コードサンプル・自動化ツール・技術検証", "Code samples, automation tools & experiments"],
    "[ ご相談時の安心ポイント ]": ["[ ご相談いただく際の安心ポイント ]", "[ Why it's easy to work with me ]"],
    "〇 仕様が固まっていない段階からの整理・ご提案が可能です。": ["〇 仕様が固まっていない段階から、一緒に整理・ご提案できます。", "〇 I can help organize and propose ideas even before the specs are settled."],
    "〇 デザイン案件では、ご希望に応じて1日以内に1ページ分のプロトタイプをご提示いたします。": ["〇 デザイン案件では、ご希望に応じて1日以内に1ページ分のプロトタイプをお出しします。", "〇 For design work, I can deliver a one-page prototype within a day on request."],
    "〇 秘密保持契約（NDA）の締結にも柔軟に対応いたします。": ["〇 秘密保持契約（NDA）の締結にも柔軟に対応いたします。", "〇 Happy to sign an NDA."],
    "[ 直接メッセージを送る ]": ["[ メッセージを送る ]", "[ Send a Message ]"],
    "お名前 / 貴社名": ["お名前・会社名", "Name / Company"],
    "メールアドレス": ["メールアドレス", "Email"],
    "ご相談カテゴリ": ["ご相談の種類", "Topic"],
    "Webシステム・予約/管理アプリ開発": ["Webシステム・予約／管理アプリ開発", "Web systems, booking & admin apps"],
    "Python / GAS / AI による業務自動化": ["Python・GAS・AIによる業務自動化", "Automation with Python, GAS & AI"],
    "AWS環境構築・運用保守・コスト最適化": ["AWS環境の構築・運用保守・コスト最適化", "AWS setup, operations & cost optimization"],
    "UI/UXデザイン・LP/Webサイト制作": ["UI/UXデザイン・LP／Webサイト制作", "UI/UX design, landing pages & websites"],
    "その他・技術相談": ["その他・技術的なご相談", "Other / technical questions"],
    "ご相談内容・ご予算感": ["ご相談内容・ご予算の目安", "Details & budget"],
    "▶ 送信する / Send Inquiry": ["▶ 送信する", "▶ Send inquiry"],
    "お問い合わせを受け付けました。内容を確認のうえ、通常24時間以内にご返信いたします。": ["お問い合わせありがとうございます。内容を確認し、通常24時間以内にご返信いたします。", "Thank you for your message. I'll review it and usually reply within 24 hours."],
    "例: 株式会社〇〇 山田": ["例：株式会社〇〇　山田", "e.g. Jane Smith, Acme Inc."],
    "name@example.com": ["name@example.com", "name@example.com"],
    "解決したい課題や、ご希望の納期・ご予算などをお気軽にご記入ください。": ["解決したい課題や、ご希望の納期・ご予算などをお気軽にお書きください。", "Tell me about the problem you'd like to solve, your timeline and budget."],

    // ---- Drawer / index modal ------------------------------------------------------------------
    "[ CASE STUDY ]": ["[ 事例紹介 ]", "[ CASE STUDY ]"],
    "[ 閉じる / Close ]": ["[ 閉じる ]", "[ Close ]"],
    "[ 課題とアプローチ・成果 ]": ["[ 課題・アプローチ・成果 ]", "[ Challenge, Approach & Results ]"],
    "[ 主な実装・担当範囲 ]": ["[ 主な実装・担当範囲 ]", "[ Key Work & Responsibilities ]"],
    "◀ スタジオ全体に戻る": ["◀ スタジオ全体に戻る", "◀ Back to the studio"],
    "▶ この領域について相談する": ["▶ この分野について相談する", "▶ Discuss this area"],
    "[ STUDIO ARCHIVE INDEX ]": ["[ スタジオアーカイブ一覧 ]", "[ STUDIO ARCHIVE INDEX ]"],
    "左右壁掛け実績（全8作品）・中央本棚スキル一覧": ["壁の実績（全8作品）・本棚のスキル一覧", "Wall projects (8) & bookshelf skills"],
    "[ Close ]": ["[ 閉じる ]", "[ Close ]"],
    "[ 01. 壁掛けプロジェクト実績 (左右対称 8作品) ]": ["[ 01. 壁の実績ギャラリー（全8作品） ]", "[ 01. Project gallery (8 projects) ]"],
    "[ 02. 中央本棚スキルアーカイブ (5冊) ]": ["[ 02. 本棚のスキルアーカイブ（5冊） ]", "[ 02. Skill bookshelf (5 volumes) ]"],

    // ---- 3D tooltips / badges / monitor --------------------------------------------------------
    "WELCOME!": ["ようこそ！", "WELCOME!"],
    "[ STUDIO ENGINEER // 15+ YEARS ]": ["[ スタジオのエンジニア // 実務15年以上 ]", "[ STUDIO ENGINEER // 15+ YEARS ]"],
    "[ WORKSTATION MONITOR ]": ["[ ワークステーション ]", "[ WORKSTATION MONITOR ]"],
    "Hi, my name is David.": ["こんにちは！スタジオへようこそ。", "Hi there! Welcome to my studio."],
    "クリックすると挨拶アニメーションを再生します": ["クリックするとあいさつします", "Click to see a greeting"],
    "PC業務自動化・AIパイプライン ワークステーション": ["業務自動化・AIパイプラインのワークステーション", "Automation & AI pipeline workstation"],
    "クリックしてライブシミュレーション画面を開く": ["クリックでライブデモを開く", "Click to open the live demo"],
    "▶ モニターをクリックして実演デモを起動": ["▶ モニターをクリックするとデモが始まります", "▶ Click the monitor to start the demo"],
    "自動集計ダッシュボード // Real-Time Ledger Sync": ["自動集計ダッシュボード // リアルタイム同期", "Auto-Report Dashboard // Real-Time Ledger Sync"],
    "月間削減工数": ["月間の削減工数", "Hours saved / month"],
    "処理精度": ["処理精度", "Accuracy"],
    "処理速度": ["処理速度", "Speed"],
    "45.0 時間": ["45.0 時間", "45.0 hrs"],
    "3.8 秒": ["3.8 秒", "3.8 s"],
    "業務工数比較: 手作業 (グレー) vs 自動化後 (ゴールド)": ["工数の比較：手作業（グレー） vs 自動化後（ゴールド）", "Workload: manual (grey) vs automated (gold)"],
    "The 3D library failed to load (network or content blocker).": ["3Dライブラリを読み込めませんでした（通信環境、またはコンテンツブロッカーが原因の可能性があります）。", "The 3D library failed to load (network or content blocker)."],
    "WebGL is not available in this browser.": ["このブラウザではWebGLを利用できません。", "WebGL is not available in this browser."],
    "3D studio could not start": ["3Dスタジオを起動できませんでした", "3D studio could not start"],
    "Try enabling hardware acceleration in your browser settings, or open this page in another browser.": ["ブラウザの設定でハードウェアアクセラレーションを有効にするか、別のブラウザでお試しください。", "Try enabling hardware acceleration in your browser settings, or open this page in another browser."],

    // ---- Project data: tags --------------------------------------------------------------------
    "[ RIGHT FRAME 01 // WEB SYSTEM ]": ["[ 右展示 01 // Webシステム ]", "[ RIGHT FRAME 01 // WEB SYSTEM ]"],
    "[ RIGHT FRAME 02 // DX & AUTOMATION ]": ["[ 右展示 02 // DX・自動化 ]", "[ RIGHT FRAME 02 // DX & AUTOMATION ]"],
    "[ RIGHT FRAME 03 // CLOUD INFRASTRUCTURE ]": ["[ 右展示 03 // クラウドインフラ ]", "[ RIGHT FRAME 03 // CLOUD INFRASTRUCTURE ]"],
    "[ RIGHT FRAME 04 // UI/UX DESIGN SYSTEM ]": ["[ 右展示 04 // UI/UXデザイン ]", "[ RIGHT FRAME 04 // UI/UX DESIGN SYSTEM ]"],
    "[ LEFT FRAME 05 // AI & OCR WORKFLOW ]": ["[ 左展示 05 // AI・OCRワークフロー ]", "[ LEFT FRAME 05 // AI & OCR WORKFLOW ]"],
    "[ LEFT FRAME 06 // SYSTEM MODERNIZATION ]": ["[ 左展示 06 // システム刷新 ]", "[ LEFT FRAME 06 // SYSTEM MODERNIZATION ]"],
    "[ LEFT FRAME 07 // EC & INVENTORY SYNC ]": ["[ 左展示 07 // EC・在庫連携 ]", "[ LEFT FRAME 07 // EC & INVENTORY SYNC ]"],
    "[ LEFT FRAME 08 // EXECUTIVE BI PORTAL ]": ["[ 左展示 08 // 経営BIポータル ]", "[ LEFT FRAME 08 // EXECUTIVE BI PORTAL ]"],

    // ---- Project 01: booking system ------------------------------------------------------------
    "高負荷対応・オンライン予約管理システム": ["アクセス集中に強いオンライン予約管理システム", "High-Traffic Online Booking System"],
    "PostgreSQL 排他制御 / Laravel / Next.js": ["PostgreSQL 排他制御 / Laravel / Next.js", "PostgreSQL row locking / Laravel / Next.js"],
    "二重予約発生率": ["二重予約の発生率", "Double-booking rate"],
    "0.00% (完全排他制御)": ["0.00%（完全な排他制御）", "0.00% (fully locked)"],
    "主要技術構成": ["主な使用技術", "Tech stack"],
    "予約受付開始直後にアクセスが集中する新規サービス向けに、スマートフォン最適化された予約画面と管理者向け一元管理システムを構築。データベース層でのトランザクションおよび行ロック制御を実装し、同時アクセス時の二重予約やデータ不整合を完全に防止しました。": [
        "受付開始の直後にアクセスが集中する新サービスに向けて、スマートフォンに最適化した予約画面と、管理者向けの一元管理システムを開発しました。データベース層でトランザクションと行ロックを制御し、同時アクセス時の二重予約やデータの不整合を完全に防いでいます。",
        "For a new service that gets a rush of traffic the moment bookings open, I built a mobile-optimized booking flow and a central admin system. Transactions and row-level locks at the database layer completely prevent double bookings and data inconsistencies under concurrent access."],
    "〇 サーバー・DB両面での厳格な排他制御とリアルタイム空き状況同期": ["〇 サーバーとDBの両面での厳密な排他制御と、空き状況のリアルタイム同期", "〇 Strict locking on both server and database, with real-time availability sync"],
    "〇 スマホユーザーが迷わず3ステップで完了できるUI/UX設計": ["〇 スマホでも迷わず3ステップで予約が完了するUI/UX設計", "〇 UI/UX that lets mobile users finish in three clear steps"],
    "〇 管理者向け予約枠設定・キャンセル管理・CSV出力機能の実装": ["〇 管理者向けの予約枠設定・キャンセル管理・CSV出力機能を実装", "〇 Admin tools for slot settings, cancellations and CSV export"],

    // ---- Project 02: automation pipeline -------------------------------------------------------
    "マルチツール業務自動化パイプライン構築": ["複数ツールをつなぐ業務自動化パイプライン", "Multi-Tool Business Automation Pipeline"],
    "約 45時間 / 月 削減": ["月あたり約45時間を削減", "≈45 hours saved per month"],
    "複数拠点から日々送付される非定型Excel・CSVデータの収集、表記ゆれクレンジング、基幹データベースへの登録、および異常値アラート通知を完全自動化。手作業による転記ミスをゼロにし、担当者が本来注力すべき分析業務へシフトできる環境を実現しました。": [
        "複数の拠点から毎日届く形式バラバラのExcel・CSVデータの収集、表記ゆれの整形、基幹データベースへの登録、異常値のアラート通知までを完全に自動化しました。手作業による転記ミスはゼロになり、担当者が本来の分析業務に集中できるようになりました。",
        "Fully automated the collection of inconsistent Excel/CSV files sent daily from multiple branches, cleanup of formatting differences, loading into the core database, and anomaly alerts. Manual entry errors dropped to zero, and staff could focus on the analysis they're actually there to do."],
    "〇 Pythonスクリプトによる高速データ検証・フォーマット自動変換": ["〇 Pythonスクリプトによる高速なデータ検証とフォーマットの自動変換", "〇 Fast data validation and automatic format conversion with Python"],
    "〇 Google Workspace (Gmail / スプレッドシート) とのシームレスなAPI連携": ["〇 Google Workspace（Gmail・スプレッドシート）とのシームレスなAPI連携", "〇 Seamless API integration with Google Workspace (Gmail, Sheets)"],
    "〇 エラー検知時の自動リトライおよびチャット通知による運用負荷軽減": ["〇 エラー発生時の自動リトライとチャット通知で、運用の手間を軽減", "〇 Automatic retries and chat alerts on errors to lighten the operational load"],

    // ---- Project 03: AWS ----------------------------------------------------------------------
    "AWS本番環境 運用監視・コスト最適化": ["AWS本番環境の運用監視とコスト最適化", "AWS Production Monitoring & Cost Optimization"],
    "EC2 / RDS / CloudWatch / IAM 監査": ["EC2 / RDS / CloudWatch / IAM監査", "EC2 / RDS / CloudWatch / IAM audit"],
    "インフラ維持コスト": ["インフラの維持コスト", "Infrastructure cost"],
    "月額 30% 削減達成": ["月額30%の削減を達成", "30% lower monthly cost"],
    "既存AWS環境の安定稼働と属人化解消を目的に、CloudWatchアラーム閾値の最適化、ALB/アプリログによる障害切り分け手順の標準化、IAM最小権限見直しを実施。さらに過剰スペックのインスタンスと不要ストレージを精査し、可用性を高めつつコストを大幅に圧縮しました。": [
        "既存のAWS環境を安定させ、特定の人に頼らず運用できるよう、CloudWatchアラームのしきい値を最適化し、ALB・アプリログを使った障害切り分けの手順を標準化。IAMの権限も最小限に見直しました。さらに過剰なスペックのインスタンスや不要なストレージを洗い出し、可用性を高めながらコストを大きく削減しています。",
        "To stabilize an existing AWS environment and remove reliance on any one person, I tuned CloudWatch alarm thresholds, standardized incident triage using ALB and application logs, and tightened IAM to least privilege. I also audited oversized instances and unused storage, raising availability while cutting costs significantly."],
    "〇 障害予兆の早期検知とインフラ・アプリ双方からの迅速な原因特定": ["〇 障害の予兆を早めに検知し、インフラ・アプリの両面からすばやく原因を特定", "〇 Early warning of incidents and fast root-cause analysis across infra and app"],
    "〇 RDSスナップショット・バックアップ復旧手順の整備とリストア検証": ["〇 RDSスナップショット・バックアップからの復旧手順を整備し、リストアを検証", "〇 Documented RDS snapshot/backup recovery and tested restores"],
    "〇 Cost Explorer分析に基づくリザーブド/適正インスタンス構成の提案": ["〇 Cost Explorerの分析にもとづくリザーブド・適正インスタンス構成の提案", "〇 Reserved and right-sized instance plans based on Cost Explorer analysis"],

    // ---- Project 04: SaaS redesign -------------------------------------------------------------
    "BtoB SaaS 管理画面リニューアル & プロトタイプ": ["BtoB SaaS管理画面のリニューアルとプロトタイプ", "B2B SaaS Admin Redesign & Prototype"],
    "業務操作完了スピード": ["操作完了までのスピード", "Task completion speed"],
    "従来比 1.8倍 向上": ["従来の1.8倍に向上", "1.8× faster than before"],
    "機能が複雑化し操作に迷いが生じていた業務向けWebアプリケーションのUI/UXを全面刷新。要件定義の初期段階でFigmaによるインタラクティブな1ページプロトタイプを提示し、クライアントと完成イメージを早期に共有したうえで迷いのない導線へ再設計しました。": [
        "機能が増えて操作に迷いやすくなっていた業務用WebアプリのUI/UXを全面的に刷新しました。要件定義の早い段階でFigmaの操作できる1ページプロトタイプをお見せし、完成イメージをクライアントと共有したうえで、迷わない導線に作り直しています。",
        "Completely redesigned the UI/UX of a business web app whose growing feature set had become confusing. Early in requirements, I shared an interactive one-page Figma prototype so the client could see the result, then rebuilt the flows to be clear and direct."],
    "〇 情報設計（IA）の再構築による画面遷移数の削減と視認性向上": ["〇 情報設計（IA）を組み直し、画面遷移を減らして見やすさを向上", "〇 Reworked information architecture: fewer screens, better readability"],
    "〇 開発前に操作感を検証できるFigmaプロトタイプの迅速な作成": ["〇 開発前に操作感を確かめられるFigmaプロトタイプをすばやく作成", "〇 Quick Figma prototypes to test the feel before development"],
    "〇 保守性と拡張性の高いコンポーネントベースでのフロントエンド実装": ["〇 保守・拡張しやすいコンポーネントベースのフロントエンド実装", "〇 Maintainable, extensible component-based front end"],

    // ---- Project 05: AI OCR -------------------------------------------------------------------
    "AI帳票OCR解析・請求書データ自動仕訳システム": ["AIによる帳票OCR解析と請求書の自動仕訳システム", "AI Invoice OCR & Automatic Bookkeeping"],
    "伝票処理リードタイム": ["伝票処理にかかる時間", "Invoice processing time"],
    "92% 短縮 (1件 3秒)": ["92%短縮（1件3秒）", "92% faster (3 s each)"],
    "PDFやスキャン画像で届く取引先ごとの異なるフォーマットの請求書・納品書を、マルチモーダルAIとPythonで高精度に構造化データへ変換。会計ソフト向けCSVの自動生成と異常金額の自動フラグ付けにより、経理部門の月末残業を大幅に削減しました。": [
        "取引先ごとに形式の違う請求書・納品書（PDFやスキャン画像）を、マルチモーダルAIとPythonで高い精度の構造化データに変換。会計ソフト用CSVの自動作成と、異常な金額の自動チェックにより、経理部門の月末の残業を大幅に減らしました。",
        "Converted invoices and delivery notes—PDFs and scans in each supplier's own format—into accurate structured data with multimodal AI and Python. Automatic CSV generation for the accounting software and automatic flagging of unusual amounts greatly reduced month-end overtime in accounting."],
    "〇 非定型レイアウトのPDF/画像から明細行・税区分を自動抽出": ["〇 レイアウトが決まっていないPDF・画像から、明細行と税区分を自動抽出", "〇 Extracts line items and tax categories from free-form PDFs and images"],
    "〇 過去取引データとの自動照合による二重請求・単価ミス検知": ["〇 過去の取引データと自動照合し、二重請求や単価ミスを検知", "〇 Cross-checks past transactions to catch duplicate charges and price errors"],
    "〇 確認画面UIの実装により、人間の承認フローもスムーズに統合": ["〇 確認画面を用意し、人による承認フローもスムーズに組み込み", "〇 A review screen that fits human approval smoothly into the flow"],

    // ---- Project 06: Laravel migration --------------------------------------------------------
    "レガシーPHP基幹システム Laravel刷新・無停止移行": ["レガシーPHP基幹システムのLaravel刷新と無停止移行", "Legacy PHP to Laravel: Zero-Downtime Migration"],
    "APIレスポンス速度": ["APIの応答速度", "API response time"],
    "平均 3.4倍 高速化": ["平均3.4倍に高速化", "3.4× faster on average"],
    "保守が困難になっていた旧バージョンのPHP業務システムを、最新のLaravelフレームワークおよびコンテナ基盤へ段階的に刷新。N+1クエリの解消とインデックス再設計を行い、データ整合性を保ったまま無停止での本番切り替えを完遂しました。": [
        "保守が難しくなっていた古いPHPの業務システムを、最新のLaravelとコンテナ基盤へ段階的に移行しました。N+1クエリの解消とインデックスの再設計を行い、データの整合性を保ったまま、サービスを止めずに本番を切り替えています。",
        "Gradually moved an aging, hard-to-maintain PHP business system onto the latest Laravel and a container platform. Fixed N+1 queries and redesigned indexes, then cut over production with zero downtime while keeping data fully consistent."],
    "〇 既存データベース構造の互換性を維持した段階的リファクタリング": ["〇 既存のデータベース構造との互換性を保った段階的なリファクタリング", "〇 Incremental refactoring that keeps the existing database compatible"],
    "〇 自動テストスイートの導入によるデグレ防止と保守性の向上": ["〇 自動テストを導入し、デグレを防いで保守性を向上", "〇 Automated test suite to prevent regressions and ease maintenance"],
    "〇 セキュリティ脆弱性対策（CSRF/XSS/SQLインジェクション）の徹底": ["〇 CSRF・XSS・SQLインジェクションなどの脆弱性対策を徹底", "〇 Thorough protection against CSRF, XSS and SQL injection"],

    // ---- Project 07: EC inventory -------------------------------------------------------------
    "複数ECモール在庫・受注一元管理＆自動出荷連携": ["複数ECモールの在庫・受注一元管理と出荷の自動連携", "Multi-Marketplace Inventory, Orders & Shipping Sync"],
    "Shopify / 楽天 / Amazon API / GAS": ["Shopify / 楽天 / Amazon API / GAS", "Shopify / Rakuten / Amazon API / GAS"],
    "売り越し・欠品トラブル": ["売り越し・欠品のトラブル", "Overselling & stockouts"],
    "導入後 0件 達成": ["導入後0件を達成", "Zero since launch"],
    "自社ECサイトと複数の大手モール間で発生していた手動在庫更新のタイムラグを解消するため、Webhookと定期バッチを組み合わせたリアルタイム在庫同期エンジンを開発。受注データの自動集約から倉庫出荷指示CSVの生成までを一気通貫で自動化しました。": [
        "自社ECサイトと複数の大手モールの間で起きていた、手作業での在庫更新のタイムラグをなくすため、Webhookと定期バッチを組み合わせたリアルタイム在庫同期の仕組みを開発。受注データの自動集約から、倉庫への出荷指示CSVの作成までを一気通貫で自動化しました。",
        "To eliminate the lag from manual stock updates between the company's own store and several major marketplaces, I built a real-time inventory sync engine combining webhooks and scheduled batches. Everything from collecting orders to generating warehouse shipping CSVs is automated end to end."],
    "〇 受注発生から数秒以内の全モール在庫数自動引き当て処理": ["〇 受注から数秒以内に、全モールの在庫を自動で引き当て", "〇 Stock allocated across all marketplaces within seconds of an order"],
    "〇 配送業者フォーマット別の送り状データ一括生成機能": ["〇 配送業者ごとのフォーマットで送り状データを一括作成", "〇 Bulk shipping labels in each carrier's format"],
    "〇 在庫閾値割れ時の自動発注リマインドおよびSlack通知": ["〇 在庫がしきい値を下回ったら、発注リマインドとSlack通知を自動送信", "〇 Automatic reorder reminders and Slack alerts when stock runs low"],

    // ---- Project 08: BI dashboard -------------------------------------------------------------
    "経営KPI・リアルタイム売上分析BIダッシュボード": ["経営KPIとリアルタイム売上分析のBIダッシュボード", "Executive KPI & Real-Time Sales BI Dashboard"],
    "経営レポート作成工数": ["経営レポートの作成工数", "Report prep time"],
    "毎週 6時間 → 自動即時": ["毎週6時間 → 自動で即時", "6 hrs/week → instant & automatic"],
    "営業・マーケティング・財務の各部門に散在していたデータを自動統合し、経営層がスマートフォンやPCからリアルタイムに粗利・LTV・部門別予実を把握できる専用BIポータルを構築。直感的なUIデザインと高速な集計クエリにより意思決定スピードを加速しました。": [
        "営業・マーケティング・財務に散らばっていたデータを自動で統合し、経営陣がスマートフォンやPCから粗利・LTV・部門別の予実をリアルタイムで確認できる専用BIポータルを構築しました。直感的なUIと高速な集計で、意思決定のスピードを上げています。",
        "Automatically unified data scattered across sales, marketing and finance into a dedicated BI portal where executives can check gross margin, LTV and budget-vs-actual by department in real time from phone or PC. An intuitive UI and fast queries speed up decision-making."],
    "〇 部門別・商品別の売上推移と目標達成率のリアルタイム可視化": ["〇 部門別・商品別の売上推移と目標達成率をリアルタイムに可視化", "〇 Real-time sales trends and goal attainment by department and product"],
    "〇 権限ロールに応じた閲覧データ制御とセキュアな認証基盤": ["〇 権限に応じた閲覧範囲の制御と、安全な認証基盤", "〇 Role-based data access and secure authentication"],
    "〇 役員会議用サマリーレポートのワンクリックPDF/CSVエクスポート": ["〇 役員会議用のサマリーをワンクリックでPDF・CSV出力", "〇 One-click PDF/CSV summaries for board meetings"],

    // ---- Bookshelf -----------------------------------------------------------------------------
    "Python / AI": ["Python・AI", "Python / AI"],
    "AWS Infra": ["AWSインフラ", "AWS Infra"],
    "UI/UX Design": ["UI/UXデザイン", "UI/UX Design"],
    "Automation / GAS": ["自動化・GAS", "Automation / GAS"],
    "[ BOOKSHELF VOL.01 // PYTHON & AI ]": ["[ 本棚 VOL.01 // Python・AI ]", "[ BOOKSHELF VOL.01 // PYTHON & AI ]"],
    "[ BOOKSHELF VOL.02 // WEB BACKEND ]": ["[ 本棚 VOL.02 // Webバックエンド ]", "[ BOOKSHELF VOL.02 // WEB BACKEND ]"],
    "[ BOOKSHELF VOL.03 // CLOUD & SECURITY ]": ["[ 本棚 VOL.03 // クラウド・セキュリティ ]", "[ BOOKSHELF VOL.03 // CLOUD & SECURITY ]"],
    "[ BOOKSHELF VOL.04 // DESIGN & PROTOTYPE ]": ["[ 本棚 VOL.04 // デザイン・プロトタイプ ]", "[ BOOKSHELF VOL.04 // DESIGN & PROTOTYPE ]"],
    "[ BOOKSHELF VOL.05 // WORKFLOW & GAS ]": ["[ 本棚 VOL.05 // 業務フロー・GAS ]", "[ BOOKSHELF VOL.05 // WORKFLOW & GAS ]"],
    "Python 業務自動化 & 生成AI実務統合": ["Pythonによる業務自動化と生成AIの実務活用", "Python Automation & Practical Generative AI"],
    "実務経験年数": ["実務経験", "Experience"],
    "15+ 年 (開発・自動化)": ["15年以上（開発・自動化）", "15+ yrs (development & automation)"],
    "主なツール・技術": ["主なツール・技術", "Main tools & tech"],
    "データ処理、Webスクレイピング、API連携スクリプトの構築から、Claude Code等の最新AI開発環境を活用した高速かつ高品質なシステム実装まで対応。単なる技術導入ではなく「何時間の工数が削減できるか」というビジネス成果に直結する自動化を設計します。": [
        "データ処理やWebスクレイピング、API連携スクリプトの作成から、Claude Codeなど最新のAI開発環境を活かしたスピーディーで質の高いシステム実装まで対応します。技術を入れること自体が目的ではなく、「何時間の工数を減らせるか」というビジネスの成果に直結する自動化を設計します。",
        "From data processing, web scraping and API scripts to fast, high-quality implementation using the latest AI tools like Claude Code. Rather than adopting technology for its own sake, I design automation tied directly to business results: how many hours it actually saves."],
    "〇 Excel・CSVの高度なデータクレンジング・集計レポート自動生成": ["〇 Excel・CSVの高度なデータ整形と、集計レポートの自動作成", "〇 Advanced Excel/CSV cleanup and automatic reports"],
    "〇 社内ドキュメント検索や問い合わせ対応を効率化するAIワークフロー構築": ["〇 社内ドキュメント検索や問い合わせ対応を効率化するAIワークフロー", "〇 AI workflows for internal document search and inquiry handling"],
    "〇 既存業務システムと外部クラウドAPIを繋ぐ堅牢なバッチ処理開発": ["〇 既存の業務システムと外部クラウドAPIをつなぐ堅牢なバッチ処理", "〇 Robust batch jobs linking existing systems with cloud APIs"],
    "PHP / Laravel Webシステム・データベース設計": ["PHP・LaravelによるWebシステムとデータベース設計", "PHP / Laravel Web Systems & Database Design"],
    "15+ 年 (設計・構築・保守)": ["15年以上（設計・構築・保守）", "15+ yrs (design, build & maintain)"],
    "予約管理システム、会員制プラットフォーム、業務基幹Webアプリなど、長期運用を前提とした保守性の高いバックエンドを構築。アクセス集中時の排他制御やSQLチューニング、セキュリティ対策（XSS/SQLi/CSRF防止）を徹底します。": [
        "予約管理システムや会員制プラットフォーム、基幹業務のWebアプリなど、長く使い続けることを前提にした保守しやすいバックエンドを構築します。アクセス集中時の排他制御、SQLのチューニング、XSS・SQLインジェクション・CSRFへのセキュリティ対策も徹底します。",
        "I build maintainable back ends meant to run for years—booking systems, membership platforms and core business web apps—with careful locking under heavy traffic, SQL tuning and thorough security (XSS, SQL injection and CSRF protection)."],
    "〇 トランザクション整合性を重視したリレーショナルDB設計": ["〇 トランザクションの整合性を重視したリレーショナルDB設計", "〇 Relational database design built around transactional integrity"],
    "〇 既存レガシーPHPシステムのモダナイズ・機能追加・保守引き継ぎ": ["〇 既存のレガシーPHPシステムのモダン化・機能追加・保守の引き継ぎ", "〇 Modernizing legacy PHP systems, adding features and taking over maintenance"],
    "〇 WordPressの高度なカスタマイズおよびAPI連携基盤の構築": ["〇 WordPressの高度なカスタマイズとAPI連携の基盤づくり", "〇 Advanced WordPress customization and API integrations"],
    "AWS クラウドインフラ構築・安定運用保守": ["AWSクラウドインフラの構築と安定運用", "AWS Cloud Infrastructure & Reliable Operations"],
    "対応領域": ["対応範囲", "Scope"],
    "設計・構築・監視・コスト改善": ["設計・構築・監視・コスト改善", "Design, build, monitoring & cost savings"],
    "主なAWSサービス": ["主なAWSサービス", "Main AWS services"],
    "本番システムの安定稼働を支えるAWSインフラの設計・運用保守を担当。障害発生時のログ調査・原因切り分けから、バックアップ・復旧手順の整備、IAM権限の適正化、無駄なリソース削減による月額コスト改善までトータルに支援します。": [
        "本番システムの安定稼働を支えるAWSインフラの設計と運用保守を担当します。障害時のログ調査や原因の切り分けから、バックアップ・復旧手順の整備、IAM権限の適正化、ムダなリソースの削減による月額コストの改善まで、まとめてサポートします。",
        "I design and operate the AWS infrastructure that keeps production systems running—covering incident log analysis and triage, backup and recovery procedures, right-sized IAM permissions, and lower monthly bills by trimming unused resources."],
    "〇 CloudWatchメトリクス・アラーム最適化による障害の早期検知": ["〇 CloudWatchのメトリクス・アラームを最適化し、障害を早期に検知", "〇 Early incident detection through tuned CloudWatch metrics and alarms"],
    "〇 インフラ側・アプリケーション側の双方を見据えた迅速な障害切り分け": ["〇 インフラとアプリケーションの両面から、すばやく障害を切り分け", "〇 Fast triage that looks at both infrastructure and application"],
    "〇 属人化を防ぐ運用手順書・障害対応ドキュメントの整備": ["〇 特定の人に頼らない運用手順書・障害対応ドキュメントの整備", "〇 Runbooks and incident docs so knowledge isn't locked in one person"],
    "UI/UXデザイン・LP制作・プロトタイピング": ["UI/UXデザイン・LP制作・プロトタイピング", "UI/UX Design, Landing Pages & Prototyping"],
    "デザインツール": ["デザインツール", "Design tools"],
    "フロントエンド実装": ["フロントエンド実装", "Front-end implementation"],
    "エンジニアリングの知識を兼ね備えたデザイナーとして、実装可能性と美しさを両立したUI/UXを提供。新規WebサイトやLP、Webアプリ開発においては、着手前に1ページ分のデザインプロトタイプを作成し、完成イメージを共有しながら進めることが可能です。": [
        "エンジニアリングの知識をもつデザイナーとして、実装しやすさと美しさを両立したUI/UXをご提供します。新しいWebサイトやLP、Webアプリの開発では、着手前に1ページ分のデザインプロトタイプをお作りし、完成イメージを共有しながら進められます。",
        "As a designer with an engineering background, I deliver UI/UX that is both beautiful and buildable. For new websites, landing pages and web apps, I can create a one-page design prototype before work starts so we share the vision as we go."],
    "〇 ユーザーの行動導線から逆算した分かりやすい画面レイアウト設計": ["〇 ユーザーの動きから逆算した、わかりやすい画面レイアウト", "〇 Clear layouts designed backwards from how users actually move"],
    "〇 スマートフォン・タブレット・PCすべてに最適化されたレスポンシブ実装": ["〇 スマートフォン・タブレット・PCのすべてに最適化したレスポンシブ対応", "〇 Responsive builds optimized for phones, tablets and desktops"],
    "〇 Figmaを用いたコンポーネント設計およびデザインシステム構築": ["〇 Figmaによるコンポーネント設計とデザインシステムの構築", "〇 Component design and design systems in Figma"],
    "Google Workspace 連携・業務プロセス自動化": ["Google Workspace連携による業務プロセスの自動化", "Google Workspace Integration & Process Automation"],
    "導入効果": ["導入効果", "Impact"],
    "定型作業の自動化・ミスゼロ化": ["定型作業の自動化とミスゼロ化", "Routine work automated, zero errors"],
    "連携サービス": ["連携サービス", "Integrations"],
    "サーバー維持費をかけずに導入できるGoogle Apps Script (GAS) や各種Webhookを活用し、中小企業や現場チームの日常業務をスピーディーに自動化。納品後も現場担当者様が安心して運用できるシンプルな構成を心がけています。": [
        "サーバー費用をかけずに導入できるGoogle Apps Script（GAS）や各種Webhookを活用し、中小企業や現場チームの日常業務をスピーディーに自動化します。納品後も現場の皆さまが安心して使い続けられる、シンプルな構成を心がけています。",
        "Using Google Apps Script (GAS) and webhooks—no server costs required—I quickly automate the everyday work of small businesses and on-site teams, keeping the setup simple so your staff can run it confidently after handover."],
    "〇 フォーム受付から見積書PDF自動生成・メール送信までの自動化": ["〇 フォーム受付から見積書PDFの作成・メール送信までを自動化", "〇 From form submission to quote PDF and email, fully automated"],
    "〇 スプレッドシートをデータベースとした簡易業務管理ツールの構築": ["〇 スプレッドシートをデータベースにした手軽な業務管理ツール", "〇 Lightweight management tools using Sheets as the database"],
    "〇 定期レポートの自動集計およびSlack/Chatworkへの定時通知": ["〇 定期レポートの自動集計と、Slack・Chatworkへの定時通知", "〇 Automatic recurring reports with scheduled Slack/Chatwork posts"],

    // ---- Automation scenarios -----------------------------------------------------------------
    "[ CASE 01 // PYTHON + POSTGRESQL + GOOGLE SHEETS API ]": ["[ 事例 01 // Python + PostgreSQL + Google Sheets API ]", "[ CASE 01 // PYTHON + POSTGRESQL + GOOGLE SHEETS API ]"],
    "[ CASE 02 // CLAUDE AI API + GMAIL + CRM WEBHOOK ]": ["[ 事例 02 // Claude AI API + Gmail + CRM Webhook ]", "[ CASE 02 // CLAUDE AI API + GMAIL + CRM WEBHOOK ]"],
    "[ CASE 03 // AWS CLOUDWATCH + PYTHON BOTO3 + SLACK ]": ["[ 事例 03 // AWS CloudWatch + Python Boto3 + Slack ]", "[ CASE 03 // AWS CLOUDWATCH + PYTHON BOTO3 + SLACK ]"],
    "複数拠点の売上CSVデータクレンジング・異常値検知・DB一括登録": ["複数拠点の売上CSVの整形・異常値検知・DB一括登録", "Multi-branch sales CSV cleanup, anomaly detection & bulk DB load"],
    "所要時間: 約120分 / 日": ["所要時間：1日あたり約120分", "Time: about 120 min / day"],
    "処理時間: 3.8秒 (工数 99.9% 削減)": ["処理時間：3.8秒（工数を99.9%削減）", "Time: 3.8 s (99.9% less work)"],
    "〇 1. 複数メール・フォルダからのファイル収集 (30分)": ["〇 1. 複数のメール・フォルダからファイルを集める（30分）", "〇 1. Gather files from multiple emails and folders (30 min)"],
    "担当者ごとに異なるフォーマットのExcel/CSVを手動ダウンロード。": ["担当者ごとに形式の違うExcel・CSVを手作業でダウンロード。", "Manually download Excel/CSV files, each in a different format."],
    "〇 2. 目視での表記ゆれ修正・重複チェック (50分)": ["〇 2. 表記ゆれの修正と重複チェックを目視で（50分）", "〇 2. Fix inconsistencies and check duplicates by eye (50 min)"],
    "全角半角の統一、日付フォーマット修正、欠損データの確認作業。": ["全角・半角の統一、日付形式の修正、欠けているデータの確認。", "Unify character widths, fix date formats, check for missing data."],
    "〇 3. 基幹システムへの転記と集計レポート作成 (40分)": ["〇 3. 基幹システムへの転記と集計レポートの作成（40分）", "〇 3. Re-enter into the core system and build the report (40 min)"],
    "コピー＆ペーストによる入力ミスのリスクと残業の常態化。": ["コピー＆ペーストによる入力ミスのリスクと、慢性的な残業。", "Copy-paste errors and constant overtime."],
    "顧客問い合わせメールのAI要件解析・見積ドラフト自動作成": ["問い合わせメールをAIで要件分析し、見積もりの下書きを自動作成", "AI analysis of inquiry emails & automatic quote drafts"],
    "所要時間: 約45分 / 件": ["所要時間：1件あたり約45分", "Time: about 45 min / inquiry"],
    "処理時間: 4.2秒 (初回返信スピード 10倍)": ["処理時間：4.2秒（初回の返信が10倍速く）", "Time: 4.2 s (10× faster first reply)"],
    "〇 1. 問い合わせメールの読解と過去案件の検索 (15分)": ["〇 1. 問い合わせメールを読み、過去の案件を探す（15分）", "〇 1. Read the inquiry and search past projects (15 min)"],
    "長文の要望から必要技術・予算感・希望納期を手作業で抽出。": ["長いご要望から、必要な技術・予算感・希望納期を手作業で拾い出す。", "Manually pull required tech, budget and deadline out of a long request."],
    "〇 2. 概算工数の算出と提案構成の作成 (20分)": ["〇 2. おおよその工数を見積もり、提案の構成を作る（20分）", "〇 2. Estimate effort and outline the proposal (20 min)"],
    "過去の類似見積書を探し出し、項目を書き換えてドラフト作成。": ["過去の似た見積書を探し、項目を書き換えて下書きを作成。", "Find a similar old quote and rewrite it into a draft."],
    "〇 3. CRMへの顧客情報登録と担当者アサイン (10分)": ["〇 3. CRMへの顧客登録と担当者の割り当て（10分）", "〇 3. Enter the client into the CRM and assign an owner (10 min)"],
    "スプレッドシートや管理ツールへの二重入力作業。": ["スプレッドシートや管理ツールへの二重入力。", "Duplicate data entry into spreadsheets and tools."],
    "AWS本番環境リソース監視・ログ異常切り分け・週次コスト報告": ["AWS本番環境の監視・ログ異常の切り分け・週次コスト報告", "AWS production monitoring, log triage & weekly cost report"],
    "所要時間: 約180分 / 週": ["所要時間：1週間あたり約180分", "Time: about 180 min / week"],
    "処理時間: 完全無人・リアルタイム検知": ["処理時間：完全無人・リアルタイムで検知", "Time: fully hands-off, real-time detection"],
    "〇 1. AWSマネジメントコンソールでの目視確認 (60分)": ["〇 1. AWSマネジメントコンソールを目視で確認（60分）", "〇 1. Check the AWS console by eye (60 min)"],
    "EC2 CPU負荷、RDSストレージ残量、バックアップ成否を手動巡回。": ["EC2のCPU負荷、RDSの空き容量、バックアップの成否を手作業で見て回る。", "Manually check EC2 CPU, RDS storage and backup status."],
    "〇 2. エラーログの抽出と原因調査 (70分)": ["〇 2. エラーログを抽出して原因を調べる（70分）", "〇 2. Pull error logs and investigate (70 min)"],
    "ALBアクセスログとアプリログを突合し、ボトルネックを特定。": ["ALBのアクセスログとアプリのログを突き合わせ、ボトルネックを特定。", "Match ALB access logs with app logs to find the bottleneck."],
    "〇 3. Cost Explorer確認と週次報告書の作成 (50分)": ["〇 3. Cost Explorerを確認し、週次報告書を作る（50分）", "〇 3. Review Cost Explorer and write the weekly report (50 min)"],
    "サービス別の利用料金推移をまとめ、システム部へ報告。": ["サービス別の利用料金の推移をまとめ、システム部へ報告。", "Summarize cost trends per service and report to IT."],
    "[00:00.12] Connecting to Google Drive & Gmail API...": ["[00:00.12] Google Drive・Gmail APIに接続しています…", "[00:00.12] Connecting to Google Drive & Gmail API..."],
    "[00:00.84] Fetched 14 CSV/Excel files (Total: 12,480 rows).": ["[00:00.84] CSV・Excelファイルを14件取得しました（合計12,480行）。", "[00:00.84] Fetched 14 CSV/Excel files (Total: 12,480 rows)."],
    "[00:01.65] Running schema validation & normalizing encoding (UTF-8)...": ["[00:01.65] スキーマを検証し、文字コードをUTF-8に統一しています…", "[00:01.65] Running schema validation & normalizing encoding (UTF-8)..."],
    "[00:02.40] Detected 3 duplicate rows -> Auto-quarantined to audit_log.": ["[00:02.40] 重複行を3件検出 → audit_logへ自動で隔離しました。", "[00:02.40] Detected 3 duplicate rows -> Auto-quarantined to audit_log."],
    "[00:03.15] Executing PostgreSQL batch upsert transaction...": ["[00:03.15] PostgreSQLへ一括アップサートを実行しています…", "[00:03.15] Executing PostgreSQL batch upsert transaction..."],
    "[00:03.80] SUCCESS: 12,477 records synced. Executive summary posted.": ["[00:03.80] 完了：12,477件を同期し、経営サマリーを投稿しました。", "[00:03.80] SUCCESS: 12,477 records synced. Executive summary posted."],
    "[00:00.15] Webhook triggered: New inquiry received from client.": ["[00:00.15] Webhookを受信：お客様から新しいお問い合わせが届きました。", "[00:00.15] Webhook triggered: New inquiry received from client."],
    "[00:01.10] Extracting technical requirements & constraints via AI...": ["[00:01.10] AIで技術要件と制約を抽出しています…", "[00:01.10] Extracting technical requirements & constraints via AI..."],
    "[00:02.25] Matched stack: Laravel + AWS RDS. Estimating phase hours...": ["[00:02.25] 技術構成を判定：Laravel + AWS RDS。工程ごとの工数を見積もっています…", "[00:02.25] Matched stack: Laravel + AWS RDS. Estimating phase hours..."],
    "[00:03.40] Generating structured Japanese proposal & estimate draft...": ["[00:03.40] 日本語の提案書と見積もりの下書きを作成しています…", "[00:03.40] Generating structured Japanese proposal & estimate draft..."],
    "[00:04.20] SUCCESS: Draft saved in Gmail & synced to CRM dashboard.": ["[00:04.20] 完了：下書きをGmailに保存し、CRMに同期しました。", "[00:04.20] SUCCESS: Draft saved in Gmail & synced to CRM dashboard."],
    "[00:00.10] Initializing AWS Boto3 session (ap-northeast-1)...": ["[00:00.10] AWS Boto3セッションを初期化しています（ap-northeast-1）…", "[00:00.10] Initializing AWS Boto3 session (ap-northeast-1)..."],
    "[00:00.95] Checking EC2/RDS CloudWatch metrics & backup snapshots: OK.": ["[00:00.95] EC2・RDSのCloudWatchメトリクスとバックアップを確認：正常。", "[00:00.95] Checking EC2/RDS CloudWatch metrics & backup snapshots: OK."],
    "[00:01.80] Scanning ALB 5xx error patterns across last 24h: 0 anomalies.": ["[00:01.80] 直近24時間のALB 5xxエラーを走査：異常0件。", "[00:01.80] Scanning ALB 5xx error patterns across last 24h: 0 anomalies."],
    "[00:02.75] Analyzing Cost Explorer: 1 idle EBS volume flagged (-$18/mo).": ["[00:02.75] Cost Explorerを分析：未使用のEBSボリュームを1件検出（月18ドル削減可能）。", "[00:02.75] Analyzing Cost Explorer: 1 idle EBS volume flagged (-$18/mo)."],
    "[00:03.50] SUCCESS: Weekly health & cost optimization report delivered.": ["[00:03.50] 完了：週次の稼働状況・コスト最適化レポートを配信しました。", "[00:03.50] SUCCESS: Weekly health & cost optimization report delivered."]
};

(function () {
    const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
    const dict = {};
    Object.keys(window.I18N_DICT).forEach(k => { dict[norm(k)] = window.I18N_DICT[k]; });

    let lang = 'ja';
    try { lang = localStorage.getItem('studio-lang') || 'ja'; } catch (e) {}
    if (lang !== 'ja' && lang !== 'en') lang = 'ja';

    // Translate one source string into the current language (unknown strings pass through)
    window.tx = function (s) {
        if (s == null) return s;
        const e = dict[norm(s)];
        if (!e) return s;
        return lang === 'en' ? e[1] : (e[0] == null ? s : e[0]);
    };
    // Deep-localize data objects (strings, arrays, plain objects)
    window.L10N = function (v) {
        if (typeof v === 'string') return window.tx(v);
        if (Array.isArray(v)) return v.map(window.L10N);
        if (v && typeof v === 'object' && v.constructor === Object) {
            const o = {};
            Object.keys(v).forEach(k => o[k] = window.L10N(v[k]));
            return o;
        }
        return v;
    };
    window.getLang = () => lang;

    // Static page text: remember each text node's source once, then rewrite it per language
    const sourced = [];
    const attrSourced = [];
    function collect() {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(n) {
                const p = n.parentNode;
                if (!p || /^(SCRIPT|STYLE|CANVAS|TEXTAREA)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
                return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        let n;
        while ((n = walker.nextNode())) {
            if (n.__i18nSrc) continue;
            const key = norm(n.nodeValue);
            if (!dict[key]) continue;
            const m = n.nodeValue.match(/^(\s*)[\s\S]*?(\s*)$/);
            n.__i18nSrc = key; n.__i18nPre = m[1]; n.__i18nPost = m[2];
            sourced.push(n);
        }
        document.querySelectorAll('[placeholder],[title]').forEach(el => {
            ['placeholder', 'title'].forEach(a => {
                const v = el.getAttribute(a);
                if (v && dict[norm(v)] && !(el.__i18nAttr && el.__i18nAttr[a])) {
                    el.__i18nAttr = el.__i18nAttr || {};
                    el.__i18nAttr[a] = norm(v);
                    attrSourced.push([el, a]);
                }
            });
        });
        if (!document.__i18nTitle) document.__i18nTitle = norm(document.title);
    }
    function applyStatic() {
        sourced.forEach(n => { n.nodeValue = n.__i18nPre + window.tx(n.__i18nSrc) + n.__i18nPost; });
        attrSourced.forEach(([el, a]) => el.setAttribute(a, window.tx(el.__i18nAttr[a])));
        document.title = window.tx(document.__i18nTitle);
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-btn]').forEach(b => {
            const on = b.getAttribute('data-lang-btn') === lang;
            b.classList.toggle('bg-white', on);
            b.classList.toggle('text-matteBlack', on);
            b.classList.toggle('shadow-sm', on);
            b.classList.toggle('text-inkGray', !on);
            b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
    }
    window.setLanguage = function (next) {
        if (next !== 'ja' && next !== 'en') return;
        lang = next;
        try { localStorage.setItem('studio-lang', lang); } catch (e) {}
        collect();
        applyStatic();
        if (typeof window.onLanguageChanged === 'function') window.onLanguageChanged(lang);
    };
    document.addEventListener('DOMContentLoaded', () => { collect(); applyStatic(); });
})();
