// remember to use module.exports instead of tailwind.config in production
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./docs/**/*.{html,js}'],
  theme: {
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
