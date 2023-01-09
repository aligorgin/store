module.exports = {
	pluginSearchDirs: ['.'],
	useTabs: true,
	printWidth: 100,
	singleQuote: true,
	trailingComma: 'none',
	bracketSameLine: false,
	semi: true,
	quoteProps: 'consistent',
	importOrder: ['^[./]', '^@sd/interface/(.*)$', '^@sd/client/(.*)$', '^@sd/ui/(.*)$'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	arrowParens: 'always',
	plugins: ['@trivago/prettier-plugin-sort-imports']
};
