import React, { memo, useState, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { v4 } from 'uuid'
import { useStaticQuery, graphql } from 'gatsby'
import { debounce } from 'lodash'

import Card from '../../components/Card'
// import Dropdown from '../../components/Dropdown'
import Loading from '../../components/Loading'

import { Container, Featured, Content, LoadingWrapper } from './styles'

const Cards = memo(() => {
  const {
    allMarkdownRemark: {
      edges: documents
    }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                type
                game
                featured
                image {
                  name
                  src {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  // const [filter, setFilter] = useState({
  //   type: null,
  //   value: null
  // })

  const featured = documents.filter(document => document.node.frontmatter.featured)
  const normal = documents
    .filter(document => !document.node.frontmatter.featured)
    .filter(document => document.node.frontmatter.type !== 'personalidade')

  const limit = useRef(6)
  const [items, setItems] = useState(normal.slice(0, limit.current))
  const [hasMore, setHasMore] = useState(true)

  const push = debounce(() => {
    setItems(normal.slice(0, (limit.current += 6)))
  }, 1000)

  function fetchData () {
    if (items.length >= normal.length) {
      setHasMore(false)
      return
    }

    push()
  }

  // useEffect(() => {
  //   const { type, value } = filter
  //   if (type && value) {
  //     setItems(items.filter(item => item.node.frontmatter[type].toLowerCase() === value.toLowerCase()))
  //   }
  // }, [filter])

  // function handleFilter (type, value) {
  //   setFilter({
  //     ...filter,
  //     type,
  //     value
  //   })
  // }

  function render (items) {
    return items.map((
      {
        node: {
          frontmatter: {
            title,
            type,
            game,
            featured,
            image: {
              src: {
                childImageSharp: {
                  fluid
                }
              }
            }
          },
          fields: { slug }
        }
      }
    ) => (
      <Card
        key={v4()}
        image={fluid}
        title={title}
        slug={slug}
        type={type}
        game={game}
        featured={featured}
      />
    ))
  }

  return (
    <Container>
      {/* <Filter>
        <Dropdown
          type='type'
          label='Tipo'
          value={(filter.type === 'type' && filter.value)}
          options={[
            { label: 'Quiz', value: 'quiz' },
            { label: 'Teste', value: 'teste' },
            { label: 'Personalidade', value: 'personalidade' }
          ]}
          handleSelect={handleFilter}
        />

        <Dropdown
          type='game'
          label='Jogo'
          value={(filter.type === 'game' && filter.value)}
          options={[
            { label: 'Fortnite', value: 'fortnite' },
            { label: 'Counter Strike', value: 'counter strike' },
            { label: 'League of Legends', value: 'league of legends' }
          ]}
          handleSelect={handleFilter}
        />
      </Filter> */}

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
})

export default Cards
