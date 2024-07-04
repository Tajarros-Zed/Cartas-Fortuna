/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile-md': '375px',
        'mobile-lg': '425px',
        'iphone': '500px',
      }
    },
  },
  plugins: [],
}

