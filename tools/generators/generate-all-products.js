const fs = require('fs');

// Load image mappings
const imageMap = JSON.parse(fs.readFileSync('./product-images-map.json', 'utf8'));

// Helper to find images
function findImages(code) {
    if (imageMap[code]) return imageMap[code].images;
    for (const key in imageMap) {
        if (key.includes(code) || code.includes(key)) {
            return imageMap[key].images;
        }
    }
    return ["images/placeholder.png"];
}

// Read existing products-data.js
let existingData = fs.readFileSync('./js/products-data.js', 'utf8');

// Extract categories and business systems products
const categoriesMatch = existingData.match(/const categories = \[([\s\S]*?)\];/);
const businessProductsMatch = existingData.match(/\/\/ Business Systems[\s\S]*?\/\/ Security Systems[\s\S]*?isPopular: false\s*}\s*\]/);

// For now, just map product codes

console.log('Generating comprehensive products file...');
console.log('Found ' + Object.keys(imageMap).length + ' products with images');
console.log('Sample codes:', Object.keys(imageMap).slice(0, 10).join(', '));

// For now, let's just create a mapping file
fs.writeFileSync('./lifesmart-codes-map.txt', Object.keys(imageMap).join('\n'));
console.log('Product codes saved to lifesmart-codes-map.txt');
