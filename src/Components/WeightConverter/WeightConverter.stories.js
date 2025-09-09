import WeightConverter from './WeightConverter';

const meta = {
  title: 'Components/WeightConverter',
  component: WeightConverter,
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
    title: 'WeightConverter Title',
    description: 'This is a WeightConverter',
  },
};
