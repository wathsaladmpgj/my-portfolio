# 🚀 Quick Start Guide

## Your Portfolio is Live! 🎉

The development server is running at: **http://localhost:3000**

---

## 📋 Next Steps (5 Minutes Setup)

### Step 1: Add Your Photo (1 min)
```bash
1. Find a professional photo of yourself
2. Rename it to "profile.jpg"
3. Copy it to the "public" folder
4. Recommended size: 400x400px (square)
```

### Step 2: Add Your CV (1 min)
```bash
1. Export your CV as PDF
2. Rename it to "cv.pdf"
3. Copy it to the "public" folder
```

### Step 3: Update Your Name (2 mins)
Open `app/components/Hero.tsx` and change line 56:
```tsx
// From:
'Your Name',

// To:
'John Doe',  // Your actual name
```

### Step 4: Update Contact Info (1 min)
Open `app/components/Contact.tsx` and update:
- Line 83: Your email
- Line 92: Your phone number
- Line 101: Your location

---

## 🎨 5-Minute Customization (After Basic Setup)

### Update Bio
**File**: `app/components/About.tsx` (Lines 40-54)
- Replace the placeholder text with your story
- Mention your specializations
- Add your achievements

### Add Your Projects
**File**: `app/components/Projects.tsx` (Lines 8-35)
```tsx
{
  title: 'Your Project Name',
  description: 'What it does',
  technologies: ['React', 'Node.js'],
  github: 'https://github.com/yourname/repo',
  demo: 'https://yourproject.com',
  image: 'https://yourimage.com/project.jpg',
}
```

### Update Skills
**File**: `app/components/Skills.tsx` (Lines 22-33)
- Add or remove skills as needed
- Each skill needs: name, icon, color

### Add Certifications
**File**: `app/components/Certifications.tsx` (Lines 11-46)
- Replace with your actual certifications
- Update: title, issuer, date, description

---

## 🌐 Social Media Links

Update in TWO places:

**1. Contact Page** - `app/components/Contact.tsx` (Lines 52-57)
**2. Footer** - `app/components/Footer.tsx` (Lines 9-14)

```tsx
{ 
  icon: <FaGithub />, 
  url: 'https://github.com/YOURUSERNAME', 
  label: 'GitHub' 
}
```

---

## 🎯 Priority Checklist

### Must Do (Before Showing Anyone)
- [ ] Add your profile photo
- [ ] Update your name in Hero
- [ ] Update email address
- [ ] Update social media URLs

### Should Do (Before Deploying)
- [ ] Write your bio
- [ ] Add 3-4 projects
- [ ] Update skills list
- [ ] Add certifications
- [ ] Update education timeline

### Nice to Have
- [ ] Adjust colors
- [ ] Add more projects
- [ ] Connect contact form
- [ ] Add Google Analytics

---

## 🐛 Common Issues & Fixes

### Profile Image Not Showing?
```bash
# Make sure the file is named exactly:
public/profile.jpg

# Not:
public/Profile.jpg  ❌
public/profile.png  ❌
public/image.jpg    ❌
```

### Download CV Button Not Working?
```bash
# Make sure the file is named exactly:
public/cv.pdf

# Not:
public/CV.pdf       ❌
public/resume.pdf   ❌
```

### Changes Not Appearing?
```bash
# Hard refresh your browser:
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Build Errors?
```bash
# Make sure all imports are correct
# Check for TypeScript errors in VS Code
# Run: npm install (to ensure all packages are installed)
```

---

## 📱 Testing Your Site

### Desktop
1. Open http://localhost:3000
2. Click through all sections
3. Test hover effects on cards
4. Try the navigation menu
5. Fill out contact form

### Mobile
1. Press F12 in browser
2. Click mobile device icon
3. Test hamburger menu
4. Check all sections are responsive
5. Verify images load correctly

---

## 🚀 Deploy to Production

### Option 1: Vercel (Easiest - Recommended)
```bash
1. Push code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
```

### Option 2: Netlify
```bash
1. Push code to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select your repository
5. Build command: npm run build
6. Publish directory: .next
```

### Option 3: Other Platforms
```bash
# Build command:
npm run build

# Start command:
npm start

# Output directory:
.next/
```

---

## 🎓 Learning Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs) - Framework
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling

### Tutorials
- [Next.js Tutorial](https://nextjs.org/learn)
- [Framer Motion Tutorial](https://www.youtube.com/watch?v=znbCa4Rr054)
- [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=dFgzHOX84xQ)

---

## 📞 Need Help?

### For Customization Questions
- Check `SETUP_GUIDE.md` for detailed instructions
- Check `CUSTOMIZATION_CHECKLIST.md` for step-by-step guide
- Check `VISUAL_GUIDE.md` for styling details

### For Technical Issues
- Check browser console (F12) for errors
- Verify all files are in correct locations
- Ensure Node.js and npm are updated
- Clear browser cache and restart dev server

---

## ✅ You're All Set!

Your portfolio website is ready to customize and deploy! 

**Remember**: 
- Start with the basics (photo, name, contacts)
- Gradually add more content
- Test everything before deploying
- Keep it updated with new projects

**Good luck with your portfolio! 🚀**

---

Made with ❤️ using Next.js, Framer Motion, and Tailwind CSS
