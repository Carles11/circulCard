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
          'text-color-hover': 'var(--btn-text-color-hover)',
        },
        text: {
          color: 'var(--btn-background)',
          'background-hover': 'var(--btn-background-hover)',
        },
      },
      screens: {
        '3xl': '1600px', // Adds a new `3xl:` screen variant to resize text in a responsive way. Example: className="text-base md:text-md 3xl:text-lg">
      },
      keyframes: {
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        'scale-up': 'scale-up 0.3s ease-in-out',
      },
      transform: {
        'scale-110': 'scale(1.2)',
      },
    },
  },
  plugins: [],
}
