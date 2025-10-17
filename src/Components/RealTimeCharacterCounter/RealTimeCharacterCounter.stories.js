import RealTimeCharacterCounter from './RealTimeCharacterCounter';

const meta = {
  title: 'Components/RealTimeCharacterCounter',
  component: RealTimeCharacterCounter,
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
    title: 'RealTimeCharacterCounter Title',
    description: 'This is a RealTimeCharacterCounter',
  },
};
