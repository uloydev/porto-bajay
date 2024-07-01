import { scale } from 'svelte/transition';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Bebas Neue', 'sans-serif'],
        'familjen': ['Familjen Grotesk', 'sans-serif'],
      },
      keyframes: {
        // rotate and scale
        loading: {
          '0%': { transform: 'rotate(0deg)', scale: '0.5', 'fill': '#000' },
          '25%': { transform: 'rotate(-180deg)', scale: '.8', 'fill': '#FB4343' },
          '35%': { transform: 'rotate(-180deg)', scale: '.8', 'fill': '#FB4343' },
          '60%': { transform: 'rotate(-360deg)', scale: '0.5', 'fill': '#000' },
          '100%': { transform: 'rotate(-360deg)', scale: '0.5', 'fill': '#000' },
        },
        'finish-loading': {
          '0%': { 'fill': '#000', opacity: '1' },
          '100%': { 'fill': '#000', 'opacity': '0', width: '1000%', height: '1000%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'loading': 'loading 1.5s linear infinite',
        'finish-loading': 'finish-loading 1s linear forwards',
        'fade-in': 'fade-in 1s linear forwards',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      colors: {
        'thejak': '#FB4343'
      },
      backgroundColor: {
        'thejak': '#FB4343'
      },
    },
  },
  plugins: [],
}

