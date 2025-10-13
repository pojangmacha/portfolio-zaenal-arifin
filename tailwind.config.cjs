module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#90EE90', // hijau muda (LightGreen)
      },
    },
  },
  plugins: [
  function ({ addUtilities, theme }) {
    const newUtilities = {
      '.stroke-text': {
        '--tw-text-opacity': '1',
        '-webkit-text-stroke-width': '1.4px',
        '-webkit-text-fill-color': 'transparent',
      },
      '.text-stroke-primary': {
        '-webkit-text-stroke-color': theme('colors.primary'),
      },
      '.text-stroke-secondary': {
        '-webkit-text-stroke-color': theme('colors.secondary'),
      },
    };
    addUtilities(newUtilities, ['responsive', 'dark']);
  },
],

};
