/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{css,scss,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				padding: '15px',
				center: true
			},
			colors: {
				textPrimary: '#2C2D2E',
				textSecondary: '#919399',
				primary: '#465EFD',
				primaryHover: '#384bca',
				primaryPressed: '#2a3898',
				bgPrimary: '#FBFBFB',
				bgTertiary: '#F0F0F0',
				bgSecondary: '#EDEFFF',
				borderColor: 'rgba(0, 16, 61, 0.12))',
				error: '#ED0A34',
				success: '#0DC268',
				link: '#005BD1',
				overlay: 'rgba(0, 16, 61, 0.48)',
				white: '#FFFFFF',
				black: '#000000'
			},
			boxShadow: {
				dropdown: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
				header: '0px 0px 2px 0px rgba(14, 31, 53, 0.12)',
				shadowShape:
					' 0px 8px 24px -4px rgba(24, 39, 75, 0.02), 0px 6px 12px -6px rgba(24, 39, 75, 0.03)'
			}
		}
	},
	plugins: []
}
