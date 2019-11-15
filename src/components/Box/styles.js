import styled from 'styled-components'
import media from 'styled-media-query'
import { rgba } from 'polished'

import { color } from '../../styles/variables'

export const Container = styled.div`
  width: 500px;
  padding: 40px 20px;
  background-color: ${color.white};
  border-radius: 6px;
  border: 1px solid ${rgba(color.blue, 0.04)};
  box-shadow: 0 20px 20px -20px ${rgba(color.blue, 0.2)};

  ${media.lessThan('medium')`
    padding-left: 10px;
    padding-right: 10px;
  `}
`
