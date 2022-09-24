import React from 'react';

export interface PropTypes {
	secret: string;
	addInput: (input: string) => void;
}

const unlockers = ['1', '2', '3', '4'];

export default function Unlocker(props: PropTypes) {
	const onClickHandler = (input: string) => {
		const unlockerElement = document.getElementById('unlocker' + input);
		if (unlockerElement) {
			if (unlockerElement.className === 'unlocker-item-filled') {
				return;
			}
			unlockerElement.className = 'unlocker-item-filled';
			props.addInput(input);
		}
	};

	return (
		<div className='unlocker-container'>
			{unlockers.map((item) => {
				return (
					<div
						id={'unlocker' + item}
						className='unlocker-item'
						onClick={() => onClickHandler(item)}
					></div>
				);
			})}
		</div>
	);
}
