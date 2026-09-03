/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14262B',
        cornflower: '#8CB6F0',
        paper: '#F4F2EC',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        editorial: '70ch',
      },
    },
  },
  plugins: [],
};
