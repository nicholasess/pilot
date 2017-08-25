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
  children: PropTypes.string.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  style: 'flat',
  onClick: null,
}

export default Button

