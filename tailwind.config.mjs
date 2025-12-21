/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'slate-deep': '#1e293b',
        'concrete': '#f8fafc',
        'concrete-dark': '#e2e8f0',

        // Accent colors
        'safety-orange': '#f97316',
        'safety-orange-light': '#fb923c',
        'safety-orange-dark': '#ea580c',
        'blueprint': '#3b82f6',
        'blueprint-light': '#60a5fa',
        'blueprint-dark': '#2563eb',

        // Structural grays
        'steel': '#64748b',
        'steel-light': '#94a3b8',
        'steel-dark': '#475569',
        'rebar': '#334155',
      },
      fontFamily: {
        // Structural headers - geometric sans-serif
        'structure': ['Inter', 'system-ui', 'sans-serif'],
        // Code/engineering details - monospace
        'code': ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        // Subtle grid pattern for "scaffolding" effect
        'grid-slate': `
          linear-gradient(to right, rgba(100, 116, 139, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(100, 116, 139, 0.1) 1px, transparent 1px)
        `,
        'grid-light': `
          linear-gradient(to right, rgba(30, 41, 59, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(30, 41, 59, 0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'grid': '24px 24px',
        'grid-lg': '48px 48px',
      },
      boxShadow: {
        'blueprint': '0 0 0 1px rgba(59, 130, 246, 0.5)',
        'safety': '0 0 0 1px rgba(249, 115, 22, 0.5)',
        'structural': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'terminal-blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '75ch',
            color: '#e2e8f0',
            a: {
              color: '#3b82f6',
              '&:hover': {
                color: '#60a5fa',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
