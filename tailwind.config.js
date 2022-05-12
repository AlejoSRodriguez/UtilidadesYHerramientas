module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},

    screens: {
      'mobile': {'min': '200px', 'max': '1023px'},
      // => @media (min-width: 640px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1280px) { ... }
    },

    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
  plugins: [],
}

