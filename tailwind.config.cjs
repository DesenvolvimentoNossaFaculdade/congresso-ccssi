/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-dark': '#5F4235',
                'accent-yellow': '#FCCD9A',
                'brand-orange': '#C05621',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)', 'Arial', 'sans-serif'],
                arsenica: ['var(--font-arsenica)'],
                raleway: ['var(--font-raleway)'],
            },
        },
    },
    plugins: [],
};

export default config;