/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'leetcode-yellow': '#ffce59',
        'leetcode-blue': '#a3c7ff',
        'github-purple': '#6e5494',
        'github-black': '#333333',
      },
      backgroundImage: {
        'leetcode-gradient': 'radial-gradient(#ffce59, #a3c7ff)',
        'github-gradient': 'radial-gradient(#6e5494, #333333)',
      },
    },
  },
  plugins: [],
}
