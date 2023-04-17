import React from 'react'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks'

import 'tailwindcss/tailwind.css'
import '../src/tailwind.css' // replace with the name of your tailwind css file

// const tokenContext = require.context('!!raw-loader!../src', true, /.\.(css|less|scss|svg)$/)

// const tokenFiles = tokenContext.keys().map(function (filename) {
//   return { filename: filename, content: tokenContext(filename).default }
// })

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ] as any,
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
    designToken: {
      defaultTab: 'Colors',
      // files: tokenFiles,
      styleInjection:
        '@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");',
    },
  },
}

export default preview
