import React, { useEffect, useState } from 'react';
import Lock from './Lock';
import ProjectItem from './ProjectItem';
import Unlocker from './Unlocker';
import reset_arrow from '../assets/reset_arrow.png';
import { usePuzzleStore } from '../data/Store'


export default function Contact() {
	const lockStatus = usePuzzleStore((state) => state.lockStatus);
	const isAnimating = usePuzzleStore((state) => state.isAnimating);
	const resetSecret = usePuzzleStore((state) => state.resetSecret);
	const setLockStatus = usePuzzleStore((state) => state.setLockStatus);
	const setInput = usePuzzleStore((state) => state.setInput);
	const setIsAnimating = usePuzzleStore((state) => state.setIsAnimating);
	const setFirstRender = usePuzzleStore((state) => state.setFirstRender);

	useEffect(() => {
		if (isAnimating) {
			setTimeout(() => {
				setIsAnimating(false);
			}, 5000);
		}
	}, [lockStatus]);

	const resetHandler = () => {
		if (isAnimating) {
			return;
		}

		// Clear all setTimeOut functions:
		var timeOutID = window.setTimeout(function() { }, 0);
		while (timeOutID--) {
			window.clearTimeout(timeOutID);
		}
		resetSecret()
		setInput('');
		setLockStatus('default');
		setIsAnimating(true);
		setFirstRender(true);

		setTimeout(() => {
			setIsAnimating(false);
		}, 5000);
	}

	return (
		<div className='content'>
			<div className='title-container'>
				<h1 className='tab-title'>Contact</h1>
				<img
					id='reset-button'
					className={'reset-button' + (isAnimating ? ' disabled rotate' : ' enabled')}
					onClick={resetHandler}
					src={reset_arrow}
					alt='reset'
				/>
			</div>
			<Lock
			/>
			<Unlocker
			/>
			{lockStatus === 'open' ? (
				<div className={lockStatus === 'open' ? 'contact-info' : 'contact-info-invisible'} id='contact-card'>
					<ProjectItem
						projectTitle='Min Kabar Kyaw'
						projectDescription=''
						projectIcon=''
						projectRole='Software Developer'
						projectLink=''
						projectBulletPoints={[
							'E' +
							'ma' +
							'il:' +
							' ' +
							'mi' +
							'n' +
							'kab' +
							'a' +
							'r' +
							'ky' +
							'aw' +
							'(at)' +
							'g' +
							'mai' +
							'l' +
							'.c' +
							'om',
							'LinkedIn: https://www.linkedin.com/in/minkk/',
						]}
					/>
				</div>
			) : null
			}
		</div >
	);
}
