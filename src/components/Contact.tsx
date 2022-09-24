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

	useEffect(() => {
		setSecret((prev) => getRandomSecret(randomizerArray));
	}, []);

	const addInput = (input: string) => {
		setInput((prev) => prev + input);
	};

	return (
		<div className='content'>
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
