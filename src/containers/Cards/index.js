/* eslint-disable */
import React, { useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import v4 from 'uuid/v4'
import { useStaticQuery, graphql } from 'gatsby'
import { debounce } from 'lodash'

import Card from '../../components/Card'
import Loading from '../../components/Loading'

import { Container, Featured, Content, LoadingWrapper } from './styles'

const Cards = () => {
  const {
    allDocumentsYaml: {
      edges: documents
    }
  } = useStaticQuery(
    graphql`
      query {
        allDocumentsYaml {
          edges {
            node {
              title
              game
              featured
              fields {
                slug
              }
              image {
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
    `
  )

  
  const limit = useRef(6)
  const featured = documents.filter(q => q.node.featured)
  const normal = documents.filter(q => !q.node.featured)

  const [items, setItems] = useState(normal.slice(0, limit.current))
  const [hasMore, setHasMore] = useState(true)

  const push = debounce(() => {
    setItems(normal.slice(0, (limit.current += 6)))
  }, 1000000)

  function fetchData () {
    if (items.length >= normal.length) {
      setHasMore(false)
      return;
    }

    push()
  }

  function render (items) {
    return items.map((
      {
        node: {
          title,
          game,
          featured,
          fields: { slug },
          image: {
            src: {
              childImageSharp: {
                fluid
              }
            }
          }
        }
      }
    ) => (
      <Card
        key={v4()}
        image={fluid}
        title={title}
        slug={slug}
        game={game}
        featured={featured}
      />
    ))
  }

  return (
    <Container>
      <Featured>
        {render(featured)}
      </Featured>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        }
      >
        <Content>
          {render(items)}
        </Content>
      </InfiniteScroll>
    </Container>
  )
}

export default Cards
