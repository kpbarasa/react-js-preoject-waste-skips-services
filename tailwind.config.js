/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'fade-in-down',
    'fade-in-up',
    'slide-in-down',
    'slide-in-up'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'], // or your custom font
      },mation: {
        'fade-in-down': 'fade-in-down 0.9s ease-out both',
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }],     // base: 36px
        h2: ['1.875rem', { lineHeight: '2.25rem' }],   // base: 30px
        h3: ['1.5rem', { lineHeight: '2rem' }],        // base: 24px
        h4: ['1.25rem', { lineHeight: '1.75rem' }],    // base: 20px
        h5: ['1rem', { lineHeight: '1.5rem' }],        // base: 16px
        h6: ['0.875rem', { lineHeight: '1.25rem' }],   // base: 14px
      },
        screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#0037C1',
        secondary: '#9ca3af', // Your secondary color
        light: '#ffffff',   // Your primary color
        dark: '#121212',   // Your primary color
        info: '#045c94',   // Your primary color
        warning: '#ff8e2b',   // Your primary color
        error: '#fd2f21',   // Your primary color
        success: '#008337',   // Your primary color
        background_secondary: '#1c1c1c',   // Your primary color
        background_primary: '#222222',   // Your primary color
        accent: '#EC4899',    // An accent color
        buttonBg: '#B0B0B0', // Default background color for the button
        buttonText: '#4B5563', // Default text color for the button
        buttonBorder: '#52525B', // Default border color for the button
        buttonHoverBg: '#A1A1A1', // Background color on hover
        buttonHoverText: '#374151', // Text color on hover
        buttonHoverBorder: '#4B5563', // Border color on hover
      },
    },
    mation: {
      'fade-in-down': 'fade-in-down 0.9s ease-out both',
    },
  },
  plugins: [],
}