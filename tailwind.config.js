module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#D92626',
        'secondary': '#265AD9',
        'background': '#F2E8DC',
        'text-primary': '#0D0D0D',
        'primary-dark': '#D98226',
        'secondary-dark': '#26D982',
        'background-dark': '#0D0D0D',
        'text-primary-dark': '#F2F2F2',
      },
      keyframes: {
        border: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        rain: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '0.85' },
          '20%': { opacity: '0.7' },
          '40%': { opacity: '0.95' },
          '60%': { opacity: '0.5' },
          '80%': { opacity: '0.9' },
        },
        glitchText: {
          '0%, 100%': { textShadow: '0 0 3px #00ff00, 0 0 12px #00ff00' },
          '25%': { textShadow: '-2px 0 red, 2px 0 blue' },
          '50%': { textShadow: '3px 0 #ff00ff, -3px 0 cyan' },
          '75%': { textShadow: '-4px 0 lime, 4px 0 magenta' },
        },
        scanline: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        crtDistortion: {
          '0%, 100%': { transform: 'scale(1)', filter: 'blur(0px) brightness(1)' },
          '50%': { transform: 'scale(1.02)', filter: 'blur(1px) brightness(1.3)' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2px, -1px)' },
          '20%': { transform: 'translate(3px, 2px)' },
          '30%': { transform: 'translate(-4px, 1px)' },
          '40%': { transform: 'translate(2px, -3px)' },
          '50%': { transform: 'translate(-1px, 4px)' },
          '60%': { transform: 'translate(4px, -2px)' },
          '70%': { transform: 'translate(-3px, 3px)' },
          '80%': { transform: 'translate(1px, -4px)' },
          '90%': { transform: 'translate(-2px, 2px)' },
        }
      },
      animation: {
        border: 'border 2s linear forwards',
        rain: 'rain 2s linear infinite',
        flicker: 'flicker 0.9s infinite',
        glitchText: 'glitchText 1.2s infinite alternate',
        scanline: 'scanline 0.6s linear infinite',
        crtDistortion: 'crtDistortion 3s ease-in-out infinite',
        shake: 'shake 0.2s infinite',
      },
    },
  },
  plugins: [],
};