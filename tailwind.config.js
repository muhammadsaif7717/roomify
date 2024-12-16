/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom colors for light mode
        light: {
          'background': '#E5E6E6',
          'text': '#1a202c',
          'primary': '#4F46E5',
          'secondary': '#A0AEC0',
        },
        // Custom colors for dark mode
        dark: {
          'background': '#1a202c',
          'text': '#f7fafc',
          'primary': '#8B5CF6',
          'secondary': '#718096',
        },
      },
    },
  },
  plugins: [daisyui],
};
