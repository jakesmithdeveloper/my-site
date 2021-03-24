module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        me: "150px",
        blog: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
