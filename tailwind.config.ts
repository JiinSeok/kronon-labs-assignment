import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        spinner: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg) scale(1.1)' },
          '50%': { transform: 'translate(-50%, -50%) rotate(360deg) scale(1)' },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(360deg) scale(1)',
          },
        },
      },
      animation: {
        spinner: 'spinner 2.4s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
