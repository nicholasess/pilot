import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

function Button ({ type, children }) {
  const className = classNames(
    style.button,
    style.green,
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
  type: PropTypes.string.isRequired,
}

export default Button

