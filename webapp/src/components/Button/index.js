import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './style.css'

function Button ({ onClick, type, children }) {
  const className = classNames(
    style.button,
    style.green,
    style[type]
  )

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'flat',
  onClick: null,
}

export default Button

