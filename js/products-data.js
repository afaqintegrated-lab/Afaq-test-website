// Products Data
const categories = [
    {
        id: "hosting",
        name: "الاستضافة",
        slug: "hosting",
        description: "خطط استضافة متنوعة لجميع احتياجاتك",
        icon: "fa-server"
    },
    {
        id: "smart-home",
        name: "المنزل الذكي",
        slug: "smart-home",
        description: "حلول ذكية لمنزل عصري ومتطور",
        icon: "fa-home"
    },
    {
        id: "business-systems",
        name: "أنظمة إدارة الأعمال",
        slug: "business-systems",
        description: "أنظمة ERP و CRM المتكاملة لجميع القطاعات",
        icon: "fa-briefcase"
    }
];

const products = [
    // Hosting Products (3)
    {
        id: "basic-hosting",
        name: "خطة الاستضافة الأساسية",
        description: "حل استضافة مثالي للمواقع الصغيرة والمشاريع الناشئة مع جميع الميزات الأساسية.",
        price: 375,
        currency: "ر.س",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        features: [
            "مساحة تخزين 10 جيجا بايت",
            "نطاق ترددي غير محدود",
            "دعم فني 24/7",
            "شهادة SSL مجانية"
        ],
        category: "الاستضافة",
        categorySlug: "hosting",
        isPopular: false
    },
    {
        id: "deluxe-hosting",
        name: "خطة الاستضافة المتقدمة",
        description: "خطة شاملة للمواقع المتوسطة والشركات الصغيرة التي تبحث عن أداء عالي.",
        price: 1125,
        currency: "ر.س",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        features: [
            "مساحة تخزين 50 جيجا بايت",
            "نطاق ترددي غير محدود",
            "دعم فني متخصص 24/7",
            "حماية من الهجمات الإلكترونية"
        ],
        category: "الاستضافة",
        categorySlug: "hosting",
        isPopular: true
    },
    {
        id: "super-hosting",
        name: "خطة الاستضافة الفائقة",
        description: "الحل الأمثل للمواقع الكبيرة والشركات المتقدمة.",
        price: 1875,
        currency: "ر.س",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
        features: [
            "مساحة تخزين 200 جيجا بايت",
            "خادم مخصص للأداء",
            "حماية متقدمة من DDoS",
            "تسريع CDN عالمي"
        ],
        category: "الاستضافة",
        categorySlug: "hosting",
        isPopular: false
    },

    // Smart Home Products (26)
    {
        id: "nature-7-pro",
        code: "LS227",
        name: "Nature 7 PRO - لوحة التحكم الذكية",
        description: "لوحة تحكم بشاشة كاملة تدمج جميع ميزات التحكم الذكي، تمكنك من التحكم في مختلف الأجهزة المنزلية الذكية والتبديل بين المشاهد المختلفة مثل الخروج والنوم والسينما والعشاء.",
        price: 2159,
        currency: "ر.س",
        image: "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/Grey nature mini pro.png",
        features: [
            "شاشة لمس 7 بوصة عالية الدقة",
            "تحكم كامل في جميع أجهزة المنزل الذكي",
            "التبديل بين المشاهد المختلفة",
            "قاعدة قياسية 86 ملم",
            "تصميم أنيق مدمج في الحائط",
            "متوافق مع بروتوكولات CoSS و Zigbee"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: true
    },
    {
        id: "smart-door-lock",
        code: "C100",
        name: "قفل الباب الذكي C200",
        description: "قفل باب ذكي متقدم بتقنية بصمة الإصبع وعدة طرق لفتح الباب، مناسب للأبواب بسماكة 40-122 ملم.",
        price: 1290,
        currency: "ر.س",
        image: "images/logos/img1.png",
        features: [
            "قفل جسم قياسي 6068",
            "مناسب للأبواب بسماكة 40-122 ملم",
            "طرق متعددة لفتح الباب (بصمة، رمز، بطاقة)",
            "قفل أمان للأطفال",
            "إشعارات صوتية",
            "تكامل كامل مع نظام LifeSmart"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-smart-station",
        code: "LS205WH",
        name: "DEFED Smart Station PRO",
        description: "أول بوابة فائقة في الصناعة مع دعم 4G، البوابة المفتوحة الأولى التي تعبر الأنظمة والمنصات.",
        price: 1290,
        currency: "ر.س",
        image: "images/products/smart-home/DEFED Smart/DEFED Smart Station PRO-0001_00000.png",
        features: [
            "دعم شبكات 4G",
            "بروتوكولات متعددة (CoSS, Zigbee, Z-Wave, Wi-Fi, BLE, Matter)",
            "قوة إشارة مضاعفة 5 مرات",
            "ثلاث خيارات لإمداد الطاقة",
            "بوابة مفتوحة عابرة للأنظمة",
            "معالج قوي يصل إلى 500 جهاز متصل"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-station-basic",
        code: "LS082WH",
        name: "Smart Station - محطة التحكم الأساسية",
        description: "مركز النظام البيئي للمنزل الذكي، معالج قوي يدعم حتى 500 جهاز متصل.",
        price: 469,
        currency: "ر.س",
        image: "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/正面.png",
        features: [
            "معالج قوي عالي الأداء",
            "يدعم حتى 500 جهاز متصل",
            "بروتوكول CoSS المتقدم",
            "سهل التركيب والإعداد",
            "تحديثات برمجية دورية",
            "متوافق مع جميع أجهزة LifeSmart"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "nature-mini-pro-white",
        code: "LS268-WH3",
        name: "Nature Mini PRO - شاشة 4 بوصة (أبيض)",
        description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE.",
        price: 915,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "شاشة لمس HD 4 بوصة",
            "نظام تشغيل قابل للتخصيص",
            "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
            "تصميم عصري باللون الأبيض",
            "تحكم سهل وسريع",
            "استهلاك منخفض للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "nature-mini-pro-grey",
        code: "LS268-GR3",
        name: "Nature Mini PRO - شاشة 4 بوصة (رمادي)",
        description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE.",
        price: 915,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "شاشة لمس HD 4 بوصة",
            "نظام تشغيل قابل للتخصيص",
            "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
            "تصميم عصري باللون الرمادي",
            "تحكم سهل وسريع",
            "استهلاك منخفض للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-switch-1way",
        name: "CUBE Switch Module - مفتاح ذكي (مسار واحد)",
        description: "يعمل مع Smart Station، مفتاح بمسار واحد، يحول المفتاح التقليدي إلى مفتاح ذكي.",
        price: 223,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "تحويل المفاتيح التقليدية لذكية",
            "حجم مضغوط يناسب جميع العلب",
            "سهل التركيب",
            "مسار واحد",
            "موفر للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-switch-2way",
        name: "CUBE Switch Module - مفتاح ذكي (مساران)",
        description: "يعمل مع Smart Station، مفتاح بمسارين، يحول المفتاح التقليدي إلى مفتاح ذكي.",
        price: 246,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "تحويل المفاتيح التقليدية لذكية",
            "حجم مضغوط يناسب جميع العلب",
            "سهل التركيب",
            "مساران",
            "موفر للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-switch-3way",
        name: "CUBE Switch Module PRO - مفتاح ذكي (3 مسارات)",
        description: "يعمل مع Smart Station، مفتاح بثلاث مسارات، يحول المفتاح التقليدي إلى مفتاح ذكي.",
        price: 270,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "تحويل المفاتيح التقليدية لذكية",
            "حجم مضغوط يناسب جميع العلب",
            "سهل التركيب",
            "ثلاث مسارات",
            "موفر للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-1way-white",
        code: "LS055-57WH-1",
        name: "BLEND Switch PRO - مفتاح ذكي (مسار واحد - أبيض)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة.",
        price: 305,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 16 مليون لون",
            "توصيل سلك واحد فعال",
            "تحكم مزدوج ومتعدد",
            "تصميم أنيق باللون الأبيض"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-2way-white",
        code: "LS055-57WH-2",
        name: "BLEND Switch PRO - مفتاح ذكي (مساران - أبيض)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة.",
        price: 328,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 17 مليون لون",
            "توصيل سلك واحد فعال",
            "تحكم مزدوج ومتعدد",
            "تصميم أنيق باللون الأبيض"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-door-sensor",
        name: "DEFED مستشعر الباب/النافذة",
        description: "مستشعر فتح ضيق التصميم، قابل للتطبيق على أي نوافذ أو أبواب. يحتوي على مستشعر حرارة مدمج.",
        price: 164,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "حماية من التلاعب",
            "عمر بطارية يصل إلى 10 سنوات",
            "نقل إشارة 800 متر",
            "مستشعر حرارة مدمج",
            "تصميم ضيق أنيق",
            "سهل التركيب"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-motion-sensor",
        name: "DEFED مستشعر الحركة",
        description: "مستشعر PIR مدمج مع عنصر استشعار درجة الحرارة لدقة الكشف في درجات الحرارة المرتفعة.",
        price: 199,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "تقنية PIR متقدمة",
            "مستشعر حرارة مدمج",
            "دقة عالية في الكشف",
            "استهلاك منخفض للطاقة",
            "زاوية كشف واسعة",
            "سهل التركيب"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-indoor-siren",
        name: "DEFED صفارة إنذار داخلية",
        description: "جهاز تحذير في نظام الأمن المنزلي مع مؤشر LED ومستشعر حرارة، يوفر أصوات >80 ديسيبل.",
        price: 246,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "صوت إنذار >80 ديسيبل",
            "مؤشر LED",
            "مستشعر حرارة مدمج",
            "تنبيهات فورية",
            "سهل التركيب",
            "استهلاك منخفض للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "motion-sensor-pro",
        name: "Motion Sensor PRO - مستشعر حركة احترافي",
        description: "مستشعر حركة احترافي بجسم مستطيل وحجرة بطارية كبيرة مصممة خصيصاً.",
        price: 176,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "تصميم مستطيل أنيق",
            "حجرة بطارية كبيرة",
            "دقة عالية في الكشف",
            "استهلاك منخفض للطاقة",
            "سهل التركيب",
            "تصميم كلاسيكي"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "environmental-sensor",
        code: "LS063WH",
        name: "Cube مستشعر بيئي",
        description: "يعمل مع Smart Station، مراقبة متزامنة لدرجة الحرارة والرطوبة والإضاءة.",
        price: 188,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "مراقبة درجة الحرارة والرطوبة",
            "قياس مستوى الإضاءة",
            "شاشة LCD واضحة",
            "سجل تاريخي للقراءات",
            "استهلاك منخفض للطاقة",
            "بطارية واحدة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "water-leak-sensor",
        code: "LS064WH",
        name: "مستشعر تسرب المياه",
        description: "يعمل مع Smart Station، كشف تسرب المياه، تنبيهات 24/7.",
        price: 188,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "كشف تسرب المياه",
            "تنبيهات فورية 24/7",
            "استهلاك منخفض للطاقة",
            "سجل تاريخي",
            "سهل التركيب",
            "بطارية واحدة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "gas-sensor",
        code: "LS086WH",
        name: "مستشعر الغاز",
        description: "يعمل مع Smart Station، كشف تسرب الغاز بما في ذلك الميثان والغاز الطبيعي والغاز الحيوي.",
        price: 293,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "كشف الميثان والغاز الطبيعي",
            "إشعارات دفع 24/7",
            "تنبيه صوتي",
            "حساسية قابلة للتعديل",
            "سجل تاريخي",
            "إمداد طاقة 5 فولت"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smoke-detector",
        code: "MIR-SM100",
        name: "كاشف دخان ضوئي مستقل",
        description: "كاشف دخان ضوئي مستقل يعتمد مبدأ الاستشعار البصري المتقدم.",
        price: 211,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "مبدأ استشعار بصري متقدم",
            "كشف مبكر للدخان",
            "إنذار صوتي",
            "إشارة لاسلكية للبوابة",
            "تنبيهات للهاتف المحمول",
            "يساعد في تقليل الخسائر"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "quicklink-curtain-32m",
        code: "BCM100D",
        name: "Quicklink محرك ستائر ذكي (3.2 متر)",
        description: "يعمل مع Smart Station، مهام مجدولة، يتضمن محرك و 3.2 متر من مسار الستائر القابل للتعديل.",
        price: 774,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "مهام مجدولة",
            "مسار 3.2 متر قابل للتعديل",
            "جهاز تحكم عن بعد مدمج",
            "حمولة 40 كجم",
            "تشغيل هادئ"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "quicklink-curtain-52m",
        code: "BCM100D-52",
        name: "Quicklink محرك ستائر ذكي (5.2 متر)",
        description: "يعمل مع Smart Station، مهام مجدولة، يتضمن محرك و 5.2 متر من مسار الستائر القابل للتعديل.",
        price: 892,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "يعمل مع Smart Station",
            "مهام مجدولة",
            "مسار 5.2 متر قابل للتعديل",
            "جهاز تحكم عن بعد مدمج",
            "حمولة 40 كجم",
            "تشغيل هادئ"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-plug",
        name: "قابس ذكي (Zigbee UK) مع مراقبة الطاقة",
        description: "يعمل مع Smart Station، مراقبة استهلاك الطاقة، التحكم عن بُعد.",
        price: 153,
        currency: "ر.س",
        image: "https://placehold.co/800x600/582a6e/ffffff?text=Product",
        features: [
            "مراقبة استهلاك الطاقة",
            "التحكم عن بُعد",
            "سهولة الاقتران",
            "مادة مقاومة للحريق",
            "توفير الطاقة",
            "متوافق مع Smart Station"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },

    // Business Systems (20+)
    // Healthcare Systems
    {
        id: "hospital-management-system",
        name: "نظام إدارة المستشفيات (HIMS)",
        description: "حل شامل لإدارة جميع عمليات المستشفى من التسجيل إلى الخروج، يشمل إدارة المرضى والملفات الطبية الإلكترونية وحجز المواعيد والأسرة والكادر الطبي والصيدلية والمختبرات والفواتير.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
        features: [
            "إدارة المرضى والتسجيل",
            "الملفات الطبية الإلكترونية",
            "حجز المواعيد الذكي",
            "إدارة الأسرة والغرف",
            "إدارة الكادر الطبي",
            "إدارة الصيدلية والمختبرات",
            "الفواتير والمحاسبة الطبية",
            "تكامل مع أنظمة التأمين الصحي"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: true
    },
    {
        id: "clinic-management-system",
        name: "نظام إدارة العيادات",
        description: "حل مثالي للعيادات الخاصة ومراكز الرعاية الصحية الأولية مع نظام مواعيد متقدم وسجلات طبية ذكية ووصفات إلكترونية.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1629909615957-be38bed28e6e?w=800&h=600&fit=crop",
        features: [
            "نظام المواعيد المتقدم",
            "حجز المواعيد أونلاين",
            "السجلات الطبية الذكية",
            "الوصفات الإلكترونية",
            "إدارة قائمة الانتظار",
            "تذكير تلقائي للمرضى",
            "قاعدة بيانات الأدوية"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    {
        id: "pharmacy-management-system",
        name: "نظام إدارة الصيدليات",
        description: "إدارة شاملة للمخزون الدوائي ونقاط البيع مع تتبع المخزون في الوقت الفعلي وتنبيهات نفاد المخزون وإدارة تواريخ الانتهاء.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&h=600&fit=crop",
        features: [
            "إدارة المخزون الذكية",
            "تتبع المخزون في الوقت الفعلي",
            "تنبيهات نفاد المخزون",
            "إدارة تواريخ الانتهاء",
            "نظام باركود متقدم",
            "نقاط البيع المتطورة",
            "دعم وسائل الدفع المختلفة"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    {
        id: "radiology-management-system",
        name: "نظام إدارة الأشعة",
        description: "حلول متخصصة لأقسام الأشعة والتصوير الطبي مع أرشفة الصور الطبية ودعم معيار DICOM والتقارير الإشعاعية.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop",
        features: [
            "أرشفة الصور الطبية",
            "دعم معيار DICOM",
            "أرشفة آمنة ومضغوطة",
            "التقارير الإشعاعية",
            "قوالب تقارير جاهزة",
            "توقيع إلكتروني",
            "تكامل مع أنظمة المستشفى"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    // Education Systems
    {
        id: "school-management-system",
        name: "نظام إدارة المدارس",
        description: "نظام شامل لإدارة جميع العمليات المدرسية من تسجيل الطلاب وإدارة الدرجات والجداول الدراسية إلى التواصل مع أولياء الأمور.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
        features: [
            "إدارة الطلاب والمعلمين",
            "نظام الدرجات والتقييم",
            "الجداول الدراسية الذكية",
            "التواصل مع أولياء الأمور",
            "الحضور والغياب الإلكتروني",
            "إدارة الفصول والمواد",
            "التقارير والإحصائيات التعليمية"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    {
        id: "elearning-platform",
        name: "منصة التعليم الإلكتروني",
        description: "منصة متقدمة للتعليم عن بُعد تدعم الفصول الافتراضية والمحتوى التفاعلي والتقييمات الإلكترونية وتتبع تقدم الطلاب.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
        features: [
            "الفصول الافتراضية المباشرة",
            "المحتوى التفاعلي والوسائط المتعددة",
            "الواجبات والاختبارات الإلكترونية",
            "تتبع تقدم الطلاب",
            "منتديات النقاش والتفاعل",
            "شهادات إلكترونية",
            "تحليلات الأداء والتعلم"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: true
    },
    {
        id: "university-management-system",
        name: "نظام إدارة الجامعات",
        description: "حل متكامل لإدارة الجامعات والكليات يشمل القبول والتسجيل والشؤون الأكاديمية والخدمات الطلابية.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        features: [
            "نظام القبول والتسجيل",
            "إدارة الكليات والأقسام",
            "الشؤون الأكاديمية",
            "الخدمات الطلابية",
            "نظام الساعات المعتمدة",
            "إدارة أعضاء هيئة التدريس",
            "البوابة الإلكترونية للطلاب"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    {
        id: "library-management-system",
        name: "نظام إدارة المكتبات",
        description: "نظام شامل لإدارة المكتبات الرقمية والتقليدية مع إمكانيات البحث المتقدم وإدارة الإعارة والفهرسة الرقمية.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
        features: [
            "فهرسة الكتب الرقمية",
            "نظام الإعارة والإرجاع",
            "البحث المتقدم",
            "قاعدة بيانات الكتب والدوريات",
            "التقارير والإحصائيات",
            "إدارة الأعضاء والاشتراكات",
            "المكتبة الرقمية"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    // Business Systems
    {
        id: "business-erp-crm-system",
        name: "نظام إدارة الأعمال التجارية ERP & CRM",
        description: "نظام تخطيط موارد المؤسسة ERP المتكامل مع نظام إدارة علاقات العملاء CRM. يشمل إدارة المالية والموارد البشرية والمخازن والمبيعات والتسويق مع ذكاء الأعمال المتقدم.",
        price: null,
        currency: "حسب الطلب",
        image: "https://placehold.co/800x600/ea580c/ffffff?text=ERP+CRM+Systems",
        features: [
            "نظام ERP - إدارة المالية والمحاسبة والموارد البشرية والمخازن",
            "نظام CRM - إدارة العملاء وتتبع المبيعات وأتمتة التسويق",
            "نظام الموارد البشرية - إدارة الموظفين والحضور والرواتب والتقييم",
            "نظام المحاسبة والمالية - دليل الحسابات والقيود والتقارير المالية",
            "نظام إدارة المستندات - أرشفة رقمية وتوقيع إلكتروني",
            "ذكاء الأعمال - لوحات معلومات تفاعلية وتحليلات متقدمة"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: true
    },
    // Finance Systems
    {
        id: "finance-management-system",
        name: "نظام إدارة القطاع المالي",
        description: "حلول مصرفية ومالية متكاملة تشمل الخدمات المصرفية الأساسية، بوابات الدفع الإلكتروني، إدارة المخاطر والامتثال، وإدارة الثروات. مع أعلى معايير الأمان والحماية.",
        price: null,
        currency: "حسب الطلب",
        image: "https://placehold.co/800x600/059669/ffffff?text=Finance+Systems",
        features: [
            "نظام الخدمات المصرفية - إدارة الحسابات والمعاملات والقروض",
            "بوابة الدفع الإلكتروني - دعم جميع وسائل الدفع مع حماية من الاحتيال",
            "إدارة ال� ومراقبة الامتثال التنظيمي",
            "إدارة الثروات والاستثمار - إدارة المحافظ وتحليل الأسواق",
            "إدارة علاقات العملاء المصرفية - ملفات شاملة وحملات مستهدفة",
            "الخدمات المصرفية عبر الهاتف - واجهة بديهية ومصادقة بيومترية"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: true
    },
    // Government Systems
    {
        id: "government-management-system",
        name: "نظام إدارة القطاع الحكومي",
        description: "منصة حكومة إلكترونية متكاملة تشمل الخدمات الموحدة، إدارة الوثائق الرقمية، حلول المدن الذكية، وتحليل البيانات الحكومية مع أعلى معايير الأمن السيبراني.",
        price: null,
        currency: "حسب الطلب",
        image: "https://placehold.co/800x600/7c3aed/ffffff?text=Government+Systems",
        features: [
            "منصة الحكومة الإلكترونية - بوابة موحدة وهوية رقمية ومدفوعات إلكترونية",
            "إدارة الوثائق الرقمية - أرشفة آمنة وتدفق موافقات آلي وتوقيع إلكتروني",
            "المدن الذكية - أنظمة نقل ذكية وإدارة الطاقة والإضاءة الذكية",
            "تحليل البيانات الحكومية - لوحات مؤشرات الأداء والتحليل التنبؤي",
            "الأمن السيبراني الحكومي - حماية البيانات وكشف التسلل",
            "إدارة سير العمل - أتمتة العمليات وتتبع المعاملات"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    // Industrial Systems
    {
        id: "industrial-management-system",
        name: "نظام إدارة القطاع الصناعي",
        description: "حلول صناعية متكاملة تشمل إدارة التصنيع، سلسلة التوريد، إنترنت الأشياء الصناعي، وإدارة الجودة والأصول. يحسن الإنتاجية ويقلل التكاليف التشغيلية.",
        price: null,
        currency: "حسب الطلب",
        image: "https://placehold.co/800x600/64748b/ffffff?text=Industrial+Systems",
        features: [
            "نظام إدارة التصنيع - تخطيط ومراقبة الإنتاج وإدارة المخزون والجودة",
            "إدارة سلسلة التوريد - إدارة الموردين وتتبع الشحنات وتحسين التوزيع",
            "إنترنت الأشياء الصناعي - أجهزة استشعار ذكية ومراقبة في الوقت الفعلي",
            "إدارة الجودة والمطابقة - معايير الجودة واختبارات دورية وتقارير المطابقة",
            "إدارة الأصول والصيانة - جرد وتتبع وصيانة تنبؤية",
            "ذكاء الأعمال الصناعي - تحليل الأداء والإنتاجية والتكاليف"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    // Telecommunications Systems
    {
        id: "telecommunications-management-system",
        name: "نظام إدارة قطاع الاتصالات",
        description: "منصة شاملة لشركات الاتصالات تشمل إدارة شبكات الجيل الخامس 5G، منصات إنترنت الأشياء، تحليلات البيانات الضخمة، والاتصالات السحابية المتقدمة.",
        price: null,
        currency: "حسب الطلب",
        image: "https://placehold.co/800x600/0891b2/ffffff?text=Telecom+Systems",
        features: [
            "شبكات الجيل الخامس 5G - تصميم وتنفيذ وتحسين الأداء وإدارة الطيف",
            "أنظمة إدارة الشبكات - مراقبة في الوقت الفعلي وإدارة الأداء والجودة",
            "منصات إنترنت الأشياء IoT - إدارة الأجهزة المتصلة وتحليل البيانات",
            "تحليلات البيانات الضخمة - تحليل سلوك المشتركين والكشف عن الاحتيال",
            "الاتصالات السحابية - مراكز اتصال سحابية وأنظمة PBX افتراضية",
            "تطبيقات الاتصالات المتنقلة - إدارة الحسابات والدفع الإلكتروني"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    // Retail Systems
    {
        id: "retail-management-system",
        name: "نظام إدارة التجزئة والمبيعات",
        description: "نظام شامل لإدارة المتاجر ونقاط البيع والتجارة الإلكترونية. يوفر إدارة متكاملة للمخزون والمبيعات والعملاء مع تحليلات ذكية لتحسين الأداء وزيادة المبيعات.",
        price: null,
        currency: "حسب الطلب",
        image: "https://placehold.co/800x600/dc2626/ffffff?text=Retail+Systems",
        features: [
            "نظام نقاط البيع POS - واجهة سهلة ودعم وسائل دفع متعددة وطباعة فواتير",
            "إدارة المخزون الذكية - تتبع في الوقت الفعلي وتنبيهات نفاد المخزون",
            "منصة التجارة الإلكترونية - متجر إلكتروني متكامل مع إدارة الطلبات والشحن",
            "إدارة علاقات العملاء - برامج ولاء ونقاط وعروض مخصصة",
            "تحليلات المبيعات - تقارير تفصيلية عن المبيعات والأداء والمخزون",
            "إدارة متعددة الفروع - تكامل كامل بين جميع الفروع والمستودعات"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    // Security Systems
    {
        id: "cybersecurity-system",
        name: "الأمن السيبراني المتقدم",
        description: "حلول شاملة لحماية الأنظمة والشبكات من التهديدات السيبرانية المتطورة مع جدران حماية متقدمة وأنظمة كشف التسلل.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
        features: [
            "جدران الحماية المتقدمة",
            "أنظمة كشف التسلل",
            "حماية من البرمجيات الخبيثة",
            "تحليل التهديدات في الوقت الفعلي",
            "مراكز العمليات الأمنية SOC",
            "مراقبة أمنية 24/7"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },
    {
        id: "identity-access-management",
        name: "إدارة الهويات والصلاحيات",
        description: "نظام متطور لإدارة هويات المستخدمين والتحكم في الصلاحيات مع مصادقة متعددة العوامل وإدارة مركزية للهويات.",
        price: null,
        currency: "حسب الطلب",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
        features: [
            "مصادقة متعددة العوامل",
            "إدارة مركزية للهويات",
            "التحكم في الوصول",
            "مراقبة النشاطات الأمنية",
            "كشف الأنشطة المشبوهة",
            "تقارير الامتثال"
        ],
        category: "أنظمة إدارة الأعمال",
        categorySlug: "business-systems",
        isPopular: false
    },

    // Products from ProductsFromDrive - Smart Home Products
    {
        id: "blend-switch-1way-white",
        code: "LS055-57WH-1",
        name: "BLEND Switch - مفتاح ذكي (مسار واحد)",
        description: "مفتاح ذكي أنيق بتصميم BLEND، يدعم التحكم الذكي والإعدادات المخصصة للمنزل الذكي.",
        price: 245,
        currency: "ر.س",
        image: "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联正面.png",
        images: [
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联正面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联45度.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联侧面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联反面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联左侧面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联底面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/1 gang/一联顶面.png"
        ],
        features: [
            "تصميم أنيق ومدمج",
            "تحكم ذكي متقدم",
            "سهل التركيب",
            "متوافق مع بروتوكولات CoSS",
            "أمان عالي"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-2way-white",
        code: "LS055-57WH-2",
        name: "BLEND Switch - مفتاح ذكي (مساران)",
        description: "مفتاح ذكي بتصميم BLEND يدعم مسارين للتحكم، مثالي للتحكم في الإضاءة المتعددة.",
        price: 285,
        currency: "ر.س",
        image: "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联正面.png",
        images: [
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联正面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联45.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联侧面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联反面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联左侧面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联底面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/2 gang/二联顶面.png"
        ],
        features: [
            "تحكم مزدوج المسار",
            "تصميم BLEND الأنيق",
            "تحكم ذكي متقدم",
            "سهل التركيب",
            "متوافق مع بروتوكولات CoSS"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-3way-white",
        code: "LS055-57WH-3",
        name: "BLEND Switch - مفتاح ذكي (ثلاثة مسارات)",
        description: "مفتاح ذكي بتصميم BLEND يدعم ثلاثة مسارات للتحكم، مثالي للتحكم المتقدم في الإضاءة.",
        price: 325,
        currency: "ر.س",
        image: "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联正面.png",
        images: [
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联正面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联45.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联侧面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联反面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联左侧面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联底面.png",
            "images/products/smart-home/LS055-57WH  Blend Switch/3gang/三联顶面.png"
        ],
        features: [
            "تحكم ثلاثي المسار",
            "تصميم BLEND المتقدم",
            "تحكم ذكي شامل",
            "سهل التركيب",
            "متوافق مع بروتوكولات CoSS"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-clicker-white",
        code: "LS069WH",
        name: "CUBE Clicker - مفتاح ذكي قابل للنقل",
        description: "مفتاح ذكي قابل للنقل بتصميم CUBE، يمكن وضعه في أي مكان للتحكم السهل في الأجهزة الذكية.",
        price: 195,
        currency: "ر.س",
        image: "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心正面.png",
        images: [
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心正面.png",
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心45度.png",
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心侧面右侧.png",
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心左侧面.png",
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心底面.png",
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心顶面.png",
            "images/products/smart-home/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/反面视角.png"
        ],
        features: [
            "قابل للنقل والوضع في أي مكان",
            "تصميم CUBE الأنيق",
            "تحكم لاسلكي",
            "بطارية طويلة الأمد",
            "سهل الاستخدام"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-switch-air",
        code: "LS222",
        name: "Smart Switch Air - مفتاح ذكي رفيع",
        description: "مفتاح ذكي بتصميم رفيع جداً، يوفر التحكم الذكي مع الحفاظ على الجمالية والأناقة.",
        price: 185,
        currency: "ر.س",
        image: "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/正视图-front view-真薄开关.png",
        images: [
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/正视图-front view-真薄开关.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/透视视图-perspective view-真薄开关.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/右视图-right view-真薄开关.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/左视图-left view-真薄开关.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/背视图-back view-真薄开关.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/底视图-bottom view-真薄开关.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/顶视图-top view-真薄开关0.png",
            "images/products/smart-home/LS222 Smart Switch Air/7 Perspective/地平线视图-Horizon view-真薄开关.png"
        ],
        features: [
            "تصميم رفيع جداً",
            "تحكم ذكي متقدم",
            "سهل التركيب",
            "متوافق مع جميع الأنظمة",
            "أمان عالي"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-remote-control",
        code: "LS256",
        name: "Smart Remote Control - جهاز تحكم ذكي",
        description: "جهاز تحكم ذكي متقدم يدعم التحكم في جميع أجهزة المنزل الذكي من مكان واحد.",
        price: 165,
        currency: "ر.س",
        image: "images/products/smart-home/LS256_Smart Remote Control _ 智能情景遥控器/七视图/正面.png",
        images: [
            "images/products/smart-home/LS256_Smart Remote Control _ 智能情景遥控器/七视图/正面.png",
            "images/products/smart-home/LS256_Smart Remote Control _ 智能情景遥控器/七视图/45度.png",
            "images/products/smart-home/LS256_Smart Remote Control _ 智能情景遥控器/七视图/侧面.png",
            "images/products/smart-home/LS256_Smart Remote Control _ 智能情景遥控器/七视图/侧面2.png",
            "images/products/smart-home/LS256_Smart Remote Control _ 智能情景遥控器/七视图/背面.png"
        ],
        features: [
            "تحكم شامل في المنزل الذكي",
            "واجهة سهلة الاستخدام",
            "برمجة مخصصة",
            "تحكم لاسلكي",
            "بطارية طويلة الأمد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "mins-curtain-controller",
        code: "LS178",
        name: "MINS Curtain Motor Controller - وحدة تحكم الستائر الذكية",
        description: "وحدة تحكم متقدمة للستائر الذكية، تدعم التحكم في الستائر بسهولة ودقة عالية.",
        price: 425,
        currency: "ر.س",
        image: "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界正面.png",
        images: [
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界正面.png",
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界45度.png",
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界反面.png",
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界右侧面.png",
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界左侧面.png",
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界底面面.png",
            "images/products/smart-home/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界顶面.png"
        ],
        features: [
            "تحكم دقيق في الستائر",
            "تصميم أنيق ومدمج",
            "سهل التركيب",
            "متوافق مع جميع أنواع الستائر",
            "تحكم ذكي متقدم"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "quicklink-curtain-motor",
        code: "LS0BCM100D",
        name: "Quicklink Curtain Motor - محرك ستائر ذكي",
        description: "محرك ستائر ذكي بتقنية Quicklink، يوفر التحكم السهل والدقيق في الستائر.",
        price: 385,
        currency: "ر.س",
        image: "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/正面速接电机_00000.png",
        images: [
            "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/正面速接电机_00000.png",
            "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/45速接电机_00000.png",
            "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/反面速接电机_00000.png",
            "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/右侧速接电机_00000.png",
            "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/底面速接电机_00000.png",
            "images/products/smart-home/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/顶面速接电机_00000.png"
        ],
        features: [
            "تقنية Quicklink المتقدمة",
            "تحكم دقيق في الستائر",
            "تركيب سهل",
            "متوافق مع جميع أنواع الستائر",
            "تحكم ذكي"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-curtain-motor-v2",
        code: "SCM-V2",
        name: "Smart Curtain Motor v2 - محرك ستائر ذكي الإصدار الثاني",
        description: "محرك ستائر ذكي محسن من الإصدار الثاني، يوفر أداءً أفضل وموثوقية أعلى.",
        price: 365,
        currency: "ر.س",
        image: "images/products/smart-home/smart curtain motor v2/20240829-140213.png",
        images: [
            "images/products/smart-home/smart curtain motor v2/20240829-140213.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140226.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140233.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140239.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140244.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140250.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140254.png",
            "images/products/smart-home/smart curtain motor v2/20240829-140300.png"
        ],
        features: [
            "إصدار محسن ومتطور",
            "أداء أفضل وموثوقية أعلى",
            "تحكم دقيق في الستائر",
            "تركيب سهل",
            "تحكم ذكي متقدم"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-door-lock-c200",
        code: "C200",
        name: "Smart Door Lock C200 - قفل الباب الذكي",
        description: "قفل باب ذكي متقدم بتقنية بصمة الإصبع وعدة طرق لفتح الباب، مناسب للأبواب بسماكة 40-122 ملم.",
        price: 1290,
        currency: "ر.س",
        image: "images/products/smart-home/smart door lock C200/10000.jpg",
        images: [
            "images/products/smart-home/smart door lock C200/10000.jpg",
            "images/products/smart-home/smart door lock C200/20000.jpg",
            "images/products/smart-home/smart door lock C200/30000.jpg",
            "images/products/smart-home/smart door lock C200/侧10000.png",
            "images/products/smart-home/smart door lock C200/侧20000.png"
        ],
        features: [
            "قفل جسم قياسي 6068",
            "مناسب للأبواب بسماكة 40-122 ملم",
            "طرق متعددة لفتح الباب (بصمة، رمز، بطاقة)",
            "قفل أمان للأطفال",
            "إشعارات صوتية",
            "تكامل كامل مع نظام LifeSmart"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-door-window-sensor",
        code: "LS058WH",
        name: "CUBE Door/Window Sensor - مستشعر الباب/النافذة",
        description: "مستشعر ذكي للباب والنافذة بتصميم CUBE، يوفر حماية شاملة للمنزل.",
        price: 164,
        currency: "ر.س",
        image: "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/正面门禁.png",
        images: [
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/正面门禁.png",
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/45度门禁.png",
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/反面门禁.png",
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/左侧门禁.png",
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/底面门禁.png",
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/顶面门禁.png",
            "images/products/smart-home/LS058WH｜CUBE DoorWindow Sensor_多功能门禁感应器/产品七视图/正面门禁(1).png"
        ],
        features: [
            "حماية من التلاعب",
            "عمر بطارية يصل إلى 10 سنوات",
            "نقل إشارة 800 متر",
            "مستشعر حرارة مدمج",
            "تصميم ضيق أنيق",
            "سهل التركيب"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-motion-sensor",
        code: "LS062WH",
        name: "CUBE Motion Sensor - مستشعر الحركة",
        description: "مستشعر حركة ذكي بتصميم CUBE، يوفر كشف دقيق للحركة مع استهلاك منخفض للطاقة.",
        price: 199,
        currency: "ر.س",
        image: "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/正面视角.png",
        images: [
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/正面视角.png",
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/45度视角.png",
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/反面视角.png",
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/右侧视角.png",
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/左侧视角(1).png",
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/底面.png",
            "images/products/smart-home/LS062WH｜CUBE Motion Sensor_多功能动态感应器/产品七视图/顶面.png"
        ],
        features: [
            "تقنية PIR متقدمة",
            "مستشعر حرارة مدمج",
            "دقة عالية في الكشف",
            "استهلاك منخفض للطاقة",
            "زاوية كشف واسعة",
            "سهل التركيب"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "smart-station-basic",
        code: "LS082WH",
        name: "Smart Station - محطة التحكم الأساسية",
        description: "مركز النظام البيئي للمنزل الذكي، معالج قوي يدعم حتى 500 جهاز متصل.",
        price: 469,
        currency: "ر.س",
        image: "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/正面.png",
        images: [
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/正面.png",
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/45度视角.png",
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/反面.png",
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/右侧.png",
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/左侧.png",
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/底面.png",
            "images/products/smart-home/LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/顶面.png"
        ],
        features: [
            "معالج قوي عالي الأداء",
            "يدعم حتى 500 جهاز متصل",
            "بروتوكول CoSS المتقدم",
            "سهل التركيب والإعداد",
            "تحديثات برمجية دورية",
            "متوافق مع جميع أجهزة LifeSmart"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "general-controller",
        code: "LS143",
        name: "General Controller - وحدة التحكم العامة",
        description: "وحدة تحكم عامة متعددة الوظائف، تدعم التحكم في مختلف الأجهزة الذكية.",
        price: 225,
        currency: "ر.س",
        image: "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器正面.png",
        images: [
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器正面.png",
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器45度.png",
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器反面.png",
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器右侧.png",
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器左侧.png",
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器底面.png",
            "images/products/smart-home/LS143｜General Controller_通用控制器/产品七视图/通用控制器顶面.png"
        ],
        features: [
            "تحكم متعدد الوظائف",
            "تصميم أنيق ومدمج",
            "سهل التركيب",
            "متوافق مع جميع الأنظمة",
            "تحكم ذكي متقدم"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "converter-485",
        code: "LS080HV",
        name: "485 Converter - محول 485",
        description: "محول بروتوكول 485 للاتصال بين الأجهزة الذكية والأنظمة التقليدية.",
        price: 185,
        currency: "ر.س",
        image: "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/正面485.png",
        images: [
            "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/正面485.png",
            "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/反面485.png",
            "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/右侧485.png",
            "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/左侧485.png",
            "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/底面485.png",
            "images/products/smart-home/LS080HV _ 485 converter_485转换器/七视图/顶面485.png"
        ],
        features: [
            "تحويل بروتوكول 485",
            "اتصال بين الأنظمة",
            "تصميم أنيق ومدمج",
            "سهل التركيب",
            "موثوقية عالية"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "triac-dimmer-switch",
        code: "LS223BL",
        name: "Triac Dimmer Switch - مخفت إضاءة Triac",
        description: "مخفت إضاءة ذكي بتقنية Triac، يوفر تحكم دقيق في مستوى الإضاءة.",
        price: 195,
        currency: "ر.س",
        image: "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114406.png",
        images: [
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114406.png",
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114436.png",
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114441.png",
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114445.png",
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114455.png",
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114459.png",
            "images/products/smart-home/LS223BL Triac Dimmer Switch (Black)/20221021-114530.png"
        ],
        features: [
            "تقنية Triac المتقدمة",
            "تحكم دقيق في الإضاءة",
            "تصميم أنيق باللون الأسود",
            "سهل التركيب",
            "موفر للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "nature-mini-pro-white",
        code: "LS268-WH3",
        name: "Nature Mini PRO - شاشة 4 بوصة (أبيض)",
        description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE.",
        price: 915,
        currency: "ر.س",
        image: "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/正面.jpg",
        images: [
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/正面.jpg",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/45度.jpg",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/反面.jpg",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/右侧.png",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/左侧.png",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/底面.png"
        ],
        features: [
            "شاشة لمس HD 4 بوصة",
            "نظام تشغيل قابل للتخصيص",
            "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
            "تصميم عصري باللون الأبيض",
            "تحكم سهل وسريع",
            "استهلاك منخفض للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "nature-mini-pro-grey",
        code: "LS268-GR3",
        name: "Nature Mini PRO - شاشة 4 بوصة (رمادي)",
        description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE.",
        price: 915,
        currency: "ر.س",
        image: "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/正面.jpg",
        images: [
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/正面.jpg",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/45度.jpg",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/反面.jpg",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/右侧.png",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/左侧.png",
            "images/products/smart-home/LS268_Nature Mini PRO/产品7视图/底面.png"
        ],
        features: [
            "شاشة لمس HD 4 بوصة",
            "نظام تشغيل قابل للتخصيص",
            "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
            "تصميم عصري باللون الرمادي",
            "تحكم سهل وسريع",
            "استهلاك منخفض للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cv-dimming-controller",
        code: "LS265",
        name: "CV Dimming Controller - وحدة تحكم خفت الإضاءة",
        description: "وحدة تحكم متقدمة لخفت الإضاءة، تدعم التحكم في الإضاءة المتدرجة.",
        price: 275,
        currency: "ر.س",
        image: "images/products/smart-home/CV Dimming Controller/20240409-144103.004-1.png",
        images: [
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-1.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-2.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-3.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-4.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-5.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-6.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-7.png",
            "images/products/smart-home/CV Dimming Controller/20240409-144103.004-8.png"
        ],
        features: [
            "تحكم متقدم في الإضاءة",
            "تقنية CV المتطورة",
            "تصميم أنيق ومدمج",
            "سهل التركيب",
            "موثوقية عالية"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-smart-station-pro",
        code: "LS205WH",
        name: "DEFED Smart Station PRO - محطة التحكم الذكية المتقدمة",
        description: "أول بوابة فائقة في الصناعة مع دعم 4G، البوابة المفتوحة الأولى التي تعبر الأنظمة والمنصات.",
        price: 1290,
        currency: "ر.س",
        image: "images/products/smart-home/DEFED Smart Station PRO_files/ilink1.png",
        images: [
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink1.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink2.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink3.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink4.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink5.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink6.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink7.png",
            "images/products/smart-home/DEFED Smart Station PRO_files/ilink8.png"
        ],
        features: [
            "دعم شبكات 4G",
            "بروتوكولات متعددة (CoSS, Zigbee, Z-Wave, Wi-Fi, BLE, Matter)",
            "قوة إشارة مضاعفة 5 مرات",
            "ثلاث خيارات لإمداد الطاقة",
            "بوابة مفتوحة عابرة للأنظمة",
            "معالج قوي يصل إلى 500 جهاز متصل"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-door-window-sensor",
        code: "DEFED-DW",
        name: "DEFED Door/Window Sensor - مستشعر الباب/النافذة",
        description: "مستشعر فتح ضيق التصميم، قابل للتطبيق على أي نوافذ أو أبواب. يحتوي على مستشعر حرارة مدمج.",
        price: 164,
        currency: "ر.س",
        image: "images/products/smart-home/DEFED Door-Window Sensor/正面门禁.png",
        images: [
            "images/products/smart-home/DEFED Door-Window Sensor/正面门禁.png",
            "images/products/smart-home/DEFED Door-Window Sensor/45度门禁.png",
            "images/products/smart-home/DEFED Door-Window Sensor/反面门禁.png",
            "images/products/smart-home/DEFED Door-Window Sensor/左侧门禁.png",
            "images/products/smart-home/DEFED Door-Window Sensor/底面门禁.png",
            "images/products/smart-home/DEFED Door-Window Sensor/顶面门禁.png",
            "images/products/smart-home/DEFED Door-Window Sensor/正面门禁(1).png"
        ],
        features: [
            "حماية من التلاعب",
            "عمر بطارية يصل إلى 10 سنوات",
            "نقل إشارة 800 متر",
            "مستشعر حرارة مدمج",
            "تصميم ضيق أنيق",
            "سهل التركيب"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-motion-sensor",
        code: "DEFED-MS",
        name: "DEFED Motion Sensor - مستشعر الحركة",
        description: "مستشعر PIR مدمج مع عنصر استشعار درجة الحرارة لدقة الكشف في درجات الحرارة المرتفعة.",
        price: 199,
        currency: "ر.س",
        image: "images/products/smart-home/DEFED Motion Sensor/正面动态.png",
        images: [
            "images/products/smart-home/DEFED Motion Sensor/正面动态.png",
            "images/products/smart-home/DEFED Motion Sensor/45动态.png",
            "images/products/smart-home/DEFED Motion Sensor/反面动态.png",
            "images/products/smart-home/DEFED Motion Sensor/左侧动态.png",
            "images/products/smart-home/DEFED Motion Sensor/底面动态.png",
            "images/products/smart-home/DEFED Motion Sensor/顶面动态.png"
        ],
        features: [
            "تقنية PIR متقدمة",
            "مستشعر حرارة مدمج",
            "دقة عالية في الكشف",
            "استهلاك منخفض للطاقة",
            "زاوية كشف واسعة",
            "سهل التركيب"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-indoor-siren",
        code: "DEFED-IS",
        name: "DEFED Indoor Siren - صفارة إنذار داخلية",
        description: "جهاز تحذير في نظام الأمن المنزلي مع مؤشر LED ومستشعر حرارة، يوفر أصوات >80 ديسيبل.",
        price: 246,
        currency: "ر.س",
        image: "images/products/smart-home/Indoor Siren.png",
        images: [
            "images/products/smart-home/Indoor Siren.png"
        ],
        features: [
            "صوت إنذار >80 ديسيبل",
            "مؤشر LED",
            "مستشعر حرارة مدمج",
            "تنبيهات فورية",
            "سهل التركيب",
            "استهلاك منخفض للطاقة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "defed-key-fob",
        code: "DEFED-KF",
        name: "DEFED Key Fob - جهاز تحكم محمول",
        description: "جهاز تحكم محمول أنيق، يوفر التحكم السريع في أجهزة المنزل الذكي.",
        price: 125,
        currency: "ر.س",
        image: "images/products/smart-home/DEFED Key Fob.png",
        images: [
            "images/products/smart-home/DEFED Key Fob.png"
        ],
        features: [
            "تحكم محمول سهل",
            "تصميم أنيق ومدمج",
            "بطارية طويلة الأمد",
            "تحكم سريع",
            "متوافق مع نظام DEFED"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    }
];

function getProductsByCategory(categorySlug) {
    return products.filter(product => {
        // Filter by category
        const matchesCategory = product.categorySlug === categorySlug;
        
        // Only show products with real images (filter out placeholder/unsplash)
        const hasValidImage = product.image && 
                              product.image.trim() !== '' && 
                              !product.image.includes('unsplash') &&
                              !product.image.includes('placehold');
        
        return matchesCategory && hasValidImage;
    });
}

