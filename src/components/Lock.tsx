import React, { useState, useEffect } from 'react';
import padlock_default from '../assets/padlock_default.png';
import padlock_open from '../assets/padlock_open.png';
import padlock_error from '../assets/padlock_error.png';

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

export default function Lock() {
	const [lockState, setLockState] = useState('locked');

	useEffect(() => {
		const secret = getRandomSecret(randomizerArray);
	}, []);

	const onClickHandler = () => {
		const lockElement = document.getElementById('lock');
		if (lockElement) {
			lockElement.classList.add('shaking');
			setTimeout(() => {
				lockElement.classList.remove('shaking');
			}, 300);
		}
	};

	return (
		<div className='lock-container'>
			<img
				id='lock'
				className='lock'
				src={padlock_default}
				onClick={onClickHandler}
			></img>
		</div>
	);
}
