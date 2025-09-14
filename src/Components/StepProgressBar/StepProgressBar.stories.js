import StepProgressBar from './StepProgressBar';

const meta = {
  title: 'Components/StepProgressBar',
  component: StepProgressBar,
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
    title: 'StepProgressBar Title',
    description: 'This is a StepProgressBar',
  },
};
