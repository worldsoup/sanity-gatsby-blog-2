export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7ce1d0babdd90137ead270',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-st2hurij',
                  apiId: '77b3b8f7-6fc0-4c06-9fbb-bf1ec831153a'
                },
                {
                  buildHookId: '5f7ce1d0637c110b5b373a96',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-dnnpmu3d',
                  apiId: 'cb81a4be-6620-42fa-912d-477381bf772b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/worldsoup/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-dnnpmu3d.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
