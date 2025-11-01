# File Reference Update Script
# This script updates all file references after project reorganization

import os
import re

def update_file_references():
    """Update all file references in HTML and JS files to match new structure"""
    
    # Define the mapping of old paths to new paths
    path_mappings = {
        # CSS files
        'css/style.css': 'assets/css/style.css',
        
        # JavaScript files - Core
        'js/config.js': 'src/scripts/core/config.js',
        'js/components.js': 'src/scripts/core/components.js',
        'js/utilities.js': 'src/scripts/core/utilities.js',
        'js/main.js': 'src/scripts/core/main.js',
        
        # JavaScript files - Pages
        'js/about.js': 'src/scripts/pages/about.js',
        'js/services.js': 'src/scripts/pages/services.js',
        'js/solutions.js': 'src/scripts/pages/solutions.js',
        'js/products.js': 'src/scripts/pages/products.js',
        'js/store.js': 'src/scripts/pages/store.js',
        'js/contact.js': 'src/scripts/pages/contact.js',
        'js/clients.js': 'src/scripts/pages/clients.js',
        
        # JavaScript files - Categories
        'js/category.js': 'src/scripts/categories/category.js',
        
        # JavaScript files - Sectors
        'js/business.js': 'src/scripts/sectors/business.js',
        'js/healthcare.js': 'src/scripts/sectors/healthcare.js',
        'js/education.js': 'src/scripts/sectors/education.js',
        'js/finance.js': 'src/scripts/sectors/finance.js',
        'js/government.js': 'src/scripts/sectors/government.js',
        'js/industrial.js': 'src/scripts/sectors/industrial.js',
        'js/security.js': 'src/scripts/sectors/security.js',
        'js/telecommunications.js': 'src/scripts/sectors/telecommunications.js',
        
        # JavaScript files - Products
        'js/products-data.js': 'src/scripts/products/products-data.js',
        'js/product-images.js': 'src/scripts/products/product-images.js',
        'js/product-detail.js': 'src/scripts/products/product-detail.js',
        'js/lifesmart-products-enhanced.js': 'src/scripts/products/lifesmart-products-enhanced.js',
        
        # JavaScript files - Ecommerce
        'js/cart.js': 'src/scripts/ecommerce/cart.js',
        'js/checkout.js': 'src/scripts/ecommerce/checkout.js',
        
        # Image files
        'images/': 'assets/images/general/',
        
        # Data files
        'product-images-map.json': 'src/data/products/product-images-map.json',
        'lifesmart-comprehensive-images.json': 'src/data/products/lifesmart-comprehensive-images.json',
        'ProductsFromDrive-mapping.json': 'src/data/products/ProductsFromDrive-mapping.json',
        'lifesmart-codes-map.txt': 'src/data/config/lifesmart-codes-map.txt',
        
        # HTML page references
        'about.html': 'src/pages/main/about.html',
        'services.html': 'src/pages/main/services.html',
        'solutions.html': 'src/pages/main/solutions.html',
        'products.html': 'src/pages/main/products.html',
        'store.html': 'src/pages/main/store.html',
        'contact.html': 'src/pages/main/contact.html',
        'clients.html': 'src/pages/main/clients.html',
        
        # Category pages
        'category-smart-home.html': 'src/pages/categories/category-smart-home.html',
        'category-hosting.html': 'src/pages/categories/category-hosting.html',
        'category-business-systems.html': 'src/pages/categories/category-business-systems.html',
        
        # Sector pages
        'business.html': 'src/pages/sectors/business.html',
        'healthcare.html': 'src/pages/sectors/healthcare.html',
        'education.html': 'src/pages/sectors/education.html',
        'finance.html': 'src/pages/sectors/finance.html',
        'government.html': 'src/pages/sectors/government.html',
        'industrial.html': 'src/pages/sectors/industrial.html',
        'security.html': 'src/pages/sectors/security.html',
        'telecommunications.html': 'src/pages/sectors/telecommunications.html',
        
        # Ecommerce pages
        'cart.html': 'src/pages/ecommerce/cart.html',
        'checkout.html': 'src/pages/ecommerce/checkout.html',
        
        # Product pages (these will be handled separately)
        'product-': 'src/pages/products/product-',
        
        # Resources
        'ProductsFromDrive/': 'resources/products-from-drive/ProductsFromDrive/',
        'ProductsGiude/': 'resources/products-guide/ProductsGiude/',
    }
    
    # Files to update
    files_to_update = []
    
    # Find all HTML files
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith('.html'):
                files_to_update.append(os.path.join(root, file))
    
    # Find all JS files
    for root, dirs, files in os.walk('src'):
        for file in files:
            if file.endswith('.js'):
                files_to_update.append(os.path.join(root, file))
    
    print(f"Found {len(files_to_update)} files to update")
    
    # Update each file
    for file_path in files_to_update:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Apply path mappings
            for old_path, new_path in path_mappings.items():
                content = content.replace(old_path, new_path)
            
            # Special handling for product pages
            content = re.sub(r'href="product-([^"]+)"', r'href="src/pages/products/product-\1"', content)
            content = re.sub(r'src="product-([^"]+)"', r'src="src/pages/products/product-\1"', content)
            
            # Write back if changed
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated: {file_path}")
            
        except Exception as e:
            print(f"Error updating {file_path}: {e}")
    
    print("File reference updates completed!")

if __name__ == "__main__":
    update_file_references()
