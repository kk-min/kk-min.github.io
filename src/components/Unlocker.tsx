import React, { useEffect, useState } from 'react';
import { isPropertySignature } from 'typescript';

export interface PropTypes {
	secret: string;
	addInput: (input: string) => void;
	success: boolean;
}

const unlockers = ['1', '2', '3', '4'];
const timer = (ms: number) => new Promise((res) => setTimeout(res, ms));

const animateAnswer = async (secret: string) => {
	resetUnlockers('disabled');
	await timer(1000);
	// Fill the unlocker items in sequence of the secret:
	for (const c of secret) {
		const unlockerElement = document.getElementById('unlocker' + c);
		if (unlockerElement) {
			unlockerElement.className = 'unlocker-item-filled';
			await timer(1000);
		}
	}
	resetUnlockers('enabled');
};

const resetUnlockers = (status: string) => {
	// Un-fill the unlocker items
	for (const c of unlockers) {
		const unlockerElement = document.getElementById('unlocker' + c);
		if (unlockerElement) {
			unlockerElement.className = 'unlocker-item ' + status;
		}
	}
};

const fillUnlockers = () => {
	for (const c of unlockers) {
		const unlockerElement = document.getElementById('unlocker' + c);
		if (unlockerElement) {
			unlockerElement.className = 'unlocker-item-filled';
		}
	}
};

export default function Unlocker(props: PropTypes) {
	useEffect(() => {
		if (props.success) {
			fillUnlockers();
			return;
		}
		animateAnswer(props.secret);
	}, [props.secret, props.success]);

	const onClickHandler = (input: string) => {
		const unlockerElement = document.getElementById('unlocker' + input);
		if (unlockerElement) {
			if (
				unlockerElement.className === 'unlocker-item-filled' ||
				unlockerElement.className === 'unlocker-item disabled'
			) {
				return;
			}
			unlockerElement.className = 'unlocker-item-filled';
			props.addInput(input);
		}
	};

	return (
		<div
			key={props.secret}
			className={
				props.success ? 'unlocker-container-exit' : 'unlocker-container'
			}
		>
			{unlockers.map((item) => {
				return (
					<div
						id={'unlocker' + item}
						className='unlocker-item disabled'
						onClick={() => onClickHandler(item)}
					></div>
				);
			})}
		</div>
	);
}
