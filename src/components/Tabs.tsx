import React, { useState } from 'react';
import TabContent from './TabContent';
import TabHeaders from './TabHeaders';
import { useTabStore } from '../data/Store';

const tab_names = ['About Me', 'Projects', 'Contact', 'Blog'];

export default function Tabs() {
	const activeTab = useTabStore((state: any) => state.activeTab);
	const setActiveTab = useTabStore((state: any) => state.setActiveTab);

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
