const sidebar = require('./sidebar');
const vercelPlugin = require('./plugins/vercel');

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
      canonical_base: 'https://myles.wiki',
    },
    'vuepress-plugin-sitemap': {
      enable: true,
      hostname: 'https://myles.wiki',
    },
    'vercel-plugin': vercelPlugin(),
  },
  markdown: {
    lineNumbers: true,
    config: md => {
      md.use(require('markdown-it-footnote'))
        .use(require('markdown-it-emoji'))
    }
  },
};
