import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
    // shadcn-svelte
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
    // custom
    screens: {
      // refers to https://blog.logrocket.com/css-breakpoints-responsive-design/
      // use standard breakpoints for "breakpoint-onwards"
      xs: { min: '577px' }, // a.k.a small-phones
      sm: { min: '640px' }, // a.k.a phones
      md: { min: '768px' }, // a.k.a tablets
      lg: { min: '1024px' }, // a.k.a laptops
      xl: { min: '1280px' }, // a.k.a desktops
      '2xl': { min: '1536px' }, // a.k.a big-desktops

      // also can use aliases for: small-phones, phones, tablets, laptops, desktops, big-desktops
      // use device breakpoints for specific resolution
      'small-phones': { min: '577px', max: '639px' }, // a.k.a xs
      phones: { min: '640px', max: '767px' }, // a.k.a sm
      tablets: { min: '768px', max: '1023px' }, // a.k.a md
      laptops: { min: '1024px', max: '1279px' }, // a.k.a lg
      desktops: { min: '1280px', max: '1535px' }, // a.k.a xl
      'big-desktops': { min: '1536px' }, // a.k.a 2xl
    },
		extend: {
      // custom
      fontFamily: {
        nunito: ['var(--font-nunito)'],
      },
			colors: {
        // shadcn-svelte
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},

        // custom
        tertiary: {
          50: 'rgb(var(--color-tertiary-50))',
          100: 'rgb(var(--color-tertiary-100))',
          200: 'rgb(var(--color-tertiary-200))',
          300: 'rgb(var(--color-tertiary-300))',
          400: 'rgb(var(--color-tertiary-400))',
          500: 'rgb(var(--color-tertiary-500))',
          600: 'rgb(var(--color-tertiary-600))',
          700: 'rgb(var(--color-tertiary-700))',
          800: 'rgb(var(--color-tertiary-800))',
          900: 'rgb(var(--color-tertiary-900))',
        },
        quaternary: {
          50: 'rgb(var(--color-quaternary-50))',
          100: 'rgb(var(--color-quaternary-100))',
          200: 'rgb(var(--color-quaternary-200))',
          300: 'rgb(var(--color-quaternary-300))',
          400: 'rgb(var(--color-quaternary-400))',
          500: 'rgb(var(--color-quaternary-500))',
          600: 'rgb(var(--color-quaternary-600))',
          700: 'rgb(var(--color-quaternary-700))',
          800: 'rgb(var(--color-quaternary-800))',
          900: 'rgb(var(--color-quaternary-900))',
        },
        info: {
          50: 'rgb(var(--color-info-50))',
          100: 'rgb(var(--color-info-100))',
          200: 'rgb(var(--color-info-200))',
          300: 'rgb(var(--color-info-300))',
          400: 'rgb(var(--color-info-400))',
          500: 'rgb(var(--color-info-500))',
          600: 'rgb(var(--color-info-600))',
          700: 'rgb(var(--color-info-700))',
          800: 'rgb(var(--color-info-800))',
          900: 'rgb(var(--color-info-900))',
        },
        success: {
          50: 'rgb(var(--color-success-50))',
          100: 'rgb(var(--color-success-100))',
          200: 'rgb(var(--color-success-200))',
          300: 'rgb(var(--color-success-300))',
          400: 'rgb(var(--color-success-400))',
          500: 'rgb(var(--color-success-500))',
          600: 'rgb(var(--color-success-600))',
          700: 'rgb(var(--color-success-700))',
          800: 'rgb(var(--color-success-800))',
          900: 'rgb(var(--color-success-900))',
        },
        warning: {
          50: 'rgb(var(--color-warning-50))',
          100: 'rgb(var(--color-warning-100))',
          200: 'rgb(var(--color-warning-200))',
          300: 'rgb(var(--color-warning-300))',
          400: 'rgb(var(--color-warning-400))',
          500: 'rgb(var(--color-warning-500))',
          600: 'rgb(var(--color-warning-600))',
          700: 'rgb(var(--color-warning-700))',
          800: 'rgb(var(--color-warning-800))',
          900: 'rgb(var(--color-warning-900))',
        },
        danger: {
          50: 'rgb(var(--color-danger-50))',
          100: 'rgb(var(--color-danger-100))',
          200: 'rgb(var(--color-danger-200))',
          300: 'rgb(var(--color-danger-300))',
          400: 'rgb(var(--color-danger-400))',
          500: 'rgb(var(--color-danger-500))',
          600: 'rgb(var(--color-danger-600))',
          700: 'rgb(var(--color-danger-700))',
          800: 'rgb(var(--color-danger-800))',
          900: 'rgb(var(--color-danger-900))',
        },
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
		}
	},
};

export default config;
