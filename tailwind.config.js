/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      16: '16px',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lightgreenBg: 'var(--btn-background)',
        btn: {
          background: 'var(--btn-background)',
          'background-hover': 'var(--btn-background-hover)',
        },
        text: {
          color: 'var(--btn-background)',
          'background-hover': 'var(--btn-background-hover)',
        },
      },
    },
  },
  plugins: [],
}
