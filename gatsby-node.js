const path = require('path')
const slug = require('slug')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allQuizzesJson(limit: 1000) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const quizzTemplate = path.resolve('src/templates/quizz.js')

  result.data.allQuizzesJson.edges.forEach(edge => {
    createPage({
      path: `/${slug(edge.node.title, { lower: true })}/`,
      component: quizzTemplate,
      context: {
        id: edge.node.id
      }
    })
  })
}
