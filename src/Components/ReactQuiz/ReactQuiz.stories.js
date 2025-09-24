import ReactQuiz from './ReactQuiz';

const meta = {
  title: 'Components/ReactQuiz',
  component: ReactQuiz,
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
    title: 'ReactQuiz Title',
    description: 'This is a ReactQuiz',
  },
};
