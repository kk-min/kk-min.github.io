import React, { useState, useEffect } from 'react';
import padlock_default from '../assets/padlock_default.png';
import padlock_open from '../assets/padlock_open.png';
import padlock_error from '../assets/padlock_error.png';

export interface PropTypes {
    secret: string;
    input: string;
    lockState: string;
    setLockState: React.Dispatch<React.SetStateAction<string>>;
}

export default function Lock(props: PropTypes) {
    useEffect(() => {
        console.log('Lock rendered.');
    }, [props.lockState]);

    const onClickHandler = () => {
        const lockElement = document.getElementById('lock');
        if (lockElement) {
            // Input not completely filled
            if (props.input.length < props.secret.length) {
                lockElement.classList.add('shaking');
                setTimeout(() => {
                    lockElement.classList.remove('shaking');
                }, 300);
            } else if (props.input !== props.secret) {
                // Input is incorrect
                lockElement.className = 'lock-failed';
                props.setLockState('error');
            } else {
                // Input completely filled and correct
                props.setLockState('open');
            }
        }
    };

    return (
        <div className='lock-container'>
            <img
                id='lock'
                className={
                    'lock' +
                    (props.lockState === 'error'
                        ? '-failed'
                        : props.lockState === 'open'
                        ? '-exit'
                        : '')
                }
                src={
                    props.lockState === 'default'
                        ? padlock_default
                        : props.lockState === 'open'
                        ? padlock_open
                        : padlock_error
                }
                onClick={onClickHandler}
            ></img>
        </div>
    );
}
