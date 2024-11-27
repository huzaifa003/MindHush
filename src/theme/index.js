import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
	theme: {
		tokens: {
			colors: {
				primary: "#008080",
				secondary: {
					30: { value: "#424242" },
					40: { value: "#2F2F2F" },
					50: { value: "#282A2F" },
				},
				tertiary: "#A064DA",
				brand: {},
			},
		},
	},
});

export const system = createSystem(defaultConfig, customConfig);