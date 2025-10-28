import RandomPhotos from './RandomPhotos';

const meta = {
  title: 'Components/RandomPhotos',
  component: RandomPhotos,
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
    title: 'RandomPhotos Title',
    description: 'This is a RandomPhotos',
  },
};
