// eslint-disable-next-line no-undef
module.exports = {
	plugins: {
		"postcss-import": {},
		tailwindcss: {},
		"postcss-nested": {},
		autoprefixer: {},
		"postcss-preset-mantine": {
			autoRem: false,
		},
		"postcss-rem-to-pixel": {},
		"postcss-simple-vars": {
			variables: {
				"mantine-breakpoint-xs": "36em",
				"mantine-breakpoint-sm": "48em",
				"mantine-breakpoint-md": "62em",
				"mantine-breakpoint-lg": "75em",
				"mantine-breakpoint-xl": "88em",
			},
		},
	},
};

