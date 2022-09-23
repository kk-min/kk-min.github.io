import React from 'react';
import github_logo from '../assets/github_logo.png';

export default function Projects() {
    return (
        <div className='content'>
            <div className='title-container'>
                <h1 className='tab-title'>Projects</h1>
                <a href='https://github.com/kk-min'>
                    <img className='github-logo' src={github_logo} />
                </a>
            </div>
        </div>
    );
}
