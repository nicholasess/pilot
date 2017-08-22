import React, { Component } from 'react'
import {
  DateRangePicker,
  SingleDatePicker
} from 'react-dates'
import moment from 'moment'
import {
  merge,
  omit,
} from 'ramda'

import './style.scss'

class DatePicker extends Component {
  constructor (props) {
    super()

    const {
      startDate
    } = props

    this.state = merge(props, {
      startDate: startDate ? moment(startDate) : moment(),
      endDate: moment('12-14-2059'),
      date: moment(),
      focusedInput: null,
    })

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onRangeFocusChange = this.onRangeFocusChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate,
    })
  }

  onDateChange (date) {
    this.setState({ date })
  }

  onRangeFocusChange (focusedInput) {
    this.setState({
      focusedInput,
    })
  }

  onFocusChange ({focused}) {
    this.setState({
      focused,
    })
  }

  render () {
    const defaultProps = {
      hideKeyboardShortcutsPanel: true
    }

    const {
      startDate,
      endDate,
      focusedInput,
      date,
      focused
    } = this.state

    const {
      range,
    } = this.props

    const filteredProps = omit(
      ['range'],
      this.props
    )

    return (
      <div>
        {(range? (
          <DateRangePicker
            {...merge(defaultProps, filteredProps)}
            startDate={startDate}
            endDate={endDate}
            focusedInput={focusedInput}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onRangeFocusChange}
          />
        ) : (
          <SingleDatePicker
            {...merge(defaultProps, filteredProps)}
            focused={focused}
            date={date}
            numberOfMonths={1}
            onDateChange={this.onDateChange}
            onFocusChange={this.onFocusChange}
          />
        )
      )}
      </div>
    )
  }
}

export default DatePicker
