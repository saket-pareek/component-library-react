import DateCounter from './DateCounter';

const meta = {
  title: 'Components/DateCounter',
  component: DateCounter,
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
    title: 'DateCounter Title',
    description: 'This is a DateCounter',
  },
};
