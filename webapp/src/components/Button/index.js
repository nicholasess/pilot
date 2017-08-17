import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

function Button ({ type, color, children }) {
  const className = classNames(
    style.button,
    style[color],
    style[type]
  )

  return (
    <button className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button

