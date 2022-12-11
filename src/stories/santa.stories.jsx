import React from 'react';

import { Santa } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Santa',
  component: Santa,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    openEyes: {
      control: 'boolean',
    },
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <div style={{backgroundColor:"white", height:"400px", width:"400px"}}>
      <Santa {...args} />
    </div>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

