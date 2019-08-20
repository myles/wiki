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
  ],
  '/comp-sci/': [
    ["/", "Home"],
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
  ],
  '/databases/': [
    ["/", "Home"],
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
  ],
  '/devops/': [
    ["/", "Home"],
    {
      title: 'DevOps',
      icon: 'far fa-user-hard-hat',
      collapsable: false,
      children: [
        '/devops/',
        '/devops/ansible',
      ]
    },
  ],
  '/graphic-design/': [
    ["/", "Home"],
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
  ],
  '/lists/': [
    ["/", "Home"],
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
  ],
  '/pentesting/': [
    ["/", "Home"],
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
  ],
  '/programming/': [
    ["/", "Home"],
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
  ],
  '/setup/': [
    ["/", "Home"],
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
  ],
  '/text-editors/': [
    ["/", "Home"],
    {
      title: 'Text Editors',
      icon: 'fas file-alt',
      collapsable: true,
      children: [
        '/text-editors/',
        '/text-editors/vscode',
      ]
    },
  ],
  '/': [
    {
			collapsable: false,
			children: [
        '/',
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
        '/GLOSSARY',
        '/LICENSE',
        '/meta',
        '/status'
      ],
		},
  ],
}
