/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        1000: '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotate-x-180': {  // Added for vertical flipping
          transform: 'rotateX(180deg)',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
      });
    },
  ],
};
