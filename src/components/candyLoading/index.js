import React from 'react';
import './candyLoading.scss';

const SIZE = 30;

//type colors = '#af0404' | '#3c8d0d'
export const CandyLoading = ({candycolor='#af0404'}) => {
	return (
		<div className={`candy container`}>
			<div style={{display:'flex', flexDirection:'row', transform:'translateX(-180px)'}}>
				{[ ...Array(100).keys() ].map((_, i) => <Line key={i} candycolor={candycolor} />)}
				<div className="candy-shine" />
			</div>
		</div>
	);
};

const Line = ({candycolor}) => {
	return <div className="candy-line" style={{backgroundColor:candycolor}}/>;
};
