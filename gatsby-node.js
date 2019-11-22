const path = require('path')
const slugify = require('slug')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'data'
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/${slugify(slug)}/`
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const response = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                type
                image {
                  name
                  src {
                    publicURL
                  }
                }
                result {
                  statement {
                    share
                  }
                  items {
                    title
                    id
                    image {
                      name
                      src {
                        publicURL
                      }
                    }
                  }
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
      allMarkdownRemark: { edges: documents }
    }
  } = response

  documents.forEach(({
    node: {
      frontmatter: {
        type,
        result: { statement: { share }, items },
        image: quizCover
      },
      fields: { slug }
    }
  }) => {
    createPage({
      path: slug,
      component: path.resolve('src/templates/document.js'),
      context: {
        slug
      }
    })

    items.forEach(({ id, title, image: resultCover }) => {
      const url = `${slug}r/${id}`

      createPage({
        path: url,
        component: path.resolve('src/templates/result.js'),
        context: {
          slug,
          type,
          result: {
            share,
            text: title,
            image: resultCover && type === 'teste'
              ? resultCover.src.publicURL
              : quizCover.src.publicURL
          }
        }
      })
    })
  })
}
