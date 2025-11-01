// Product Images Data - Loaded from comprehensive JSON
const productImagesData = {};

// Helper function to get first available image for a product code
function getProductMainImage(code) {
    const baseFolder = PATH_RESOLVER.resolve("assets/images/products/smart-home/") + "/";

    // Map of product codes to their main image paths
    const imageMap = {
        "LS082WH": baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/正面.png",
        "LS205WH": baseFolder + "DEFED Smart/DEFED Smart Station PRO-0001_00000.png",
        "LS227": baseFolder + "LS268_Nature Mini PRO/产品7视图/Grey nature mini pro.png",
        "LS268-WH3": baseFolder + "LS268_Nature Mini PRO/产品7视图/White .jpg",
        "LS268-GR3": baseFolder + "LS268_Nature Mini PRO/产品7视图/Grey nature mini pro.png",
        "C100": PATH_RESOLVER.resolve("assets/images/logos/img1.png"),
        "LS176": baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro正面.png",
        "LS177": baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro正面.png",
        "LS193": baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro正面.png",
        // Products from ProductsFromDrive
        "LS055-57WH-1": "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联正面.png",
        "LS055-57WH-2": "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联正面.png",
        "LS055-57WH-3": "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联正面.png",
        "LS069WH": "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心正面.png",
        "LS222": "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/正视图-front view-真薄开关.png",
        "LS256": "../resources/products-from-drive/ProductsFromDrive/LS256_Smart Remote Control _ 智能情景遥控器/七视图/正面.png",
        "LS178": "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界正面.png",
        "LS0BCM100D": "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/正面速接电机_00000.png",
        "SCM-V2": "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140213.png"
    };

    return imageMap[code] || null;
}

// Helper function to get all images for a product code
function getProductImages(code) {
    const baseFolder = PATH_RESOLVER.resolve("assets/images/products/smart-home/") + "/";

    // Comprehensive image arrays for products
    const imagesMap = {
        "LS082WH": [
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/正面.png",
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/反面.png",
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/左侧.png",
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/右侧.png",
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/顶面.png",
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/底面.png",
            baseFolder + "LS082WH｜Smart Station_智慧中心-20251012T143906Z-1-001/LS082WH｜Smart Station_智慧中心/产品七视图/45度视角.png"
        ],
        "LS205WH": [
            baseFolder + "DEFED Smart/DEFED Smart Station PRO-0001_00000.png",
            baseFolder + "DEFED Smart/DEFED Smart Station PRO-0002_00000.png",
            baseFolder + "DEFED Smart/DEFED Smart Station PRO-0003_00000.png",
            baseFolder + "DEFED Smart/DEFED Smart Station PRO-0004_00000.png"
        ],
        "LS227": [
            baseFolder + "LS268_Nature Mini PRO/产品7视图/Grey nature mini pro.png"
        ],
        "LS268-WH3": [
            baseFolder + "LS268_Nature Mini PRO/产品7视图/White .jpg"
        ],
        "LS268-GR3": [
            baseFolder + "LS268_Nature Mini PRO/产品7视图/Grey nature mini pro.png",
            baseFolder + "LS268_Nature Mini PRO/产品7视图/Black.jpg"
        ],
        "C100": [
            PATH_RESOLVER.resolve("assets/images/logos/img1.png")
        ],
        "LS176": [
            baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro正面.png",
            baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro顶面.png"
        ],
        "LS177": [
            baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro正面.png",
            baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro顶面.png"
        ],
        "LS193": [
            baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro正面.png",
            baseFolder + "LS191-192-193｜CUBE Switch Module PRO_3way/产品七视图/奇点pro顶面.png"
        ],
        // Products from ProductsFromDrive
        "LS055-57WH-1": [
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联正面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联45度.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联反面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联左侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联底面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/1 gang/一联顶面.png"
        ],
        "LS055-57WH-2": [
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联正面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联45.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联反面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联左侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联底面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/2 gang/二联顶面.png"
        ],
        "LS055-57WH-3": [
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联正面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联45.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联反面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联左侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联底面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS055-57WH  Blend Switch/3gang/三联顶面.png"
        ],
        "LS069WH": [
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心正面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心45度.png",
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心侧面右侧.png",
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心左侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心底面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/随心顶面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS069WH｜CUBE Clicker (White)_随心开关（白色）/产品七视图/反面视角.png"
        ],
        "LS222": [
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/正视图-front view-真薄开关.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/透视视图-perspective view-真薄开关.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/右视图-right view-真薄开关.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/左视图-left view-真薄开关.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/背视图-back view-真薄开关.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/底视图-bottom view-真薄开关.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/顶视图-top view-真薄开关0.png",
            "../resources/products-from-drive/ProductsFromDrive/LS222 Smart Switch Air/7 Perspective/地平线视图-Horizon view-真薄开关.png"
        ],
        "LS256": [
            "../resources/products-from-drive/ProductsFromDrive/LS256_Smart Remote Control _ 智能情景遥控器/七视图/正面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS256_Smart Remote Control _ 智能情景遥控器/七视图/45度.png",
            "../resources/products-from-drive/ProductsFromDrive/LS256_Smart Remote Control _ 智能情景遥控器/七视图/侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS256_Smart Remote Control _ 智能情景遥控器/七视图/侧面2.png",
            "../resources/products-from-drive/ProductsFromDrive/LS256_Smart Remote Control _ 智能情景遥控器/七视图/背面.png"
        ],
        "LS178": [
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界正面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界45度.png",
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界反面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界右侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界左侧面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界底面面.png",
            "../resources/products-from-drive/ProductsFromDrive/LS178｜MINS Curtain Motor Controller_智界窗帘电机智控器/产品七视图/智界顶面.png"
        ],
        "LS0BCM100D": [
            "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/正面速接电机_00000.png",
            "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/45速接电机_00000.png",
            "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/反面速接电机_00000.png",
            "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/右侧速接电机_00000.png",
            "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/底面速接电机_00000.png",
            "../resources/products-from-drive/ProductsFromDrive/LS0BCM100D_Quicklink Curtain Motor_速接窗帘电机 - M100D/顶面速接电机_00000.png"
        ],
        "SCM-V2": [
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140213.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140226.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140233.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140239.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140244.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140250.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140254.png",
            "../resources/products-from-drive/ProductsFromDrive/smart curtain motor v2/20240829-140300.png"
        ]
    };

    // Return images array or single image in array
    if (imagesMap[code]) {
        return imagesMap[code];
    }

    // Fallback to main image
    const mainImage = getProductMainImage(code);
    return mainImage ? [mainImage] : null;
}

// Load comprehensive images from JSON and apply
fetch('../data/products/lifesmart-comprehensive-images.json')
    .then(response => response.json())
    .then(comprehensiveImages => {
        console.log('Loaded comprehensive images for', Object.keys(comprehensiveImages).length, 'products');

        // Apply images to products
        if (typeof products !== 'undefined') {
            let updatedCount = 0;

            products.forEach(product => {
                if (product.code && comprehensiveImages[product.code]) {
                    const imageData = comprehensiveImages[product.code];
                    if (imageData.images && imageData.images.length > 0) {
                        product.images = imageData.images;
                        product.image = imageData.images[0];
                        updatedCount++;
                    }
                }

                // Ensure all products have images array
                if (!product.images && product.image) {
                    product.images = [product.image];
                }
            });

            console.log(`✓ Applied real images to ${updatedCount} Life Smart products`);

            // Trigger a re-render if store is already loaded
            if (typeof renderStore === 'function') {
                setTimeout(() => renderStore(), 100);
            }
        }
    })
    .catch(error => {
        console.log('Using embedded image data');
        // Fallback to embedded data
        if (typeof products !== 'undefined') {
            products.forEach(product => {
                if (product.code) {
                    const images = getProductImages(product.code);
                    if (images && images.length > 0) {
                        product.images = images;
                        product.image = images[0];
                    }
                }

                if (!product.images && product.image) {
                    product.images = [product.image];
                }
            });

            console.log('Product images applied from embedded data');
        }
    });

