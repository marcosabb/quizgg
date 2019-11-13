import React from 'react'
import t from 'prop-types'
import { graphql } from 'gatsby'

import { shuffle } from '../utils'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Questions from '../containers/Questions'

const Document = ({
  data: {
    site: { siteMetadata: { url } },
    documentsYaml: { type, title, image, questions, result }
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
        url={`${url}${path}`}
      />
    </Layout>
  )
}

Document.propTypes = {
  data: t.shape({
    site: t.shape({
      siteMetadata: t.shape({
        url: t.string
      })
    }).isRequired,
    documentsYaml: t.shape({
      title: t.string,
      type: t.string,
      image: t.object,
      questions: t.array,
      result: t.object
    })
  }).isRequired,
  path: t.string.isRequired
}

export default Document

export const documentQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
      }
    }
    
    documentsYaml(fields: { slug: { eq: $slug } }) {
      type
      title
      image {
        name
        src {
          childImageSharp {
            fluid(maxWidth: 250) {
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
              fluid(maxWidth: 250) {
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
        statement
        items {
          id
          title
          image {
            name
            src {
              childImageSharp {
                fluid(maxWidth: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
