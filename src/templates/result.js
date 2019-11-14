import React, { useEffect } from 'react'
import t from 'prop-types'
import { graphql, navigate } from 'gatsby'

import { replace } from '../utils'

import Seo from '../components/Seo'

const Result = ({
  data: { documentsYaml: { image: { src: { publicURL } }, result: { share, items } } },
  pageContext: { type, r, slug }
}) => {
  useEffect(() => {
    navigate(slug)
  }, [])

  const og = {
    title: () => {
      if (type === 'quiz') {
        return replace(share, r)
      }

      if (type === 'test') {
        const item = items.find(item => item.id === r)
        return replace(share, item.title)
      }
    },
    image: publicURL
  }

  return (
    <Seo
      meta={[
        { property: 'og:title', content: og.title() },
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
        share: t.string,
        items: t.array
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
        items {
          id
          title
        }
      }
    }
  }
`
