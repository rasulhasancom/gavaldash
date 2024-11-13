/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'spark': 'spark 0.3s ease-out',
          'ping': 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          spark: {
            '0%': {
              transform: 'scale(0) translate(-50%, 0)',
              opacity: '1'
            },
            '100%': {
              transform: 'scale(1.5) translate(-50%, 0)',
              opacity: '0'
            }
          }
        }
      },
    },
    plugins: [],
  }