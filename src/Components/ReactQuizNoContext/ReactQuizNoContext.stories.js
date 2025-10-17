import ReactQuizNoContext from './ReactQuizNoContext';

const meta = {
  title: 'Components/ReactQuizNoContext',
  component: ReactQuizNoContext,
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
    title: 'ReactQuizNoContext Title',
    description: 'This is a ReactQuizNoContext',
  },
};
