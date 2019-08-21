module.exports = {
  '/android/': [
    ["/", "Home"],
    {
      title: 'Android',
      icon: 'fab fa-android',
      collapsable: false,
      children: [
        '/android/',
        '/android/fire-os',
      ]
    },
    "/comp-sci/",
  ],
  '/comp-sci/': [
    "/android/",
    {
      title: 'Computer Science',
      icon: 'fas fa-robot',
      collapsable: false,
      children: [
        '/comp-sci/',
        '/comp-sci/ai',
        '/comp-sci/ml',
      ]
    },
    "/databases/",
  ],
  '/databases/': [
    '/comp-sci/',
    {
      title: 'Databases',
      icon: 'fas fa-database',
      collapsable: false,
      children: [
        '/databases/',
        '/databases/mysql',
        '/databases/postgres',
      ]
    },
    '/devops/',
  ],
  '/devops/': [
    '/databases/',
    {
      title: 'DevOps',
      icon: 'far fa-user-hard-hat',
      collapsable: false,
      children: [
        '/devops/',
        '/devops/ansible',
      ]
    },
    '/graphic-design/',
  ],
  '/graphic-design/': [
    '/devops/',
    {
      title: 'Graphic Design',
      icon: 'fas fa-pencil-ruler',
      collapsable: false,
      children: [
        '/graphic-design/',
        '/graphic-design/adobe-illustrator',
        '/graphic-design/design-systems',
        '/graphic-design/pen-plotters',
        '/graphic-design/svg',
      ]
    },
    '/lists/',
  ],
  '/lists/': [
    '/graphic-design/',
    {
      title: 'Lists',
      icon: 'fas fa-stream',
      collapsable: false,
      children: [
        '/lists/',
        '/lists/books',
        '/lists/films',
        '/lists/tv-shows',
        '/lists/video-games',
      ]
    },
    '/pentesting/',
  ],
  '/pentesting/': [
    '/lists/',
    {
      title: 'Pentesting',
      icon: 'fas fa-pen',
      collapsable: false,
      children: [
        '/pentesting/',
        '/pentesting/metasploit',
        '/pentesting/nmap',
      ]
    },
    '/programming/',
  ],
  '/programming/': [
    '/pentesting/',
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
        '/programming/methodology',
        '/programming/r',
      ]
    },
    {
      title: 'Data Science',
      icon: 'fas fa-table',
      collapsable: false,
      children: [
        '/programming/data-science/',
        '/programming/data-science/organizing-projects',
      ]
    },
    {
      title: 'JavaScript',
      icon: 'fab fa-js-square',
      collapsable: false,
      children: [
        '/programming/js/',
        '/programming/js/vuejs',
      ]
    },
    {
      title: 'PHP',
      icon: 'fab fa-php',
      collapsable: false,
      children: [
        '/programming/php/',
        '/programming/php/laravel',
        '/programming/php/wordpress',
      ]
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
        '/programming/python/web-scraping',
      ]
    },
    {
      title: 'Static Website Generators',
      icon: 'fas fa-browser',
      collapsable: false,
      children: [
        '/programming/static-website-generators/',
        '/programming/static-website-generators/vuepress',
      ]
    },
    '/setup/',
  ],
  '/setup/': [
    '/programming/',
    {
      title: 'Setup',
      icon: 'fas fa-digging',
      collapsable: true,
      children: [
        '/setup/',
        '/setup/bag',
        '/setup/android',
        '/setup/ios',
        '/setup/macos',
        '/setup/windows',
      ]
    },
    '/text-editors/',
  ],
  '/text-editors/': [
    '/setup/',
    {
      title: 'Text Editors',
      icon: 'fas file-alt',
      collapsable: true,
      children: [
        '/text-editors/',
        '/text-editors/vscode',
      ]
    },
    '/GLOSSARY',
  ],
  '/': [
    ['/', 'Home'],
    '/android/',
    '/comp-sci/',
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
    {
			collapsable: false,
			children: [
        '/GLOSSARY',
        '/LICENSE',
        '/meta',
        '/status'
      ],
		},
  ],
}
