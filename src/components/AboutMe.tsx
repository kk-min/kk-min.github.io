import React from 'react';

export interface PropTypes {
	firstRender: boolean;
}

export default function AboutMe(props: PropTypes) {
	return (
		<div
			id='about-me'
			className={props.firstRender ? 'empty-content' : 'content'}
		>
			<div className='intro-container'>
				<h1 className='intro-text'>
					<p className='blue-text'>Hi there! I'm </p>
					<p className='orange-text'>Min.</p>
				</h1>
				<button className='down-button'>
					<b className='arrow'>🡳</b>
				</button>
			</div>
		</div>
	);
}
