const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'images', 'products', 'smart-home');

// Function to recursively get all image files from a directory
function getAllImages(dir, baseDir = dir) {
    const imageList = [];

    try {
        const files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory()) {
                imageList.push(...getAllImages(filePath, baseDir));
            } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file) && !file.includes('._')) {
                // Convert to relative web path
                const relativePath = path.relative(path.join(__dirname, 'images'), filePath).replace(/\\/g, '/');
                imageList.push('images/' + relativePath);
            }
        });
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error.message);
    }

    return imageList;
}

// Get all product folders and their images
const productFolders = fs.readdirSync(productsDir);
const productImagesMap = {};

productFolders.forEach(folder => {
    const productPath = path.join(productsDir, folder);
    const stat = fs.statSync(productPath);

    if (stat.isDirectory()) {
        // Extract product code from folder name
        const codeMatch = folder.match(/^([A-Z0-9\-]+)/);
        if (codeMatch) {
            const productCode = codeMatch[1].replace(/｜|_|{|}|\s/g, '');
            const images = getAllImages(productPath);

            if (images.length > 0) {
                productImagesMap[productCode] = {
                    folder: folder,
                    images: images
                };
            }
        }
    }
});

// Save the mapping to a JSON file
fs.writeFileSync(
    path.join(__dirname, 'product-images-map.json'),
    JSON.stringify(productImagesMap, null, 2)
);

console.log('Product images mapping generated!');
console.log(`Found ${Object.keys(productImagesMap).length} products with images`);

// Print sample
console.log('\nSample products:');
Object.keys(productImagesMap).slice(0, 5).forEach(code => {
    console.log(`${code}: ${productImagesMap[code].images.length} images`);
});
