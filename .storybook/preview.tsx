import { withThemeByDataAttribute } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks'

import '../src/tailwind.css' // replace with the name of your tailwind css file
import React from 'react'

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Controls />
        <Stories />
      </>
    ),
  },
}

export default preview
