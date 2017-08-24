import React from 'react'

export default ({
  onCancel,
  onConfirm
}) => (
  <div className='DatePicker_confirmation__'>
    <div
      className='DatePicker_confirmation'>
      <button
        onClick={onCancel}
        className='DatePicker_confirmation__button cancel'
      >Cancelar</button>
      <button
        onClick={onConfirm}
        className='DatePicker_confirmation__button confirm'
      >Ok</button>
    </div>
  </div>
)
