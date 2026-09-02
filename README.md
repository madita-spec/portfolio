# Madita K.C. Portfolio — React + Vite (JS)

Modern, high-performance portfolio website built with **React** and **Vite** in **JavaScript** for **Madita K.C. (Social Media Manager)**.

---

## ⚡ Tech Stack

- **Framework**: React 18
- **Build Tool / Bundler**: Vite
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+ / JSX)
- **Styling**: Modern CSS variables & animations with responsive mobile layouts

---

## 📁 Project Structure

```
portfoliomad/
├── index.html              # HTML entry point with metadata & typography
├── vite.config.js          # Vite configuration
├── package.json            # Scripts & dependencies
├── public/
│   └── favicon.svg         # SVG Brand favicon
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Main layout & modal controller
    ├── index.css           # Global styles, variables & responsive rules
    ├── data/
    │   └── portfolioData.js # Structured data (Profile, Case Studies, Services, Skills)
    └── components/
        ├── Navbar.jsx          # Header with mobile navigation
        ├── Hero.jsx            # Headline, live stats, profile showcase
        ├── About.jsx           # Split layout bio & strategic focus
        ├── Services.jsx        # Core strengths & deliverables
        ├── CaseStudies.jsx     # Filterable case studies (Kia Nepal, Hulas, Bajaj & Red Bull)
        ├── CaseStudyModal.jsx  # Detailed campaign roadmaps & metrics modal
        ├── Skills.jsx          # Strategy, Content Creation & Campaigns
        ├── Testimonials.jsx    # Performance quotes
        ├── Contact.jsx         # Interactive contact form & email quick-actions
        ├── Toast.jsx           # Real-time feedback alerts
        └── Footer.jsx          # Dynamic copyright & social links
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✨ Features

- ⚡ **Ultra Fast**: Powered by Vite with Instant Hot Module Replacement (HMR).
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices with collapsible navigation.
- 🎯 **Interactive Case Studies**: Filter case studies by category (*Auto / Mobility*, *FMCG / TikTok*, *Lifestyle & Beverage*) and click on any card to view the campaign execution roadmap, challenge/solution, and quantitative results.
- 📬 **Interactive Contact Form**: Client-side validation, direct mailto draft generation, and feedback toast notifications.
- 🎨 **Aesthetic Design**: Gradient accents, clean typography (Inter & Plus Jakarta Sans), metric counter cards, and smooth scroll anchors.
