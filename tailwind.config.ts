import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101010",
        surface: "#181818",
        primary: "#9E7FFF",
        secondary: "#38bdf8",
        accent: "#f472b6",
        text: "#FFFFFF",
        "text-secondary": "#A3A3A3",
        border: "#2F2F2F",
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        "success-glow": "rgba(16, 185, 129, 0.2)",
        "error-glow": "rgba(239, 68, 68, 0.2)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        'glow-primary': '0 0 20px 0px rgba(158, 127, 255, 0.3)',
        'glow-secondary': '0 0 20px 0px rgba(56, 189, 248, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'background-pan': 'backgroundPan 15s linear infinite',
        'subtle-pulse': 'subtlePulse 2.5s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        backgroundPan: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
