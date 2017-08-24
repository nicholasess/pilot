import React from 'react'
import { render } from 'react-dom'
import { shallow, mount } from 'enzyme'
import moment from 'moment'

import DatePicker from './index'

describe('DatePicker', () => {
  const onDateChange = jest.fn()
  const onFocusChange = jest.fn()

  const component = shallow(
    <DatePicker
      date={moment('12-14-2059')}
      onDateChange={onDateChange}
      onFocusChange={onFocusChange}
    />
  )

  it('should not show inputs', () => {
    const button = component
    .find('.DatePicker_confirmation__button')
    .exists()

    expect(button).toEqual(false)
  })

  it('should show cancel and confirm', () => {
    const button = component
      .setState({ focused: true })
      .find('.DatePicker_confirmation__button.confirm')
      .exists()

    expect(button).toEqual(true)
  })

  it('should confirm', () => {
    const button = component
      .find('.DatePicker_confirmation__button.confirm')
      .simulate('click')

    expect(onDateChange).toHaveBeenCalled()
  })
})
