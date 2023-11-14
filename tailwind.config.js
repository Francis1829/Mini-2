/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#fff',
      'light': '#f5f3f2',
      'black': '#000000',
      'theme-color': '#c9aa5b',
      't-hover' : '#f0cb6e',
    },
    extend: {},
  },
  plugins: [],
};
