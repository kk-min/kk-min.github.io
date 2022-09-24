import React from 'react';
import { getParseTreeNode } from 'typescript';
import github_logo from '../assets/github_logo.png';
import { ItemCard } from './ItemCard';
import web from '../assets/web.png';
import gears from '../assets/gears.png';
import pencil_case from '../assets/pencil_case.png';
import ProjectItem from './ProjectItem';
import project_data from '../data/project_data.json';

export default function Projects() {
	const [selection, setSelection] = React.useState('all');
	// Hide horizontal scrollbar:
	document.body.style.overflowX = 'hidden';
	if (selection === 'all') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>Projects</h1>
					<a
						href='https://github.com/kk-min'
						target='_blank'
						rel='noopener noreferrer'
					>
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
						image={web}
						itemName='Frontend'
						bodyText='Web development'
						bottomText='React, TypeScript, Javascript, CSS'
						onClickHandler={() =>
							setSelection((prev) => 'frontend')
						}
					/>
					<ItemCard
						image={gears}
						itemName='Backend'
						bodyText='Android / Database / Networking'
						bottomText='Java, Kotlin, C/C++'
						onClickHandler={() => setSelection((prev) => 'backend')}
					/>
					<ItemCard
						image={pencil_case}
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
				<div
					className='back-button'
					onClick={() => setSelection('all')}
				>
					⮌
				</div>
				<div className='title-container'>
					<h1 className='tab-title'>
						Frontend <img src={web} style={{ height: '6vh' }} />
					</h1>
				</div>
				{project_data.frontend.map((data) => {
					return (
						<ProjectItem
							projectTitle={data.name}
							projectDescription={data.description}
							projectIcon={data.icon}
							projectRole={data.subheader}
							projectLink={data.link}
							projectBulletPoints={data.bulletpoints}
						/>
					);
				})}
			</div>
		);
	} else if (selection === 'backend') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>Backend</h1>
				</div>
			</div>
		);
	} else if (selection === 'miscellaneous') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>Miscellaneous</h1>
				</div>
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}
