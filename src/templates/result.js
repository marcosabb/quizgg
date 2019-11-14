import React, { useEffect } from 'react'
import t from 'prop-types'
import { graphql, navigate } from 'gatsby'

import { replace } from '../utils'

import Seo from '../components/Seo'

const Result = ({
  data: { documentsYaml: { image: { src: { publicURL } }, result: { statement: { share } } } },
  pageContext: { r, slug }
}) => {
  useEffect(() => {
    navigate(slug)
  }, [])

  const og = {
    title: replace(share, r),
    image: publicURL
  }

  return (
    <Seo
      meta={[
        { property: 'og:title', content: og.title },
        { property: 'og:image', content: og.image }
      ]}
    />
  )
}

Result.propTypes = {
  data: t.shape({
    documentsYaml: t.shape({
      image: t.shape({
        src: t.shape({
          publicURL: t.string
        })
      }),
      result: t.shape({
        statement: t.shape({
          share: t.string
        })
      })
    })
  }).isRequired,
  pageContext: t.shape({
    type: t.string,
    r: t.oneOfType([t.string, t.number]),
    slug: t.string
  }).isRequired
}

export default Result

export const resultQuery = graphql`
  query($slug: String!) {
    documentsYaml(fields: { slug: { eq: $slug } }) {
      title
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
          id
          title
        }
      }
    }
  }
`
