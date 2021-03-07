module.exports = {
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

	themeConfig: {
		navbar: {
			title: 'Raindrop.io',
			hideOnScroll: true,
			logo: {
				src: 'brand/icon_raw.svg',
				href: 'https://app.raindrop.io',
				target: '_self'
			},
			items: [
				{
					to: '/',
					label: 'Docs'
				},
				{
					href: 'https://blog.raindrop.io',
					label: 'Blog'
				},
				{
					label: 'Community',
					items: [
						{
							label: 'Twitter',
							href: 'https://twitter.com/raindrop_io',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/raindropio',
						},
						{
							label: 'Suggest new feature',
							href: 'https://better.raindrop.io',
						},
					],
				},
				{
					href: 'https://raindrop.io/about',
					label: 'About'
				}
			],
		},
		//sidebarCollapsible: false,
		footer: {},
		algolia: {
			apiKey: 'YOUR_API_KEY',
			indexName: 'YOUR_INDEX_NAME',
	  
			// Optional: see doc section bellow
			contextualSearch: true,
	  
			// Optional: Algolia search parameters
			searchParameters: {},
	  
			//... other Algolia params
		  }
	},

	presets: [
		[
			'@docusaurus/preset-classic',
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
		require.resolve('./docs/_helpscout.js'),
		require.resolve('./docs/_details_anchor.js')
	]
};
