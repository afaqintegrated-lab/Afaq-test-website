// Script to match products from products-data.js with images from comprehensive JSON
const fs = require('fs');

// Load comprehensive images
const comprehensiveImages = JSON.parse(fs.readFileSync('lifesmart-comprehensive-images.json', 'utf8'));

// Available codes with images
const availableCodes = Object.keys(comprehensiveImages);
console.log('Available product codes with images:', availableCodes.length);
console.log(availableCodes.join(', '));
console.log('\n');

// Products in products-data.js (from reading the file)
const productsInData = [
    { id: "nature-7-pro", code: "LS227", name: "Nature 7 PRO" },
    { id: "smart-door-lock", code: "C100", name: "قفل الباب الذكي C200" },
    { id: "defed-smart-station", code: "LS205WH", name: "DEFED Smart Station PRO" },
    { id: "smart-station-basic", code: "LS082WH", name: "Smart Station" },
    { id: "nature-mini-pro-white", code: "LS268-WH3", name: "Nature Mini PRO (أبيض)" },
    { id: "nature-mini-pro-grey", code: "LS268-GR3", name: "Nature Mini PRO (رمادي)" },
    { id: "cube-switch-1way", code: "LS176", name: "CUBE Switch Module (1 way)" },
    { id: "cube-switch-2way", code: "LS177", name: "CUBE Switch Module (2 ways)" },
    { id: "cube-switch-3way", code: "LS193", name: "CUBE Switch Module PRO (3 ways)" },
    { id: "blend-switch-1way-white", code: null, name: "BLEND Switch PRO (1 way)" },
    { id: "blend-switch-2way-white", code: null, name: "BLEND Switch PRO (2 ways)" },
    { id: "defed-door-sensor", code: null, name: "DEFED مستشعر الباب/النافذة" },
    { id: "defed-motion-sensor", code: null, name: "DEFED مستشعر الحركة" },
    { id: "defed-indoor-siren", code: null, name: "DEFED صفارة إنذار" },
    { id: "motion-sensor-pro", code: null, name: "Motion Sensor PRO" },
    { id: "environmental-sensor", code: null, name: "Cube مستشعر بيئي" },
    { id: "water-leak-sensor", code: null, name: "مستشعر تسرب المياه" },
    { id: "gas-sensor", code: null, name: "مستشعر الغاز" },
    { id: "smoke-detector", code: null, name: "كاشف دخان" },
    { id: "quicklink-curtain-32m", code: null, name: "Quicklink محرك ستائر (3.2m)" },
    { id: "quicklink-curtain-52m", code: null, name: "Quicklink محرك ستائر (5.2m)" },
    { id: "smart-plug", code: null, name: "قابس ذكي" }
];

console.log('Checking current code mappings:');
productsInData.forEach(p => {
    if (p.code) {
        const hasImage = availableCodes.includes(p.code);
        console.log(`${p.id}: ${p.code} -> ${hasImage ? '✓ HAS IMAGES' : '✗ NO MATCH'}`);
    }
});

console.log('\n\nCodes that need to be updated:');
console.log('LS268-WH3 should be: LS268-WT1');
console.log('LS268-GR3 should be: LS268-GT1');

console.log('\n\nOther available codes not yet assigned:');
const assignedCodes = productsInData.filter(p => p.code).map(p => p.code);
const unassignedCodes = availableCodes.filter(code =>
    !assignedCodes.includes(code) &&
    code !== 'LS268-WT1' &&
    code !== 'LS268-GT1' // These will replace WH3/GR3
);

unassignedCodes.forEach(code => {
    const data = comprehensiveImages[code];
    console.log(`${code}: ${data.name} (${data.images.length} images)`);
});
