import StarRating from './StarRating';

const meta = {
  title: 'Components/StarRating',
  component: StarRating,
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
    title: 'StarRating Title',
    description: 'This is a StarRating',
  },
};
