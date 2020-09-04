module.exports = {
  siteMetadata: {
    title: `Postings on technology, business and life.`,
    siteUrl: `https://www.rnwolf.net`,
    description: `Always more to explore.`,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
    ],
    footerMenu: [
      {
        name: 'Pivacy',
        path: '/page/privacy'
      },
      {
        name: 'Newsletter',
        path: '/newsletter'
      },
      {
        name: 'Sitemap.xml',
        path: '/sitemap.xml'
      },
      {
        name: 'RSS.xml',
        path: '/rss.xml'
      },
    ],
    search: true,
    author: {
      name: `Rüdiger Wolf`,
      description: `I'm <strong>Rüdiger</strong>. If you like what you see feel free to share.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/rnwolf`,
        linkedin: `https://www.linkedin.com/in/rudigerwolf/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/rnwolf`,
        twitch: ``
      }
    }
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/rnwolf-logo.png`
        }
      }
    }
  ]
};
