const fs = require('fs');
const path = require('path');

// Load the image mappings
const imageMap = JSON.parse(fs.readFileSync('./product-images-map.json', 'utf8'));

// Helper function to find images for a product code
function findImages(code) {
    // Try exact match first
    if (imageMap[code]) {
        return imageMap[code].images;
    }

    // Try partial match
    for (const key in imageMap) {
        if (key.includes(code) || code.includes(key)) {
            return imageMap[key].images;
        }
    }

    // Return placeholder if no images found
    return ["https://placehold.co/800x600/582a6e/ffffff?text=" + encodeURIComponent(code)];
}

// Products data from PDF with images
const lifeSmartProducts = [
    // Smart Station Series
    {
        id: "smart-station-ls082wh",
        code: "LS082WH",
        name: "Smart Station - محطة التحكم الذكية",
        description: "مركز النظام البيئي للمنزل الذكي، معالج قوي يدعم حتى 500 جهاز متصل، بروتوكول CoSS.",
        price: 469,
        currency: "ر.س",
        images: findImages("LS082WH"),
        features: [
            "معالج قوي عالي الأداء",
            "يدعم حتى 500 جهاز متصل",
            "بروتوكول CoSS المتقدم",
            "سهل التركيب والإعداد",
            "تحديثات برمجية دورية"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: true
    },
    {
        id: "defed-smart-station-ls205wh",
        code: "LS205WH",
        name: "DEFED Smart Station PRO (WiFi+7G EU)",
        description: "أول بوابة فائقة في الصناعة مع دعم 4G، البوابة المفتوحة الأولى التي تعبر الأنظمة والمنصات، تدعم بروتوكولات متعددة مثل CoSS و Zigbee و Z-Wave و Wi-Fi و BLE و Matter.",
        price: 1290,
        currency: "ر.س",
        images: findImages("LS205WH"),
        features: [
            "دعم شبكات 4G",
            "بروتوكولات متعددة (CoSS, Zigbee, Z-Wave, Wi-Fi, BLE, Matter)",
            "قوة إشارة مضاعفة 5 مرات",
            "ثلاث خيارات لإمداد الطاقة",
            "بوابة مفتوحة عابرة للأنظمة"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: true
    },

    // Nature 7 PRO Series
    {
        id: "nature-7-pro-ls227",
        code: "LS227",
        name: "Nature 7 PRO - لوحة تحكم ذكية بشاشة كاملة",
        description: "لوحة تحكم بشاشة كاملة تدمج جميع ميزات التحكم الذكي، تمكنك من التحكم في مختلف الأجهزة المنزلية الذكية والتبديل بين المشاهد المختلفة مثل الخروج والنوم والسينما والعشاء.",
        price: 2159,
        currency: "ر.س",
        images: findImages("LS227"),
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

    // Nature Mini PRO Series
    {
        id: "nature-mini-pro-white-ls268-wh3",
        code: "LS268-WH3",
        name: "Nature Mini Pro - شاشة 4 بوصة (أبيض 3 مسارات)",
        description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE.",
        price: 915,
        currency: "ر.س",
        images: findImages("LS268-WH3"),
        features: [
            "شاشة لمس HD 4 بوصة",
            "نظام تشغيل قابل للتخصيص",
            "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
            "تصميم عصري باللون الأبيض",
            "3 مسارات تحكم"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "nature-mini-pro-grey-ls268-gr3",
        code: "LS268-GR3",
        name: "Nature Mini Pro - شاشة 4 بوصة (رمادي 3 مسارات)",
        description: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi ثنائي النطاق و BLE.",
        price: 915,
        currency: "ر.س",
        images: findImages("LS268-GR3"),
        features: [
            "شاشة لمس HD 4 بوصة",
            "نظام تشغيل قابل للتخصيص",
            "بروتوكولات متعددة (CoSS, Zigbee, Wi-Fi, BLE)",
            "تصميم عصري باللون الرمادي",
            "3 مسارات تحكم"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },

    // CUBE Switch Modules
    {
        id: "cube-switch-1way-ls176",
        code: "LS176",
        name: "CUBE Switch Module - مفتاح ذكي (مسار واحد)",
        description: "يعمل مع Smart Station، مفتاح بمسار واحد، يحول المفتاح التقليدي إلى مفتاح ذكي، حجم مضغوط يناسب علب المفاتيح المختلفة.",
        price: 223,
        currency: "ر.س",
        images: findImages("LS176"),
        features: [
            "يعمل مع Smart Station",
            "تحويل المفاتيح التقليدية لذكية",
            "حجم مضغوط يناسب جميع العلب",
            "سهل التركيب",
            "مسار واحد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-switch-2way-ls177",
        code: "LS177",
        name: "CUBE Switch Module - مفتاح ذكي (مساران)",
        description: "يعمل مع Smart Station، مفتاح بمسارين، يحول المفتاح التقليدي إلى مفتاح ذكي، حجم مضغوط يناسب علب المفاتيح المختلفة.",
        price: 246,
        currency: "ر.س",
        images: findImages("LS177"),
        features: [
            "يعمل مع Smart Station",
            "تحويل المفاتيح التقليدية لذكية",
            "حجم مضغوط يناسب جميع العلب",
            "سهل التركيب",
            "مساران"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "cube-switch-3way-ls193",
        code: "LS193",
        name: "CUBE Switch Module PRO - مفتاح ذكي (3 مسارات)",
        description: "يعمل مع Smart Station، مفتاح بثلاث مسارات، يحول المفتاح التقليدي إلى مفتاح ذكي، حجم مضغوط يناسب علب المفاتيح المختلفة.",
        price: 270,
        currency: "ر.س",
        images: findImages("LS193"),
        features: [
            "يعمل مع Smart Station",
            "تحويل المفاتيح التقليدية لذكية",
            "حجم مضغوط يناسب جميع العلب",
            "سهل التركيب",
            "ثلاث مسارات"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },

    // Smart Switch Air
    {
        id: "smart-switch-air-ls222-wh4",
        code: "LS222-WH4",
        name: "Smart Switch Air - مفتاح ذكي (8 أزرار 4 مسارات أبيض)",
        description: "سلسلة Smart Switch Air تستبدل مفتاحك التقليدي ببروتوكول CoSS لجعل حياتك أسهل.",
        price: 270,
        currency: "ر.س",
        images: findImages("LS222"),
        features: [
            "8 أزرار تحكم",
            "4 مسارات",
            "بروتوكول CoSS",
            "سهل التركيب",
            "تصميم عصري باللون الأبيض"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },

    // BLEND Switch PRO Series (White)
    {
        id: "blend-switch-pro-white-1way-ls240-lw1",
        code: "LS240-LW1",
        name: "BLEND Switch PRO - مفتاح ذكي (أبيض - مسار واحد)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، تجربة مفاتيح محسنة.",
        price: 305,
        currency: "ر.س",
        images: findImages("LS240"),
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 16 مليون لون قابلة للتخصيص",
            "توصيل سلك واحد فعال (SL)",
            "تحكم مزدوج ومتعدد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-pro-white-2way-ls240-lw2",
        code: "LS240-LW2",
        name: "BLEND Switch PRO - مفتاح ذكي (أبيض - مساران)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، تجربة مفاتيح محسنة.",
        price: 328,
        currency: "ر.س",
        images: findImages("LS240"),
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 17 مليون لون قابلة للتخصيص",
            "توصيل سلك واحد فعال (SL)",
            "تحكم مزدوج ومتعدد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-pro-white-3way-ls240-lw3",
        code: "LS240-LW3",
        name: "BLEND Switch PRO - مفتاح ذكي (أبيض - 3 مسارات)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، تجربة مفاتيح محسنة.",
        price: 352,
        currency: "ر.س",
        images: findImages("LS240"),
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 18 مليون لون قابلة للتخصيص",
            "توصيل سلك واحد فعال (SL)",
            "تحكم مزدوج ومتعدد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },

    // BLEND Switch PRO Series (Grey)
    {
        id: "blend-switch-pro-grey-1way-ls240-lg1",
        code: "LS240-LG1",
        name: "BLEND Switch PRO - مفتاح ذكي (رمادي - مسار واحد)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، تجربة مفاتيح محسنة.",
        price: 305,
        currency: "ر.س",
        images: findImages("LS240"),
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 19 مليون لون قابلة للتخصيص",
            "توصيل سلك واحد فعال (SL)",
            "تحكم مزدوج ومتعدد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-pro-grey-2way-ls240-lg2",
        code: "LS240-LG2",
        name: "BLEND Switch PRO - مفتاح ذكي (رمادي - مساران)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، تجربة مفاتيح محسنة.",
        price: 328,
        currency: "ر.س",
        images: findImages("LS240"),
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 20 مليون لون قابلة للتخصيص",
            "توصيل سلك واحد فعال (SL)",
            "تحكم مزدوج ومتعدد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    },
    {
        id: "blend-switch-pro-grey-3way-ls240-lg3",
        code: "LS240-LG3",
        name: "BLEND Switch PRO - مفتاح ذكي (رمادي - 3 مسارات)",
        description: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة، تجربة مفاتيح محسنة.",
        price: 352,
        currency: "ر.س",
        images: findImages("LS240"),
        features: [
            "يعمل مع Smart Station",
            "نوع 86 قياسي",
            "إضاءة لوحة 21 مليون لون قابلة للتخصيص",
            "توصيل سلك واحد فعال (SL)",
            "تحكم مزدوج ومتعدد"
        ],
        category: "المنزل الذكي",
        categorySlug: "smart-home",
        isPopular: false
    }
];

// Export as a module or write to file
const output = `// Auto-generated Life Smart Products Data
const lifeSmartProducts = ${JSON.stringify(lifeSmartProducts, null, 2)};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = lifeSmartProducts;
}
`;

fs.writeFileSync('./js/lifesmart-products-part1.js', output);
console.log('Part 1 generated with ' + lifeSmartProducts.length + ' products');
