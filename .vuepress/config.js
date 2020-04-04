const sidebar = require('./sidebar');

module.exports = {
  title: "Myles' Wiki",
  themeConfig: {
    repo: 'myles/wiki',
    editLinks: true,
    lastUpdated: 'Last Updated',
    plugins: {
      '@vuepress/search': {
        searchMaxSuggestions: 10,
      },
    },
    sidebar,
  },
  plugins: {
    'vuepress-plugin-feed': {
      enable: true,
      title: "Myles' Wiki",
      description: 'A place Myles Braithwaite can try and share everything he researches and knows about a variety of topics.',
      canonical_base: 'https://wiki.mylesb.ca',
    },
    'vuepress-plugin-sitemap': {
      hostname: 'https://wiki.mylesb.ca',
    },
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-footnote'))
        .use(require('markdown-it-emoji'))
    }
  },
};
