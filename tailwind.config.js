// remember to use module.exports instead of tailwind.config in production
// tailwind.config.js
module.exports = {
  content: ['./docs/**/*.{html,vue,svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
      borderRadius: {
        // Example valid value:
        'var-sds-size-radius-full': '9999px',
      },
      colors: {},
      spacing: {},
      width: {},
      minWidth: {},
      maxWidth: {},
      height: {},
      minHeight: {},
      maxHeight: {},
    },
  },
};
