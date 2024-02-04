/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'main': 'var(--main-bg-color)',
			},
			colors: {
				accent: 'var(--accent-color)', // Using the CSS variable directly
			},
			textColor: {
				'main': 'var(--main-text-color)',
			},
		},
	},
	plugins: [],
}