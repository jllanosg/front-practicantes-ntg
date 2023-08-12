/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'solrwb-logo-1': '#15141A',
        'solrwb-logo-2': '#002e70'
      }
    },
  },
  plugins: [],
}

