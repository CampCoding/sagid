/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if using the App Router
  ],
  theme: {
    extend: {
      colors: {
        mobihubGray: "var(--saged-gray)",
        mobihubWhite: "var(--saged-white)",
        mobihubBaseColor: "var(--saged-base)",
        mobihubBlack: "var(--saged-black)",
        mobihubPrimary: "var(--saged-primary)",
      },
      borderRadius: {
        DEFAULT: "var(--saged-bdr-radius)",
        md: "var(--saged-bdr-radius)",
      },
    },
  },

  plugins: [],
};
