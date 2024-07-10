const colors = require('tailwindcss/colors.js');

// Set the Preflight flag based on the build target.
const includePreflight = 'editor' === process.env._TW_TARGET ? false : true;

module.exports = {
	presets: [
		// Manage Tailwind Typography's configuration in a separate file.
		require('./tailwind-typography.config.js'),
	],
	content: [
		// Ensure changes to PHP files and `theme.json` trigger a rebuild.
		'./theme/**/*.php',
	],
	theme: {
		// Extend the default Tailwind theme.
		extend: {
			fontFamily: {
				'lato': ['lato', 'sans-serif']
			},
			fontSize: {
				h1: ['3.562rem', { lineHeight: '120%', fontWeight: '300' }],
				h2: ['3rem', { lineHeight: '120%', fontWeight: '300' }],
				h3: ['2.5rem', { lineHeight: '120%', fontWeight: '300' }],
				h4: ['2.062rem', { lineHeight: '120%', fontWeight: '300' }],
				h5: ['1.750rem', { lineHeight: '120%', fontWeight: '300' }],
				xl: ['1.438rem', '120%'],
				'xl-b': ['1.438rem', { lineHeight: '120%', fontWeight: '700' }],
				m: ['1.188rem', '120%'],
				'm-b': ['1.188rem', { lineHeight: '120%', fontWeight: '700' }],
				body: ['1rem', '120%'],
				'body-b': ['1rem', { lineHeight: '120%', fontWeight: '700' }],
				s: ['0.812rem', '120%'],
				's-b': ['0.812rem', { lineHeight: '120%', fontWeight: '700' }],
				xs: ['0.688rem', '120%'],
				'xs-b': ['0.688rem', { lineHeight: '120%', fontWeight: '700' }],
			},
			colors: {
				lightGreen: {
					900: '#82C100',
					800: '#8FC71A',
					700: '#9BCE34',
					600: '#A8D44E',
					500: '#B5DA68',
					400: '#C2E182',
					300: '#CEE79C',
					200: '#DBEDB6',
					100: '#E8F4D0',
					light: '#F5FAEA'
				},
				darkGreen: {
					900: '#75AD00',
					800: '#679A00',
					700: '#5A8600',
					600: '#4D7200',
					500: '#405F00',
					400: '#324B00',
					300: '#253700',
					200: '#182400',
					100: '#0B1000'
				},
				lightBrown: {
					1000: '#593911',
				}
			}
		},
	},
	corePlugins: {
		// Disable Preflight base styles in builds targeting the editor.
		preflight: includePreflight,
	},
	plugins: [
		// Add Tailwind Typography (via _tw fork).
		require('@_tw/typography'),

		// Extract colors and widths from `theme.json`.
		require('@_tw/themejson'),

		// Uncomment below to add additional first-party Tailwind plugins.
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/aspect-ratio'),
		// require('@tailwindcss/container-queries'),
	],
};
