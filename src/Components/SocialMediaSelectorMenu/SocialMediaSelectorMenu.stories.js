import SocialMediaSelectorMenu from './SocialMediaSelectorMenu';

const meta = {
  title: 'Components/SocialMediaSelectorMenu',
  component: SocialMediaSelectorMenu,
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
    title: 'SocialMediaSelectorMenu Title',
    description: 'This is a SocialMediaSelectorMenu',
  },
};
