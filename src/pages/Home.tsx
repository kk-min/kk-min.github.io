import React from 'react';
import Tabs from '../components/Tabs';
import '../css/Home.css';

export default function Home() {
	return (
		<div className='home-container' id='home-container'>
			<Tabs />
			<div className='welcome-message'>Welcome</div>
		</div>
	);
}
