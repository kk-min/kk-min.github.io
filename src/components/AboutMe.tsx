import React from 'react';
import down_arrow from '../assets/down_arrow.png';

export interface PropTypes {
	firstRender: boolean;
}

const scrollHandler = () => {
	const aboutMeContent = document.getElementById('about-me-content');
	if (aboutMeContent) {
		aboutMeContent.style.display = 'unset';
	}

	// scroll down the window smoothly until the top of the element is in the middle of the window:
	const viewPortOffSet = document
		.getElementById('about-me-content')
		?.getBoundingClientRect();
	if (viewPortOffSet) {
		window.scrollTo({
			top: viewPortOffSet.top * 0.85 + window.scrollY,
			behavior: 'smooth',
		});
	}
};

export default function AboutMe(props: PropTypes) {
	return (
		<div
			id='about-me'
			className={props.firstRender ? 'empty-content' : 'content'}
		>
			<div className='intro-container'>
				<h1 className='intro-text'>
					<span className='blue-text'>Hi there! I'm </span>
					<span className='orange-text'>Min. </span>
					<span className='wave-emoji'>👋</span>
				</h1>

				<button className='down-button' onClick={scrollHandler}>
					<img className='arrow' src={down_arrow} alt="Arrow pointing down" />
				</button>
			</div>
			<div className='about-me-content' id='about-me-content'>
				Creating things has always been a big part of my life. When I
				was young, I enjoyed building my own lego structures to stories
				during playtime. When I was in highschool, I was deeply enamored
				by music and the creative process behind musical composition, and the
				way{' '}
				<a
					href='https://en.wikipedia.org/wiki/Digital_audio_workstation'
					target='_blank'
					rel='noopener noreferrer'
				>
					software transformed it.
				</a>{' '}
				This eventually led me to study Computer Science and learn
				software development. Now, I aspire to create
				technology/software to make a difference in the world.
				<br />
				<br />
				I have experience in both Frontend (Reactjs/Nextjs, Svelte/SvelteKit,
				Javascript/Typescript, CSS) and Backend (Go,
				Java, Kotlin, C/C++) experience; see Projects for more details. I'm also always looking out
				to learn and explore new technologies!
				<br />
				<br />
				If you have an idea or are working on something and think we might be a good fit, feel free to reach out to me via the Contact tab!
				<br />
				<br />
			</div>
		</div>
	);
}
