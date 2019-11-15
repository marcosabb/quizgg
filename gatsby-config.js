module.exports = {
  siteMetadata: {
    title: 'Quizi',
    year: new Date().getFullYear(),
    description: 'Lorem ipsum dolor sit amet.',
    author: '@marcosabb',
    siteUrl: 'https://quizi.netlify.com'
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto:300,400,700'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '/*/r/*' }]
      }
    },
    'gatsby-plugin-offline'
  ]
}
