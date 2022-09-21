import React, { useState } from 'react';
import TabContent from './TabContent';
import TabHeaders from './TabHeaders';

const tab_names = ['About Me', 'Projects', 'Contact'];

export default function Tabs() {
	const [activeTab, setActiveTab] = useState(tab_names[0]);

	return (
		<div className='tabs-container'>
			<TabHeaders
				tabNames={tab_names.map((site_name) => site_name)}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<TabContent
				loading={false}
				error={false}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</div>
	);
}
