# Vojta Deconinck Portfolio Website

Een meertalige portfolio website gebouwd met Astro, Tailwind CSS en TypeScript.

## 🌍 Beschikbare Talen

- 🇬🇧 English (Engels) - Standaard
- 🇳🇱 Nederlands  
- 🇨🇿 Čeština (Tsjechisch)
- 🇩🇰 Dansk (Deens)

## 🚀 Quick Start

### Vereisten

- Node.js 18+ 
- pnpm (aanbevolen) of npm

### Installatie

1. **Clone de repository:**
```bash
git clone https://github.com/VojtaDC/Website.git
cd Website
```

2. **Installeer dependencies:**
```bash
pnpm install
```

3. **Start development server:**
```bash
pnpm dev
```

De website is nu beschikbaar op `http://localhost:4321`

### Andere commando's

```bash
# Build voor productie
pnpm build

# Preview production build lokaal
pnpm preview

# Linting en formatting
pnpm run astro check

# Development met host binding (voor toegang vanaf andere apparaten)
pnpm dev --host
```

## 📁 Project Structuur

```
src/
├── components/          # Herbruikbare componenten
│   ├── Nav.astro       # Hoofdnavigatie
│   ├── Timeline.astro  # Timeline component
│   └── LanguageSelector.astro # Taalschakelaar
├── layouts/            # Layout templates
│   └── BaseLayout.astro
├── pages/              # Pagina's en routes
│   ├── index.astro     # Homepage
│   ├── timeline.astro  # Timeline pagina
│   ├── contact.astro   # Contact pagina
│   ├── projects.astro  # Projecten pagina
│   ├── cv.astro        # CV pagina
│   └── [lang]/         # Taal-specifieke pagina's
├── i18n/               # Internationalisatie
│   ├── ui.ts          # Vertalingen
│   └── utils.ts       # i18n utilities
├── assets/            # Static assets
└── env.d.ts          # TypeScript definities
```

## 🌐 Internationalisatie (i18n)

### Nieuwe taal toevoegen

1. **Voeg taalcode toe aan `astro.config.mjs`:**
```javascript
i18n: {
  locales: ['en', 'nl', 'cs', 'da', 'nieuwe-taal'],
  // ...
}
```

2. **Voeg vertalingen toe aan `src/i18n/ui.ts`:**
```javascript
export const ui = {
  // bestaande talen...
  'nieuwe-taal': {
    'nav.home': 'Vertaling',
    // meer vertalingen...
  }
}
```

3. **Update `languages` object in `ui.ts`:**
```javascript
export const languages = {
  // bestaande talen...
  'nieuwe-taal': 'Taalnaam',
};
```

### Vertaling gebruiken in componenten

```astro
---
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('nav.home')}</h1>
```

## 🎨 Styling

Dit project gebruikt **Tailwind CSS** voor styling. Alle classes zijn utility-first.

### Belangrijke design tokens:
- Primaire kleur: `blue-600`
- Secundaire kleuren: `gray-700`, `gray-800`
- Fonts: System fonts stack
- Breakpoints: Standaard Tailwind breakpoints

## 📱 Responsive Design

De website is volledig responsive met:
- Mobile-first approach
- Hamburger menu op mobile
- Responsive grid layouts
- Touch-friendly interacties

## 🚀 Deployment

### GitHub Pages (Automatisch)

De website wordt automatisch gedeployed naar GitHub Pages via GitHub Actions wanneer je pusht naar de `main` branch.

**Live URLs:**
- Hoofddomein: https://vojtechdeconinck.me
- GitHub Pages: https://vojtadc.github.io/Website/

### Handmatige deployment

```bash
# Build
pnpm build

# Upload dist/ folder naar je hosting provider
```

## 🛠️ Development

### Code kwaliteit

- **TypeScript**: Voor type safety
- **Astro**: Voor componenten en SSG
- **Tailwind**: Voor consistent styling

### Git workflow

1. Maak een feature branch: `git checkout -b feature/nieuwe-functie`
2. Commit changes: `git commit -m "Beschrijving"`
3. Push branch: `git push origin feature/nieuwe-functie`
4. Maak Pull Request naar `main`

### Environment variabelen

Geen environment variabelen nodig voor basic functionaliteit.

## 📧 Contact Informatie

Voor vragen over de website:

- **Email**: vojtadeconinck@gmail.com
- **Phone**: +32 (0)456 01 30 17
- **LinkedIn**: [linkedin.com/in/vojta-deconinck](https://linkedin.com/in/vojta-deconinck)

## 📄 Licentie

Dit project is eigendom van Vojta Deconinck. Alle rechten voorbehouden.

---

**Laatste update**: December 2025
**Astro versie**: v4.x
**Node.js versie**: 18+
