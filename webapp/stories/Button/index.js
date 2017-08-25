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

const parentList = [
  { surround: 'light', name: 'Claro', style: { padding: '20px', background: '#FFF' } },
  { surround: 'dark', name: 'Escuro', style: { padding: '20px', background: '#333' } },
]

const colorList = [
  'green-primary',
  'green-secondary',
  'green-contrast',
  'silver',
  'plumb',
  'yellow',
  'red',
  'blue',
  'purple',
  'pink',
]

const iconList = [
  { component: ButtonUser, text: 'Minha Conta' },
  { component: ButtonLogoff, text: 'Desconectar' },
  { component: ButtonExport, text: 'Exportar' },
  { component: ButtonCopy, text: 'Copiar' },
  { component: ButtonDelete, text: 'Excluir' },
  { component: ButtonAdd, text: 'Adicionar' },
  { component: ButtonDocs, text: 'Documentação' },
  { component: ButtonLetter, text: 'Carta de Circulação' },
  { component: ButtonUpload, text: 'Fazer Upload' },
]

const clicked = action('clicked')

parentList.map((s) => {

  storiesOf(`Button/${s.name}`, module )

    .add( 'Padrão', () => buttonAllColors(s, 'Botão Padrão') )
    .add( 'Plano', () => buttonAllColors(s, 'Botão Plano', 'flat') )
    .add( 'Gradiente', () => buttonAllColors(s, 'Botão Gradiente', 'gradient') )
    .add( 'Contorno', () => buttonAllColors(s, 'Botão com Contorno', 'outline') )
    .add( 'Tracejado', () => buttonAllColors(s, 'Botão Tracejado', 'dashed' ) )
    .add( 'Sem fundo', () => buttonAllColors(s, 'Botão sem Fundo', 'clean') )

    .add( 'Com ícones', () =>
      <div className={stylesheet.buttonCollection} style={s.style}>
        {iconList.map((i) =>
          <Button onClick={clicked} surround={s.color}>
            {i.component()}{i.text}
          </Button>
        )}
      </div>
    )

    .add( 'Bloco', () =>
      <div style={s.style}>
        <div className={stylesheet.buttonBlock}>
          {[1,2,3].map(( n ) =>
            <Button onClick={clicked} surround={s.color} style="block">
              Block Button {n}
            </Button>
          )}
        </div>
      </div>
    )
})

function buttonAllColors( parent, children, style ) {
  return (
    <div className={stylesheet.buttonCollection} style={parent.style}>
      {colorList.map(( c ) =>
        <Button onClick={clicked} surround={parent.surround} style={style} color={c}>
          {children}
        </Button>
      )}
    </div>
  )
}