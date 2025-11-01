const fs = require('fs');
const path = require('path');

// Load the image mappings
const imageMap = JSON.parse(fs.readFileSync('./product-images-map.json', 'utf8'));

// Helper to find images for a product code
function findImages(code) {
    // Try exact match
    if (imageMap[code]) return imageMap[code].images;

    // Try variations (without special characters)
    const cleanCode = code.replace(/[｜_\-{}\s]/g, '');
    for (const key in imageMap) {
        const cleanKey = key.replace(/[｜_\-{}\s]/g, '');
        if (cleanKey.includes(cleanCode) || cleanCode.includes(cleanKey)) {
            return imageMap[key].images;
        }
    }

    return null;
}

// All Life Smart products from PDF with their codes, names, descriptions, and prices
const allLifeSmartProducts = [
    // Smart Station Series
    { code: "LS082WH", name: "Smart Station", nameAr: "محطة التحكم الذكية", price: 469, desc: "مركز النظام البيئي للمنزل الذكي، معالج قوي يدعم حتى 500 جهاز متصل، بروتوكول CoSS." },
    { code: "LS205WH", name: "DEFED Smart Station PRO", nameAr: "DEFED Smart Station PRO", price: 1290, desc: "أول بوابة فائقة في الصناعة مع دعم 4G، تدعم بروتوكولات متعددة مثل CoSS و Zigbee و Z-Wave و Wi-Fi و BLE و Matter." },

    // Nature 7 PRO Series
    { code: "LS227", name: "Nature 7 PRO", nameAr: "Nature 7 PRO - لوحة التحكم الذكية", price: 2159, desc: "لوحة تحكم بشاشة كاملة 7 بوصة تدمج جميع ميزات التحكم الذكي، تمكنك من التحكم في مختلف الأجهزة المنزلية." },

    // Nature Mini PRO Series
    { code: "LS268-WH3", name: "Nature Mini PRO (White 3 way)", nameAr: "Nature Mini Pro - شاشة 4 بوصة (أبيض 3 مسارات)", price: 915, desc: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi و BLE." },
    { code: "LS268-GR3", name: "Nature Mini PRO (Grey 3 way)", nameAr: "Nature Mini Pro - شاشة 4 بوصة (رمادي 3 مسارات)", price: 915, desc: "شاشة لمس HD بحجم 4 بوصات، نظام تشغيل قابل للتخصيص، بروتوكولات متعددة تشمل CoSS و Zigbee و Wi-Fi و BLE." },
    { code: "LS268-WT1", name: "Nature Mini PRO (White Thermostat)", nameAr: "Nature Mini PRO (ترموستات أبيض)", price: 915, desc: "لوحة تحكم ثنائية في المكيف المركزي والتدفئة الأرضية، يمكن أن تعمل أيضاً كبوابة ولوحة تحكم للمنزل الذكي." },
    { code: "LS268-GT1", name: "Nature Mini PRO (Grey Thermostat)", nameAr: "Nature Mini PRO (ترموستات رمادي)", price: 915, desc: "لوحة تحكم ثنائية في المكيف المركزي والتدفئة الأرضية، يمكن أن تعمل أيضاً كبوابة ولوحة تحكم للمنزل الذكي." },

    // CUBE Switch Modules
    { code: "LS176", name: "CUBE Switch Module (1 way)", nameAr: "CUBE Switch Module - مفتاح ذكي (مسار واحد)", price: 223, desc: "يعمل مع Smart Station، مفتاح بمسار واحد، يحول المفتاح التقليدي إلى مفتاح ذكي." },
    { code: "LS177", name: "CUBE Switch Module (2 way)", nameAr: "CUBE Switch Module - مفتاح ذكي (مساران)", price: 246, desc: "يعمل مع Smart Station، مفتاح بمسارين، يحول المفتاح التقليدي إلى مفتاح ذكي." },
    { code: "LS193", name: "CUBE Switch Module PRO (3 way)", nameAr: "CUBE Switch Module PRO - مفتاح ذكي (3 مسارات)", price: 270, desc: "يعمل مع Smart Station، مفتاح بثلاث مسارات، يحول المفتاح التقليدي إلى مفتاح ذكي." },

    // Smart Switch Air
    { code: "LS222-WH4", name: "Smart Switch Air (8 Key 4 Way White)", nameAr: "Smart Switch Air - مفتاح ذكي", price: 270, desc: "سلسلة Smart Switch Air تستبدل مفتاحك التقليدي ببروتوكول CoSS لجعل حياتك أسهل." },

    // BLEND Switch PRO Series
    { code: "LS240-LW1", name: "BLEND Switch PRO (SL/White 1 way)", nameAr: "BLEND Switch PRO - مفتاح ذكي (أبيض - مسار واحد)", price: 305, desc: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة." },
    { code: "LS240-LW2", name: "BLEND Switch PRO (SL/White 2 way)", nameAr: "BLEND Switch PRO - مفتاح ذكي (أبيض - مساران)", price: 328, desc: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة." },
    { code: "LS240-LW3", name: "BLEND Switch PRO (SL/White 3 way)", nameAr: "BLEND Switch PRO - مفتاح ذكي (أبيض - 3 مسارات)", price: 352, desc: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة." },
    { code: "LS240-LG1", name: "BLEND Switch PRO (SL/Gray 1 way)", nameAr: "BLEND Switch PRO - مفتاح ذكي (رمادي - مسار واحد)", price: 305, desc: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة." },
    { code: "LS240-LG2", name: "BLEND Switch PRO (SL/Gray 2 way)", nameAr: "BLEND Switch PRO - مفتاح ذكي (رمادي - مساران)", price: 328, desc: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة." },
    { code: "LS240-LG3", name: "BLEND Switch PRO (SL/Gray 3 way)", nameAr: "BLEND Switch PRO - مفتاح ذكي (رمادي - 3 مسارات)", price: 352, desc: "النسخة المطورة من BLEND Smart Switch، تحسين تأثير شريط LED، مفاتيح لوحة كبيرة مصقولة." },

    // Nature Switch Series
    { code: "LS220-WF1", name: "Nature Switch (White AG Glass - White 1 way)", nameAr: "Nature Switch - مفتاح زجاجي (أبيض - مسار واحد)", price: 305, desc: "يعمل مع Smart Station، تقنية Touch Pro، زجاج مقسى، إضاءة مؤشر 16 مليون لون قابلة للتخصيص." },
    { code: "LS220-WF2", name: "Nature Switch (White AG Glass - White 2 way)", nameAr: "Nature Switch - مفتاح زجاجي (أبيض - مساران)", price: 328, desc: "يعمل مع Smart Station، تقنية Touch Pro، زجاج مقسى، إضاءة مؤشر 16 مليون لون قابلة للتخصيص." },
    { code: "LS220-WF3", name: "Nature Switch (White AG Glass - White 3 way)", nameAr: "Nature Switch - مفتاح زجاجي (أبيض - 3 مسارات)", price: 352, desc: "يعمل مع Smart Station، تقنية Touch Pro، زجاج مقسى، إضاءة مؤشر 16 مليون لون قابلة للتخصيص." },

    // Sensors Series
    { code: "LS069WH", name: "CUBE Clicker (White)", nameAr: "CUBE Clicker - زر التحكم", price: 94, desc: "يعمل مع Smart Station، يمكن تثبيته في أي مكان، نقرة واحدة للتبديل بين المشاهد المختلفة." },
    { code: "LS201WH", name: "DEFED Key Fob", nameAr: "DEFED Key Fob - جهاز تحكم محمول", price: 129, desc: "جهاز تحكم محمول وسهل الاستخدام لنظام الإنذار، يمكن تثبيته في المفاتيح وحمله في كل مكان." },
    { code: "BSD48", name: "Smart Plug (ZigBee UK, with Monitor Energy Usage)", nameAr: "قابس ذكي مع مراقبة الطاقة", price: 153, desc: "يعمل مع Smart Station، مراقبة استهلاك الطاقة، التحكم عن بُعد، سهولة الاقتران." },
    { code: "LS080HV", name: "485 Converter", nameAr: "محول 485", price: 399, desc: "يعمل مع Smart Station، سهل التكامل مع أجهزة الطرف الثالث 12/24 فولت مع نظام LifeSmart." },
    { code: "LS143", name: "General Controller", nameAr: "وحدة التحكم العامة", price: 305, desc: "يعمل مع Smart Station، سهل التكامل مع أجهزة الطرف الثالث 12/24 فولت مع نظام LifeSmart." },

    // Lighting
    { code: "LS065", name: "BLEND Light Strip (24V)", nameAr: "شريط إضاءة BLEND", price: 375, desc: "يعمل مع Smart Station، أكثر من 16 مليون لون وضوء أبيض، تعديل السطوع، تقنية LED منخفضة الطاقة." },
    { code: "LS012", name: "Light Strip Controller", nameAr: "وحدة التحكم في شريط الإضاءة", price: 211, desc: "يعمل مع Smart Station للتحكم في شريط الإضاءة." },
    { code: "LS265", name: "CV Dimming Controller", nameAr: "وحدة تحكم خفت الإضاءة", price: 305, desc: "وحدة تحكم تعتيم LED ذات جهد ثابت، يمكن استخدامها لنظام إضاءة ذكي ذو جهد ثابت." },
    { code: "LS223BL", name: "Triac Dimmer", nameAr: "مخفت إضاءة Triac", price: 282, desc: "مخفت إضاءة Triac، أسود، إطار رمادي." },

    // Smart Lock
    { code: "C100", name: "Smart Door Lock C200 (Black - Wooden door)", nameAr: "قفل الباب الذكي C200", price: 1290, desc: "قفل باب ذكي متقدم بتقنية بصمة الإصبع وعدة طرق لفتح الباب، مناسب للأبواب بسماكة 40-122 ملم." },

    // DEFED Sensors
    { code: "LS202WH", name: "DEFED Door/Window Sensor", nameAr: "DEFED مستشعر الباب/النافذة", price: 164, desc: "مستشعر فتح ضيق التصميم، قابل للتطبيق على أي نوافذ أو أبواب، يحتوي على مستشعر حرارة مدمج." },
    { code: "LS203WH", name: "DEFED Motion Sensor", nameAr: "DEFED مستشعر الحركة", price: 199, desc: "مستشعر PIR مدمج مع عنصر استشعار درجة الحرارة لدقة الكشف في درجات الحرارة المرتفعة." },
    { code: "LS204WH", name: "DEFED Indoor Siren", nameAr: "DEFED صفارة إنذار داخلية", price: 246, desc: "جهاز تحذير في نظام الأمن المنزلي مع مؤشر LED ومستشعر حرارة، يوفر أصوات >80 ديسيبل." },

    // Motion Sensor PRO
    { code: "LS235WH", name: "Motion Sensor PRO", nameAr: "Motion Sensor PRO - مستشعر حركة احترافي", price: 176, desc: "مستشعر حركة احترافي بجسم مستطيل وحجرة بطارية كبيرة مصممة خصيصاً." },

    // Environmental Sensors
    { code: "LS063WH", name: "Cube Environmental Sensor", nameAr: "Cube مستشعر بيئي", price: 188, desc: "يعمل مع Smart Station، مراقبة متزامنة لدرجة الحرارة والرطوبة والإضاءة، شاشة LCD." },
    { code: "LS064WH", name: "Water Leak Sensor", nameAr: "مستشعر تسرب المياه", price: 188, desc: "يعمل مع Smart Station، كشف تسرب المياه، تنبيهات فورية 24/7." },
    { code: "LS086WH", name: "Gas Sensor", nameAr: "مستشعر الغاز", price: 293, desc: "يعمل مع Smart Station، كشف تسرب الغاز بما في ذلك الميثان والغاز الطبيعي والغاز الحيوي." },
    { code: "MIR-SM100", name: "Independent Photoelectric Smoke Detector (ZigBee)", nameAr: "كاشف دخان ضوئي مستقل", price: 211, desc: "كاشف دخان ضوئي مستقل يعتمد مبدأ الاستشعار البصري المتقدم." },

    // Curtain Controllers
    { code: "LS240-GCN", name: "Nature Switch Curtain Controller", nameAr: "وحدة التحكم في الستائر", price: 352, desc: "يمكن توصيل وحدة التحكم بالستائر الكهربائية، يمكن للمستخدمين التحكم عن بُعد في الستائر التقليدية عبر تطبيق الهاتف." },
    { code: "BCM100D", name: "Quicklink Curtain Motor Suit (3.2m)", nameAr: "Quicklink محرك ستائر ذكي (3.2 متر)", price: 774, desc: "يعمل مع Smart Station، مهام مجدولة، يتضمن محرك و 3.2 متر من مسار الستائر القابل للتعديل." },
    { code: "BCM100D-52", name: "Quicklink Curtain Motor Suit (5.2m)", nameAr: "Quicklink محرك ستائر ذكي (5.2 متر)", price: 892, desc: "يعمل مع Smart Station، مهام مجدولة، يتضمن محرك و 5.2 متر من مسار الستائر القابل للتعديل." },

    // AC Control
    { code: "LS251WH", name: "SPOT Mini Universal Remote Controller (CoSS)", nameAr: "SPOT Mini - جهاز تحكم عن بعد عالمي", price: 188, desc: "جهاز تحكم عن بعد بالأشعة تحت الحمراء الكل في واحد لتنشيط أجهزة التلفاز والمكيفات والمراوح وأجهزة DVD." },
    { code: "LS212", name: "Central Air-conditioner Smart Controller PRO", nameAr: "وحدة التحكم الذكية في المكيف المركزي PRO", price: 587, desc: "وحدة تحكم ذكية للمكيف المركزي." },
    { code: "LS220-WT1", name: "Nature Thermostat (Gray Frame - Black Glass)", nameAr: "Nature Thermostat - ترموستات ذكي", price: 528, desc: "لديه ثلاث واجهات لسرعة المروحة وواجهتين للصمام للتحكم في نظام التدفئة والتهوية وتكييف الهواء." }
];

console.log(`Processing ${allLifeSmartProducts.length} Life Smart products...`);

// Find images for each product and generate output
const productsWithImages = allLifeSmartProducts.map(product => {
    const images = findImages(product.code);
    const hasImages = images && images.length > 0;

    return {
        ...product,
        images: images || [],
        hasImages: hasImages,
        imageCount: images ? images.length : 0
    };
});

// Statistics
const withImages = productsWithImages.filter(p => p.hasImages);
const withoutImages = productsWithImages.filter(p => !p.hasImages);

console.log(`\nResults:`);
console.log(`✓ ${withImages.length} products have images`);
console.log(`✗ ${withoutImages.length} products missing images`);

console.log(`\nProducts WITH images:`);
withImages.forEach(p => {
    console.log(`  ${p.code}: ${p.imageCount} images`);
});

if (withoutImages.length > 0) {
    console.log(`\nProducts WITHOUT images:`);
    withoutImages.forEach(p => {
        console.log(`  ${p.code}: ${p.nameAr}`);
    });
}

// Save comprehensive image mapping
const comprehensiveMapping = {};
productsWithImages.forEach(product => {
    if (product.hasImages) {
        comprehensiveMapping[product.code] = {
            name: product.nameAr,
            price: product.price,
            images: product.images
        };
    }
});

fs.writeFileSync('./lifesmart-comprehensive-images.json', JSON.stringify(comprehensiveMapping, null, 2));
console.log(`\n✓ Saved comprehensive mapping to lifesmart-comprehensive-images.json`);
