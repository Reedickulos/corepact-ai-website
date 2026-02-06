/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apex: {
          gold: '#FFD700',
          amber: '#FFBF00',
          bronze: '#CD7F32',
        }
      }
    },
  },
  plugins: [],
}
