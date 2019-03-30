module.exports = {
  title: "Myles' Wiki",
  plugins: ["@vuepress/pwa"],
  themeConfig: {
    repo: "myles/wiki",
    editLinks: true,
    lastUpdated: 'Last Updated',
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    },
    sidebar: {
      "/setup/": [
        ["/", "📚 Home"],
        "/setup/",
        "/setup/bag",
        "/setup/android",
        "/setup/ios",
        "/setup/macos",
        "/setup/windows"
      ],
      "/android/": [
        ["/", "📚 Home"],
        "/android/",
        "/android/fire-os"
      ],
      "/comp-sci/": [
        ["/", "📚 Home"],
        "/comp-sci/",
        "/comp-sci/ai"
      ],
      "/databases/": [
        ["/", "📚 Home"],
        "/databases/",
        "/databases/mysql",
        "/databases/postgres"
      ],
      "/devops/": [
        ["/", "📚 Home"],
        "/devops/",
        "/devops/ansible"
      ],
      "/graphic-design/": [
        ["/", "📚 Home"],
        "/graphic-design/",
        "/graphic-design/adobe-illustrator"
      ],
      "/pentesting/": [
        ["/", "📚 Home"],
        "/pentesting/",
        "/pentesting/metasploit",
        "/pentesting/nmap"
      ],
      "/programming/php/": [
        ["/", "📚 Home"],
        "/programming/",
        "/programming/php/",
        "/programming/php/laravel",
        "/programming/php/wordpress"
      ],
      "/programming/python/": [
        ["/", "📚 Home"],
        "/programming/",
        "/programming/python/",
        "/programming/python/celery",
        "/programming/python/django",
        "/programming/python/jupyter",
        "/programming/python/pandas",
        "/programming/python/regexes",
        "/programming/python/web-scraping",
      ],
      "/programming/": [
        ["/", "📚 Home"],
        "/programming/",
        "/programming/css",
        "/programming/data-science",
        "/programming/go",
        "/programming/javascript",
        "/programming/methodology",
        "/programming/php/",
        "/programming/python/",
        "/programming/static-websites"
      ],
      "/text-editors/": [
        ["/", "📚 Home"],
        "/text-editors/",
        "/text-editors/vscode",
      ],
      "/lists/": [
        ["/", "📚 Home"],
        "/lists/",
        "/lists/books",
        "/lists/films",
        "/lists/tv-shows",
        "/lists/video-games"
      ],
      "/": [
        ["/", "📚 Home"],
        "/status",
        "/setup/",
        "/android/",
        "/comp-sci/",
        "/databases/",
        "/devops/",
        "/graphic-design/",
        "/ios/",
        "/pentesting/",
        "/productivity/",
        "/programming/",
        "/selfhosted/",
        "/text-editors/",
        "/lists/",
        "/unix/",
        "/meta",
        "/LICENSE"
      ]
    }
  }
}
