# Michael Colenso Portfolio

A personal portfolio website bridging **Physical Construction** and **Software Engineering**.

## Design Language: "Concrete & Code"

- **Aesthetic**: Industrial Minimalism - Architectural Blueprint meets VS Code
- **Typography**: Inter (structure) + JetBrains Mono (code)
- **Colors**: Deep Slate background, Safety Orange (construction), Blueprint Blue (software)

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generation
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- **Icons**: Inline SVG (Lucide-style)

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ProjectCard.astro    # Reusable project card (physical/digital)
│   ├── layouts/
│   │   └── Layout.astro         # Main HTML skeleton + navbar
│   └── pages/
│       └── index.astro          # Landing page
├── astro.config.mjs
├── tailwind.config.mjs          # Custom colors + fonts
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Responsive mobile-first design
- Semantic HTML for accessibility
- Tabbed portfolio sections (Construction / Software)
- Grid "scaffolding" visual effects
- Terminal-style code block in hero
- Smooth scroll navigation

## Deployment

This site is deployed to [Netlify](https://netlify.com) with automatic deployments via GitHub Actions.

### Setup

1. **Create a Netlify site**:
   - Go to [Netlify](https://app.netlify.com) and create a new site
   - Link it to this GitHub repository, or create a blank site

2. **Get your credentials**:
   - **NETLIFY_AUTH_TOKEN**: Go to User Settings → Applications → Personal access tokens
   - **NETLIFY_SITE_ID**: Found in Site Settings → General → Site ID

3. **Add GitHub Secrets**:
   - Go to your repo → Settings → Secrets and variables → Actions
   - Add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`

4. **Custom Domain** (optional):
   - In Netlify, go to Domain Settings → Add custom domain
   - Configure DNS to point `michaelcolenso.com` to Netlify

### How it works

- **Push to `main`**: Triggers a production deployment
- **Pull requests**: Creates a preview deployment with a unique URL
- Build output is in the `dist/` folder (configured in `netlify.toml`)

## License

MIT
