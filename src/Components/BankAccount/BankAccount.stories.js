import BankAccount from './BankAccount';

const meta = {
  title: 'Components/BankAccount',
  component: BankAccount,
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
    title: 'BankAccount Title',
    description: 'This is a BankAccount',
  },
};
