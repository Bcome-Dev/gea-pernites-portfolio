import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                royal: {
                    DEFAULT: "#1E3A8A",
                    50: "#EFF6FF",
                    100: "#DBEAFE",
                    200: "#BFDBFE",
                    300: "#93C5FD",
                    400: "#60A5FA",
                    500: "#3B82F6",
                    600: "#2563EB",
                    700: "#1D4ED8",
                    800: "#1E40AF",
                    900: "#1E3A8A",
                    950: "#172554",
                },
                blush: {
                    DEFAULT: "#FBCFE8",
                    50: "#FDF2F8",
                    100: "#FCE7F3",
                    200: "#FBCFE8",
                    300: "#F9A8D4",
                    400: "#F472B6",
                    500: "#EC4899",
                },
                studio: "#FFFFFF",
                offwhite: "#F8FAFC",
                ink: "#0F172A",
            },
            fontFamily: {
                serif: ["Playfair Display", "Georgia", "serif"],
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "float-slow": "float 8s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out 2s infinite",
                marquee: "marquee 30s linear infinite",
                "spin-slow": "spin 20s linear infinite",
                "pulse-soft": "pulse-soft 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-12px)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "pulse-soft": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.6" },
                },
            },
            boxShadow: {
                "royal-lg": "0 20px 60px rgba(30,58,138,0.15)",
                "royal-xl": "0 32px 80px rgba(30,58,138,0.2)",
                "blush-glow": "0 0 30px rgba(251,207,232,0.5)",
                card: "0 4px 24px rgba(15,23,42,0.08)",
                "card-hover": "0 12px 40px rgba(15,23,42,0.14)",
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
};

export default config;
