import PizzaMenu from './PizzaMenu';

const meta = {
  title: 'Components/PizzaMenu',
  component: PizzaMenu,
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
    title: 'PizzaMenu Title',
    description: 'This is a PizzaMenu',
  },
};
