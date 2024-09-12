/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui")],
};
