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
        "/setup/windows",
        ["/android/", "⬇️ Android"],
      ],
      "/android/": [
        ["/", "📚 Home"],
        ["/setup/", "⬆️ Setup"],
        "/android/",
        "/android/fire-os",
        ["/android/", "⬇️ Android"],
      ],
      "/comp-sci/": [
        ["/", "📚 Home"],
        ["/android/", "⬆️ Android"],
        "/comp-sci/",
        "/comp-sci/ai",
        "/comp-sci/ml",
        ["/dat/", "⬇️ Dat"],
      ],
      "dat": [
        ["/", "📚 Home"],
        ["/comp-sci/", "⬆️ Comp-Sci"],
        "/dat/",
        ["/databases/", "⬇️ Databases"],
      ],
      "/databases/": [
        ["/", "📚 Home"],
        ["/dat/", "⬆️ Dat"],
        "/databases/",
        "/databases/mysql",
        "/databases/postgres",
        ["/devops/", "⬇️ DevOps"],
      ],
      "/devops/": [
        ["/", "📚 Home"],
        ["/databases/", "⬆️ Databases"],
        "/devops/",
        "/devops/ansible",
        ["/graphic-design/", "⬇️ Graphic Design"],
      ],
      "/graphic-design/": [
        ["/", "📚 Home"],
        ["/devops/", "⬆️ DevOps"],
        "/graphic-design/",
        "/graphic-design/adobe-illustrator",
        ["/pentesting/", "⬇️ Pentesting"],
      ],
      "/pentesting/": [
        ["/", "📚 Home"],
        ["/graphic-design/", "⬆️ Graphic Design"],
        "/pentesting/",
        "/pentesting/metasploit",
        "/pentesting/nmap",
        ["/programming/", "⬇️ Programming"],
      ],
      "/programming/": [
        ["/", "📚 Home"],
        ["/pentesting/", "⬆️ Pentesting"],
        "/programming/",
        "/programming/css",
        "/programming/data-science",
        "/programming/go",
        "/programming/js/",
        "/programming/methodology",
        "/programming/php/",
        "/programming/python/",
        "/programming/static-websites"
        ["/programming/php/", "⬇️ PHP"],
      ],
      "/programming/php/": [
        ["/", "📚 Home"],
        ["/programming/", "⬆️ Programming"],
        "/programming/php/",
        "/programming/php/laravel",
        "/programming/php/wordpress",
        ["/programming/js/", "⬇️ JavaScript"],
      ],
      "/programming/js/": [
        ["/", "📚 Home"],
        ["/programming/php/", "⬆️ PHP"],
        "/programming/js/",
        "/programming/js/vuejs",
        ["/programming/python/", "⬇️ Python"],
      ],
      "/programming/python/": [
        ["/", "📚 Home"],
        ["/programming/js/", "⬆️ JavaScript"],
        "/programming/python/",
        "/programming/python/anaconda",
        "/programming/python/celery",
        "/programming/python/django",
        "/programming/python/jupyter",
        "/programming/python/pandas",
        "/programming/python/regexes",
        "/programming/python/web-scraping",
        ["/raspberry-pi/", "⬇️ Raspberry Pi"],
      ],
      "/raspberry-pi/": [
        ["/", "📚 Home"],
        ["/programming/python/", "⬆️ Python"],
        "/raspberry-pi/",
        ["/text-editors/", "⬇️ Text Editors"],
      ],
      "/text-editors/": [
        ["/", "📚 Home"],
        ["/raspberry-pi/", "⬆️ Raspberry Pi"],
        "/text-editors/",
        "/text-editors/vscode",
        ["/lists/", "⬇️ Lists"],
      ],
      "/lists/": [
        ["/", "📚 Home"],
        ["/text-editors/", "⬆️ Text Editors"],
        "/lists/",
        "/lists/books",
        "/lists/films",
        "/lists/tv-shows",
        "/lists/video-games"
        ["/unix/", "⬇️ Unix"],
      ],
      "/": [
        ["/", "📚 Home"],
        "/status",
        "/setup/",
        "/android/",
        "/comp-sci/",
        "/dat/",
        "/databases/",
        "/devops/",
        "/graphic-design/",
        "/ios/",
        "/pentesting/",
        "/productivity/",
        "/programming/",
        "/raspberry-pi/",
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
