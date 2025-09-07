import Stopwatch from './Stopwatch';

const meta = {
  title: 'Components/Stopwatch',
  component: Stopwatch,
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
    title: 'Stopwatch Title',
    description: 'This is a Stopwatch',
  },
};
