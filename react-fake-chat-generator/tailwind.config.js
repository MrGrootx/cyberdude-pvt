/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Poppins: ["Poppins", "sans-seri"],
      },
      colors: {
        ctm: "#164863",
        ctm2: "#232D3F",
        wts: "#ECE5DD",
      },
    },
  },
  plugins: [],
};
