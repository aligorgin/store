/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			'sm': '640',
			'md': '887px',
			'lg': '1024',
			'xl': '1280'
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
