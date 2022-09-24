import React, { useEffect, useState } from 'react';
import Lock from './Lock';
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
	const [secret, setSecret] = useState('');
	const [input, setInput] = useState('');
	const [lockState, setLockState] = useState('default');
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		setSecret((prev) => getRandomSecret(randomizerArray));
		setTimeout(() => {
			setIsAnimating(false);
		}, 5000);
	}, []);

	useEffect(() => {
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
		const resetElement = document.getElementById('reset-button');
		if (resetElement) {
			if (resetElement.className === 'reset-button disabled') {
				return;
			}

			resetElement.classList.add('rotate');
			resetElement.classList.remove('enabled');
			resetElement.classList.add('disabled');

			setSecret((prev) => getRandomSecret(randomizerArray));
			setInput('');
			setLockState('default');
			setIsAnimating((prev) => true);
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
			<Unlocker secret={secret} addInput={addInput} />
		</div>
	);
}
