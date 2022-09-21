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
			<div>
				<h1>Hi there! I'm Min.</h1>
				<p></p>
			</div>
		</div>
	);
}
