import React from 'react'

import IconAngleBottom from 'react-icons/lib/fa/angle-down'

export default ({
  date,
  period,
  onPeriodChange
}) => {
  const year = date.year()
  const day = `${date.format('DD')} de ${date.format('MMMM')}`
  const weekDay = date.format('dddd')
  const phrases = {
    start: 'Início:',
    end: 'Fim:'
  }

  return (
    <div  className='Datepicker__ShowDate'>
      <div className='Datepicker__ShowDate_year'>
        { period && (
          <div
            className={'Datepicker__ShowDate_period ' + period}
            onClick={() => onPeriodChange(period + 'Date')}
          >
            {phrases[period]}
          </div>
        )}
        <div
          className='Datepicker__ShowDate_year_block'>{year}
          <IconAngleBottom />
        </div>
      </div>
      <div>
        <div className='Datepicker__ShowDate_day'>{day}</div>
        <div className='Datepicker__ShowDate_week'>{weekDay}</div>
      </div>
    </div>
  )
}
