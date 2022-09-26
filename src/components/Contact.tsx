import React, { useEffect, useState } from 'react';
import { ItemCard } from './ItemCard';
import Lock from './Lock';
import ProjectItem from './ProjectItem';
import Unlocker from './Unlocker';

const randomizerArray = ['1', '2', '3', '4'];

const getRandomSecret = (sourceArray: string[]) => {
	let secret: string = '';
	let tempArray = [...sourceArray];
	while (tempArray.length > 0) {
		let index = Math.floor(Math.random() * tempArray.length);
		let randomItem = tempArray[index];
		secret += randomItem;
		tempArray.splice(index, 1); // Remove selected item from array
	}
	return secret;
};

export default function Contact() {
	const [secret, setSecret] = useState(getRandomSecret(randomizerArray));
	const [input, setInput] = useState('');
	const [lockState, setLockState] = useState('default');
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		const lockElement = document.getElementById('lock');
		const unlockerElement = document.getElementById('unlocker');
		const contactElement = document.getElementById('contact-card');

		if (lockState === 'open') {
			setTimeout(() => {
				if (lockElement) {
					lockElement.style.display = 'none';
				}
				if (unlockerElement) {
					unlockerElement.style.display = 'none';
				}
				if (contactElement) {
					contactElement.className = 'contact-info';
				}
			}, 2000);
			return;
		} else {
			setTimeout(() => {
				setIsAnimating(false);
			}, 5000);
		}
	}, [lockState]);

	useEffect(() => {
		if (lockState === 'open') {
			return;
		}

		const resetElement = document.getElementById('reset-button');
		if (!isAnimating) {
			if (resetElement) {
				resetElement.className = 'reset-button enabled';
			}
		}
	}, [isAnimating]);

	const addInput = (input: string) => {
		setInput((prev) => prev + input);
	};

	const resetHandler = () => {
		if (isAnimating) {
			return;
		}

		// Clear all setTimeOut functions:
		var timeOutID = window.setTimeout(function () {}, 0);
		while (timeOutID--) {
			window.clearTimeout(timeOutID);
		}

		const resetElement = document.getElementById('reset-button');
		if (resetElement) {
			if (resetElement.className === 'reset-button disabled') {
				return;
			}

			resetElement.classList.add('rotate');
			resetElement.classList.remove('enabled');
			resetElement.classList.add('disabled');

			const lockContainerElement = document.getElementById('lock');
			const lockImageElement = document.getElementById('lock-image');
			const unlockerElement = document.getElementById('unlocker');
			if (lockContainerElement) {
				lockContainerElement.style.removeProperty('display');
			}

			if (unlockerElement) {
				unlockerElement.style.removeProperty('display');
			}

			setSecret((prev) => getRandomSecret(randomizerArray));
			setInput((prev) => '');
			setLockState((prev) => 'default');
			setIsAnimating((prev) => true);

			if (lockImageElement) {
				console.log('Resetting lock to initial');
				lockImageElement.classList.add('initial');
				setTimeout(() => {
					lockImageElement.className = 'lock';
				}, 1000);
			}
		}
		setTimeout(() => {
			resetElement?.classList.remove('rotate');
			resetElement?.classList.remove('disabled');
			setIsAnimating((prev) => false);
		}, 5000);
	};

	return (
		<div className='content'>
			<div
				id='reset-button'
				className='reset-button disabled'
				onClick={resetHandler}
			>
				⭯
			</div>
			<h1 className='tab-title'>Contact</h1>
			<Lock
				secret={secret}
				input={input}
				lockState={lockState}
				setLockState={setLockState}
			/>
			<Unlocker
				secret={secret}
				addInput={addInput}
				lockState={lockState}
			/>
			{lockState === 'open' ? (
				<div className='contact-info-invisible' id='contact-card'>
					<ProjectItem
						projectTitle='Min Kabar Kyaw'
						projectDescription=''
						projectIcon=''
						projectRole='Software Developer'
						projectLink=''
						projectBulletPoints={[
							'Email: minkabarkyaw@gmail.com',
							'LinkedIn: https://www.linkedin.com/in/minkk/',
						]}
					/>
				</div>
			) : null}
		</div>
	);
}
