import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import stylesheet from './style.css'

function Button ({ onClick, style, surround, color, size, children }) {
  const className = classNames(
    stylesheet.button,
    stylesheet[`style-${style}`],
    stylesheet[`color-${surround}-${color}`],
    stylesheet[`size-${size}`]
  )

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.string,
  surround: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: null,
  style: 'flat',
  surround: 'light',
  color: 'green-primary',
  size: null,
}

export default Button

