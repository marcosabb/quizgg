import React, { memo, useState } from 'react'
import t from 'prop-types'
import { v4 } from 'uuid'

import { capitalize } from '../../utils'

import { Container, Label, Wrapper, Value, Arrow, Options, Option } from './styles'

const Dropdown = memo(({
  type,
  label,
  value,
  placeholder,
  options,
  handleSelect
}) => {
  const [isOpen, setIsOpen] = useState(true)

  function handleToggle () {
    setIsOpen(!isOpen)
  }

  function onSelect (type, value) {
    handleSelect(type, value)
    handleToggle()
  }

  return (
    <Container>
      <Label>{label}</Label>
      <Wrapper onClick={handleToggle}>
        <Value>{(value && capitalize(value)) || placeholder}</Value>
        <Arrow isOpen={isOpen} />
      </Wrapper>

      {isOpen && (
        <Options>
          {options.map(({ value, label }) => (
            <Option
              key={v4()}
              onClick={() => onSelect(type, value)}
            >
              {label}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  )
})

Dropdown.defaultProps = {
  placeholder: 'Selecione uma opção'
}

Dropdown.propTypes = {
  type: t.string.isRequired,
  label: t.string.isRequired,
  value: t.string,
  placeholder: t.string,
  options: t.arrayOf(t.shape({
    label: t.string,
    value: t.string
  })).isRequired,
  handleSelect: t.func.isRequired
}

export default Dropdown
