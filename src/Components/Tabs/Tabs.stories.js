import Tabs from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
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
    title: 'Tabs Title',
    description: 'This is a Tabs',
  },
};
