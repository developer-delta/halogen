module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "glass-grey": "#444444",
        "dark-glass-grey": "#383838",
        "brand-blue": "#95A3F8",
        "brand-purple": "#B779F8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
