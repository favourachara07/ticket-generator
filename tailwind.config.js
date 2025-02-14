/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#05252C',
        innerBox: '#08252B',
        outerBox: '#041E23'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #24A0B5 0%, #24A0B5 20%, #24A0B5 100%)',
      },
    },
  },
  plugins: [],
}