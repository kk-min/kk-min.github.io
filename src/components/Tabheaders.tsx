import React, { SetStateAction, useEffect, useState } from 'react';
import '../css/Tabs.css';
import trustana_header from '../assets/trustana_header.png';

export interface PropTypes {
	tabNames: string[];
	activeTab: string;
	setActiveTab: React.Dispatch<SetStateAction<string>>;
}

export function TabHeaders(props: PropTypes) {
	const [tabNames, setTabNames] = useState<string[]>([]);

	// Initialization:
	useEffect(() => {
		setTabNames(() => props.tabNames);
		let firstTab = document.getElementById(props.activeTab);
		if (firstTab !== null) {
			firstTab.className = 'tabheaderactive';
		}
	}, [tabNames]);

	// onClick function for when a tab is clicked:
	const tabClickHandler = (event: React.MouseEvent, tabname: string) => {
		if (tabname === props.activeTab) {
			// Tab is already active
			return;
		}

		let currentTab = document.getElementById(props.activeTab);
		if (currentTab !== null) {
			currentTab.className = 'tabheader';
		}

		let newTab = document.getElementById(tabname);
		if (newTab !== null) {
			newTab.className = 'tabheaderactive';
			props.setActiveTab(tabname);
		}
	};

	return (
		<div className='tabs'>
			{tabNames.map((name) => (
				<button
					id={name}
					key={name}
					className='tabheader'
					onClick={(event) => tabClickHandler(event, name)}
				>
					{name}
				</button>
			))}
			<div className='tabsfiller'>
				<img className='tabslogo' src={trustana_header} />
			</div>
		</div>
	);
}
