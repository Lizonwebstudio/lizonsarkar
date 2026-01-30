# Professional Portfolio Website

A complete, modern, and responsive portfolio website featuring:
- Hero slider with 3 slides
- Smooth animations and transitions
- Dark mode toggle
- Mobile-responsive design
- Contact form with validation
- Portfolio filter system
- Testimonial carousel
- Counter animations
- And much more!

## 🚀 Features

### Header & Navigation
- Fixed header with scroll effects
- Smooth scroll navigation
- Mobile hamburger menu
- Active link highlighting
- Dark/light theme toggle

### Hero Section
- Auto-playing slider with 3 slides
- Manual controls (prev/next buttons)
- Dot indicators
- Smooth transitions
- Call-to-action buttons

### About Section
- Profile image with hover effects
- Animated counters
- Skill progress bars with animation
- Professional statistics
- Mobile-responsive layout

### Services Section
- 8 service cards with icons
- Hover effects and animations
- Responsive grid layout
- Detailed service descriptions

### Portfolio Section
- Filter system (All/Web/WordPress/Blogger/SEO)
- 6 project showcases
- Image overlay effects
- Category-based filtering
- Smooth transitions

### Testimonials Section
- Carousel slider
- Client reviews with ratings
- Auto-rotation
- Manual navigation controls

### Contact Section
- Working contact form
- Form validation
- Social media links
- Contact information cards
- Newsletter subscription

### Footer
- 4-column layout
- Quick links
- Social media icons
- Newsletter signup
- Copyright information

## 📁 File Structure

```
professional-portfolio/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── script.js       # All JavaScript functions
└── images/
    └── profile.jpg     # Your profile image
```

## 🛠️ Installation & Setup

1. **Download/Clone the files**
   ```bash
   git clone [your-repo-url]
   ```

2. **File Organization**
   - All files are organized in their respective folders
   - Profile image is automatically copied to images/profile.jpg

3. **Customization**
   
   **Replace Personal Information:**
   - Open `index.html`
   - Find and replace:
     - Contact details (phone, email, address)
     - Social media links
     - Service descriptions
     - Portfolio items
     - Testimonials

   **Customize Colors:**
   - Open `css/style.css`
   - Edit CSS variables in `:root` section:
     ```css
     --primary-color: #667eea;
     --secondary-color: #764ba2;
     --accent-color: #f5576c;
     ```

   **Add Your Projects:**
   - Replace placeholder images in portfolio section
   - Update project titles and descriptions
   - Modify portfolio categories as needed

## 🎨 Customization Guide

### Change Hero Slider Content
Edit the slides in `index.html`:
```html
<div class="slide active">
    <div class="slide-bg" style="background: your-gradient;"></div>
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">
                <span>Your Title</span>
                <span>Line 2</span>
            </h1>
            <p class="hero-subtitle">Your subtitle</p>
        </div>
    </div>
</div>
```

### Modify Services
Each service card follows this structure:
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Service Title</h3>
    <p>Service description</p>
    <a href="#contact" class="service-link">Learn More</a>
</div>
```

### Add/Remove Portfolio Items
```html
<div class="portfolio-item" data-category="web wordpress">
    <div class="portfolio-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="portfolio-overlay">
            <div class="overlay-content">
                <h3>Project Title</h3>
                <p>Category</p>
                <a href="#" class="portfolio-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
</div>
```

## 📱 Mobile Responsive

The website is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ⚡ Performance Features

- Lazy loading for images
- Debounced scroll events
- Optimized animations
- Minimal dependencies
- Fast load times
- SEO-friendly structure

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📝 Form Configuration

The contact form currently shows a success message without actually sending emails.

**To enable real email sending:**

1. Create a PHP backend file (e.g., `send-mail.php`)
2. Update the form submission in `js/script.js`:
   ```javascript
   fetch('send-mail.php', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: {'Content-Type': 'application/json'}
   })
   ```

3. Or use a third-party service like:
   - Formspree
   - EmailJS
   - SendGrid
   - Mailgun

## 🎯 Features Breakdown

### JavaScript Features
- Hero slider with auto-play
- Smooth scroll navigation
- Mobile menu toggle
- Portfolio filtering
- Counter animations
- Skill bar animations
- Testimonial carousel
- Form validation
- Scroll to top button
- Dark mode toggle
- Lazy loading
- And more!

### CSS Features
- Custom CSS variables
- Gradient backgrounds
- Box shadows
- Hover effects
- Transitions
- Animations
- Media queries
- Flexbox & Grid
- Dark mode support

## 🔧 Troubleshooting

**Images not showing:**
- Make sure your images are in the `images/` folder
- Check file paths in HTML
- Verify image file extensions

**Slider not working:**
- Check if JavaScript file is loaded correctly
- Open browser console for any errors
- Ensure Font Awesome CDN is accessible

**Mobile menu not opening:**
- Clear browser cache
- Check JavaScript console for errors
- Verify menu toggle button exists

## 📈 SEO Optimization

The website includes:
- Meta tags for description and keywords
- Semantic HTML structure
- Alt tags for images
- Heading hierarchy (H1, H2, H3)
- Mobile-friendly design
- Fast loading speed

## 🚀 Deployment

### GitHub Pages
1. Push files to GitHub repository
2. Go to Settings > Pages
3. Select main branch
4. Your site will be live at `username.github.io/repository-name`

### Netlify
1. Drag and drop folder to Netlify
2. Site is instantly live
3. Get free HTTPS and custom domain

### Traditional Hosting
1. Upload all files via FTP
2. Ensure proper folder structure
3. Point domain to hosting

## 📞 Support

For issues or questions:
- Check the code comments
- Review browser console for errors
- Test in different browsers
- Validate HTML/CSS

## 📄 License

Free to use for personal and commercial projects.
Attribution is appreciated but not required.

## 🙏 Credits

- Font Awesome for icons
- Google Fonts for typography
- Images from placeholder services (replace with your own)

## 🔄 Updates

Version 1.0 - Initial Release
- Complete portfolio website
- All features implemented
- Mobile responsive
- Cross-browser compatible

---

**Built with ❤️ by Lizon Web Studio**

For professional web development services, contact us!
