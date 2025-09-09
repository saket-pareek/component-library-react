import VideoTrailerPopup from './VideoTrailerPopup';

const meta = {
  title: 'Components/VideoTrailerPopup',
  component: VideoTrailerPopup,
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
    title: 'VideoTrailerPopup Title',
    description: 'This is a VideoTrailerPopup',
  },
};
