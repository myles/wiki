const fg = require('fast-glob');

function getPages(path) {
  const mdFiles = fg.sync([`${path}/**/*.md`]);

  mdFiles.forEach((element, index) => {
    if (element.endsWith('README.md')) {
      mdFiles[index] = `/${element.replace('README.md', '')}`;
    } else if (element.endsWith('.md')) {
      mdFiles[index] = `/${element.replace('.md', '')}`;
    }
  });

  return mdFiles;
}

module.exports = {
  '/android/': [
    ['/', '⬆️ Home'],
    {
      title: 'Android',
      icon: 'fab fa-android',
      collapsable: false,
      children: getPages('android'),
    },
    ['/comp-sci/', '➡️ Computer Science'],
  ],
  '/comp-sci/': [
    ['/', '⬆️ Home'],
    ['/android/', '⬅️ Android'],
    {
      title: 'Computer Science',
      icon: 'fas fa-robot',
      collapsable: false,
      children: getPages('comp-sci'),
    },
    ['/databases/', '➡️ Databases'],
    // ['/cooking/', '➡️ Cooking'],
  ],
  // '/cooking/': [
  //   ['/', '⬆️ Home'],
  //   ['/comp-sci/', '⬅️ Computer Science'],
  //   {
  //     title: 'Cooking',
  //     icon: 'fas fa-cauldron',
  //     collapsable: false,
  //     children: getPages('cooking'),
  //   },
  //   {
  //     title: 'Recipes',
  //     icon: 'TODO',
  //     collapsable: false,
  //     children:[
  //       'cooking/recipes/desserts/',
  //     ]
  //   },
  //   {
  //     title: 'Dessert Recipes',
  //     icon: 'TODO',
  //     collapsable: false,
  //     children: getPages('cooking/recipes/desserts'),
  //   }
  //   ['/databases/', '➡️ Databases'],
  // ],
  '/databases/': [
    ['/', '⬆️ Home'],
    // ['/cooking/', '⬅️ Cooking'],
    ['/comp-sci/', '⬅️ Computer Science'],
    {
      title: 'Databases',
      icon: 'fas fa-database',
      collapsable: false,
      children: getPages('databases'),
    },
    ['/devops/', '➡️ DevOps'],
  ],
  '/devops/': [
    ['/', '⬆️ Home'],
    ['/databases/', '⬅️ Databases'],
    {
      title: 'DevOps',
      icon: 'far fa-user-hard-hat',
      collapsable: false,
      children: getPages('devops'),
    },
    ['/graphic-design/', '➡️ Graphic Design'],
  ],
  '/graphic-design/': [
    ['/', '⬆️ Home'],
    ['/devops/', '⬅️ DevOps'],
    {
      title: 'Graphic Design',
      icon: 'fas fa-pencil-ruler',
      collapsable: false,
      children: getPages('graphic-design'),
    },
    ['/lists/', '➡️ Lists'],
  ],
  '/lists/': [
    ['/', '⬆️ Home'],
    ['/graphic-design/', '⬅️ Graphic Design'],
    {
      title: 'Lists',
      icon: 'fas fa-stream',
      collapsable: false,
      children: getPages('lists'),
    },
    ['/pentesting/', '➡️ Pentesting'],
  ],
  '/pentesting/': [
    ['/', '⬆️ Home'],
    ['/lists/', '⬅️ Lists'],
    {
      title: 'Pentesting',
      icon: 'fas fa-pen',
      collapsable: false,
      children: getPages('pentesting'),
    },
    ['/programming/', '➡️ Programming'],
  ],
  '/programming/': [
    ['/', '⬆️ Home'],
    ['/pentesting/', '⬅️ Pentesting'],
    {
      title: 'Programming',
      icon: 'fas fa-laptop-code',
      collapsable: false,
      children: [
        '/programming/',
        '/programming/data-science/',
        '/programming/js/',
        '/programming/php/',
        '/programming/python/',
        '/programming/static-website-generators/',
        '/programming/css',
        '/programming/github',
        '/programming/go',
        '/programming/graphql',
        '/programming/methodology',
        '/programming/r',
      ],
    },
    {
      title: 'Data Science',
      icon: 'fas fa-table',
      collapsable: false,
      children: [
        '/programming/data-science/',
        '/programming/data-science/organizing-projects',
      ],
    },
    {
      title: 'JavaScript',
      icon: 'fab fa-js-square',
      collapsable: false,
      children: [
        '/programming/js/',
        '/programming/js/nodejs',
        '/programming/js/vuejs',
      ],
    },
    {
      title: 'PHP',
      icon: 'fab fa-php',
      collapsable: false,
      children: [
        '/programming/php/',
        '/programming/php/laravel',
        '/programming/php/wordpress',
      ],
    },
    {
      title: 'Python',
      icon: 'fab fa-python',
      collapsable: false,
      children: [
        '/programming/python/',
        '/programming/python/anaconda',
        '/programming/python/celery',
        '/programming/python/django',
        '/programming/python/jupyter',
        '/programming/python/pandas',
        '/programming/python/regexes',
        '/programming/python/wagtail',
        '/programming/python/web-scraping',
      ],
    },
    {
      title: 'Static Website Generators',
      icon: 'fas fa-browser',
      collapsable: false,
      children: [
        '/programming/static-website-generators/',
        '/programming/static-website-generators/vuepress',
      ],
    },
    ['/setup/', '➡️ Setup'],
  ],
  '/setup/': [
    ['/', '⬆️ Home'],
    ['/programming/', '⬅️ Programming'],
    {
      title: 'Setup',
      icon: 'fas fa-digging',
      collapsable: true,
      children: getPages('setup'),
    },
    ['/text-editors/', '➡️ Text Editors'],
  ],
  '/text-editors/': [
    ['/', '⬆️ Home'],
    ['/setup/', '⬅️ Setup'],
    {
      title: 'Text Editors',
      icon: 'fas file-alt',
      collapsable: true,
      children: getPages('text-editors'),
    },
    ['/windows/', '➡️ Windows'],
  ],
  '/windows/': [
    ['/', '⬆️ Home'],
    ['/text-editors/', '⬅️ Text Editors'],
    {
      title: 'Windows',
      icon: 'fab fa-windows',
      collapsable: true,
      children: [
        '/windows/',
      ],
    },
    ['/GLOSSARY', '➡️ Glossary'],
  ],
  '/': [
    ['/', 'Home'],
    '/android/',
    '/comp-sci/',
    '/cooking/',
    '/dat/',
    '/databases/',
    '/devops/',
    '/graphic-design/',
    '/ios/',
    '/linux/',
    '/lists/',
    '/pentesting/',
    '/productivity/',
    '/programming/',
    '/raspberry-pi/',
    '/selfhosted/',
    '/setup/',
    '/startup/',
    '/text-editors/',
    '/unix/',
    '/windows/',
    {
      collapsable: false,
      children: [
        '/GLOSSARY',
        '/LICENSE',
        '/meta',
        '/status',
      ],
    },
  ],
};
