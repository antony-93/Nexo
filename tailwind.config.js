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
          primary: {
            DEFAULT: "#22C55E",
            dark: "#16A34A",
          },
          secondary: {
            DEFAULT: "#10B981",
            dark: "#059669",
          },
          background: {
            DEFAULT: "#F9FAFB",
            dark: "#111827",
          },
          surface: {
            DEFAULT: "#FFFFFF",
            dark: "#1F2937",
          },
          text: {
            DEFAULT: "#111827",
            secondary: "#6B7280",
            dark: "#F9FAFB",
            darkSecondary: "#9CA3AF",
          },
          border: {
            DEFAULT: "#E5E7EB",
            dark: "#374151",
          },
          error: {
            DEFAULT: "#EF4444",
            dark: "#DC2626",
          },
        },
      },
    },
    plugins: [require('tailwindcss-font-inter')],
  };
  