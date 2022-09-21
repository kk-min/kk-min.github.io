import React, { Dispatch } from 'react';
import '../css/TabContent.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';

export interface PropTypes {
	loading: boolean;
	error: false;
	activeTab: string;
	setActiveTab: Dispatch<string>;
}

export default function TabContent(props: PropTypes) {
	return (
		<div className='content-container' id='content-container'>
			{props.activeTab == 'About Me' ? (
				<AboutMe />
			) : props.activeTab == 'Projects' ? (
				<Projects />
			) : (
				<Contact />
			)}
		</div>
	);
}
