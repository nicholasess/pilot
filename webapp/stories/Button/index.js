import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'
import style from './style.css'

storiesOf('Button', module)
  .add('primary', () =>
    <Button onClick={action('clicked')}>Primary Button</Button>)

