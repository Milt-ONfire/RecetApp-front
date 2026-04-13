/** @type {import('tailwindcss').Config} */
export default {

    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                card: "0px 5px 12px 0px rgba(0, 0, 0, 0.1)",
            },
            backgroundImage: {
                fondoAuth: "url('/img/fondoAuth.png')",
                vegetarian: "url('/assets/vegetarian.svg')",
                vegan: "url('/assets/vegan.svg')",
                glutenfree: "url('/assets/gluten-free.svg')",
                paleo: "url('/assets/paleo.svg')",
                cetogenica: "url('/assets/cetogenica.svg')",
                mediterranean: "url('/assets/mediterranean.svg')",
                raw: "url('/assets/raw.svg')",
            },
            borderRadius: {
                roundTarget: '5rem',
                card_radius: '1.25rem'
            },
            colors: {
                colorblancoprincipal: '#FCFCFC',
                coloracento: '#2A7767',
                colorprimario: '#990047',
                colorsecundario: '#FFF8F4',
                colortextosubtitulos: '#4D4D4D',
                colorbeig: '#FFF5EE',
                colorremolacha: '#66002F',
                colorencabezados: '#2C2C2C',
                colorbgtarjetas: '#FFF5EE',

                primary: '#990047',
                primary50: '#AA2A66',
                primary70: '#66002F',
                secondary:'#FFF5EE',
                secondary50: '#FFF8F4',
                secondary70: '#ECE7E5',
                primary_text_color: '#637381',
                accent: '#005C49',
                accent50: '#2A7767',
                accent70: '#003D31',
                head_text: '#2C2C2C',
                body_text: '#333333',
                subtitle_text: '#4D4D4D',
                background: '#FFFCF9',
                card_background: '#FFFCFA',

                foreground: 'hsl(var(--foreground))',
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                //primary: {
                //    DEFAULT: 'hsl(var(--primary))',
                //    foreground: 'hsl(var(--primary-foreground))'
                //},
                //secondary: {
                //    DEFAULT: 'hsl(var(--secondary))',
                //    foreground: 'hsl(var(--secondary-foreground))'
                //},
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                //accent: {
                //    DEFAULT: 'hsl(var(--accent))',
                //    foreground: 'hsl(var(--accent-foreground))'
                //},
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            fontSize: {
                '6xl': '48px',
                '5xl': '40px',
                '4xl': '32px',
                '3xl': '30px',
                '2xl': '28px',
                'xl': '24px',
                'lg': '22px',
                'md': '20px',
                'sm': '14px',
            },
            screens: {
              'xsm': '360px',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}

