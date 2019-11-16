/* eslint-disable */
import React, { memo, useState, useEffect } from 'react'
import t from 'prop-types'
import Img from 'gatsby-image'
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'
import { debounce } from 'lodash'

import Box from '../Box'
import Loading from '../Loading'

import {
  LoaderWrapper,
  Loader,
  Wrapper,
  Statement,
  Title,
  Image,
  Share,
  Call,
  Social
} from './styles'

const Result = memo(({
  result: {
    statement: { final },
    title,
    image,
    r
  },
  url
}) => {
  const [loading, setLoading] = useState(true)

  const finishLoading = debounce(() => {
    setLoading(false)
  }, 1500)

  useEffect(() => {
    finishLoading()
  }, [])

  return (
    <Box>
      {loading
        ? (
          <LoaderWrapper>
            <Loading />
            <Loader>Calculando resultado</Loader>
          </LoaderWrapper>
        ) : (
          <>
            <Wrapper>
              <Statement>{final}</Statement>
              <Title>{title}</Title>
            </Wrapper>

            {image && (
              <Image>
                <Img fluid={image.src.childImageSharp.fluid} />
              </Image>
            )}

            <Share>
              <Call>Compartilhe seu resultado</Call>

              <Social>
                <TwitterShareButton
                  url={`${url}r/${r}`}
                  className='button'
                >
                  <TwitterIcon
                    size={38}
                    round
                  />
                </TwitterShareButton>

                <FacebookShareButton
                  url={`${url}r/${r}`}
                  className='button'
                >
                  <FacebookIcon
                    size={38}
                    round
                  />
                </FacebookShareButton>

                <WhatsappShareButton
                  url={`${url}r/${r}`}
                  className='button'
                >
                  <WhatsappIcon
                    size={38}
                    round
                  />
                </WhatsappShareButton>
              </Social>
            </Share>
          </>
        )}
    </Box>
  )
})

Result.propTypes = {
  result: t.shape({
    statement: t.shape({
      final: t.string
    }),
    title: t.oneOfType([t.string, t.number]),
    image: t.object,
    r: t.string
  }).isRequired,
  url: t.string.isRequired
}

export default Result
