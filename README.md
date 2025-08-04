# Next.js Boilerplate with Tailwind CSS and i18next

A modern Next.js application boilerplate with TypeScript, Tailwind CSS, and internationalization support using i18next.

## Features

- ⚡ **Next.js 14** - The React framework for production
- 🎨 **Tailwind CSS** - A utility-first CSS framework
- 🌍 **i18next** - Internationalization framework for React
- 📝 **TypeScript** - Type-safe JavaScript
- 🔧 **ESLint** - Code linting and formatting
- 📱 **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-tailwind-i18next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   └── LanguageSwitcher.tsx # Language switcher
├── lib/                  # Utility libraries
│   ├── i18n.ts          # i18next configuration
│   └── i18next-provider.tsx # React i18next provider
├── locales/              # Translation files
│   ├── en.json          # English translations
│   ├── es.json          # Spanish translations
│   └── fr.json          # French translations
├── public/               # Static assets
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## Internationalization

This project uses i18next for internationalization with support for:

- **English (en)** - Default language
- **Spanish (es)** - Español
- **French (fr)** - Français

### Adding New Languages

1. Create a new translation file in `locales/` (e.g., `de.json`)
2. Add the language to the `languages` array in `components/LanguageSwitcher.tsx`
3. Import and add the translations to `lib/i18n.ts`

### Using Translations

```tsx
import { useTranslation } from 'react-i18next'

function MyComponent() {
  const { t } = useTranslation()
  
  return <h1>{t('welcome')}</h1>
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Tailwind CSS

The project includes a custom Tailwind configuration with:
- Custom color palette
- Responsive design utilities
- Custom component classes

### Styling

All components use Tailwind CSS classes for styling. The design is mobile-first and fully responsive.

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details. 