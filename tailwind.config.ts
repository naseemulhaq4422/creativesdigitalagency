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
        background: "#080B11",
        surface: "#0D131F",
        "surface-card": "rgba(13, 19, 31, 0.7)",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        brand: {
          purple: {
            DEFAULT: "#8B5CF6",
            light: "#A78BFA",
            dark: "#6D28D9",
            glow: "rgba(139, 92, 246, 0.4)",
          },
          cyan: {
            DEFAULT: "#06B6D4",
            light: "#22D3EE",
            dark: "#0891B2",
            glow: "rgba(6, 182, 212, 0.4)",
          },
          pink: {
            DEFAULT: "#EC4899",
            light: "#F472B6",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "purple-cyan": "linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)",
        "purple-pink": "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
        "cyan-blue": "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
        "card-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "glow-purple": "0 0 35px -5px rgba(139, 92, 246, 0.4)",
        "glow-cyan": "0 0 35px -5px rgba(6, 182, 212, 0.4)",
        "glow-sm-purple": "0 0 15px 0 rgba(139, 92, 246, 0.3)",
        "glow-sm-cyan": "0 0 15px 0 rgba(6, 182, 212, 0.3)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
