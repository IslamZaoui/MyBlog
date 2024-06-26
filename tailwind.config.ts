import { join } from 'path';
import { MyTheme } from './Mytheme';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts,md}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts,md}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				custom: [MyTheme]
			}
		})
	]
} satisfies Config;
