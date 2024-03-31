/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Agrega tus propias variables de color aquí
        color1: '#1a1a1a',
        color2: '#2b2b2b',
      },
      fontFamily: {
        // Agrega tus propias variables de tamaño de fuente aquí
        main: ['SF Pro Display', 'sans-serif']
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        }
    },
  },
  plugins: [],
}
}
