import UsePopcorn from './UsePopcorn';

const meta = {
  title: 'Components/UsePopcorn',
  component: UsePopcorn,
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
    title: 'UsePopcorn Title',
    description: 'This is a UsePopcorn',
  },
};
