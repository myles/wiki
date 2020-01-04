const sidebar = require('./sidebar');

module.exports = {
  title: "Myles' Wiki",
  themeConfig: {
    repo: 'myles/wiki',
    editLinks: true,
    lastUpdated: 'Last Updated',
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'documents',
    },
    plugins: {
      'vuepress-plugin-feed': {
        title: "Myles' Wiki",
        description: 'A place Myles Braithwaite can try and share everything he researches and knows about a variety of topics.',
        canonical_base: 'https://wiki.mylesb.ca',
      },
      '@vuepress/search': {
        searchMaxSuggestions: 10,
      },
    },
    sidebar,
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-footnote'))
        .use(require('markdown-it-emoji'))
    }
  },
};
