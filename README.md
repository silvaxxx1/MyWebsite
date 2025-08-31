# Modern React Portfolio

[![Deploy to GitHub Pages](https://github.com/maha3069/modern-react-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/maha3069/modern-react-portfolio/actions/workflows/deploy.yml)

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, lazy loading, and optimized performance.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, code splitting, and image optimization
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Scroll-triggered animations and hover effects

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Custom Properties
- **Animations**: CSS animations with Intersection Observer
- **Testing**: Vitest, React Testing Library
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-react-portfolio.git
cd modern-react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local` with your information.

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

Run tests:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 🏗️ Building

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🚀 Deployment

### GitHub Pages (Automatic)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/modern-react-portfolio`

### Manual Deployment

Build and deploy manually:
```bash
npm run deploy
```

## 📁 Project Structure

```
modern-react-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections (Hero, About, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Static data
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles and animations
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── .github/workflows/    # GitHub Actions workflows
└── dist/                 # Production build output
```

## 🎨 Customization

### Personal Information

Update your personal information in:
- `src/data/experience.ts` - Work experience
- `src/data/projects.ts` - Portfolio projects
- `.env.production` - Contact information and social links

### Styling

- Global styles: `src/styles/`
- Component styles: Individual `.css` files next to components
- Animations: `src/styles/animations.css`

### Content

- Hero section: `src/components/sections/Hero.tsx`
- About section: `src/components/sections/About.tsx`
- Experience: `src/components/sections/Experience.tsx`
- Projects: `src/components/sections/Projects.tsx`
- Contact: `src/components/sections/Contact.tsx`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with your configuration:

```env
VITE_APP_TITLE=Your Portfolio Title
VITE_CONTACT_EMAIL=your.email@example.com
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_GITHUB_URL=https://github.com/yourusername
VITE_TWITTER_URL=https://twitter.com/yourusername
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push to main

## 📊 Performance

The portfolio is optimized for performance with:
- Code splitting and lazy loading
- Image optimization with WebP support
- Efficient bundle sizes with tree shaking
- Intersection Observer for scroll animations
- Service worker for caching (optional)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons and Lucide
- Fonts from Google Fonts (Inter)
- Performance optimization techniques from web.dev

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your Profile](https://github.com/yourusername)

---

Built with ❤️ using React and TypeScript