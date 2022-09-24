import React, { useState, useEffect } from 'react';
import padlock_default from '../assets/padlock_default.png';
import padlock_open from '../assets/padlock_open.png';
import padlock_error from '../assets/padlock_error.png';


export default function Lock() {

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
