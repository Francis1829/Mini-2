/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#fff',
      'light': '#D1D7E0',
      'black': '#000',
      'nav-color': '#aab259',
      'theme-color': '#e37627',
    },
    extend: {},
  },
  plugins: [],
};
