export default {
	title: 'Raindrop.io Help',
	tagline: 'All-in-one bookmark manager',
	url: 'https://help.raindrop.io',
	baseUrl: '/',
	favicon: '/favicon.ico',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	organizationName: 'raindropio',
	projectName: 'help',

	titleDelimiter: '―',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	themeConfig: {
		colorMode: {
			respectPrefersColorScheme: true
		},
		navbar: {
			title: 'Raindrop.io',
			hideOnScroll: false,
			logo: {
				src: 'brand/icon_raw.svg',
				href: 'https://app.raindrop.io',
				target: '_self',
				width: 32,
				height: 32
			},
			items: [
				{
					to: '/',
					label: 'Docs'
				},
				{
					href: 'https://blog.raindrop.io',
					label: 'Blog',
					target: '_self'
				},
				{
					label: 'Community',
					items: [
						{
							label: 'X',
							href: 'https://x.com/raindrop_io',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/raindropio',
						}
					],
				},
				{
					type: 'html',
					value: '<a class="contact clean-btn" href="/contact-us">Contact us</a>',
				}
			],
		},
		//sidebarCollapsible: false,
		footer: {},
		algolia: {
			appId: '2CO1DLSOWC',
			apiKey: process.env.ALGOLIA_API_KEY,
			indexName: 'raindrop',	  
			contextualSearch: false,
			searchParameters: {}
		}
	},

	presets: [
		[
			'classic',
			{
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./docs/_sidebar.js'),
					//editUrl: 'https://github.com/raindropio/help/edit/master/website/',
				},
				theme: {
					customCss: require.resolve('./docs/_custom.css'),
				}
			}
		],
	],
	
	clientModules: [
		require.resolve('./docs/_details_anchor.js')
	],

	scripts: [
		{
			src: '/pb/js/script.js',
			defer: true,
			'data-domain': 'help.raindrop.io',
			'data-api': '/pb/api/event'
		}
	]
}