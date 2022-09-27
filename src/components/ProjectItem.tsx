import React from 'react';

export interface PropTypes {
	projectTitle: string;
	projectDescription: string;
	projectIcon: string;
	projectRole: string;
	projectLink: string;
	projectBulletPoints: string[];
}

export default function ProjectItem(props: PropTypes) {
	const onClickHandler = () => {
		if (props.projectLink.length > 0) {
			window.open(props.projectLink, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<div
			id={props.projectTitle}
			className={
				props.projectLink.length === 0
					? 'project-container-no-link'
					: 'project-container'
			}
			onClick={onClickHandler}
		>
			<div className='project-title'>{props.projectTitle}</div>
			<div className='subheader'>{props.projectRole}</div>
			<div className='project-description'>
				{props.projectDescription}
			</div>
			<ul className='project-description'>
				{props.projectBulletPoints.map((point) => {
					return <li key={point}>{point}</li>;
				})}
			</ul>
		</div>
	);
}
