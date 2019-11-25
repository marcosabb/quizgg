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

  return (
    <Seo
      title={replace(share, text)}
      description={replace(share, text)}
      image={image}
      meta={[
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
