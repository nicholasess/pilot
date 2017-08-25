import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import stylesheet from './style.css'

function Button ({ onClick, style, children }) {
  const className = classNames(
    stylesheet.button,
    stylesheet.green,
    stylesheet[`style-${style}`]
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
  children: PropTypes.string.isRequired,
}

Button.defaultProps = {
  onClick: null,
  style: 'flat',
}

export default Button

