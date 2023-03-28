import React, { useState } from 'react';
import TabContent from './TabContent';
import TabHeaders from './TabHeaders';
import { useTabStore } from '../data/Store';

const tab_names = ['About Me', 'Projects', 'Contact', 'Blog'];

export default function Tabs() {
	return (
		<div className='tabs-container'>
			<TabHeaders
				tabNames={tab_names.map((site_name) => site_name)}
			/>
			<TabContent />
		</div>
	);
}
