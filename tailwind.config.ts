
import type { Config } from 'tailwindcss';

export default {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                headline: ['Space Grotesk', 'sans-serif'],
                code: ['Source Code Pro', 'monospace'],
                handwritten: ['Kalam', 'cursive'],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
                'color-pulse': {
                    '0%, 100%': { '--noise-bg-color': 'hsl(var(--primary) / 0.1)' },
                    '50%': { '--noise-bg-color': 'hsl(var(--secondary) / 0.2)' },
                },
                'flash': {
                    '0%, 100%': { color: 'hsl(var(--primary))' },
                    '50%': { color: 'hsl(var(--primary-foreground))' },
                },
                'fast-glitch': {
                    '0%': { transform: 'translate(0)' },
                    '25%': { transform: 'translate(4px, -4px) skew(-5deg)' },
                    '50%': { transform: 'translate(-4px, 4px) skew(5deg)' },
                    '75%': { transform: 'translate(2px, -2px) skew(-2deg)' },
                    '100%': { transform: 'translate(0)' },
                },
                'text-distort': {
                    '0%': { transform: 'skewX(0deg)', letterSpacing: 'normal' },
                    '50%': { transform: 'skewX(-15deg)', letterSpacing: '0.2em' },
                    '100%': { transform: 'skewX(0deg)', letterSpacing: 'normal' },
                },
                'text-distort-slower': {
                    '0%': { transform: 'skewX(0deg)' },
                    '50%': { transform: 'skewX(5deg)' },
                    '100%': { transform: 'skewX(0deg)' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'color-pulse': 'color-pulse 2s infinite',
                'flash': 'flash 0.5s infinite',
                'fast-glitch': 'fast-glitch 0.3s infinite',
                'text-distort': 'text-distort 0.4s infinite alternate',
                'text-distort-slower': 'text-distort-slower 0.6s infinite alternate',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;
