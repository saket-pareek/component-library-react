import {{pascalCase name}} from './{{pascalCase name}}';

const meta = {
  title: 'Components/{{pascalCase name}}',
  component: {{pascalCase name}},
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
    title: '{{pascalCase name}} Title',
    description: 'This is a {{pascalCase name}}',
  },
};
