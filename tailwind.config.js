/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        bg: '#F0EDE6',
        sidebar: '#0D1117',
        sage: {
          DEFAULT: '#3D6B5A',
          light: '#5A9278',
          pale: '#E2EDE8',
        },
        gold: {
          DEFAULT: '#C9A84C',
          pale: '#FBF5E6',
        },
        danger: {
          DEFAULT: '#B03A2E',
          pale: '#FDECEA',
        },
        secondary: '#6B7280',
        border: '#E0DBD1',
        card: '#FAFAF7',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
