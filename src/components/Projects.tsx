import React, { useMemo } from 'react';
import github_logo from '../assets/github_logo.png';
import { ItemCard } from './ItemCard';
import web from '../assets/web.png';
import gears from '../assets/gears.png';
import pencil_case from '../assets/pencil_case.png';
import ProjectItem from './ProjectItem';
import project_data from '../data/project_data.json';

export default function Projects() {
	const [selection, setSelection] = React.useState('all');

	const githubLogo = useMemo(() => {
		return (
			<img
				className='logo'
				src={github_logo}
				alt='Github'
				title='Github'
			/>
		);
	}, []);

	// Hide horizontal scrollbar:
	document.body.style.overflowX = 'hidden';

	if (selection === 'all') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>
						Projects
						<a
							href='https://github.com/kk-min'
							target='_blank'
							rel='noopener noreferrer'
						>
							{githubLogo}
						</a>
					</h1>
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
					<div className='project-footer'>
						For a full resume/CV, please reach me via the Contact
						tab.
					</div>
				</div>
			</div>
		);
	} else if (selection === 'frontend') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>
						Frontend{' '}
						<img
							className='logo'
							src={web}
							style={{ height: '7vh', paddingTop: '5px' }}
							alt='Frontend'
						/>
					</h1>
				</div>
				<div
					className='back-button'
					onClick={() => setSelection('all')}
				>
					⮌
				</div>
				<div className='projects-container'>
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
			</div>
		);
	} else if (selection === 'backend') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>
						Backend{' '}
						<img
							className='logo'
							src={gears}
							style={{ height: '8vh' }}
							alt='Backend'
						/>
					</h1>
				</div>
				<div
					className='back-button'
					onClick={() => setSelection('all')}
				>
					⮌
				</div>
				<div className='projects-container'>
					{project_data.backend.map((data) => {
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
			</div>
		);
	} else if (selection === 'miscellaneous') {
		return (
			<div className='content'>
				<div className='title-container'>
					<h1 className='tab-title'>
						Miscellaneous{' '}
						<img
							className='logo'
							src={pencil_case}
							style={{ height: '8vh' }}
							alt='Miscellaneous'
						/>
					</h1>
				</div>
				<div
					className='back-button'
					onClick={() => setSelection('all')}
				>
					⮌
				</div>
				<div className='projects-container'>
					{project_data.miscellaneous.map((data) => {
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
			</div>
		);
	} else {
		return <div>Loading</div>;
	}
}
