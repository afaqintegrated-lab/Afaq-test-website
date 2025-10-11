# Reusable Component System

## Overview
This project uses a **fixed component system** where Header, CTA, and Footer are reusable across all pages. You only need to define them once in `js/components.js` and they're automatically injected on every page.

## The Three Fixed Components

### 1. **Header Component**
- Top bar with contact info and social media
- Logo and navigation menu
- Dropdown for sectors
- Shopping cart counter
- Mobile responsive menu

### 2. **CTA Component**
- Call-to-action section with gradient background
- Animated wireframe background (moving dots and connecting lines)
- Two buttons: "اتصل بنا الآن" and "احجز استشارة مجانية"

### 3. **Footer Component**
- Company information
- Quick links
- Services
- Contact details
- Social media icons

## How to Use Components on Any Page

### HTML Structure (3 containers):
```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <!-- ... meta tags ... -->
    <script src="js/config.js"></script>
</head>
<body>
    <!-- 1. TOP BAR & HEADER (Dynamic) -->
    <div id="topbar-container"></div>
    <div id="header-container"></div>

    <!-- YOUR PAGE CONTENT HERE -->
    <section>
        <!-- Your custom page content -->
    </section>

    <!-- 2. CTA SECTION (Dynamic) -->
    <div id="cta-container"></div>

    <!-- 3. FOOTER (Dynamic) -->
    <div id="footer-container"></div>

    <!-- Scripts -->
    <script src="js/components.js"></script>
    <script src="js/your-page.js"></script>
</body>
</html>
```

### JavaScript Initialization:
```javascript
// In your page-specific JS file (e.g., js/about.js)
document.addEventListener('DOMContentLoaded', () => {
    // Inject all components (header, CTA, footer)
    injectComponents('about'); // Pass page ID for active nav link

    // Your page-specific code here...
});
```

## Component Functions in `js/components.js`

### Core Functions:

1. **`generateTopBar()`** - Returns top bar HTML
2. **`generateHeader(activePage)`** - Returns header HTML with active page highlighting
3. **`generateCTA()`** - Returns CTA section HTML
4. **`initWireframeBackground()`** - Initializes animated wireframe in CTA
5. **`generateFooter()`** - Returns footer HTML
6. **`injectComponents(activePage)`** - Main function that injects all components

### The `injectComponents()` Function:
```javascript
function injectComponents(activePage = 'home') {
    // Injects topbar into #topbar-container
    // Injects header into #header-container
    // Injects CTA into #cta-container (with wireframe animation)
    // Injects footer into #footer-container
    // Re-initializes mobile menu
}
```

## Benefits of This System

✅ **Write Once, Use Everywhere** - Define components once in `components.js`
✅ **Easy Updates** - Change header/footer/CTA in one place, updates all pages
✅ **Consistent Design** - All pages have identical header, CTA, and footer
✅ **Less Code Duplication** - No need to copy/paste HTML across pages
✅ **Clean HTML** - Page HTML files only contain page-specific content
✅ **Dynamic Data** - All components pull data from `CONFIG` in `config.js`

## Page-Specific Code

Each page should have its own JS file that:
1. Calls `injectComponents(pageId)` first
2. Then runs page-specific initialization
3. Handles page-specific functionality

Example:
```javascript
// js/about.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject components (header, CTA, footer)
    injectComponents('about');

    // 2. Page-specific initialization
    handleHeaderScroll();
    initMobileMenu();
    updateCartCounter();
});
```

## Creating New Pages

To create a new page (e.g., `services.html`):

1. **Create HTML file** with 3 containers:
```html
<div id="topbar-container"></div>
<div id="header-container"></div>

<!-- Your page content -->

<div id="cta-container"></div>
<div id="footer-container"></div>
```

2. **Create JS file** (e.g., `js/services.js`):
```javascript
document.addEventListener('DOMContentLoaded', () => {
    injectComponents('services');
    // Your page code here
});
```

3. **Done!** Components automatically appear on your new page.

## Wireframe Animation

The CTA section includes an animated wireframe background:
- 25 floating nodes (white dots with glow)
- Lines connecting nearby nodes
- Nodes move and bounce continuously
- Connections update dynamically
- CSS animation + JavaScript for smooth motion

The animation is **automatically initialized** when `injectComponents()` is called.

## Summary

**Fixed Components**: Header, CTA, Footer
**Main File**: `js/components.js`
**Main Function**: `injectComponents(pageId)`
**HTML Containers**: `#topbar-container`, `#header-container`, `#cta-container`, `#footer-container`

You don't need to write header, CTA, or footer HTML ever again - just use the containers and call `injectComponents()`!
