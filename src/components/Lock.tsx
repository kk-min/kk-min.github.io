import React, { useState, useEffect, useMemo } from 'react';
import padlock_default from '../assets/padlock_default.png';
import padlock_open from '../assets/padlock_open.png';
import padlock_error from '../assets/padlock_error.png';
import { usePuzzleStore } from '../data/Store';


export default function Lock() {
	const firstRender = usePuzzleStore((state) => state.firstRender)
	const lockStatus = usePuzzleStore((state) => state.lockStatus)

	if (firstRender) {
		setTimeout(() => {
			usePuzzleStore.setState({ firstRender: false })
		}, 300)
	}

	const defaultLock = useMemo(() => {
		return padlock_default;
	}, []);

	const openLock = useMemo(() => {
		return padlock_open;
	}, []);

	const errorLock = useMemo(() => {
		return padlock_error;
	}, []);

	const onClickHandler = () => {
		const lockElement = document.getElementById('lock-image');
		if (lockElement) {
			// Input not completely filled
			if (lockStatus === 'default') {
				lockElement.classList.add('shaking');
				setTimeout(() => {
					lockElement.classList.remove('shaking');
				}, 300);
			}
		}
	};

	return (
		<div
			id='lock'
			className={
				lockStatus === 'open'
					? 'lock-container-exit'
					: 'lock-container'
			}
		>
			<img
				id='lock-image'
				className={
					'lock' +
					(lockStatus === 'open'
						? '-exit'
						: lockStatus === 'error'
							? '-failed'
							: firstRender
								? ' initial'
								: '')
				}
				src={
					lockStatus === 'default'
						? defaultLock
						: lockStatus === 'open'
							? openLock
							: errorLock
				}
				onClick={onClickHandler}
				alt='lock'
			></img>
		</div>
	);
}
