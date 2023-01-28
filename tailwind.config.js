/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'sm': '640px',
			'md': '887px',
			'lg': '1024px',
			'xl': '1280px'
		},
		extend: {
			fontFamily: {
				sans: ['var(--my-font)']
			},
			// brand changing color
			animation: {
				'hue-animation': 'huer 2s linear infinite'
			},
			keyframes: {
				huer: {
					'0%': { filter: 'hue-rotate(-1turn)' },
					'100%': { filter: 'hue-rotate(1turn)' }
				}
			}
		}
	},
	plugins: []
};
