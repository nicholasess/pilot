import React from 'react'

import ButtonUser from 'react-icons/lib/md/face'
import ButtonLogoff from 'react-icons/lib/fa/power-off'
import ButtonExport from 'react-icons/lib/fa/external-link'
import ButtonCopy from 'react-icons/lib/md/content-copy'
import ButtonDelete from 'react-icons/lib/fa/close'
import ButtonAdd from 'react-icons/lib/fa/plus'
import ButtonDocs from 'react-icons/lib/md/import-contacts'
import ButtonLetter from 'react-icons/lib/md/assignment'
import ButtonUpload from 'react-icons/lib/md/file-upload'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button'
import stylesheet from './style.css'

storiesOf( 'Button', module )

  .add( 'green default', () =>
    <Button>Default Button</Button> )

  .add( 'green flat', () =>
    <Button onClick={action( 'clicked' )} style="flat">Flat Button</Button> )

  .add( 'green gradient', () =>
    <Button onClick={action( 'clicked' )} style="gradient">Gradient Button</Button> )

  .add( 'green outline', () =>
    <Button onClick={action( 'clicked' )} style="outline">Outline Button</Button> )

  .add( 'green dashed', () =>
    <Button onClick={action( 'clicked' )} style="dashed">Dashed Button</Button> )

  .add( 'green clean', () =>
    <Button onClick={action( 'clicked' )} style="clean">Clean Button</Button> )

  .add( 'green icon', () =>
    <div className={stylesheet.buttonCollection}>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonUser />
        Minha Conta
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonLogoff />
        Desconectar
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonExport />
        Exportar
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonCopy />
        Copiar
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonDelete />
        Excluir
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonAdd />
        Adicionar
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonDocs />
        Documentação
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonLetter />
        Carta de Circulação
      </Button>
      <Button onClick={action( 'clicked' )} style="flat">
        <ButtonUpload />
        Fazer Upload
      </Button>
    </div>
  )

  .add( 'button block', () =>
    <div className={stylesheet.buttonBlock}>
      <Button onClick={action( 'clicked' )} style="block">Block Button 1</Button>
      <Button onClick={action( 'clicked' )} style="block">Block Button 2</Button>
      <Button onClick={action( 'clicked' )} style="block">Block Button 3</Button>
    </div>
  )
