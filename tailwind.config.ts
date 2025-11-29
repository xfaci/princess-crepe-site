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
                princess: {
                    light: "#FFF0F5", // LavenderBlush
                    cream: "#FFFDD0", // Cream
                    pink: "#FFB6C1", // LightPink
                    darkPink: "#FF69B4", // HotPink
                    choco: "#D2691E", // Chocolate
                },
            },
            fontFamily: {
                sans: ["var(--font-quicksand)"],
                script: ["var(--font-dancing-script)"],
            },
            backgroundImage: {
                "stripe-pattern":
                    "repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255, 255, 255, 0.5) 40px, rgba(255, 255, 255, 0.5) 80px)",
            },
        },
    },
    plugins: [],
};
export default config;
