import React from 'react'
import t from 'prop-types'
import qs from 'query-string'

import Seo from '../components/Seo'

const Result = ({ location: { search } }) => {
  const { title } = qs.parse(search)

  return (
    <div>
      <Seo meta={[
        { property: 'og:url', content: 'https://mystifying-engelbart-a15508.netlify.com/result/?title=Eu acertei 10 perguntas, você consegue me passar?' },
        { property: 'og:title', content: title }
      ]}
      />
    </div>
  )
}

Result.propTypes = {
  location: t.shape({
    search: t.string
  })
}

export default Result
