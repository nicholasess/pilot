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
    this.toggleOpen = this.toggleOpen.bind(this)
    this.onPeriodChange = this.onPeriodChange.bind(this)
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({
      startDate: startDate || this.state.startDate,
      endDate: endDate || this.state.endDate,
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

    const {
      range
    } = this.props

    if(range) {
      this.setState({
        startDate: previewsStartDate,
        endDate: previewsEndDate,
        focusedInput: null,
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
        previewsStartDate: startDate,
        previewsEndDate: endDate,
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

  toggleOpen () {
    const {
      focused,
      focusedInput
    } = this.state

    const {
      range
    } = this.props

    if (range && !focusedInput) {
      this.setState({
        focusedInput: 'startDate',
      })
    }

    if (!range && !focused) {
      this.setState({ focused: true })
    }
  }

  onPeriodChange (period) {
    this.setState({
      focusedInput: period
    })
  }
}
