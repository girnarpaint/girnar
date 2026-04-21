/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0082c8', // gp blue
          lightblue: '#3B82F6',
          orange: '#e61e25', // remap orange to gp red for legacy class names
          red: '#e61e25',    // gp red
          gray: '#F3F4F6',
          dark: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
