import RandomQuoteGenerator from './RandomQuoteGenerator';

const meta = {
  title: 'Components/RandomQuoteGenerator',
  component: RandomQuoteGenerator,
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
    title: 'RandomQuoteGenerator Title',
    description: 'This is a RandomQuoteGenerator',
  },
};
