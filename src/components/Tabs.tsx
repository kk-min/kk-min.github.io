import React, { useState } from 'react';
import { TabHeaders } from './TabHeaders';
import TabContent from './TabContent';

const tab_names = ['CCAFS SLC 40', 'VAFB SLC 4E', 'KSC LC 39A'];

export default function Tabs() {
	const [activeTab, setActiveTab] = useState(tab_names[0]);

	return (
		<div>
			<TabHeaders
				tabNames={tab_names.map((site_name) => site_name)}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<TabContent
				data={[]}
				loading={false}
				error={false}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</div>
	);
}
