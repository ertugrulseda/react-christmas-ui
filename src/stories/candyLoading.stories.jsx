import React, { useState } from 'react';

import { CandyLoading } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Candy Loading',
	component: CandyLoading,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		// openEyes: {
		//   control: 'boolean',
		// },
	}
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);  
    }, 2000);
  }

	return (
		<div
			style={{
				backgroundColor: 'black',
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}
		>
			<div
				style={{
					height: 60,
					width: 200,
					marginBottom: 20
				}}
			>
				<CandyLoading {...args} />
			</div>
			<div
				style={{
					height: 30,
					width: 300,
					marginBottom: 20
				}}
			>
				<CandyLoading {...args} />
			</div>
			<div
				style={{
					height: 100,
					width: 200,
					marginBottom: 20
				}}
			>
				<CandyLoading {...args} />
			</div>
			<button
        onClick={handleClick}
				style={{
					height: 60,
					width: 200,
					marginBottom: 20,
          padding:0,
          margin:0,
          borderRadius:20
				}}
			>
				{ loading ? <CandyLoading {...args} /> : <span>Click Me</span>}
			</button>
		</div>
	);
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
