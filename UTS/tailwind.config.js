/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            spacing: {
                'spasi': '1 px',
            },
            colors: {
                primary: "#f5f5f5",
                second: "#3088D9",
            },
            fontFamily: {
                body: ['Montserrat']
            },
        },
    },
    plugins: [],
}