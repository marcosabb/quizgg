import React, { memo, useState } from 'react'
import t from 'prop-types'

import { Container, Tooltip } from './styles'

const Button = memo(({ handleClick, tooltip, fluid, children, ...props }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  function handleShowTooltip () {
    !showTooltip && setShowTooltip(true)
  }

  function handleHideTooltip () {
    showTooltip && setShowTooltip(false)
  }

  function onClick () {
    handleClick()
    handleShowTooltip()
  }

  function onMouseLeave () {
    handleHideTooltip()
  }

  return (
    <Container
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      tooltip={tooltip}
      fluid={fluid}
      {...props}
    >
      {tooltip && showTooltip && <Tooltip>{tooltip}</Tooltip>}
      {children}
    </Container>
  )
})

Button.defaultProps = {
  handleClick: () => {},
  tooltip: null,
  fluid: false
}

Button.propTypes = {
  handleClick: t.func,
  tooltip: t.string,
  fluid: t.bool,
  children: t.node.isRequired
}

export default Button
