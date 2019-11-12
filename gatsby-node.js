const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'DocumentsYaml') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'data'
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.replace('/documents/', '')}`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const response = await graphql(
    `
      {
        allDocumentsYaml(limit: 1000) {
          edges {
            node {
              type
              result {
                statement
                items {
                  title
                  id
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (response.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  response.data.allDocumentsYaml.edges.forEach((
    { node: { type, result, fields: { slug } } }
  ) => {
    createPage({
      path: slug,
      component: path.resolve('src/templates/document.js'),
      context: {
        slug
      }
    })

    if (type === 'quiz') {
      Array.from(Array(10).keys()).forEach(r => {
        createPage({
          path: `${slug}r/${r + 1}`,
          component: path.resolve('src/templates/result.js'),
          context: {
            slug,
            type: 'quiz',
            r: Number(r)
          }
        })
      })
    }

    if (type === 'test') {
      result.items.forEach(({ id }) => {
        createPage({
          path: `${slug}r/${id}`,
          component: path.resolve('src/templates/result.js'),
          context: {
            slug,
            type: 'test',
            r: Number(id)
          }
        })
      })
    }
  })
}
