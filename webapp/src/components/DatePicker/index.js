import React from 'react'
import {
  DateRangePicker,
  SingleDatePicker
} from 'react-dates'
import moment from 'moment'
import {
  merge,
  omit,
} from 'ramda'
import classNames from 'classnames'
import IconAngleLeft from 'react-icons/lib/fa/angle-left'
import IconAngleRight from 'react-icons/lib/fa/angle-right'
import tz from 'moment-timezone'
import StateComponent from './StateComponent'

import './style.scss'

moment.updateLocale('pt-BR', {
  weekdaysMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  months: [
    'Janeiro',
    'Feveiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],
})

moment.locale('pt-BR')

class DatePicker extends StateComponent {
  constructor (props) {
    super()

    const {
      startDate
    } = props

    this.state = merge(props, {
      startDate: startDate ? moment(startDate) : moment(),
      endDate: moment('12-14-2059'),
      previewsStartDate: null,
      previewsEndDate: null,
      date: moment(),
      previewsDate: moment(),
      focusedInput: 'startDate',
    })

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onRangeFocusChange = this.onRangeFocusChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onClickCancelDates = this.onClickCancelDates.bind(this)
    this.onClickConfirmDates = this.onClickConfirmDates.bind(this)
  }

  render () {
    const defaultProps = {
      hideKeyboardShortcutsPanel: true,
      navPrev: <IconAngleLeft />,
      navNext: <IconAngleRight />,
      keepOpenOnDateSelect: true,
    }

    const {
      startDate,
      endDate,
      focusedInput,
      date,
      focused,
    } = this.state

    const {
      range,
    } = this.props

    const filteredProps = omit(
      ['range', 'onDateChange', 'onDatesChange'],
      this.props
    )

    const className = classNames({
      'DatePicker': true,
      'DatePicker_default': !range,
      'DatePicker_range': range,
      'DatePicker_open': focused || focusedInput
    })

    return (
      <div>
        {(range? (
          <div
            className={className}
          >
            <div>
              Uns treco!
            </div>

            <DateRangePicker
              {...merge(defaultProps, filteredProps)}
              startDate={startDate}
              endDate={endDate}
              focusedInput={focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onRangeFocusChange}
            />

            <div
              className="DatePicker_confirmation">
              <button
                onClick={this.onClickCancelDates}
                className="DatePicker_confirmation__button"
              >Cancelar</button>
              <button
                onClick={this.onClickConfirmDates}
                className="DatePicker_confirmation__button"
              >Ok</button>
            </div>
          </div>
        ) : (
          <div
            className={className}
          >
            <SingleDatePicker
              {...merge(defaultProps, filteredProps)}
              focused={focused}
              date={date}
              numberOfMonths={1}
              onDateChange={this.onDateChange}
              onFocusChange={this.onFocusChange}
            />

            <div
              className="DatePicker_confirmation">
              <button
                onClick={this.onClickCancelDates}
                className="DatePicker_confirmation__button"
              >Cancelar</button>
              <button
                onClick={this.onClickConfirmDates}
                className="DatePicker_confirmation__button"
              >Ok</button>
            </div>
          </div>
        )
      )}
      </div>
    )
  }
}

export default DatePicker
