export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a React component with SCSS and Storybook stories',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.jsx',
        templateFile: 'plop-templates/Component.jsx',
      },
      {
        type: 'add',
        path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'plop-templates/Component.scss',
      },
      {
        type: 'add',
        path: 'src/Components/{{pascalCase name}}/{{pascalCase name}}.stories.js',
        templateFile: 'plop-templates/Component.stories.js',
      },
    ],
  });
}
