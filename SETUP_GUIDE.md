# 🚀 Interactive Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with Next.js 16, featuring stunning animations powered by Framer Motion.

## ✨ Features

- **Modern Design**: Dark theme with orange accent colors inspired by WSO2
- **Pixel Blast Background**: Dynamic animated background in hero section
- **Typing Animation**: Smooth typing effect for name and title
- **Interactive Components**: 
  - Flip cards for projects
  - Hover effects on skill cards
  - Modal popups for certifications
  - Floating profile image with animations
- **Fully Responsive**: Mobile-first design with staggered mobile menu
- **Smooth Animations**: Framer Motion for premium user experience
- **Single Page Application**: All sections on one page with smooth scrolling

## 🎨 Sections

1. **Navigation**: Sticky navigation with mobile menu
2. **Hero Section**: Eye-catching intro with typing animation and CTAs
3. **About & Education**: Bio with stats and education timeline
4. **Skills**: Categorized skill cards with tooltips
5. **Projects**: Interactive project cards with flip effects
6. **Experience**: IEEE and OpenStage involvement with vision/mission
7. **Certifications**: Badge display with modal details
8. **Contact**: Contact form with social media links
9. **Footer**: Copyright and quick links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typing Effect**: React Type Animation
- **Language**: TypeScript

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🔧 Customization Guide

### 1. Personal Information

Edit the following files with your information:

**Hero Section** ([app/components/Hero.tsx](app/components/Hero.tsx)):
```tsx
// Update typing animation text (line 56)
'Your Name',
'Your Professional Title',
'Your Tagline',
```

**About Section** ([app/components/About.tsx](app/components/About.tsx)):
```tsx
// Update bio text (lines 40-54)
// Update education timeline (lines 10-28)
// Update stats (lines 68-73)
```

**Contact Section** ([app/components/Contact.tsx](app/components/Contact.tsx)):
```tsx
// Update email, phone, location (lines 80-114)
// Update social media links (lines 52-57)
```

### 2. Profile Image

Add your profile photo to the `public` folder:
- Name it `profile.jpg`
- Recommended size: 400x400px or larger (square)
- Format: JPG, PNG, or WebP

### 3. Projects

Update your projects in [app/components/Projects.tsx](app/components/Projects.tsx) (lines 8-35):
```tsx
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    github: 'github-url',
    demo: 'demo-url',
    image: 'image-url',
  },
  // Add more projects
];
```

### 4. Skills

Modify skills in [app/components/Skills.tsx](app/components/Skills.tsx) (lines 19-30):
```tsx
const skills = [
  { name: 'Skill Name', icon: <IconComponent />, color: 'text-color' },
  // Add more skills
];
```

### 5. Certifications

Update certifications in [app/components/Certifications.tsx](app/components/Certifications.tsx) (lines 11-46):
```tsx
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Year',
    description: 'Description',
    badge: 'badge-image-url',
  },
  // Add more certifications
];
```

### 6. CV/Resume

Add your CV PDF to the `public` folder:
- Name it `cv.pdf`
- The download button in the hero section will automatically use it

### 7. Color Customization

Edit color variables in [app/globals.css](app/globals.css) (lines 4-9):
```css
:root {
  --primary-orange: #ff7300;
  --light-orange: #ff9933;
  --dark-orange: #cc5c00;
  --accent-orange: #ffaa55;
}
```

### 8. Metadata

Update SEO metadata in [app/layout.tsx](app/layout.tsx) (lines 15-19):
```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  keywords: ["your", "keywords"],
};
```

## 📱 Social Media Links

Update social media URLs in:
- [app/components/Contact.tsx](app/components/Contact.tsx) (lines 52-57)
- [app/components/Footer.tsx](app/components/Footer.tsx) (lines 9-14)

```tsx
const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: <FaYoutube />, url: 'https://youtube.com/@yourchannel', label: 'YouTube' },
  { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. **Using Email Service (EmailJS)**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add credentials to environment variables
   - Update form handler in [app/components/Contact.tsx](app/components/Contact.tsx)

2. **Using API Route**:
   - Create `app/api/contact/route.ts`
   - Implement email sending logic
   - Update form submission

3. **Using Third-Party (Formspree)**:
   - Sign up at [Formspree](https://formspree.io/)
   - Update form action URL

## 🎯 Performance Tips

- Optimize images using Next.js Image component
- Keep animations smooth by using GPU-accelerated properties
- Lazy load components below the fold
- Use webp format for images
- Enable compression on server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For support, email your.email@example.com or create an issue.

---

Made with ❤️ using Next.js and Framer Motion
