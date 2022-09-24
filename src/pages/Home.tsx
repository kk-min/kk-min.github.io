import React from 'react';
import Tabs from '../components/Tabs';
import '../css/Home.css';

export default function Home() {
	// Scroll to top in case user is refreshing with scroll position not at top:
	window.scroll(0, 0);
	return (
		<div className='home-container' id='home-container'>
			<Tabs />
			<div className='welcome-message'>Welcome</div>
		</div>
	);
}
