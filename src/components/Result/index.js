import React from 'react'
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

import {
  Container,
  Statement,
  Title,
  Image,
  Share,
  Call,
  Social
} from './styles'

const Result = ({
  result: {
    statement,
    title,
    image,
    r
  },
  url
}) => (
  <Container>
    <Statement>{statement}</Statement>
    <Title>{title}</Title>

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
  </Container>
)

Result.propTypes = {
  result: t.shape({
    statement: t.string,
    title: t.oneOfType([t.string, t.number]),
    image: t.object,
    r: t.string
  }).isRequired,
  url: t.string.isRequired
}

export default Result
