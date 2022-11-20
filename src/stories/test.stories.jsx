// Button.stories.js|jsx

import React from 'react';

const Test = () => {
    return <div>test</div>
}

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Test,
};

export const Primary = () => <Test primary label="Button"/>;
Primary.storyName = 'I am the primary';