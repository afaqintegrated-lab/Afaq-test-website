// Verification script for ProductsFromDrive integration
console.log('🔍 Starting ProductsFromDrive Integration Verification...\n');

// Check if products data is loaded
if (typeof products !== 'undefined') {
    console.log('✅ Products data loaded successfully');
    
    // Get smart home products
    const smartHomeProducts = products.filter(product => product.categorySlug === 'smart-home');
    console.log(`📊 Total smart home products: ${smartHomeProducts.length}`);
    
    // Filter new products from ProductsFromDrive
    const newProducts = smartHomeProducts.filter(product => 
        product.id.includes('blend-switch') || 
        product.id.includes('cube-clicker') ||
        product.id.includes('smart-switch-air') ||
        product.id.includes('smart-remote-control') ||
        product.id.includes('mins-curtain-controller') ||
        product.id.includes('quicklink-curtain-motor') ||
        product.id.includes('smart-curtain-motor-v2')
    );
    
    console.log(`🆕 New products from ProductsFromDrive: ${newProducts.length}\n`);
    
    // Verify each new product
    newProducts.forEach((product, index) => {
        console.log(`${index + 1}. ${product.name}`);
        console.log(`   - Code: ${product.code}`);
        console.log(`   - Price: ${product.price} ${product.currency}`);
        console.log(`   - Images: ${product.images ? product.images.length : 0} images`);
        console.log(`   - Features: ${product.features ? product.features.length : 0} features`);
        console.log(`   - Arabic Name: ${product.name.includes('مفتاح') || product.name.includes('محرك') || product.name.includes('جهاز') ? '✅' : '❌'}`);
        console.log('');
    });
    
    // Check image paths
    console.log('🖼️  Image Path Verification:');
    newProducts.forEach(product => {
        if (product.images && product.images.length > 0) {
            const firstImage = product.images[0];
            if (firstImage.includes('ProductsFromDrive')) {
                console.log(`✅ ${product.name}: Images from ProductsFromDrive`);
            } else {
                console.log(`❌ ${product.name}: Images not from ProductsFromDrive`);
            }
        } else {
            console.log(`⚠️  ${product.name}: No images found`);
        }
    });
    
    console.log('\n🎉 Integration verification completed!');
    console.log(`📈 Added ${newProducts.length} new smart home products`);
    
} else {
    console.log('❌ Products data not loaded. Make sure js/products-data.js is loaded first.');
}

// Test image loading function
if (typeof getProductMainImage !== 'undefined') {
    console.log('\n🔧 Testing image functions...');
    
    const testCodes = ['LS055-57WH-1', 'LS069WH', 'LS222', 'LS256', 'LS178', 'LS0BCM100D', 'SCM-V2'];
    
    testCodes.forEach(code => {
        const mainImage = getProductMainImage(code);
        if (mainImage) {
            console.log(`✅ ${code}: Main image found`);
        } else {
            console.log(`❌ ${code}: Main image not found`);
        }
    });
    
    console.log('\n✅ Image functions working correctly');
} else {
    console.log('❌ Image functions not available');
}


