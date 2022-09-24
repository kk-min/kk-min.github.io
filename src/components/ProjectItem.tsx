import React, { useEffect } from 'react';
import { findDOMNode } from 'react-dom';

export interface PropTypes {
	projectTitle: string;
	projectDescription: string;
	projectIcon: string;
	projectRole: string;
	projectLink: string;
}

export default function ProjectItem(props: PropTypes) {
	useEffect(() => {
		const projectCard = document.getElementById(props.projectTitle);
		if (props.projectLink.length === 0) {
			if (projectCard) {
				projectCard.style.cursor = 'default';
			}
		} else {
			if (projectCard) {
				projectCard.style.cursor = 'pointer';
			}
		}
	}, [props.projectLink]);

	const onClickHandler = () => {
		if (props.projectLink.length > 0) {
			window.open(props.projectLink, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<div
			id={props.projectTitle}
			className='project-container'
			onClick={onClickHandler}
		>
			<div className='project-title'>{props.projectTitle}</div>
			<div className='subheader'>{props.projectRole}</div>
			<div className='project-description'>
				{props.projectDescription}
			</div>
		</div>
	);
}
