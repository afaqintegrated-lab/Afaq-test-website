// Quick check of assigned codes
const fs = require('fs');

const content = fs.readFileSync('js/products-data.js', 'utf8');
const codeMatches = [...content.matchAll(/code:\s*"([^"]+)"/g)];
const assignedCodes = codeMatches.map(m => m[1]);

console.log('Assigned codes (', assignedCodes.length, '):');
assignedCodes.forEach(code => console.log('  ' + code));

// Load comprehensive images
const comprehensiveImages = JSON.parse(fs.readFileSync('lifesmart-comprehensive-images.json', 'utf8'));
const availableCodes = Object.keys(comprehensiveImages);

console.log('\n✓ Codes that match:');
assignedCodes.forEach(code => {
    if (availableCodes.includes(code)) {
        const data = comprehensiveImages[code];
        console.log(`  ${code}: ${data.images.length} images`);
    }
});

console.log('\n✗ Codes that DON\'T match:');
assignedCodes.forEach(code => {
    if (!availableCodes.includes(code)) {
        console.log(`  ${code}`);
    }
});

console.log('\nTotal working: ' + assignedCodes.filter(c => availableCodes.includes(c)).length + ' / ' + assignedCodes.length);
