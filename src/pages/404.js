import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Error from '../components/Error'

const NotFound = () => (
  <Layout>
    <Seo title='Página não encontrada' />

    <Error />
  </Layout>
)

export default NotFound
