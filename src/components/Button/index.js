import React, { memo, useState } from 'react'
import t from 'prop-types'

import { Container, Tooltip } from './styles'

const Button = memo(({
  handleClick,
  tooltip,
  disabled,
  fluid,
  children,
  ...props
}) => {
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
      disabled={disabled}
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
  disabled: false,
  fluid: false
}

Button.propTypes = {
  handleClick: t.func,
  tooltip: t.string,
  disabled: t.bool,
  fluid: t.bool,
  children: t.node.isRequired
}

export default Button
