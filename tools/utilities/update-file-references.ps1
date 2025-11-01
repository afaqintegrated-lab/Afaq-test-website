# PowerShell script to update file references after reorganization
# This script updates all file references in HTML and JS files

Write-Host "Starting file reference updates..." -ForegroundColor Green

# Define path mappings
$pathMappings = @{
    # CSS files
    'css/style.css' = 'assets/css/style.css'
    
    # JavaScript files - Core
    'js/config.js' = 'src/scripts/core/config.js'
    'js/components.js' = 'src/scripts/core/components.js'
    'js/utilities.js' = 'src/scripts/core/utilities.js'
    'js/main.js' = 'src/scripts/core/main.js'
    
    # JavaScript files - Pages
    'js/about.js' = 'src/scripts/pages/about.js'
    'js/services.js' = 'src/scripts/pages/services.js'
    'js/solutions.js' = 'src/scripts/pages/solutions.js'
    'js/products.js' = 'src/scripts/pages/products.js'
    'js/store.js' = 'src/scripts/pages/store.js'
    'js/contact.js' = 'src/scripts/pages/contact.js'
    'js/clients.js' = 'src/scripts/pages/clients.js'
    
    # JavaScript files - Categories
    'js/category.js' = 'src/scripts/categories/category.js'
    
    # JavaScript files - Sectors
    'js/business.js' = 'src/scripts/sectors/business.js'
    'js/healthcare.js' = 'src/scripts/sectors/healthcare.js'
    'js/education.js' = 'src/scripts/sectors/education.js'
    'js/finance.js' = 'src/scripts/sectors/finance.js'
    'js/government.js' = 'src/scripts/sectors/government.js'
    'js/industrial.js' = 'src/scripts/sectors/industrial.js'
    'js/security.js' = 'src/scripts/sectors/security.js'
    'js/telecommunications.js' = 'src/scripts/sectors/telecommunications.js'
    
    # JavaScript files - Products
    'js/products-data.js' = 'src/scripts/products/products-data.js'
    'js/product-images.js' = 'src/scripts/products/product-images.js'
    'js/product-detail.js' = 'src/scripts/products/product-detail.js'
    'js/lifesmart-products-enhanced.js' = 'src/scripts/products/lifesmart-products-enhanced.js'
    
    # JavaScript files - Ecommerce
    'js/cart.js' = 'src/scripts/ecommerce/cart.js'
    'js/checkout.js' = 'src/scripts/ecommerce/checkout.js'
    
    # Image files
    'images/' = 'assets/images/general/'
    
    # Data files
    'product-images-map.json' = 'src/data/products/product-images-map.json'
    'lifesmart-comprehensive-images.json' = 'src/data/products/lifesmart-comprehensive-images.json'
    'ProductsFromDrive-mapping.json' = 'src/data/products/ProductsFromDrive-mapping.json'
    'lifesmart-codes-map.txt' = 'src/data/config/lifesmart-codes-map.txt'
    
    # HTML page references
    'about.html' = 'src/pages/main/about.html'
    'services.html' = 'src/pages/main/services.html'
    'solutions.html' = 'src/pages/main/solutions.html'
    'products.html' = 'src/pages/main/products.html'
    'store.html' = 'src/pages/main/store.html'
    'contact.html' = 'src/pages/main/contact.html'
    'clients.html' = 'src/pages/main/clients.html'
    
    # Category pages
    'category-smart-home.html' = 'src/pages/categories/category-smart-home.html'
    'category-hosting.html' = 'src/pages/categories/category-hosting.html'
    'category-business-systems.html' = 'src/pages/categories/category-business-systems.html'
    
    # Sector pages
    'business.html' = 'src/pages/sectors/business.html'
    'healthcare.html' = 'src/pages/sectors/healthcare.html'
    'education.html' = 'src/pages/sectors/education.html'
    'finance.html' = 'src/pages/sectors/finance.html'
    'government.html' = 'src/pages/sectors/government.html'
    'industrial.html' = 'src/pages/sectors/industrial.html'
    'security.html' = 'src/pages/sectors/security.html'
    'telecommunications.html' = 'src/pages/sectors/telecommunications.html'
    
    # Ecommerce pages
    'cart.html' = 'src/pages/ecommerce/cart.html'
    'checkout.html' = 'src/pages/ecommerce/checkout.html'
    
    # Resources
    'ProductsFromDrive/' = 'resources/products-from-drive/ProductsFromDrive/'
    'ProductsGiude/' = 'resources/products-guide/ProductsGiude/'
}

# Function to update file references
function Update-FileReferences {
    param(
        [string]$FilePath,
        [hashtable]$Mappings
    )
    
    try {
        $content = Get-Content -Path $FilePath -Raw -Encoding UTF8
        $originalContent = $content
        
        # Apply path mappings
        foreach ($oldPath in $Mappings.Keys) {
            $newPath = $Mappings[$oldPath]
            $content = $content.Replace($oldPath, $newPath)
        }
        
        # Special handling for relative paths based on file location
        $fileDir = Split-Path -Parent $FilePath
        $relativeDepth = ($fileDir.Split('\') | Where-Object { $_ -eq 'src' }).Count
        
        if ($fileDir -like '*\src\pages\main\*') {
            # Files in src/pages/main need ../../ to reach root
            $content = $content -replace 'src/scripts/', '../../src/scripts/'
            $content = $content -replace 'assets/', '../../assets/'
            $content = $content -replace 'src/data/', '../../src/data/'
            $content = $content -replace 'resources/', '../../resources/'
        }
        elseif ($fileDir -like '*\src\pages\categories\*') {
            # Files in src/pages/categories need ../../ to reach root
            $content = $content -replace 'src/scripts/', '../../src/scripts/'
            $content = $content -replace 'assets/', '../../assets/'
            $content = $content -replace 'src/data/', '../../src/data/'
            $content = $content -replace 'resources/', '../../resources/'
        }
        elseif ($fileDir -like '*\src\pages\sectors\*') {
            # Files in src/pages/sectors need ../../ to reach root
            $content = $content -replace 'src/scripts/', '../../src/scripts/'
            $content = $content -replace 'assets/', '../../assets/'
            $content = $content -replace 'src/data/', '../../src/data/'
            $content = $content -replace 'resources/', '../../resources/'
        }
        elseif ($fileDir -like '*\src\pages\products\*') {
            # Files in src/pages/products need ../../ to reach root
            $content = $content -replace 'src/scripts/', '../../src/scripts/'
            $content = $content -replace 'assets/', '../../assets/'
            $content = $content -replace 'src/data/', '../../src/data/'
            $content = $content -replace 'resources/', '../../resources/'
        }
        elseif ($fileDir -like '*\src\pages\ecommerce\*') {
            # Files in src/pages/ecommerce need ../../ to reach root
            $content = $content -replace 'src/scripts/', '../../src/scripts/'
            $content = $content -replace 'assets/', '../../assets/'
            $content = $content -replace 'src/data/', '../../src/data/'
            $content = $content -replace 'resources/', '../../resources/'
        }
        elseif ($fileDir -like '*\src\scripts\*') {
            # Files in src/scripts need ../ to reach root
            $content = $content -replace 'src/data/', '../data/'
            $content = $content -replace 'assets/', '../assets/'
            $content = $content -replace 'resources/', '../resources/'
        }
        
        # Write back if changed
        if ($content -ne $originalContent) {
            Set-Content -Path $FilePath -Value $content -Encoding UTF8
            Write-Host "Updated: $FilePath" -ForegroundColor Yellow
            return $true
        }
        
        return $false
    }
    catch {
        Write-Host "Error updating $FilePath`: $($_.Exception.Message)" -ForegroundColor Red
        return $false
    }
}

# Find all HTML and JS files
$filesToUpdate = @()
$filesToUpdate += Get-ChildItem -Path "src" -Recurse -Include "*.html" | Select-Object -ExpandProperty FullName
$filesToUpdate += Get-ChildItem -Path "src" -Recurse -Include "*.js" | Select-Object -ExpandProperty FullName

Write-Host "Found $($filesToUpdate.Count) files to update" -ForegroundColor Cyan

$updatedCount = 0
foreach ($file in $filesToUpdate) {
    if (Update-FileReferences -FilePath $file -Mappings $pathMappings) {
        $updatedCount++
    }
}

Write-Host "File reference updates completed!" -ForegroundColor Green
Write-Host "Updated $updatedCount files" -ForegroundColor Green
