import RockPaperScissors from './RockPaperScissors';

const meta = {
  title: 'Components/RockPaperScissors',
  component: RockPaperScissors,
  tags: ['docsPage'],
  parameters: {
    layout: 'centered',
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
    title: 'RockPaperScissors Title',
    description: 'This is a RockPaperScissors',
  },
};
