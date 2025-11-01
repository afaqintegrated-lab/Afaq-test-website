// ==================== CENTRAL CONFIGURATION FILE ====================
// Change anything here and it will update across ALL pages automatically

const CONFIG = {
    // ==================== COMPANY INFO ====================
    company: {
        name: "آفاق المتكاملة لتكنولوجيا المعلومات",
        nameShort: "آفاق",
        tagline: "شريكك الموثوق في رحلة التحول الرقمي وتقديم الحلول التقنية المبتكرة",
        description: "آفاق المتكاملة لتكنولوجيا المعلومات، شريكك الموثوق لتقديم حلول تقنية مبتكرة في الشبكات، الأمن، والبرمجيات. نضع خبرتنا بين يديك لرفع الكفاءة وحماية أعمالك.",
        copyright: "© 2025 آفاق المتكاملة لتكنولوجيا المعلومات. جميع الحقوق محفوظة."
    },

    // ==================== CONTACT INFO ====================
    contact: {
        email: "info@afaqinfotech.com",
        phone: "+966573673270",
        phoneDisplay: "966573673270+",
        location: "المملكة العربية السعودية",
        whatsapp: "+966573673271"
    },

    // ==================== SOCIAL MEDIA ====================
    social: {
        instagram: "https://www.instagram.com/afaqinfotech.sa/",
        youtube: "https://www.youtube.com/@AfaqInfoTech",
        whatsapp: "https://wa.me/+966573673271",
        linkedin: "https://www.linkedin.com/company/afaq-integrated-solution/about/?viewAsMember=true"
    },

    // ==================== LOGOS ====================
    logos: {
        main: "../assets/images/general/afaqLogo.png",
        light: "../assets/images/general/AFAQ-light-logo.png",
        favicon: "../assets/images/general/favicon.ico"
    },

    // ==================== NAVIGATION MENU ====================
    navigation: {
        main: [
            { label: "الرئيسية", href: "index.html", id: "home" },
            { label: "عن الشركة", href: "src/pages/main/about.html", id: "about" },
            { label: "الخدمات", href: "src/pages/main/services.html", id: "services" },
            { label: "الحلول", href: "src/pages/main/solutions.html", id: "solutions" },
            { label: "المنتجات", href: "src/pages/main/products.html", id: "products" },
            { label: "المتجر", href: "src/pages/main/store.html", id: "store" },
            { label: "عملاؤنا", href: "src/pages/main/clients.html", id: "clients" }
        ],

        sectors: [
            { label: "القطاع الصحي", href: "src/pages/sectors/healthcare.html" },
            { label: "القطاع التعليمي", href: "src/pages/sectors/education.html" },
            { label: "قطاع الأعمال", href: "src/pages/sectors/business.html" },
            { label: "القطاع الحكومي", href: "src/pages/sectors/government.html" },
            { label: "القطاع الصناعي", href: "src/pages/sectors/industrial.html" },
            { label: "القطاع المالي", href: "src/pages/sectors/finance.html" },
            { label: "القطاع الأمني", href: "src/pages/sectors/security.html" },
            { label: "قطاع الاتصالات", href: "src/pages/sectors/telecommunications.html" }
        ],

        cta: [
            {
                label: "اتصل بنا",
                href: "src/pages/main/contact.html",
                type: "outline",
                classes: "bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
            },
            {
                label: "اطلب استشارة",
                href: "src/pages/main/contact.html",
                type: "gradient",
                classes: "text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300",
                style: "background: linear-gradient(to right, #582a6e, #e3237b)"
            }
        ]
    },

    // ==================== FOOTER LINKS ====================
    footer: {
        quickLinks: [
            { label: "الرئيسية", href: "index.html" },
            { label: "عن الشركة", href: "src/pages/main/about.html" },
            { label: "الخدمات", href: "src/pages/main/services.html" },
            { label: "الحلول", href: "src/pages/main/solutions.html" },
            { label: "المنتجات", href: "src/pages/main/products.html" },
            { label: "عملاؤنا", href: "src/pages/main/clients.html" },
            { label: "اتصل بنا", href: "src/pages/main/contact.html" }
        ],

        services: [
            { label: "التصميم والتطوير", href: "src/pages/main/services.html#design-development" },
            { label: "البنية التحتية", href: "src/pages/main/services.html#infrastructure" },
            { label: "الاستشارات المتخصصة", href: "src/pages/main/services.html#consulting" },
            { label: "الأمن السيبراني", href: "src/pages/main/services.html#cybersecurity" },
            { label: "الحوسبة السحابية", href: "src/pages/main/services.html#cloud" },
            { label: "الشبكات والاتصالات", href: "src/pages/main/services.html#networks" }
        ]
    },

    // ==================== HOME PAGE DATA ====================
    homePage: {
        // Hero Section
        hero: {
            backgroundImage: "../assets/images/general/img1.png",
            typewriterTexts: [
                "حلول برمجية متكاملة",
                "أنظمة أمنية متقدمة",
                "بنية تحتية ذكية",
                "خدمات سحابية آمنة",
                "استشارات تقنية متخصصة"
            ],
            subtitle: "تدعم أعمالك وتضمن لك بيئة عمل آمنة ومستقرة",
            buttons: [
                { label: "اكتشف خدماتنا", href: "src/pages/main/services.html", icon: "fas fa-arrow-left" },
                { label: "احجز استشارة مجانية", href: "src/pages/main/contact.html", outline: true }
            ]
        },

        // About Section
        about: {
            title: "من نحن",
            cards: [
                {
                    icon: "fas fa-eye",
                    title: "رؤيتنا",
                    description: "أن نكون الخيار الأول للعملاء من خلال تقديم خدمات ذات جودة عالية تفوق توقعاتهم",
                    gradient: "from-blue-500 to-blue-600"
                },
                {
                    icon: "fas fa-bullseye",
                    title: "رسالتنا",
                    description: "نلتزم ببناء علاقات طويلة المدى مع عملائنا، عبر تقديم خدمات متميزة تعتمد على الابتكار",
                    gradient: "from-teal-500 to-teal-600"
                },
                {
                    icon: "fas fa-trophy",
                    title: "أهدافنا",
                    description: "نسعى إلى الريادة في قطاع تقنية المعلومات من خلال تقديم حلول وخدمات متكاملة",
                    gradient: "from-indigo-600 to-blue-700"
                }
            ]
        },

        // Sectors Section
        sectors: [
            {
                title: "القطاع الصحي",
                description: "أنظمة إدارة المستشفيات والعيادات والصيدليات مع حلول تقنية الأشعة المتطورة",
                icon: "fas fa-heartbeat",
                href: "src/pages/sectors/healthcare.html",
                gradient: "from-red-500 to-red-600"
            },
            {
                title: "القطاع التعليمي",
                description: "أنظمة إدارة المدارس والجامعات وحلول التعليم الإلكتروني المتطورة",
                icon: "fas fa-graduation-cap",
                href: "src/pages/sectors/education.html",
                gradient: "from-green-500 to-green-600"
            },
            {
                title: "قطاع الأعمال",
                description: "أنظمة ERP وCRM والموارد البشرية مع حلول إدارة المشاريع والمبيعات",
                icon: "fas fa-building",
                href: "src/pages/sectors/business.html",
                gradient: "from-blue-500 to-blue-600"
            },
            {
                title: "القطاع الحكومي",
                description: "منصات الحكومة الإلكترونية وأنظمة إدارة الوثائق والخدمات الرقمية للمواطنين",
                icon: "fas fa-landmark",
                href: "src/pages/sectors/government.html",
                gradient: "from-blue-600 to-blue-800"
            },
            {
                title: "القطاع الصناعي",
                description: "حلول الأتمتة الصناعية وإنترنت الأشياء وأنظمة إدارة الإنتاج والجودة",
                icon: "fas fa-industry",
                href: "src/pages/sectors/industrial.html",
                gradient: "from-orange-500 to-red-600"
            },
            {
                title: "القطاع المالي",
                description: "الخدمات المصرفية الرقمية وبوابات الدفع وأنظمة إدارة المخاطر المالية",
                icon: "fas fa-university",
                href: "src/pages/sectors/finance.html",
                gradient: "from-emerald-500 to-teal-600"
            },
            {
                title: "القطاع الأمني",
                description: "حلول الأمن السيبراني وحماية البيانات وأنظمة كشف التهديدات والاستجابة",
                icon: "fas fa-shield-alt",
                href: "src/pages/sectors/security.html",
                gradient: "from-red-600 to-red-800"
            },
            {
                title: "قطاع الاتصالات",
                description: "بنية شبكات 5G ومنصات إنترنت الأشياء وحلول الاتصالات السحابية",
                icon: "fas fa-satellite-dish",
                href: "src/pages/sectors/telecommunications.html",
                gradient: "from-indigo-500 to-purple-600"
            }
        ],

        // Solutions Section
        solutions: [
            {
                title: "الحوكمة المؤسسية",
                description: "الالتزام والشفافية والتميز في إدارة المؤسسات",
                icon: "fas fa-shield-alt",
                bgGradient: "from-blue-50 to-blue-100",
                iconGradient: "from-blue-600 to-blue-800"
            },
            {
                title: "البنية التحتية",
                description: "مراكز البيانات وحلول الخوادم المتطورة",
                icon: "fas fa-server",
                bgGradient: "from-teal-50 to-teal-100",
                iconGradient: "from-teal-500 to-teal-600"
            },
            {
                title: "حلول الأمن",
                description: "أمن المعلومات والحماية السيبرانية",
                icon: "fas fa-lock",
                bgGradient: "from-red-50 to-red-100",
                iconGradient: "from-red-500 to-red-600"
            },
            {
                title: "حلول الشبكات",
                description: "شبكات متقدمة وأنظمة اتصالات حديثة",
                icon: "fas fa-network-wired",
                bgGradient: "from-green-50 to-green-100",
                iconGradient: "from-green-500 to-green-600"
            }
        ],

        // Clients
        clients: [
            { name: "شركة الفنار", logo: "../assets/images/general/Alfanar_brand_logo.png" },
            { name: "شركة المحمل", logo: "../assets/images/general/Al-Mahmal.jpg" },
            { name: "عيادات ميلا", logo: "../assets/images/general/logo.png" },
            { name: "SMSA Express", logo: "../assets/images/general/SMSA_Express_logo_(English_version).svg.png" },
            { name: "STC Solutions", logo: "../assets/images/general/Solutions.PNG" },
            { name: "مؤسسة أبعاد الفخامة", logo: "../assets/images/general/Ubaad.png" }
        ],

        // CTA Section
        cta: {
            title: "ابدأ رحلتك التقنية معنا اليوم",
            subtitle: "احصل على استشارة مجانية واكتشف كيف يمكن لحلولنا التقنية أن تحول أعمالك",
            buttons: [
                { label: "اتصل بنا الآن", href: "src/pages/main/contact.html", primary: true },
                { label: "احجز استشارة مجانية", href: "src/pages/main/contact.html", outline: true }
            ]
        }
    },

    // ==================== ABOUT PAGE DATA ====================
    aboutPage: {
        pageTitle: "عن الشركة",
        pageSubtitle: "تعرف على قصتنا ورؤيتنا في قيادة التحول الرقمي",

        overview: {
            title: "النبذة التعريفية",
            paragraphs: [
                "تأسست آفاق المتكاملة لتكنولوجيا المعلومات لتلبية المتطلبات المتطورة للسوق في مجالات الشبكات، البرمجيات، الحلول الأمنية وتقنية المعلومات. نحن متخصصون في تقديم حلول شاملة تعزز الكفاءة التشغيلية وتضمن سلامة المؤسسات والمرافق.",
                "مع التزامنا بالتميز، نستفيد من أحدث التقنيات العالمية لتوفير بيئات آمنة وموثوقة عبر مختلف القطاعات."
            ]
        },

        visionMissionGoals: [
            {
                icon: "fas fa-eye",
                title: "الرؤية",
                description: "أن نكون الخيار الأول للعملاء من خلال تقديم خدمات ذات جودة عالية تفوق توقعاتهم، عبر حلول تقنية مبتكرة تدعم استدامة النمو وتفتح آفاقاً جديدة للتطوير.",
                gradient: "from-purple-400 to-purple-700"
            },
            {
                icon: "fas fa-bullseye",
                title: "الرسالة",
                description: "نلتزم ببناء علاقات طويلة المدى مع عملائنا، عبر تقديم خدمات متميزة تعتمد على الابتكار والتقنيات الحديثة بما يضمن قيمة حقيقية وتجربة فريدة، مع تركيزنا على تحقيق رضا العملاء وتجاوز توقعاتهم في كل مشروع.",
                gradient: "from-teal-500 to-teal-600"
            },
            {
                icon: "fas fa-trophy",
                title: "الأهداف",
                description: "نسعى إلى الريادة في قطاع تقنية المعلومات من خلال تقديم حلول وخدمات متكاملة، تلبي احتياجات العملاء وتواكب تطلعات السوق العالمي.",
                gradient: "from-green-500 to-green-600"
            }
        ],

        governance: {
            title: "الحوكمة المؤسسية",
            subtitle: "الالتزام • الشفافية • التميز",
            pillars: [
                {
                    icon: "fas fa-certificate",
                    title: "الامتثال والمعايير",
                    description: "نلتزم بأعلى معايير الجودة العالمية والمحلية:",
                    items: [
                        { icon: "fas fa-shield-alt", title: "ISO 27001", subtitle: "لأمن المعلومات" },
                        { icon: "fas fa-cogs", title: "COBIT", subtitle: "لحوكمة تقنية المعلومات" },
                        { icon: "fas fa-handshake", title: "ITIL", subtitle: "لإدارة الخدمات" }
                    ],
                    bgGradient: "from-blue-50 to-blue-100",
                    iconBg: "#582a6e"
                },
                {
                    icon: "fas fa-exclamation-triangle",
                    title: "إدارة المخاطر",
                    description: "نطبق أفضل الممارسات في تحديد وإدارة المخاطر التقنية والتشغيلية:",
                    items: [
                        { icon: "fas fa-search", title: "تقييم المخاطر الدوري" },
                        { icon: "fas fa-road", title: "خطط الاستمرارية" },
                        { icon: "fas fa-bell", title: "الاستجابة للحوادث" }
                    ],
                    bgGradient: "from-teal-50 to-teal-100",
                    iconBg: "from-teal-600 to-teal-700"
                },
                {
                    icon: "fas fa-chart-line",
                    title: "قياس الأداء",
                    description: "نعتمد على مؤشرات أداء واضحة لضمان تحقيق أهداف العملاء:",
                    items: [
                        { icon: "fas fa-tachometer-alt", title: "KPIs متقدمة" },
                        { icon: "fas fa-file-alt", title: "تقارير دورية شاملة" },
                        { icon: "fas fa-arrow-up", title: "تحسين مستمر" }
                    ],
                    bgGradient: "from-green-50 to-green-100",
                    iconBg: "from-green-600 to-green-700"
                }
            ]
        },

        whyChooseUs: {
            title: "لماذا تختار آفاق المتكاملة؟",
            reasons: [
                {
                    icon: "fas fa-users",
                    title: "خبرة متميزة",
                    description: "فريق من الخبراء المتخصصين في أحدث التقنيات العالمية",
                    gradient: "from-blue-500 to-blue-600"
                },
                {
                    icon: "fas fa-rocket",
                    title: "حلول مبتكرة",
                    description: "نقدم حلولاً تقنية مبتكرة تواكب أحدث التطورات العالمية",
                    gradient: "from-green-500 to-green-600"
                },
                {
                    icon: "fas fa-clock",
                    title: "دعم على مدار الساعة",
                    description: "دعم فني متواصل لضمان استمرارية أعمالك بكفاءة عالية",
                    gradient: "from-purple-500 to-purple-600"
                },
                {
                    icon: "fas fa-shield-alt",
                    title: "أمان موثوق",
                    description: "أعلى معايير الأمان والحماية لبياناتك ومعلوماتك الحساسة",
                    gradient: "from-red-500 to-red-600"
                },
                {
                    icon: "fas fa-star",
                    title: "جودة عالية",
                    description: "التزام بأعلى معايير الجودة في جميع مراحل تنفيذ المشاريع",
                    gradient: "from-yellow-500 to-yellow-600"
                },
                {
                    icon: "fas fa-handshake",
                    title: "شراكة طويلة المدى",
                    description: "نؤمن ببناء علاقات شراكة مستدامة مع عملائنا الكرام",
                    gradient: "from-indigo-500 to-indigo-600"
                }
            ]
        }
    },

    // ==================== COLORS & THEME ====================
    theme: {
        colors: {
            primary: "#582a6e",
            secondary: "#e3237b",
            accent: "#8B5CF6"
        },
        gradients: {
            primary: "linear-gradient(to right, #582a6e, #e3237b)",
            topbar: "linear-gradient(to right, #701a75, #db2777)"
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

