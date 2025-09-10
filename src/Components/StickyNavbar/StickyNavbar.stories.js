import StickyNavbar from './StickyNavbar';

const meta = {
  title: 'Components/StickyNavbar',
  component: StickyNavbar,
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
    title: 'StickyNavbar Title',
    description: 'This is a StickyNavbar',
  },
};
