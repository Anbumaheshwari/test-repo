/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightcolor: "#0D0D0D",
        backgroundcolor: "#FDFDFD",
        primarycolor:"#6C6C6C",
      },
    },
  },
  plugins: [],
}
