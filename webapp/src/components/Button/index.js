import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import stylesheet from './style.css'

function Button ({ onClick, style, surround, color, children }) {
  const className = classNames(
    stylesheet.button,
    stylesheet[`style-${style}`],
    stylesheet[`color-${surround}-${color}`]
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
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: null,
  style: 'flat',
  surround: 'light',
  color: 'green-primary',
}

export default Button

