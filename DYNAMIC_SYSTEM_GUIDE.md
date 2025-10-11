# 🔄 Dynamic System Guide - AFAQ Website

## 🎯 Overview

The website is now **100% dynamic**! Change content in **ONE place** and it updates **EVERYWHERE automatically**.

---

## 📁 File Structure

```
js/
├── config.js       ← 🎯 CHANGE EVERYTHING HERE
├── components.js   ← Reusable components (header, footer, topbar)
└── main.js         ← Page functionality
```

---

## ✅ What's Dynamic Now?

### ✨ **Everything** is controlled from `config.js`:

1. **Company Information**
2. **Contact Details** (email, phone, location)
3. **Social Media Links**
4. **Navigation Menu** (all pages)
5. **Footer Links**
6. **Sectors** (8 cards)
7. **Solutions** (4 cards)
8. **Clients** (carousel)
9. **Hero Typewriter Texts**
10. **CTA Sections**

---

## 🎨 How to Make Changes

### 📝 **Example 1: Change Company Email**

Open `js/config.js` and find:

```javascript
contact: {
    email: "info@afaqinfotech.com",  // ← Change here
    // ...
}
```

**Result**: Email updates in:
- Top bar
- Footer
- All pages automatically!

---

### 📝 **Example 2: Update Phone Number**

Open `js/config.js`:

```javascript
contact: {
    phone: "+966573673270",          // ← Change here
    phoneDisplay: "966573673270+",   // ← And here
    // ...
}
```

**Result**: Updates everywhere!

---

### 📝 **Example 3: Add/Remove Navigation Link**

Open `js/config.js`:

```javascript
navigation: {
    main: [
        { label: "الرئيسية", href: "index.html", id: "home" },
        { label: "عن الشركة", href: "about.html", id: "about" },
        // Add new link here:
        { label: "المدونة", href: "blog.html", id: "blog" },
        // ...
    ]
}
```

**Result**: Appears in header on ALL pages!

---

### 📝 **Example 4: Update Social Media**

```javascript
social: {
    instagram: "https://www.instagram.com/YOUR_USERNAME/",  // ← Change
    youtube: "https://www.youtube.com/@YOUR_CHANNEL",       // ← Change
    // ...
}
```

**Result**: Links update in topbar AND footer!

---

### 📝 **Example 5: Change Typewriter Texts**

```javascript
homePage: {
    hero: {
        typewriterTexts: [
            "نص جديد 1",  // ← Add/change texts
            "نص جديد 2",
            "نص جديد 3"
        ]
    }
}
```

**Result**: Hero animation shows new texts!

---

### 📝 **Example 6: Add New Sector**

```javascript
homePage: {
    sectors: [
        // Add new sector:
        {
            title: "قطاع جديد",
            description: "وصف القطاع الجديد",
            icon: "fas fa-icon-name",
            href: "new-sector.html",
            gradient: "from-purple-500 to-pink-600"
        }
        // ...
    ]
}
```

**Result**: New card appears automatically!

---

### 📝 **Example 7: Update Client Logo**

```javascript
homePage: {
    clients: [
        { name: "عميل جديد", logo: "images/new-client.png" }
        // ...
    ]
}
```

**Result**: Logo appears in carousel!

---

## 🏗️ Component System

### **Header Component** (`components.js`)

Used on **every page**. Generates:
- Logo
- Navigation menu
- Dropdown
- Cart counter
- CTA buttons
- Mobile menu

### **TopBar Component** (`components.js`)

Generates:
- Contact info
- Social media icons

### **Footer Component** (`components.js`)

Generates:
- Company info
- Quick links
- Services
- Contact details
- Social icons

---

## 🔧 How Components Work

### In HTML:

```html
<!-- These containers are auto-populated -->
<div id="topbar-container"></div>
<div id="header-container"></div>
<div id="footer-container"></div>
```

### In JavaScript:

```javascript
// Automatically injects all components
injectComponents('home');  // 'home' = active page
```

---

## 📄 Creating New Pages

### Step 1: Copy index.html

```bash
cp index.html about.html
```

### Step 2: Update page content

Keep these dynamic containers:

```html
<div id="topbar-container"></div>
<div id="header-container"></div>
<!-- Your page content here -->
<div id="footer-container"></div>
```

### Step 3: Update active page

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
    injectComponents('about');  // ← Change to page ID
});
</script>
```

### Step 4: Add to config.js (optional)

```javascript
navigation: {
    main: [
        { label: "عن الشركة", href: "about.html", id: "about" }
    ]
}
```

**Done!** New page has header/footer automatically!

---

## 🎯 Single Source of Truth

### ❌ **OLD WAY** (Hardcoded):

```html
<!-- Have to update in EVERY file -->
<a href="tel:+966573673270">+966573673270</a>
```

### ✅ **NEW WAY** (Dynamic):

```javascript
// Change ONCE in config.js:
contact: {
    phone: "+966573673270"
}

// Auto-updates EVERYWHERE!
```

---

## 🚀 Benefits

### 1. **One Source of Truth**
   - All data in `config.js`
   - No duplication
   - Easy maintenance

### 2. **Reusable Components**
   - Header/Footer generated once
   - Used on all pages
   - Consistent design

### 3. **Easy Updates**
   - Change once
   - Apply everywhere
   - No mistakes

### 4. **Scalable**
   - Add pages easily
   - Add content dynamically
   - Fast development

---

## 📊 Data Flow

```
config.js (Data)
    ↓
components.js (Generators)
    ↓
index.html (Containers)
    ↓
main.js (Injection)
    ↓
RENDERED PAGE
```

---

## 🔍 Quick Reference

### Want to change...

| What | Where in config.js |
|------|-------------------|
| Email | `CONFIG.contact.email` |
| Phone | `CONFIG.contact.phone` |
| Social Links | `CONFIG.social.*` |
| Navigation | `CONFIG.navigation.main` |
| Sectors | `CONFIG.navigation.sectors` |
| Footer Links | `CONFIG.footer.*` |
| Hero Texts | `CONFIG.homePage.hero.typewriterTexts` |
| Sectors Cards | `CONFIG.homePage.sectors` |
| Solutions Cards | `CONFIG.homePage.solutions` |
| Client Logos | `CONFIG.homePage.clients` |
| Colors | `CONFIG.theme.colors` |

---

## 🎨 Color System

```javascript
theme: {
    colors: {
        primary: "#582a6e",      // Purple
        secondary: "#e3237b",    // Pink
        accent: "#8B5CF6"        // Light purple
    },
    gradients: {
        primary: "linear-gradient(to right, #582a6e, #e3237b)"
    }
}
```

Change colors here, use throughout site!

---

## ⚡ Performance

### Why This is Fast:

1. **No Build Step** - Plain JavaScript
2. **CDN Resources** - Tailwind & Fonts cached
3. **Component Reuse** - Generate once, use everywhere
4. **Minimal JS** - Only what's needed

---

## 🛠️ Maintenance Workflow

### Monthly Updates:

1. Open `js/config.js`
2. Update data (email, phone, prices, etc.)
3. Save file
4. Done! ✅

### No need to touch:
- HTML files (except new pages)
- CSS files
- Other JS files

---

## 📚 File Responsibilities

| File | Purpose | Edit? |
|------|---------|-------|
| `config.js` | ALL DATA | ✅ Edit often |
| `components.js` | Component generators | ❌ Rarely |
| `main.js` | Page logic | ❌ Rarely |
| `style.css` | Custom styles | ❌ Rarely |
| `index.html` | Page structure | ❌ Only for layout |

---

## 🎓 Best Practices

### ✅ DO:
- Edit data in `config.js`
- Test changes in browser
- Keep component structure
- Follow naming conventions

### ❌ DON'T:
- Hardcode data in HTML
- Duplicate data
- Skip config.js
- Edit generated HTML

---

## 🐛 Troubleshooting

### Header not showing?

Check:
1. `<div id="header-container"></div>` exists
2. `injectComponents()` is called
3. `config.js` loaded before `components.js`

### Data not updating?

Check:
1. Changes saved in `config.js`
2. Browser cache cleared (Ctrl+Shift+R)
3. No JS errors in console (F12)

---

## 🎉 Summary

### The Magic Formula:

```
1 Change in config.js
    ↓
∞ Updates Everywhere
```

### Remember:

- **config.js** = The brain 🧠
- **components.js** = The factory 🏭
- **HTML** = The skeleton 🦴
- **main.js** = The conductor 🎵

---

**Questions?** Just edit `config.js` and see the magic! ✨
