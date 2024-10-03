/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
      },
      // Adding text shadow customization
      boxShadow: {
        'text': '2px 2px 5px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
        },
      });
    },
  ],
}
