import React, { Component } from 'react'

export default class StateComponent extends Component {
  constructor (props) {
    super(props)

    this.onDatesChange = this.onDatesChange.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onRangeFocusChange = this.onRangeFocusChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
    this.onClickCancelDates = this.onClickCancelDates.bind(this)
    this.onClickConfirmDates = this.onClickConfirmDates.bind(this)
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({
      startDate: startDate,
      endDate: endDate,
    })
  }

  onDateChange (date) {
    this.setState({
      date
    })
  }

  onRangeFocusChange (focusedInput) {
    this.setState({
      focusedInput,
    })

    this.props.onFocusChange({ focusedInput })
  }

  onFocusChange ({focused}) {
    this.setState({
      focused,
    })

    this.props.onFocusChange({ focused })
  }

  onClickCancelDates () {
    const {
      previewsStartDate,
      previewsEndDate,
      previewsDate,
      startDate,
      endDate,
      date,
      focusedInput,
      focused,
    } = this.state

    if(this.props.range) {
      this.setState({
        startDate: previewsEndDate || startDate,
        endDate: previewsStartDate || endDate,
        focusedInput: false,
      })
    } else {
      this.setState({
        date: previewsDate,
        focused: false,
      })
    }
  }

  onClickConfirmDates () {
    const {
      startDate,
      endDate,
      focusedInput,
      focused,
      date
    } = this.state

    if (this.props.range) {
      this.setState({
        previewsEndDate: startDate,
        previewsStartDate: endDate,
        focusedInput: null,
      })

      this.props.onDatesChange({
        startDate,
        endDate,
      })
    } else {
      this.setState({
        previewsDate: date,
        focused: false,
      })

      this.props.onDateChange(date)
    }

  }
}
