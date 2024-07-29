module.exports = {
  theme: {
    extend: {
      animation: {
        'float-in': 'floatIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        floatIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
