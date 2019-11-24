module.exports = {
  siteMetadata: {
    title: 'QuizGG',
    description: 'Se divirta respondendo e compartilhando com seus amigos quizzes e testes sobre seus jogos favoritos',
    author: '@quizggapp',
    siteUrl: 'https://quizgg.com',
    year: new Date().getFullYear()
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-152890348-1',
        head: false,
        exclude: ['/*/r/*']
      }
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/images`
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
          'Roboto:400,700'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'QuizGG',
        short_name: 'quizgg',
        start_url: '/',
        background_color: '#1e1eff',
        theme_color: '#1e1eff',
        display: 'minimal-ui',
        icon: 'static/assets/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/*/r/*']
      }
    }
  ]
}
