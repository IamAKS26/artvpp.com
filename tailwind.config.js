/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                background: '#FFFFFF',   // Neutral White for better contrast with bold red
                paper: '#F1F5F9',        // Light Slate for cards

                // New Palette Tokens
                primary: '#E22227',      // Bright Red
                secondary: '#C7080C',    // Darker Red
                accent: '#6C0102',       // Deep Red
                dark: '#222B31',         // Dark Slate/Blue (Text)
                darker: '#440101',       // Very Dark Red/Black
                grey: '#55666E',         // Medium Grey

                // Semantic Aliases
                'brand-primary': '#E22227',
                'brand-secondary': '#C7080C',
                'brand-dark': '#222B31',

                // Dark Mode Tokens
                'dark-surface': '#2D3748',
                'dark-card': '#1E293B',
                'dark-border': '#4A5568',

                // STRICT VISIBILITY TOKENS
                'brand-light-bg': '#FFFFFF',
                'brand-dark-bg': '#1A202C',    // Dark Slate Base

                // Light Mode Text
                'on-light-text': '#222B31',      // Dark Slate (High Contrast)
                'on-light-text-body': '#55666E', // Grey
                'on-light-text-muted': '#94A3B8',
                'on-light-border': '#E22227',

                // Dark Mode Text
                'on-dark-text': '#FFFFFF',
                'on-dark-text-body': '#CBD5E1',
                'on-dark-text-muted': '#94A3B8',
                'on-dark-border': '#6C0102',

                // Inputs
                'input-light-bg': '#FFFFFF',
                'input-light-border': '#E22227',
                'input-dark-bg': '#2D3748',
                'input-dark-border': '#C7080C',
            },
            boxShadow: {
                'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
                'float': '0 10px 40px rgba(0, 0, 0, 0.08)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            animation: {
                blob: "blob 7s infinite",
                gradient: "gradient 8s linear infinite",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                }
            },
            backgroundSize: {
                '300%': '300%',
            }
        },
    },
    plugins: [],
}
