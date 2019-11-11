import React from 'react'
import t from 'prop-types'
import qs from 'query-string'

import Seo from '../components/Seo'

const Result = ({ location: { search } }) => {
  const { title } = qs.parse(search)

  return (
    <div>
      <Seo title={title} />
    </div>
  )
}

Result.propTypes = {
  location: t.shape({
    search: t.string
  })
}

export default Result
