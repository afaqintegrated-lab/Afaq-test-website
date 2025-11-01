// Complete Product Images Data for ALL Life Smart Products
// Auto-generated from product folders

const completeProductImages = {
    "LS082WH": ["images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/正面.png", "images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/反面.png", "images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/左侧.png", "images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/右侧.png", "images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/顶面.png", "images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/底面.png", "images/products/smart-home/LS082WH｜Smart Station_智慧中心/产品七视图/45度视角.png"],

    "LS205WH": ["images/products/smart-home/LS205WH｜DEFED Smart Station PRO/7 aspects images/DEFED00000_00000.png", "images/products/smart-home/LS205WH｜DEFED Smart Station PRO/7 aspects images/DEFED00001_00000.png", "images/products/smart-home/LS205WH｜DEFED Smart Station PRO/7 aspects images/DEFED00002_00000.png", "images/products/smart-home/LS205WH｜DEFED Smart Station PRO/7 aspects images/DEFED00003_00000.png"],

    "LS227": ["images/products/smart-home/LS227 _ Nature 7 PRO_视界7PRO/7 aspects images (Grey)/Nature70006_00000.png"],

    "LS268-WT1": ["images/products/smart-home/LS268-WT1 Nature Mini PRO (White Thermostat)/20230922-173732.png"],

    "LS268-GT1": ["images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/Front.png", "images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/back.png", "images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/Left.png", "images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/Right.png", "images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/up.png", "images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/bottom.png", "images/products/smart-home/LS268-GT1 Nature Mini PRO (Grey Thermostat)/45°.png"],

    "C100": ["images/products/smart-home/C100/七视图/微信图片_20200728104658.jpg", "images/products/smart-home/C100/七视图/微信图片_20200728104705.jpg", "images/products/smart-home/C100/七视图/微信图片_20200728104709.jpg", "images/products/smart-home/C100/场景图/20211223-141152.jpeg", "images/products/smart-home/C100/场景图/飞书20211223-141057.jpg"]
};

// Load comprehensive images from JSON
fetch('lifesmart-comprehensive-images.json')
    .then(response => response.json())
    .then(data => {
        // Merge with existing
        Object.assign(completeProductImages, data);
        console.log('Loaded comprehensive product images');

        // Apply to products
        if (typeof products !== 'undefined') {
            applyImagesToProducts();
        }
    })
    .catch(error => {
        console.log('Using embedded image data');
        // Use embedded data if fetch fails
        if (typeof products !== 'undefined') {
            applyImagesToProducts();
        }
    });

function applyImagesToProducts() {
    let updatedCount = 0;

    products.forEach(product => {
        if (product.code && completeProductImages[product.code]) {
            const images = completeProductImages[product.code];
            if (Array.isArray(images)) {
                product.images = images;
                product.image = images[0];
                updatedCount++;
            } else if (images.images) {
                product.images = images.images;
                product.image = images.images[0];
                updatedCount++;
            }
        }

        // Ensure all products have images array
        if (!product.images && product.image) {
            product.images = [product.image];
        }
    });

    console.log(`✓ Applied images to ${updatedCount} Life Smart products`);
}

// Export for use
if (typeof window !== 'undefined') {
    window.completeProductImages = completeProductImages;
    window.applyImagesToProducts = applyImagesToProducts;
}
