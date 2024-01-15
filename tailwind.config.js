/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "unbounded": "var(--font-unbounded)",
      },
      keyframes:{
        wave: {
          to: {
            'margin-left': '-51%',
          },
        },
      },
    },
    animation: {
      wave: 'wave 5s linear infinite',
    },
  },
  plugins: [],
}
