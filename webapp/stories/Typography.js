import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('Typography', module)
  .add('Familia de Fontes', () =>
    <div>
      <h1>Familia de Fontes</h1>

      <Card>
        <h2>Uni Neue</h2>

        <Card>
          <strong>Aa</strong>
          <span>bold</span>
        </Card>

        <Card>
          <strong>AA</strong>
          <span>bold caps</span>
        </Card>
      </Card>
    </div>)
  .add('Parágrafo', () => {
    <dvi>
      <h1>Parágrafo</h1>
    </dvi>
  })
  .add('Listas', () => {
    <dvi>
      <h1>Listas</h1>

      <Card>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>
            <ul>
              <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
              <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            </ul>
          </li>
        </ul>
      </Card>
    </dvi>
  })
  .add('Texto colorido', () => {
    <dvi>
      <h1>Texto colorido</h1>

      <Card>
        <p>Curabitur at finibus neque. In efficitur sapien ut lectus suscipit consequat. Proin eget aliquam leo. <a href="">Maecenas mattis</a> quis nisi vel venenatis. Proin sit amet purus nec magna ornare iaculis.</p>
      </Card>
    </dvi>
  })
  .add('Exemplo de colunas', () => {
    <dvi>
      <h1>Exemplo de colunas</h1>

      <Card>
        <p>Curabitur at finibus neque. In efficitur sapien ut lectus suscipit consequat. Proin eget aliquam leo. <a href="">Maecenas mattis</a> quis nisi vel venenatis. Proin sit amet purus nec magna ornare iaculis.</p>
      </Card>
    </dvi>
  })
