// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { defineConfig } from 'astro/config';
import astroLlmsTxt from '@4hse/astro-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://rolandk.dev',
	build: {
		inlineStylesheets: 'always',
	},
	integrations: [
		mdx(),
		sitemap(),
		astroLlmsTxt({
			title: 'Roland Kákonyi - Personal Site',
			description: 'AI-friendly index of rolandk.dev content.',
			docSet: [
				{
					title: 'Full site content',
					description: 'Combined Markdown content from site pages.',
					url: '/llms-full.txt',
					include: ['/', '**'],
				},
				{
					title: 'Structure-only index',
					description: 'Headings and list structure only.',
					url: '/llms-small.txt',
					include: ['/', '**'],
					onlyStructure: true,
				},
			],
		}),
	],
	markdown: {
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
		],
	},
});
