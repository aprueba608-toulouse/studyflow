/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        study: {
          orange: '#F26B1D',
          'orange-light': '#FED4B9',
          'orange-soft': '#FEF0E6',
          'orange-hover': '#DF5C12',
          brown: '#8C4A32',
          'brown-dark': '#733722',
          'brown-light': '#B36B4D',
          beige: '#FDF7F2',
          'beige-dark': '#F7EFE9',
          'beige-tint': '#FFF8F4',
          border: '#FED4B9',
          'border-subtle': '#F0EAE1',
          text: '#232323',
          'text-muted': '#666666',
          'text-subtle': '#8E8E93',
          gray: '#E5E5E5',
          green: '#34C759',
          'green-soft': '#E1F4EA',
          blue: '#007AFF',
          'blue-soft': '#E5F1FF'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(242, 107, 29, 0.08)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'btn': '0 4px 14px rgba(242, 107, 29, 0.25)',
        'brown-btn': '0 4px 14px rgba(140, 74, 50, 0.25)',
        'modal': '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
        'bar': '0 -4px 20px rgba(140, 74, 50, 0.06)'
      }
    },
  },
  plugins: [],
};
