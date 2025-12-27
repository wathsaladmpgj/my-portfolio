# 🎨 Visual Component Guide

## Component Overview & Styling Details

### 🏠 Navigation Bar
**File**: `app/components/Navigation.tsx`
- **Position**: Fixed top, sticky
- **Background**: Black with 80% opacity + blur
- **Desktop**: Horizontal menu items
- **Mobile**: Hamburger menu with slide-in animation
- **Colors**: 
  - Text: Gray-300
  - Hover: Orange-500
  - Logo: Gradient orange

---

### 🚀 Hero Section
**File**: `app/components/Hero.tsx`
- **Layout**: Two-column grid (text left, image right)
- **Background**: Animated pixel blast effect
- **Key Elements**:
  - Title: Large (5xl-7xl), white + gradient
  - Typing Animation: Loops through 3 texts
  - Profile Image: 320px circle, floating animation
  - Buttons: Primary (orange gradient) + Secondary (outlined)
- **Animations**:
  - 20 floating particles
  - Profile image float (3s loop)
  - Decorative glowing circles

---

### 👤 About & Education
**File**: `app/components/About.tsx`
- **Layout**: 
  - Top: 2-column (bio + stats)
  - Bottom: Education timeline
- **Stats Section**: 4 cards in 2x2 grid
  - Projects: 20+
  - Subscribers: 1K+
  - Certifications: 10+
  - Experience: 3+
- **Education Timeline**: 3 stages
  - BSc (Hons) Computer Networks
  - Advanced Level
  - Ordinary Level
- **Colors**: 
  - Cards: Gray-900 background
  - Borders: Gray-800, hover orange-500
  - Icons: Orange-500

---

### 💻 Skills Section
**File**: `app/components/Skills.tsx`
- **Layout**: 4-column grid (responsive: 2 cols mobile, 3 tablet)
- **12 Skill Cards**:
  - Linux, Docker, Git, AWS
  - GNS3, Prometheus, Grafana, Firebase
  - Node.js, Next.js, React, Bash
- **Features**:
  - Icon on top (5xl size)
  - Hover: Scale + move up
  - Tooltip appears on hover
- **Bottom**: 3 category cards
  - Cloud & DevOps
  - Web Development
  - Networking

---

### 🎯 Projects Section
**File**: `app/components/Projects.tsx`
- **Layout**: 2-column grid
- **4 Project Cards** (height: 96 = 384px)
- **Flip Animation**:
  - **Front**: Image + title + description + tech tags
  - **Back**: Orange gradient + GitHub/Demo buttons
- **Tech Tags**: Orange background with 20% opacity
- **Hover**: Card flips 180° in 0.6s

---

### 💼 Experience Section
**File**: `app/components/Experience.tsx`
- **Two Main Cards**:
  1. **IEEE Computer Society**
     - Large user icon
     - 3 highlight cards below
  2. **OpenStage Co-Founder**
     - Rocket icon
     - Vision & Mission cards side-by-side
- **Icons**:
  - FaUsers (IEEE)
  - FaRocket (OpenStage)
  - FaLightbulb (Vision)
  - FaGithub (Mission)

---

### 🏆 Certifications Section
**File**: `app/components/Certifications.tsx`
- **Layout**: 3-column grid
- **6 Certification Cards**:
  - AWS Solutions Architect
  - Docker Certified
  - Kubernetes Administrator
  - CCNA
  - Linux Professional
  - GitHub Actions
- **Features**:
  - Circular badge image (128px)
  - Award icon
  - Click to open modal
  - Modal shows full details + larger badge

---

### 📧 Contact Section
**File**: `app/components/Contact.tsx`
- **Layout**: 2-column grid
- **Left Column**:
  - Contact info with circular icons
  - Social media buttons (4 icons)
- **Right Column**:
  - Contact form (name, email, message)
  - Orange submit button
- **Social Icons**: GitHub, LinkedIn, YouTube, Twitter
- **Form Fields**: Gray-800 background, orange border on focus

---

### 🦶 Footer
**File**: `app/components/Footer.tsx`
- **Layout**: 3-column grid
- **Columns**:
  1. Brand + tagline + social icons
  2. Quick links (navigation)
  3. Contact information
- **Bottom**: Copyright with heart icon
- **Background**: Solid black
- **Border**: Gray-800 top border

---

### ❌ 404 Page
**File**: `app/not-found.tsx`
- **Centered content**
- **Large animated "404"**: Pulsing scale effect
- **"Back to Home" button**: Orange gradient
- **Simple and clean**

---

## 🎨 Color Palette

```css
--primary-orange: #ff7300    /* Main orange */
--light-orange: #ff9933      /* Lighter shade */
--dark-orange: #cc5c00       /* Darker shade */
--accent-orange: #ffaa55     /* Accent */
--background: #0a0a0a        /* Almost black */
--foreground: #ededed        /* Light gray text */
```

### Usage:
- **Backgrounds**: Black (#000), Gray-900, Gray-800
- **Text**: White, Gray-300, Gray-400
- **Accents**: Orange-500, Orange-400
- **Borders**: Gray-800 default, Orange-500 on hover
- **Gradients**: Orange-600 to Orange-800

---

## 📐 Spacing Standards

- **Section Padding**: 100px top/bottom (60px mobile)
- **Card Padding**: 24px (p-6)
- **Gap Between Cards**: 32px (gap-8)
- **Border Radius**: 12px (rounded-lg)
- **Button Padding**: 12px 32px
- **Button Border Radius**: 50px (rounded-full)

---

## ✨ Animation Patterns

### Scroll Animations
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Hover Effects
```tsx
whileHover={{ scale: 1.05, y: -5 }}
```

### Stagger Children
```tsx
transition={{
  staggerChildren: 0.1,
  delayChildren: 0.2,
}
```

---

## 🎯 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Stacked navigation (hamburger menu)
- Text: 3xl instead of 5xl
- Hidden tooltip on mobile
- Smaller padding

### Tablet (768px - 1024px)
- 2-column grids
- Medium text sizes
- Visible horizontal menu

### Desktop (> 1024px)
- 3-4 column grids
- Full navigation
- Larger text and images
- All animations enabled

---

## 🔤 Typography Scale

- **Hero Title**: 5xl (mobile) to 7xl (desktop)
- **Section Titles**: 4xl to 5xl
- **Subsection Titles**: 2xl to 3xl
- **Body Text**: base (16px)
- **Small Text**: sm (14px)

---

## 💡 Interactive Elements

### Buttons
- Primary: Orange gradient, white text
- Secondary: Transparent, orange border
- Hover: Lift up 2px, increase shadow

### Cards
- Hover: Lift up 5px
- Border changes gray → orange
- Smooth transitions (0.3s)

### Links
- Default: Gray-300 or Gray-400
- Hover: Orange-500
- Transition: 0.3s

---

This guide helps you understand how each component is structured and styled, making it easier to customize!
