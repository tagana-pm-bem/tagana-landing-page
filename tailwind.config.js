/** @type {import('tailwindcss').Config} */
// ponytail: ShopVibe tokens mapped to TAGANA brand
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D946EF',
        'primary-hover': '#C026D3',
        'primary-active': '#A21CAF',
        secondary: '#22D3EE',
        tertiary: '#FACC15',
        surface: '#FFFFFF',
        muted: '#F5F5F5',
        border: '#E5E5E5',
        'text-primary': '#171717',
        'text-secondary': '#525252',
        'text-muted': '#A3A3A3',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        medium: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05)',
        large: '0 10px 25px rgba(0,0,0,0.10), 0 6px 10px rgba(0,0,0,0.06)',
        'product-hover': '0 14px 32px rgba(217,70,239,0.12), 0 6px 12px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}

