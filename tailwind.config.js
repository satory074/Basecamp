// tailwind.config.js
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1DA1F2",
                    dark: "#1A91DA",
                },
                secondary: "#14171A",
                accent: {
                    DEFAULT: "#FFAD1F",
                    dark: "#E0991A",
                },
            },
            fontFamily: {
                sans: ["Noto Sans JP", "sans-serif"],
            },
        },
    },
    plugins: [],
};
