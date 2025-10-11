# AFAQ Website - HTML Version

## 📋 Overview
This is a static HTML version of the AFAQ Integrated IT Solutions website, converted from the original Next.js project. It maintains the exact same design, colors, typography, and functionality using only HTML, Tailwind CSS, and vanilla JavaScript.

## 🗂️ Project Structure

```
afaq-website-html/
├── index.html          # Home page
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # All website images and logos
├── assets/             # Additional assets (if any)
└── README.md           # This file
```

## 🚀 Features

### Home Page (index.html) Includes:
- **Top Bar**: Contact information and social media links
- **Sticky Header**: Logo, navigation menu with dropdown for sectors
- **Hero Section**: Full-screen slider with typewriter animation effect
- **About Section**: Vision, Mission, and Goals
- **Sectors Section**: 8 sector cards (Healthcare, Education, Business, etc.)
- **Solutions Section**: 4 solution cards with gradients
- **Clients Carousel**: Infinite scrolling client logos
- **CTA Section**: Call-to-action with animated wireframe background
- **Footer**: Links, services, and contact information

## 💻 Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Vanilla JavaScript (ES6+)
- **Font Awesome**: Icons
- **Google Fonts**: Cairo and Tajawal Arabic fonts

## 🎨 Design Features

### Animations & Effects:
1. **Typewriter Effect**: Dynamic text animation in hero section
2. **Wireframe Canvas**: Animated particle network in CTA section
3. **Infinite Carousel**: Seamless scrolling client logos
4. **Hover Animations**: Cards lift and scale on hover
5. **Sticky Header**: Logo shrinks on scroll
6. **Dropdown Menu**: Sectors dropdown with smooth transitions

### Color Scheme:
- **Primary Purple**: #582a6e
- **Primary Pink**: #e3237b
- **Blue Accent**: #1e40af to #0e7490
- **Gradients**: Multiple gradients for different sections

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🌐 How to Use

### Option 1: Open Directly
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Server (Recommended)
For better performance with image loading:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📦 Deployment

This is a static website and can be hosted on any web server or static hosting service:

- **GitHub Pages**: Push to GitHub and enable Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Deploy via CLI or drag and drop
- **AWS S3**: Upload to S3 bucket with static hosting
- **Traditional Hosting**: Upload via FTP to any web hosting

## 🔧 Customization

### Update Content:
- Edit `index.html` directly for text content
- Modify `js/main.js` for data arrays (sectors, solutions, clients)

### Update Styles:
- Edit `css/style.css` for custom styles
- Tailwind classes can be changed directly in HTML

### Add Images:
- Place new images in the `images/` folder
- Update image paths in HTML or JavaScript

## 🎯 Key JavaScript Functions

### Typewriter Effect
```javascript
typewriter() - Animates hero title text
```

### Header Scroll
```javascript
handleHeaderScroll() - Shrinks logo on scroll
```

### Mobile Menu
```javascript
initMobileMenu() - Toggle mobile navigation
```

### Wireframe Animation
```javascript
initWireframeCanvas() - Animated particle network
```

### Content Population
```javascript
populateSectors() - Dynamically creates sector cards
populateSolutions() - Dynamically creates solution cards
populateClientsCarousel() - Creates infinite client carousel
```

## 📊 Performance

- **Fast Loading**: No build process, direct HTML
- **CDN Assets**: Tailwind CSS and Font Awesome from CDN
- **Optimized Images**: All images from original project
- **Smooth Animations**: RequestAnimationFrame for performance

## 🔗 Links & Social Media

- **Instagram**: https://www.instagram.com/afaqinfotech.sa/
- **YouTube**: https://www.youtube.com/@AfaqInfoTech
- **WhatsApp**: +966573673271
- **LinkedIn**: AFAQ Integrated Solution
- **Email**: info@afaqinfotech.com
- **Phone**: +966573673270

## 📄 License

© 2025 آفاق المتكاملة لتكنولوجيا المعلومات. جميع الحقوق محفوظة.

## 🤝 Support

For issues or questions about this HTML version, please contact the development team.

---

**Note**: This is the HTML version of the original Next.js project. All design elements, colors, and functionality have been preserved to match the original exactly.
