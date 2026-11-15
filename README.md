# The Olive Table

## Project overview

The Olive Table is a responsive restaurant website for a fictional premium Mediterranean-inspired restaurant in Hyderabad. It was created for the Zelvora Technologies Week 1 Web Development training assignment.

The design follows the supplied editorial reference: a warm ivory framed page against an espresso background, an image-led hero, an asymmetric chef-and-menu composition with three floating food platforms, an alternating four-card row, and a compact four-column footer.

## Problem statement

The assignment is to build a complete restaurant menu website using beginner-friendly HTML and CSS. It must present restaurant information and menu prices, work on mobile and desktop, and include a Google Maps embed without a backend, paid API, or front-end framework.

## Solution

The website uses semantic HTML for its content, CSS Grid and Flexbox for the layouts, and a small vanilla JavaScript file for the mobile navigation and hero image controls. The menu, gallery, contact details, and map are available directly from the page.

## Technologies

- HTML5
- CSS3, including Grid, Flexbox, custom properties, and media queries
- Vanilla JavaScript
- Google Fonts
- Google Maps embed
- Unsplash image URLs

## Features

- Responsive navigation with a working mobile menu
- Two-image hero with working previous and next controls
- Reference-inspired asymmetrical menu and chef composition
- Three diagonal floating food platforms with visible faces and shadows
- Testimonials and guest-review information
- Four-card text / image / text / image editorial row
- Four menu categories with dish descriptions and sample prices
- Responsive food and restaurant gallery
- Clickable telephone and email links
- Google Maps embed centered on Banjara Hills, Hyderabad
- Keyboard focus styles and reduced-motion support

The contact details and prices are sample data. Replace them with verified restaurant information before publishing. The images and Google Fonts require an internet connection; the page layout and text still work when opened locally.

## Project structure

```text
restaurant-menu-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── .gitkeep
└── README.md
```

### Main code structures

- `index.html` holds the page content and semantic landmarks. Each navigation link points to a section ID, so the links work without a server.
- `css/style.css` defines the color and font variables at the top, then styles each page area. Media queries reshape the layout for tablets and phones. The food platform faces and shadows are made with CSS pseudo-elements.
- `js/script.js` toggles the mobile navigation and changes the visible hero image when its arrow buttons are pressed.

## Run locally

1. Open this folder in VS Code.
2. Open `index.html` in a browser.
3. Or, from this folder, run `python -m http.server 8000` and visit `http://localhost:8000`.

No package installation or build step is required.

## Responsive design

The layout is designed for screens from 320px upward. The desktop uses a centered framed canvas, diagonal floating platforms, a four-column editorial row, and a four-column footer. Tablet and mobile breakpoints reflow these areas, expose a compact navigation toggle, and prevent the desktop composition from being merely scaled down.

Suggested viewport checks: 320px, 375px, 480px, 768px, 1024px, and 1440px.

## Screenshots

Add current screenshots here before submission:

- `screenshots/homepage-desktop.png`
- `screenshots/menu-mobile.png`

## Future improvements

- Replace remote image links with optimized local images.
- Replace demonstration contact details with verified restaurant information.
- Add an optional reservation request workflow when a suitable real service is available.
- Add further accessibility and browser compatibility checks before deployment.

## Training assignment

This project was created as part of the Zelvora Technologies Week 1 Web Development Industry Training assignment. It has not been uploaded to GitHub or submitted on behalf of the student.
