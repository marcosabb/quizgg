const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'QuizzesJson') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'data'
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.replace('/quizzes/', '')}`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allQuizzesJson(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
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

  result.data.allQuizzesJson.edges.forEach(({ node }) => {
    console.log('SLUG', node.fields.slug)

    createPage({
      path: node.fields.slug,
      component: path.resolve('src/templates/Quizz/index.js'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
