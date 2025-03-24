/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import remToPx from "tailwindcss-rem-to-px";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
	theme: {},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/container-queries"),
		remToPx({ baseFontSize: 16 }),
	],
} satisfies Config;

export default config;
