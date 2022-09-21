import React, { Dispatch } from 'react';
import '../css/TabContent.css';

export interface PropTypes {
	data: any[];
	loading: boolean;
	error: false;
	activeTab: string;
	setActiveTab: Dispatch<string>;
}

export default function TabContent(props: PropTypes) {
	return (
		<div className='content-container' id='content-container'>
			<h1>Tab Content</h1>
		</div>
	);
}
