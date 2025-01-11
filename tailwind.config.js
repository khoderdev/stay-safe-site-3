/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				// Super Extra Small Devices (Super Extra Mobile Phones)
				xs: '320px', // => @media (min-width: 320px)

				// Extra Small Devices (Mobile Phones)
				xsm: '480px', // => @media (min-width: 480px)

				// Small Devices (Large Phones, Small Tablets)
				sm: '640px', // => @media (min-width: 640px)

				// Medium Devices (Tablets, Small Laptops)
				md: '768px', // => @media (min-width: 768px)

				// Large Devices (Laptops, Desktops)
				lg: '1024px', // => @media (min-width: 1024px)

				// Extra Large Devices (Large Laptops, Desktops)
				xl: '1280px', // => @media (min-width: 1280px)

				// 2X Large Devices (Large Desktops, Monitors)
				'2xl': '1440px', // => @media (min-width: 1440px)

				// 3X Large Devices (Ultra-Wide Monitors, 2K Displays)
				'3xl': '1920px', // => @media (min-width: 1920px)

				// 4X Large Devices (4K Displays)
				'4xl': '2560px', // => @media (min-width: 2560px)

				// 5X Large Devices (Ultra-Wide 4K and Beyond)
				'5xl': '3840px', // => @media (min-width: 3840px)
			},
			colors: {
				white: {
					whites: '#fff',
					bg: '#f7f7f7',
					bg2: '#f5f5f7',
					bg3: '#efefef',
					fg: '#fff',
				},
				pink: '#e55e72',
				// blue: '#3c79b4',
				sky: '#B0E1EC',
				// white: 'F0F0FE',
				black: '#0e100f',
				dark: '#212121',
				gray: {
					DEFAULT: '#86868b',
					100: '#94928d',
					200: '#afafaf',
					300: '#42424570',
				},
				zinc: '#101010',
			},
			animationDelay: {
				none: '0ms',
				0: '0ms',
				75: '75ms',
				100: '100ms',
				150: '150ms',
				200: '200ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
			},
			animationDuration: {
				75: '75ms',
				100: '100ms',
				150: '150ms',
				200: '200ms',
				300: '300ms',
				500: '500ms',
				700: '700ms',
				1000: '1000ms',
			},
			animationTimingFunction: {
				DEFAULT: 'ease',
				linear: 'linear',
				in: 'cubic-bezier(0.4, 0, 1, 1)',
				out: 'cubic-bezier(0, 0, 0.2, 1)',
				'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			animationIteration: {
				infinite: 'infinite',
				once: '1',
				twice: '2',
				thrice: '3',
				1: '1',
				2: '2',
				3: '3',
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				fadeOut: 'fadeOut 0.5s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeOut: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(20px)' },
				},
			},
		},
	},
	variants: {},
	plugins: [],
};
