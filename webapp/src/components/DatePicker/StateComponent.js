import React, { Component } from 'react'

export default class StateComponent extends Component {
  constructor() {
    super()
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({
      startDate: startDate,
      endDate: endDate,
    })
  }

  onDateChange (date) {
    console.log('onDateChange', date);
    this.setState({
      date
    })
  }

  onRangeFocusChange (focusedInput) {
    this.setState({
      focusedInput
    })

    this.onClickCancelDates()
  }

  onFocusChange ({focused}) {
    this.setState(() => ({
      focused,
    }))

    this.onClickCancelDates()
  }

  onClickCancelDates () {
    console.log('onClickCancelDates')

    const {
      previewsStartDate,
      previewsEndDate,
      previewsDate,
      focusedInput,
      focused,
      date,
    } = this.state

    if(this.props.range) {
      this.setState({
        startDate: previewsEndDate,
        endDate: previewsStartDate,
      })
    } else {
      this.setState({
        date: previewsDate
      })
    }
  }

  onClickConfirmDates () {
    console.log('onClickConfirmDates')

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
      })

      console.log('this.props.onDateChange', startDate, endDate);

      this.props.onDatesChange({
        startDate,
        endDate,
      })
    } else {
      this.setState({
        previewsDate: date
      })

      console.log('this.props.onDateChange', date);

      this.props.onDateChange(date)
    }

  }
}
