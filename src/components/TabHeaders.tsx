import React, { SetStateAction, useEffect, useState } from 'react';
import '../css/Tabs.css';
import kkminlogo_light from '../assets/kkminlogo_light.png';

export interface PropTypes {
	tabNames: string[];
	activeTab: string;
	setActiveTab: React.Dispatch<SetStateAction<string>>;
}

export default function TabHeaders(props: PropTypes) {
	// onClick function for when a tab is clicked:
	const tabClickHandler = (event: React.MouseEvent, tabname: string) => {
		if (tabname === props.activeTab) {
			// Tab is already active
			return;
		}

		props.setActiveTab((prev) => tabname);
		window.scroll(0, 0);
	};

	return (
		<div className='tabs' id='tabs'>
			{props.tabNames.map((name) => (
				<button
					id={name}
					key={name}
					className={
						name === props.activeTab
							? 'tabheaderactive'
							: 'tabheader'
					}
					onClick={
						name === 'Blog'
							? () => {
									window.open(
										'https://kkmin.vercel.app',
										'_blank'
									);
							  }
							: (event) => tabClickHandler(event, name)
					}
				>
					{name}
				</button>
			))}
			<div className='tabsfiller'>
				<img className='tabslogo' src={kkminlogo_light} alt='KK Min' />
			</div>
		</div>
	);
}
