import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Intro',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Secure code review', link: '/guides/intro/' },
					],
				},
				{
					label: 'Early Steps',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
