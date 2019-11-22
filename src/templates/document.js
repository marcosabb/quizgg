import React, { memo } from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import { shuffle } from '../utils'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Questions from '../containers/Questions'

const Document = memo(({
  data: {
    site: { siteMetadata: { siteUrl } },
    markdownRemark: {
      frontmatter: { type, title, image, questions, result }
    }
  },
  path
}) => {
  const q = shuffle(questions).map(item => {
    return {
      ...item,
      options: shuffle(item.options)
    }
  })

  return (
    <Layout>
      <Seo
        title={title}
      />

      <Questions
        type={type}
        image={image}
        questions={q}
        result={result}
        url={`${siteUrl}${path}`}
      />
    </Layout>
  )
})

Document.propTypes = {
  data: t.shape({
    site: t.shape({
      siteMetadata: t.shape({
        siteUrl: t.string
      })
    }).isRequired,
    markdownRemark: t.shape({
      frontmatter: t.shape({
        title: t.string,
        type: t.string,
        image: t.object,
        questions: t.array,
        result: t.object
      })
    })
  }).isRequired,
  path: t.string.isRequired
}

export default Document

export const documentQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        type
        title
        image {
          name
          src {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        questions {
          id
          title
          image {
            name
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          options {
            key
            text
            correct
          }
        }
        result {
          statement {
            final
            share
            tags
          }
          items {
            id
            title
            quote
            image {
              name
              src {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
