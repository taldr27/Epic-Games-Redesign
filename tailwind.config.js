/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#202020",
        tertiary: "#484848",
        "gray-100": "#BCB7B7",
        "blue-100": "#104A82",
        "blue-200": "#0074E4",
        "blue-300": "#288AE8",
        "yellow-100": "#CFAA1E",
        "yellow-200": "#F5CA23",
        "yellow-300": "#96790E",
        "purple-100": "#6C5BB7",
        "purple-200": "#5847A3",
        "purple-300": "#423579",
      },
      fontFamily: {
        'brutal': ['Brutal Type', 'sans-serif'],
      },
      backgroundImage: {
        "login-background": "url('/src/assets/login_bg.png')",
      },
    },
  },
  plugins: [],
}
