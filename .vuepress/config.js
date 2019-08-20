module.exports = {
  title: "Myles' Wiki",
  plugins: ['@vuepress/pwa'],
  themeConfig: {
    repo: 'myles/wiki',
    editLinks: true,
    lastUpdated: 'Last Updated',
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: 'New content is available.',
          buttonText: 'Refresh',
        },
      },
      'vuepress-plugin-feed': {
        title: "Myles' Wiki",
        description: 'A place Myles Braithwaite can try and share everything he researches and knows about a variety of topics.',
        canonical_base: 'https://wiki.mylesb.ca',
      },
      '@vuepress/search': {
        searchMaxSuggestions: 10,
      },
    },
    sidebar: require('./sidebar')
  },
};
