import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#035614',
        secondary: '#2c8531',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};

