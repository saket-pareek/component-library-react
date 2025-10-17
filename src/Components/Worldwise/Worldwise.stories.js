import Worldwise from './Worldwise';

const meta = {
  title: 'Components/Worldwise',
  component: Worldwise,
  tags: ['docsPage'],
  parameters: {
    layout: 'fullscreen',
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
    title: 'Worldwise Title',
    description: 'This is a Worldwise',
  },
};
