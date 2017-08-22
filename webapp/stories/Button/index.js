import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'
import style from './style.css'

storiesOf( 'Button', module )
  .add( 'green flat', () =>
    <Button onClick={action( 'clicked' )} type="flat">Flat Button</Button> )

  .add( 'green degrade', () =>
    <Button onClick={action( 'clicked' )} type="degrade">Degrade Button</Button> )

  .add( 'green outline', () =>
    <Button onClick={action( 'clicked' )} type="outline">Outline Button</Button> )

  .add( 'green dashed', () =>
    <Button onClick={action( 'clicked' )} type="dashed">Dashed Button</Button> )

  .add( 'green clean', () =>
    <Button onClick={action( 'clicked' )} type="clean">Clean Button</Button> )
