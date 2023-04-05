// .storybook/manager.js

import { addons } from '@storybook/addons'
import theme from './theme'

addons.setConfig({
  theme: theme,
  options: { showPanel: false },
  isToolshown: false,
})
