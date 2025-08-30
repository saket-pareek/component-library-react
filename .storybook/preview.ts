// .storybook/preview.ts
import type { Preview } from '@storybook/react';
import '../src/main.scss';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (StoryFn, context) => {
      // This runs every time the story renders
      const componentName = context.title.split('/').pop()!;
      document.title = componentName;
      return StoryFn();
    },
  ],
};

export default preview;
