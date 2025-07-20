import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                black: {
                    900: '#000000',
                    800: '#1a1a1a',
                    700: '#333333',
                    600: '#4d4d4d',
                    500: '#666666',
                    400: '#989898ff',
                },
                violet: {
                    1000: '#240e46ff',
                    950: '#181121ff',
                    900: '#4c1d95',
                    800: '#5b21b6',
                    700: '#6d28d9',
                    600: '#7c3aed',
                    500: '#8b5cf6',
                    400: '#a78bfa',
                    300: '#c4b5fd',
                    200: '#ddd6fe',
                    100: '#ede9fe',
                    50: '#f5f3ff',
                },
            },
        },
    },

        plugins: [forms],
    };
