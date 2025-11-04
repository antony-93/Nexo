/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter-Regular', 'sans-serif'],
        medium: ['Inter-Medium', 'sans-serif'],
        semibold: ['Inter-SemiBold', 'sans-serif'],
        bold: ['Inter-Bold', 'sans-serif'],
      },

      backgroundColor: {
        primary: '#FFFFFF',
        secondary: '#F5F6FA',

        dark: {
          primary: '#181818',
          secondary: '#212121',
        },
      },

      textColor: {
        primary: '#1A1A1A',
        secondary: '#6B7280',

        dark: {
          primary: '#FFFFFF',
          secondary: '#B3B3B3'
        },
      },

      borderColor: {
        primary: '#E5E7EB',
        dark: {
          primary: '#2C2C2C',
        },
      },

      colors: {
        content: {
          primary: '#1A1A1A',
          secondary: '#6B7280',

          dark: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3'
          },
        },

        surface: {
          primary: '#FFFFFF',
          secondary: '#F5F6FA',
          highlight: '#E5E7EB',
          
          dark: {
            highlight: '#2C2C2C',
            primary: '#181818',
            secondary: '#212121',
          },
        },

        action: {
          primary: '#6B4EFF',
          secondary: '#ECECFF',

          dark: {
            primary: '#8E7BFF',
            secondary: '#3C3C3C',
          },
        },

        positive: {
          primary: '#00A86B',
          secondary: '#D1F5E0',

          dark: {
            primary: '#00FF7F',
            secondary: '#003300'
          }
        },

        negative: {
          primary: '#FF4D4F',
          secondary: '#FFE5E5',

          dark: {
            primary: '#FF6B6B',
            secondary: '#330000'
          }
        },

        warning: {
          primary: '#FFD60A',
          secondary: '#FFF8CC',

          dark: {
            primary: '#FFD60A',
            secondary: '#332A00',
          },
        },
      },

      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '20px',
      },

      boxShadow: {
        card: '0 3px 3px rgba(0, 0, 0, 0.08)',
        cardaction: '0 3px 3px rgba(0, 0, 0, 0.08)'
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter')
  ],
};
