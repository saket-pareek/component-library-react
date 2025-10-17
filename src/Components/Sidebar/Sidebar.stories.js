import Sidebar from './Sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
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
    title: 'Sidebar Title',
    description: 'This is a Sidebar',
  },
};
