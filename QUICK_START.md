# Quick Start Guide

Get the portfolio up and running in 5 minutes.

## Installation (2 minutes)

```bash
# 1. Clone or download repository
git clone <repository-url>
cd v0-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Portfolio is live! 🎉

## Common Tasks

### Edit Content

**File:** `app/page.tsx`

```tsx
// Hero Section
<h1>Hey, I'm Paceeba Yakubu</h1>

// Projects - Update project info
[
  {
    title: 'Project Name',
    description: 'Your description',
    url: 'https://project.com',
    tech: ['React', 'Next.js'],
    image: 'image-url',
  },
]

// Contact - Update links
href="https://wa.me/YOUR_NUMBER"
href="mailto:YOUR_EMAIL"
```

### Change Colors

**File:** `app/globals.css`

```css
:root {
  --primary: oklch(0.65 0.18 263);      /* Purple/Blue */
  --accent: oklch(0.60 0.19 262);       /* Cyan */
  --background: oklch(0.08 0 0);        /* Dark */
  --foreground: oklch(0.98 0 0);        /* Light */
}
```

### Add New Section

```tsx
<section id="new-section" className="py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold mb-12">Section Title</h2>
    {/* Your content */}
  </div>
</section>
```

### Add Custom Animation

**File:** `app/globals.css`

```css
@keyframes customAnimation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-custom {
  animation: customAnimation 0.8s ease-out;
}
```

## Build & Deploy

### Local Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or push to GitHub and Vercel auto-deploys!

## File Structure

```
app/
├── page.tsx          ← Main portfolio (edit here)
├── layout.tsx        ← Metadata & SEO
└── globals.css       ← Styles & animations

components/
├── ProjectCard.tsx
├── CertificateCard.tsx
└── ContactCard.tsx

public/
└── robots.txt

next.config.js        ← Performance config
vercel.json          ← Deployment config
```

## Essential Commands

```bash
# Development
npm run dev           # Start dev server (localhost:3000)

# Production
npm run build         # Build for production
npm start             # Start production server

# Linting
npm run lint          # Check code quality
```

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Customization Checklist

- [ ] Update name and title
- [ ] Change colors in `globals.css`
- [ ] Update projects in `page.tsx`
- [ ] Add certificates
- [ ] Update social links
- [ ] Change images
- [ ] Update contact email
- [ ] Set custom domain

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Build fails | Delete `.next/` folder, run `npm run build` again |
| Images not loading | Check image URLs in `page.tsx` |
| Styling issues | Clear cache: `npm run build --no-cache` |
| Animations not working | Check `prefers-reduced-motion` in browser |

## Performance Tips

✅ **Keep images optimized**
- Use WebP format
- Keep file size < 500KB
- Optimize before uploading

✅ **Minimize external scripts**
- Only essential third-party code
- Lazy load if possible

✅ **Monitor performance**
- Run Lighthouse audit
- Check Core Web Vitals
- Use Vercel Analytics

## Security Reminders

🔒 **Never commit secrets**
- Use `.env.local` for sensitive data
- Never hardcode API keys
- Use environment variables

🔒 **Keep dependencies updated**
```bash
npm update
npm audit
```

🔒 **Review external links**
- Use `rel="noopener noreferrer"` on external links
- Verify all links are safe

## Getting Help

**Documentation:**
- README.md - Comprehensive guide
- DEPLOYMENT_GUIDE.md - Deployment steps
- OPTIMIZATION_CHECKLIST.md - Feature list

**Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)

**Contact:**
- Email: yakubceeba@gmail.com
- GitHub: https://github.com/Paceeba-Rick

## Next Level Enhancements

Ready to add more features?

```tsx
// Add a blog
- Create app/blog/page.tsx
- Add markdown support

// Add contact form
- Install React Hook Form
- Create email API endpoint

// Add dark mode toggle
- Install next-themes
- Update layout.tsx

// Add animations on scroll
- Install Framer Motion
- Update components
```

## Performance Goals

| Metric | Target |
|--------|--------|
| Lighthouse Score | 95+ |
| First Paint | < 1s |
| Page Load | < 2.5s |
| Interactions | < 100ms |
| Mobile Score | 90+ |

## One-Line Deploy

```bash
git push origin main && echo "Deploying..." && sleep 5 && echo "✅ Live on Vercel!"
```

---

**Pro Tip:** Keep the dev server running while editing!

```bash
npm run dev
# Edit files → auto-refresh (Fast Refresh)
```

**Need help?** Check README.md or DEPLOYMENT_GUIDE.md for more details.

---

**Quick Links:**
- [View Site](http://localhost:3000)
- [GitHub](https://github.com/Paceeba-Rick/v0-my-portfolio-site)
- [Vercel](https://vercel.com)

Happy coding! 🚀
