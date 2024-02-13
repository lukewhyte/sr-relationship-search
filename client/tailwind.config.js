/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'founders-grotesk-regular': ['founders-grotesk-regular', 'sans-serif'],
        'founders-grotesk-medium': ['founders-grotesk-medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

