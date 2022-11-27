import React from 'react';

import { SnowFlake } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SnowFlake',
  component: SnowFlake,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <div style={{backgroundColor:"black", height:"100vh"}}>
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
      <SnowFlake {...args} />
    </div>
  )
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

