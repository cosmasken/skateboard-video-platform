/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },

            colors: {
                "skateboard-grey": {
                    50: "#1F1D2B",
                    100: "#808191",
                    200: "#242730",
                    300: "#1F1D2B",
                },
                amber: colors.amber,
                emerald: colors.emerald
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}