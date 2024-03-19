const defaultConfig = require("tailwindcss/defaultConfig")
const formsPlugin = require("@tailwindcss/forms")
const { nextui } = require("@nextui-org/react")

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: [
		"index.html",
		"src/**/*.tsx",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			sans: ["Inter", ...defaultConfig.theme.fontFamily.sans]
		},
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin, nextui()]
}
module.exports = config
