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

import Loading from '../Loading'
import Button from '../Button'

import {
  LoaderWrapper,
  Loader,
  Wrapper,
  Statement,
  Title,
  Image,
  Share,
  Call,
  Social,
  Url,
  Input
} from './styles'

if (typeof document !== 'undefined') {
  const Clipboard = require('clipboard')

  new Clipboard('.clipboard-button')
}

const Result = memo(({
  result: {
    statement: { final },
    title,
    image,
    id,
    quote,
    tags
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

  const link = `${url}r/${id}`

  return (
    <>
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

              <Url>
                <Input type='text' value={link} readOnly />
                <Button
                  className='clipboard-button'
                  tooltip='Copiado!'
                  data-clipboard-text={link}
                >
                  Copiar
                </Button>
              </Url>

              <Social>
                <TwitterShareButton
                  title={quote}
                  url={link}
                  hashtags={tags}
                  className='social-button'
                >
                  <TwitterIcon
                    size={38}
                    round
                  />
                </TwitterShareButton>

                <FacebookShareButton
                  url={link}
                  className='social-button'
                >
                  <FacebookIcon
                    size={38}
                    round
                  />
                </FacebookShareButton>

                <WhatsappShareButton
                  url={link}
                  className='social-button'
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
    </>
  )
})

Result.propTypes = {
  result: t.shape({
    statement: t.shape({
      final: t.string
    }),
    title: t.oneOfType([t.string, t.number]),
    image: t.object,
    id: t.string,
    quote: t.string,
    tags: t.arrayOf(t.string)
  }).isRequired,
  url: t.string.isRequired
}

export default Result
