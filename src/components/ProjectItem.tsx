import React from 'react';

export interface PropTypes {
	projectTitle: string;
	projectDescription: string;
	projectIcon: string;
	projectRole: string;
}

export default function ProjectItem(props: PropTypes) {
	return (
		<div className='project-container'>
			<div className='project-card'>
				<div className='project-title'>{props.projectTitle}</div>
				<div className='subheader'>{props.projectRole}</div>
				<div className='project-description'>
					{props.projectDescription}
				</div>
			</div>
		</div>
	);
}
