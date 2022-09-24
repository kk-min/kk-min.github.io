import React from 'react';
import github_logo from '../assets/github_logo.png';
import { ItemCard } from './ItemCard';

export default function Projects() {
	const [selection, setSelection] = React.useState('all');
	// Hide horizontal scrollbar:
	document.body.style.overflowX = 'hidden';
	if (selection === 'all') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>Projects</h1>
					<a href='https://github.com/kk-min'>
						<img
							className='github-logo'
							src={github_logo}
							alt='Github'
							title='Github'
						/>
					</a>
				</div>
				<div className='card-container'>
					<ItemCard
						image=''
						itemName='Frontend'
						bodyText='Web development'
						bottomText='React, TypeScript, Javascript, CSS'
						onClickHandler={() =>
							setSelection((prev) => 'frontend')
						}
					/>
					<ItemCard
						image=''
						itemName='Backend'
						bodyText='Android / Database / Networking'
						bottomText='Java, Kotlin, C/C++'
						onClickHandler={() => setSelection((prev) => 'backend')}
					/>
					<ItemCard
						image=''
						itemName='Miscellaneous'
						bodyText='Bits and pieces'
						bottomText='Python, VBA'
						onClickHandler={() =>
							setSelection((prev) => 'miscellaneous')
						}
					/>
				</div>
			</div>
		);
	} else if (selection === 'frontend') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>Frontend</h1>
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}
