module.exports = {
    // theme: require.resolve('@vuepress/theme-blog'),
    theme: '@vuepress/theme-blog',
    // theme: require.resolve('theme-kb'),
    // theme: 'vuepress-theme-kb',
    themeConfig: {
        // Please keep looking down to see the available options
        nav: [
            {
              text: 'Home',
              link: '/',
            },
            {
              text: 'Tags',
              link: '/tag/',
            }
          ],
        footer: {
            contact: [
                {
                type: 'github',
                link: 'https://github.com/markgstacey',
                },
            ],
            },
        },
    plugins: [
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        // Unique ID of current classification
                        id: 'post',
                        // Target directory
                        dirname: '_posts',
                        // Path of the 'entry page' (or 'list page')
                        path: '/',
                        itemLayout: 'Post',
                        itemPermalink: '/:slug',
                        pagination: {
                            lengthPerPage: 20,
                        },
                    }
                ],
                frontmatters: [
                    {
                      // Unique ID of current classification
                      id: 'tag',
                      // Decide that the frontmatter keys will be grouped under this classification
                      keys: ['tag'],
                      // Path of the `entry page` (or `list page`)
                      path: '/tag/',
                      // Layout of the `entry page`
                      layout: 'Tag',
                    },
                  ],
          
            }
        ]
    ]
}