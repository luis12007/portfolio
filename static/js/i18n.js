// English / German switch. The templates are written in English; this file
// maps each English text (whitespace collapsed) to its German version and
// swaps the page's text nodes and labels in place. Texts built in JS go
// through i18n.t(). Components listen for "i18n:change" to re-render.
const DE = {
    // ----- Header, menu, hero -----
    'Home': 'Start',
    'Projects': 'Projekte',
    'Presentation': 'Präsentation',
    'Skills': 'Skills',
    'Education': 'Ausbildung',
    'Menu': 'Menü',
    'Connect': 'Kontakt',
    'Language': 'Sprache',
    'Site': 'Website',
    'Open menu': 'Menü öffnen',
    'Close menu': 'Menü schließen',
    'Switch to English': 'Auf Englisch umschalten',
    'Switch to German': 'Auf Deutsch umschalten',
    'Email: alexmtzai2002@gmail.com, opens contact details': 'E-Mail: alexmtzai2002@gmail.com, öffnet die Kontaktdaten',
    'Phone: +49 171 4758416, opens contact details': 'Telefon: +49 171 4758416, öffnet die Kontaktdaten',
    'Focused on transforming complex problems into elegant AI solutions. I thrive on optimizing AI models and developing innovative solutions that push the boundaries of technology.':
        'Mein Fokus liegt darauf, komplexe Probleme in elegante KI-Lösungen zu verwandeln. Ich optimiere KI-Modelle und entwickle innovative Lösungen, die die Grenzen der Technologie erweitern.',
    'My commitment extends beyond technical skills—I\'m constantly evolving as a professional, learning from every project, and refining my approach to build high-quality products that deliver real value.':
        'Mein Engagement geht über technische Fähigkeiten hinaus: Ich entwickle mich ständig weiter, lerne aus jedem Projekt und verfeinere meine Arbeitsweise, um hochwertige Produkte mit echtem Mehrwert zu bauen.',

    // ----- Projects -----
    '5 years of professional experience': '5 Jahre Berufserfahrung',
    'in AI and software engineering: my work as an AI Engineer Lead at TELUS, and the AI products, data science and web solutions I build through my own company, MySoftwareSV, and on my own.':
        'in KI und Softwareentwicklung: meine Arbeit als AI Engineer Lead bei TELUS sowie die KI-Produkte, Data-Science- und Weblösungen, die ich mit meiner eigenen Firma MySoftwareSV und eigenständig entwickle.',
    'Open to work': 'Offen für neue Aufgaben',
    'Looking for an AI Engineering role in Essen or Cologne, Germany': 'Auf der Suche nach einer Stelle als AI Engineer in Essen oder Köln',
    'About to start my M.Sc. in Artificial Intelligence at IU International University of Applied Sciences (April 2027).':
        'Ich beginne in Kürze meinen M.Sc. in Artificial Intelligence an der IU Internationale Hochschule (April 2027).',
    'Contact Me': 'Kontakt aufnehmen',
    'TELUS · Work experience': 'TELUS · Berufserfahrung',
    'AI Engineer Lead at TELUS': 'AI Engineer Lead bei TELUS',
    'I joined as an AI Engineer and was quickly promoted to lead, coordinating a team of up to 15 AI engineers and delivering 2 AI-first projects that are still running today. I built the team\'s workflow (CI/CD, best practices, documentation and security compliance), benchmarked self-hosted LLMs against API models, and developed MCP servers and APIs on GCP to connect the client\'s tools to the LLM.':
        'Ich kam als AI Engineer ins Team und wurde schnell zum Lead befördert. Ich koordinierte ein Team von bis zu 15 AI Engineers und lieferte 2 AI-first-Projekte, die bis heute laufen. Ich habe den Workflow des Teams aufgebaut (CI/CD, Best Practices, Dokumentation und Security-Compliance), selbst gehostete LLMs mit API-Modellen verglichen und MCP-Server und APIs auf GCP entwickelt, die die Tools des Kunden mit dem LLM verbinden.',
    'View Role': 'Rolle ansehen',
    'View Project': 'Projekt ansehen',
    'Built at': 'Entwickelt bei',
    ', my own software company, and on my own': ', meiner eigenen Softwarefirma, und eigenständig',
    'SaaS Billing System': 'SaaS-Abrechnungssystem',
    'I developed a full-stack billing system using React and a REST API, integrating multiple APIs for seamless communication. Designed and deployed on my own web server, it meets government standards for compliance.':
        'Ich habe ein Full-Stack-Abrechnungssystem mit React und einer REST-API entwickelt und dabei mehrere APIs für eine reibungslose Kommunikation integriert. Es wurde auf meinem eigenen Webserver konzipiert und betrieben und erfüllt die staatlichen Compliance-Vorgaben.',
    'Billing System': 'Abrechnungssystem',
    'Personal project · Prototype': 'Eigenes Projekt · Prototyp',
    'AI Language Learning App': 'KI-Sprachlern-App',
    'A prototype built in a short time to show how easily a new application can be connected to AI APIs to gain new features. It is my personal tool for learning Spanish, English and German, with AI image generation, fact-checked translations, and voice practice with an AI tutor that corrects you as you speak.':
        'Ein in kurzer Zeit gebauter Prototyp, der zeigt, wie einfach sich eine neue Anwendung mit KI-APIs verbinden lässt, um neue Funktionen zu gewinnen. Es ist mein persönliches Tool, um Spanisch, Englisch und Deutsch zu lernen, mit KI-Bildgenerierung, geprüften Übersetzungen und Sprechübungen mit einem KI-Tutor, der dich beim Sprechen korrigiert.',
    'AI Language Learning App: the Writing practice settings': 'KI-Sprachlern-App: die Einstellungen der Schreibübung',
    'RAG Portfolio Assistant': 'RAG-Portfolio-Assistent',
    'An intelligent AI assistant trained on my portfolio data using LangChain and RAG architecture. Features a quantized LLM optimized for CPU execution, deployed 24/7 on DigitalOcean with smart filtering to answer only portfolio-related questions.':
        'Ein intelligenter KI-Assistent, der mit LangChain und einer RAG-Architektur auf meine Portfolio-Daten trainiert wurde. Er nutzt ein quantisiertes, für CPUs optimiertes LLM, läuft rund um die Uhr auf DigitalOcean und beantwortet dank intelligenter Filterung nur Fragen zum Portfolio.',
    'Open-Source AI for Healthcare': 'Open-Source-KI für das Gesundheitswesen',
    'Contributed to an Omdena project developing a model to predict diseases based on symptoms, focusing on illnesses prevalent in Africa. Worked on data collection, modeling, EDA, training, and result visualization.':
        'Mitarbeit an einem Omdena-Projekt, das ein Modell zur Vorhersage von Krankheiten anhand von Symptomen entwickelte, mit Fokus auf in Afrika verbreitete Krankheiten. Ich arbeitete an Datenerhebung, Modellierung, EDA, Training und Visualisierung der Ergebnisse.',
    'Healthcare AI': 'KI im Gesundheitswesen',
    'Judge Gymnasts App': 'App für Kampfrichter im Turnen',
    'A comprehensive cross-platform application for gymnastics judges built with React Native and Expo. Features custom authentication, file management, MAG/WAG calculators, digital whiteboard, PDF export, and upcoming AI competition summaries.':
        'Eine umfassende plattformübergreifende App für Kampfrichter im Turnen, gebaut mit React Native und Expo. Mit eigener Authentifizierung, Dateiverwaltung, MAG/WAG-Rechnern, digitalem Whiteboard, PDF-Export und demnächst KI-Wettkampfzusammenfassungen.',
    'Enterprise Digital Billing API': 'Enterprise-API für digitale Rechnungsstellung',
    'A Java Spring Boot enterprise API that integrates digital billing capabilities into existing company systems. Features custom authentication, multi-server architecture with AWS, NGINX proxy, government compliance, and comprehensive documentation for large-scale deployments.':
        'Eine Enterprise-API mit Java Spring Boot, die digitale Rechnungsstellung in bestehende Unternehmenssysteme integriert. Mit eigener Authentifizierung, Multi-Server-Architektur mit AWS, NGINX-Proxy, Einhaltung staatlicher Vorgaben und umfassender Dokumentation für große Deployments.',
    'Multi-Branch ERP System': 'ERP-System für mehrere Filialen',
    'A comprehensive ERP solution for small businesses built with C# .NET and cloud SQL database. Features cashier POS, multi-branch inventory management, HR system, ingredients tracking, sales metrics, and business intelligence modules.':
        'Eine umfassende ERP-Lösung für kleine Unternehmen, gebaut mit C# .NET und einer Cloud-SQL-Datenbank. Mit Kassensystem (POS), filialübergreifender Lagerverwaltung, Personalverwaltung, Zutatenverfolgung, Verkaufskennzahlen und Business-Intelligence-Modulen.',
    'Show More Projects': 'Weitere Projekte anzeigen',
    'Alex Martínez with the AI engineering team at TELUS': 'Alex Martínez mit dem AI-Engineering-Team bei TELUS',
    'Project preview coming soon': 'Projektvorschau folgt in Kürze',
    'Close project details': 'Projektdetails schließen',

    // ----- Technologies -----
    'Technologies': 'Technologien',
    'Previous technologies': 'Vorherige Technologien',
    'Next technologies': 'Nächste Technologien',
    'Technologies, use arrow keys to scroll': 'Technologien, mit den Pfeiltasten blättern',
    'Choose technologies page': 'Seite der Technologien wählen',
    'LLM Evaluation & DeepEval': 'LLM-Evaluierung & DeepEval',
    'MCP Servers': 'MCP-Server',
    'Cloud GPUs (VPS): Training & Inference': 'Cloud-GPUs (VPS): Training & Inferenz',
    'Personal projects': 'Eigene Projekte',
    'Portfolio projects': 'Portfolio-Projekte',
    '· LLM configuration via API and self-hosted': '· LLM-Konfiguration per API und selbst gehostet',
    '· RAG Portfolio Assistant': '· RAG-Portfolio-Assistent',
    '· AI Language Learning App': '· KI-Sprachlern-App',
    '· MCP servers and APIs connecting the LLM to client tools': '· MCP-Server und APIs, die das LLM mit den Tools des Kunden verbinden',
    '· benchmarking API vs. self-hosted LLMs': '· Benchmarking von API- vs. selbst gehosteten LLMs',
    '· the AI video and chatbot of this portfolio': '· das KI-Video und der Chatbot dieses Portfolios',
    '· training and inference for our products': '· Training und Inferenz für unsere Produkte',
    '· courses': '· Kurse',
    '· course': '· Kurs',
    '· project and courses': '· Projekt und Kurse',
    '· every company project': '· alle Firmenprojekte',
    '· healthcare project': '· Gesundheitsprojekt',
    '· TensorFlow bootcamp': '· TensorFlow-Bootcamp',
    '· this portfolio': '· dieses Portfolio',
    '· Enterprise Digital Billing API': '· Enterprise-API für digitale Rechnungsstellung',
    '· server administration': '· Serveradministration',

    // ----- Education and certificates -----
    'education': 'ausbildung',
    'certificates': 'zertifikate',
    'Upcoming': 'Demnächst',
    'Completed': 'Abgeschlossen',
    'IU International University of Applied Sciences · Germany': 'IU Internationale Hochschule · Deutschland',
    'Completed JUN 2024': 'Abgeschlossen JUN 2024',
    'Graduated AUG 2025': 'Abschluss AUG 2025',
    'View Certificate': 'Zertifikat ansehen',
    'View Diploma': 'Diplom ansehen',
    'Omdena Local Chapter · MAY 2025': 'Omdena Local Chapter · MAI 2025',
    'Zero To Mastery · DEC 2024': 'Zero To Mastery · DEZ 2024',
    'LinkedIn Learning · DEC 2024': 'LinkedIn Learning · DEZ 2024',
    'Omdena Academy · DEC 2024': 'Omdena Academy · DEZ 2024',
    'Certificate of Completion': 'Abschlusszertifikat',
    'Bachelor\'s Degree Diploma': 'Bachelor-Diplom',
    'June 2024': 'Juni 2024',
    'June 2025': 'Juni 2025',
    'December 2024': 'Dezember 2024',
    'Certificate Record': 'Zertifikatsnachweis',
    'This record confirms that': 'Dieser Nachweis bestätigt, dass',
    'has completed': 'Folgendes abgeschlossen hat:',
    'Portfolio record. The original document issued by': 'Portfolio-Nachweis. Das Originaldokument von',
    'is available on request at': 'ist auf Anfrage erhältlich unter',
    'Close certificate': 'Zertifikat schließen',

    // ----- Footer -----
    'Contact Information': 'Kontaktinformationen',
    'Phone Number': 'Telefonnummer',
    'Contact Links': 'Kontaktlinks',
    'Email Alex Martínez: alexmtzai2002@gmail.com, opens contact details': 'E-Mail an Alex Martínez: alexmtzai2002@gmail.com, öffnet die Kontaktdaten',
    'Visit Alex Martínez\'s LinkedIn profile': 'LinkedIn-Profil von Alex Martínez besuchen',

    // ----- Contact modal -----
    'Get in touch': 'Kontakt',
    'Copy my email or phone number.': 'Kopiere meine E-Mail-Adresse oder Telefonnummer.',
    'Email': 'E-Mail',
    'Phone': 'Telefon',
    'Copy': 'Kopieren',
    'Copied!': 'Kopiert!',
    'Copy email': 'E-Mail kopieren',
    'Copy phone number': 'Telefonnummer kopieren',
    'Close contact details': 'Kontaktdaten schließen',
    'Could not copy. Please select the text and copy it.': 'Kopieren fehlgeschlagen. Bitte markiere den Text und kopiere ihn.',

    // ----- Presentation modal and About Me -----
    'Close presentation': 'Präsentation schließen',
    'Meet Alex Martínez': 'Das ist Alex Martínez',
    'Presentation video: Meet Alex Martínez': 'Präsentationsvideo: Das ist Alex Martínez',
    'This video was generated with artificial intelligence': 'Dieses Video wurde mit künstlicher Intelligenz erstellt',
    'Motion graphics': 'Motion Graphics',
    'Video avatar': 'Video-Avatar',
    'Audio': 'Audio',
    'native voice; German version with ElevenLabs': 'eigene Stimme; deutsche Fassung mit ElevenLabs',
    'About Me': 'Über mich',
    '24 years old • AI Engineer • Based in Germany': '24 Jahre • AI Engineer • Wohnhaft in Deutschland',
    'I\'m an AI Engineer and Software Engineer who loves turning innovative ideas into working products. I studied Software Engineering at UCA (Universidad Centroamericana) in El Salvador.':
        'Ich bin AI Engineer und Softwareentwickler und verwandle innovative Ideen gerne in funktionierende Produkte. Ich habe Software Engineering an der UCA (Universidad Centroamericana) in El Salvador studiert.',
    'I have 5 years of professional experience. I founded and ran my own software company, MySoftwareSV, building SaaS products, ERP and CRM systems, REST APIs, and web, desktop and mobile applications for clients. Two of those projects are still running today, maintained by another team.':
        'Ich habe 5 Jahre Berufserfahrung. Ich habe meine eigene Softwarefirma MySoftwareSV gegründet und geführt und für Kunden SaaS-Produkte, ERP- und CRM-Systeme, REST-APIs sowie Web-, Desktop- und Mobile-Anwendungen entwickelt. Zwei dieser Projekte laufen bis heute und werden von einem anderen Team betreut.',
    'At TELUS, I joined as an AI Engineer and was quickly promoted to AI Engineer Lead, coordinating a team of up to 15 AI engineers and completing 2 AI-first projects that are still running today. I designed the team\'s workflow (CI/CD, best practices, documentation and security compliance), worked with the Product Owner on discovery, evaluated self-hosted LLMs against API models, and built MCP servers and integrations on GCP that connected the client\'s tools to the LLM. It taught me a lot about adaptability, resilience and delivering under tight deadlines.':
        'Bei TELUS bin ich als AI Engineer eingestiegen und wurde schnell zum AI Engineer Lead befördert. Ich koordinierte ein Team von bis zu 15 AI Engineers und schloss 2 AI-first-Projekte ab, die bis heute laufen. Ich habe den Workflow des Teams entworfen (CI/CD, Best Practices, Dokumentation und Security-Compliance), mit dem Product Owner an der Discovery gearbeitet, selbst gehostete LLMs mit API-Modellen verglichen und MCP-Server und Integrationen auf GCP gebaut, die die Tools des Kunden mit dem LLM verbanden. Dabei habe ich viel über Anpassungsfähigkeit, Resilienz und Lieferung unter engen Deadlines gelernt.',
    'I now live in Germany, where I\'m starting my M.Sc. in Artificial Intelligence. I\'m open to work and looking for an AI engineering role in Essen or Cologne, where I can keep building cutting-edge AI products with the latest architectures and techniques.':
        'Heute lebe ich in Deutschland, wo ich meinen M.Sc. in Artificial Intelligence beginne. Ich bin offen für neue Aufgaben und suche eine Stelle als AI Engineer in Essen oder Köln, wo ich weiterhin moderne KI-Produkte mit den neuesten Architekturen und Techniken entwickeln kann.',
    'Years Experience': 'Jahre Erfahrung',
    'Companies Worked For': 'Unternehmen',
    'Projects Completed': 'Abgeschlossene Projekte',

    // ----- Chatbot -----
    'Chat with Alex\'s AI assistant': 'Mit Alex\' KI-Assistenten chatten',
    'RAG LLM Assistant': 'RAG-LLM-Assistent',
    'Ask me anything about Alex': 'Frag mich alles über Alex',
    'Close chat': 'Chat schließen',
    '👋 Welcome!': '👋 Willkommen!',
    'I\'m here to help you with any questions about Alex\'s projects and experience.': 'Ich beantworte gerne deine Fragen zu Alex\' Projekten und Erfahrung.',
    'Background': 'Werdegang',
    'Contact Info': 'Kontakt',
    'What is Alex background ?': 'Was ist Alex\' beruflicher Werdegang?',
    'What technologies do Alex use?': 'Welche Technologien nutzt Alex?',
    'How can I contact you?': 'Wie kann ich Alex kontaktieren?',
    'Type your message...': 'Nachricht eingeben …',
    'Your message': 'Deine Nachricht',
    'Send message': 'Nachricht senden',
    'Hi! I\'m Alex\'s AI assistant. How can I help you today?': 'Hallo! Ich bin Alex\' KI-Assistent. Wie kann ich dir helfen?',
    'You\'ve sent a lot of messages. Please wait a minute and try again.': 'Du hast viele Nachrichten gesendet. Bitte warte eine Minute und versuche es erneut.',
    'I\'m having trouble answering right now. Please try again later or email Alex at alexmtzai2002@gmail.com.':
        'Ich kann gerade nicht antworten. Bitte versuche es später erneut oder schreibe Alex an alexmtzai2002@gmail.com.',
    'I can\'t connect right now. Please check your connection or email Alex at alexmtzai2002@gmail.com.':
        'Ich kann gerade keine Verbindung herstellen. Bitte prüfe deine Verbindung oder schreibe Alex an alexmtzai2002@gmail.com.',
};

// Labels with a number or name inside them.
const DE_PATTERNS = [
    [/^Where I used (.+)$/, (m, what) => `Wo ich ${DE[what] || what} eingesetzt habe`],
    [/^(\d+) of (\d+)$/, (m, a, b) => `${a} von ${b}`],
    [/^Go to page (\d+) of (\d+)$/, (m, a, b) => `Zu Seite ${a} von ${b}`],
    [/^(.+) copied to the clipboard\.$/, (m, what) => `${what} wurde in die Zwischenablage kopiert.`],
];

window.i18n = (() => {
    const STORAGE_KEY = 'lang';
    const LANGS = ['en', 'de'];
    const ATTRS = ['aria-label', 'placeholder', 'alt', 'title'];
    const normalize = (text) => text.replace(/\s+/g, ' ').trim();
    // German back to English, for nodes JS rewrote while the page was German.
    const EN_OF = new Map(Object.entries(DE).map(([en, de]) => [de, en]));
    // English text of each node/attribute and the value last written to it;
    // a value that no longer matches was changed by JS and is read again.
    const nodeText = new WeakMap();
    const elementAttrs = new WeakMap();
    let lang = 'en';

    const toGerman = (en) => {
        if (Object.hasOwn(DE, en)) return DE[en];
        for (const [pattern, replace] of DE_PATTERNS) {
            if (pattern.test(en)) return en.replace(pattern, replace);
        }
        return null;
    };
    const t = (en) => (lang === 'de' && toGerman(en)) || en;

    // English original of a text: what the template had, or what JS wrote.
    const english = (text) => {
        const core = normalize(text);
        return EN_OF.has(core) ? text.replace(core, EN_OF.get(core)) : text;
    };
    // Translate the trimmed text and keep the surrounding whitespace.
    const render = (text) => {
        const core = normalize(text);
        const german = core && lang === 'de' ? toGerman(core) : null;
        if (!german) return text;
        const [, lead, , trail] = text.match(/^(\s*)([\s\S]*?)(\s*)$/);
        return lead + german + trail;
    };

    const SKIP = 'script, style, .chatbot-messages .message, #modalContent, [data-i18n-skip]';
    const translateTree = (root) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => (node.parentElement?.closest(SKIP) || !node.nodeValue.trim()
                ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
        });
        const update = (record, current, write) => {
            if (record.written !== current) record.en = english(current);
            record.written = render(record.en);
            if (record.written !== current) write(record.written);
        };
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
            if (!nodeText.has(node)) nodeText.set(node, {});
            update(nodeText.get(node), node.nodeValue, (value) => { node.nodeValue = value; });
        }
        root.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(',')).forEach((el) => {
            if (el.closest(SKIP)) return;
            if (!elementAttrs.has(el)) elementAttrs.set(el, {});
            const records = elementAttrs.get(el);
            for (const attr of ATTRS) {
                if (!el.hasAttribute(attr)) continue;
                records[attr] ??= {};
                update(records[attr], el.getAttribute(attr), (value) => el.setAttribute(attr, value));
            }
        });
    };

    const set = (next, { save = true } = {}) => {
        if (!LANGS.includes(next)) return;
        lang = next;
        document.documentElement.lang = lang;
        translateTree(document.body);
        document.querySelectorAll('[data-set-lang]').forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.setLang === lang));
        });
        if (save) {
            try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage blocked */ }
        }
        document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
    };

    // ?lang=de in a shared link wins over the visitor's last choice.
    const fromUrl = new URLSearchParams(location.search).get('lang');
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* storage blocked */ }
    const initial = LANGS.includes(fromUrl) ? fromUrl : (LANGS.includes(saved) ? saved : 'en');

    document.querySelectorAll('[data-set-lang]').forEach((button) => {
        button.addEventListener('click', () => set(button.dataset.setLang));
    });
    set(initial, { save: LANGS.includes(fromUrl) });

    return { t, set, get lang() { return lang; } };
})();
