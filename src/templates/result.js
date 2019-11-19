import React, { memo, useEffect } from 'react'
import t from 'prop-types'
import { navigate } from 'gatsby'

import { replace } from '../utils'

import Seo from '../components/Seo'

const Result = memo(({
  pageContext: { result: { share, text, image }, slug }
}) => {
  useEffect(() => {
    navigate(slug)
  }, [])

  const og = {
    title: replace(share, text),
    image
  }

  return (
    <Seo
      meta={[
        { property: 'og:title', content: og.title },
        { property: 'og:image', content: og.image },
        { name: 'robots', content: 'noindex' }
      ]}
    />
  )
})

Result.propTypes = {
  pageContext: t.shape({
    result: t.shape({
      share: t.string,
      text: t.string,
      image: t.string
    }).isRequired,
    slug: t.string
  }).isRequired
}

export default Result
