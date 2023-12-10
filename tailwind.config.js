/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'main-color': '#0c63ce',
      'secondary-color': '#fefefe',
      'font-color': '#00031f',
      'link-color': '#666484',
      'border-color': '#e7e7e7',
      'alt-btn': '#90e0e0',
      'background-section': '#F5F5F5',
      'second-border': '#91e1e1',
      'third-border': '#c4abe1',
      'forth-border': '#f0b57e',
      'fifth-border': '#e387a1',
      'border-link-color': 'rgba(113,160,236,0.25)',
      'second-broder-link-color': 'rgba(145,225,225,0.25)',
      'third-border-link-color': 'rgba(196,171,225,0.25)',
      'forth-border-link-color': 'rgba(240,181,126,0.25)',
      'fifth-blorder-link-color': 'rgba(227,135,161,0.25)',
    },
    fonts:{
      'x-small': '5px',
      'small': '10px',
    },
    extend: {},
  },
  plugins: [],
}
