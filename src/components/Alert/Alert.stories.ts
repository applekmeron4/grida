import type { Meta, StoryObj } from '@storybook/react'

import Alert from './Alert'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default: Story = {
  args: {
    type: 'success',
    message: 'Default',
  },
}

export const Banner: Story = {
  args: {
    type: 'info',
    banner: true,
    message: 'Banner',
  },
}

export const Description: Story = {
  args: {
    type: 'warning',
    message: 'Warning',
    description: 'Description Description Description Description Description Description',
    showIcon: true,
  },
}

export const Cloasable: Story = {
  args: {
    type: 'error',
    message: 'Error',
    showIcon: true,
    closable: true,
  },
}
