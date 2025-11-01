// Script to process and collect product images
const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '..', 'images', 'products', 'smart-home');

// Function to recursively get all image files from a directory
function getAllImages(dir, imageList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllImages(filePath, imageList);
        } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
            imageList.push(filePath);
        }
    });

    return imageList;
}

// Function to get images for a specific product code
function getProductImages(productCode) {
    const productFolders = fs.readdirSync(productsDir);

    for (const folder of productFolders) {
        // Match product code in folder name (e.g., LS082WH, LS227, etc.)
        if (folder.includes(productCode)) {
            const productPath = path.join(productsDir, folder);
            const images = getAllImages(productPath);

            // Convert absolute paths to relative web paths
            return images.map(img => {
                return img.replace(/\\/g, '/').split('images/')[1];
            });
        }
    }

    return [];
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getAllImages, getProductImages };
}
