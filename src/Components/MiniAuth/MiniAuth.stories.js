import MiniAuth from './MiniAuth';

const meta = {
  title: 'Components/MiniAuth',
  component: MiniAuth,
  tags: ['docsPage'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Primary = {
  args: {
    title: 'MiniAuth Title',
    description: 'This is a MiniAuth',
  },
};
