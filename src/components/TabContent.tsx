import React, { Dispatch } from 'react';

export interface PropTypes {
	data: any[];
	loading: boolean;
	error: false;
	activeTab: string;
	setActiveTab: Dispatch<string>;
}

export default function TabContent(props: PropTypes) {
	return (
		<div>
			<h1>Tab Content</h1>
		</div>
	);
}
