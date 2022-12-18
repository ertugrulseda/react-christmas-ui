import React from 'react';
import './candyLoading.scss';

const SIZE = 30;

export const CandyLoading = () => {
	return (
		<div className={`candy container`}>
			<div style={{display:'flex', flexDirection:'row', transform:'translateX(-180px)'}}>
				{[ ...Array(100).keys() ].map((_, i) => <Line key={i} />)}
				<div className="candy-shine" />
			</div>
		</div>
	);
};

const Line = () => {
	return <div className="candy-line" />;
};
