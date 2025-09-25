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
        colors: {
          // Cores Principais
          primary: {
            DEFAULT: 'hsl(200 95% 45%)', // Azul vibrante financeiro
            glow: 'hsl(200 95% 65%)',    // Azul mais claro para efeitos
            dark: 'hsl(200 95% 35%)',    // Azul mais escuro para dark mode
          },
          accent: {
            DEFAULT: 'hsl(142 76% 40%)', // Verde para destaques
            dark: 'hsl(142 76% 30%)',    // Verde escuro para dark mode
          },
          success: {
            DEFAULT: 'hsl(142 76% 36%)', // Verde para status positivo
            dark: 'hsl(142 76% 26%)',    // Verde escuro para dark mode
          },
          destructive: {
            DEFAULT: 'hsl(0 84% 60%)',   // Vermelho para alertas
            dark: 'hsl(0 84% 50%)',      // Vermelho escuro para dark mode
          },
          pending: {
            DEFAULT: 'hsl(38 92% 50%)',  // Amarelo para pendências
            dark: 'hsl(38 92% 40%)',     // Amarelo escuro para dark mode
          },
          
          // Cores de Fundo
          background: {
            DEFAULT: 'hsl(0 0% 100%)',   // Branco puro
            dark: 'hsl(210 40% 8%)',     // Cinza muito escuro para dark mode
          },
          card: {
            DEFAULT: 'hsl(0 0% 100%)',   // Branco para cards
            dark: 'hsl(210 40% 12%)',    // Cinza escuro para cards dark
          },
          muted: {
            DEFAULT: 'hsl(210 40% 98%)', // Cinza muito claro
            dark: 'hsl(210 40% 15%)',    // Cinza escuro para dark mode
          },
          secondary: {
            DEFAULT: 'hsl(210 40% 96%)', // Cinza claro para elementos secundários
            dark: 'hsl(210 40% 18%)',    // Cinza escuro para dark mode
          },
          
          // Cores de Texto (simplificadas)
          foreground: {
            DEFAULT: 'hsl(210 40% 10%)', // Texto principal
            dark: 'hsl(210 40% 95%)',    // Texto principal dark
          },
          muted: {
            DEFAULT: 'hsl(210 40% 45%)', // Texto secundário
            dark: 'hsl(210 40% 65%)',    // Texto secundário dark
          },
          
          // Cores de Borda
          border: {
            DEFAULT: 'hsl(210 40% 90%)', // Borda padrão
            dark: 'hsl(210 40% 25%)',    // Borda dark
          },
          
          // Cores de Input
          input: {
            DEFAULT: 'hsl(210 40% 95%)', // Background de input
            dark: 'hsl(210 40% 15%)',    // Background de input dark
          },
          
          // Cores de Ring (focus)
          ring: {
            DEFAULT: 'hsl(200 95% 45%)', // Ring de foco
            dark: 'hsl(200 95% 65%)',    // Ring de foco dark
          },
        },
      },
    },
    plugins: [require('tailwindcss-font-inter')],
  };
  