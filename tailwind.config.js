// remember to use module.exports instead of tailwind.config in production
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      xs: '300px',
      sm: '301px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
      '4xl': '2600px', // ← missing px here
    },
    fontSize: {
      sm: ['7px', '10px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {},
  },
  plugins: [],
};
