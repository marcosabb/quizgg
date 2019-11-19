import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

import Cards from '../containers/Cards'

const Index = () => (
  <Layout>
    <Seo title='Página inicial' />

    <Cards />
  </Layout>
)

export default Index
