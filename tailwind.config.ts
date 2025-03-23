
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				gold: {
					50: '#FFF9EB',
					100: '#FFF3D6',
					200: '#FFE7AE',
					300: '#FFDA85',
					400: '#FFCE5D',
					500: '#FFC234',
					600: '#EBA109',
					700: '#B37C07',
					800: '#7C5605',
					900: '#442F03',
				},
				navy: {
					50: '#E6EDF5',
					100: '#CCDAEB',
					200: '#99B5D7',
					300: '#668FC2',
					400: '#3C72B4',
					500: '#2D5689',
					600: '#254871',
					700: '#1D3959',
					800: '#142740',
					900: '#0B1420',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'counter': {
					'0%': { opacity: '0', transform: 'translateY(5px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale': {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'counter': 'counter 0.5s ease-out forwards',
				'scale': 'scale 0.3s ease-out',
				'shimmer': 'shimmer 2s infinite linear'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif']
			},
			boxShadow: {
				'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
				'elevation': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
				'card': '0 10px 30px rgba(0, 0, 0, 0.04)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)'
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
