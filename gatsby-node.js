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

  const {
    data: {
      allDocumentsYaml: { edges }
    }
  } = response

  edges.forEach((
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
        const url = `${slug}r/${r + 1}`

        createPage({
          path: url,
          component: path.resolve('src/templates/result.js'),
          context: {
            slug,
            type: 'quiz',
            r: String(r + 1)
          }
        })
      })
    }

    if (type === 'test') {
      result.items.forEach(({ id, title }) => {
        const url = `${slug}r/${id}`

        createPage({
          path: url,
          component: path.resolve('src/templates/result.js'),
          context: {
            slug,
            type: 'test',
            r: String(title)
          }
        })
      })
    }
  })
}
