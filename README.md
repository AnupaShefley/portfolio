# Anupa Shefley - Personal Portfolio

A modern, clean, single-page portfolio website showcasing skills, work, and contact information.

## Prerequisites

**Node.js and npm are required to run this project.**

If you see "npm is not recognized", you need to install Node.js first. See [SETUP.md](./SETUP.md) for detailed installation instructions.

- Download Node.js LTS from: https://nodejs.org/
- After installation, restart your terminal/PowerShell
- Verify installation: `node --version` and `npm --version`

## Features

- 🎨 Modern, minimal design with clean typography
- 📱 Fully responsive layout for desktop and mobile
- ✨ Smooth animations and transitions
- 🎯 Smooth scrolling navigation
- 📝 Contact form with validation
- 🚀 Built with Next.js 14 and TypeScript

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Skills.tsx          # Skills section
│   ├── About.tsx           # About Me section
│   ├── Work.tsx            # Work/Projects section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
└── types/
    └── index.ts            # TypeScript types
```

## License

MIT
