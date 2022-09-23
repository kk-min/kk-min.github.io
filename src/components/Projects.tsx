import React from 'react';
import github_logo from '../assets/github_logo.png';
import { ItemCard } from './ItemCard';

export default function Projects() {
    const [selection, setSelection] = React.useState('all');

    return (
        <div className='content'>
            <div className='title-container'>
                <h1 className='tab-title'>Projects</h1>
                <a href='https://github.com/kk-min'>
                    <img className='github-logo' src={github_logo} />
                </a>
            </div>
            <div className='card-container'>
                <ItemCard
                    image=''
                    itemName='Frontend'
                    bodyText='Web development'
                    bottomText='React, TypeScript, Javascript, CSS'
                />
                <ItemCard
                    image=''
                    itemName='Backend'
                    bodyText='Android / Database / Networking'
                    bottomText='Java, Kotlin, C/C++'
                />
                <ItemCard
                    image=''
                    itemName='Miscellaneous'
                    bodyText='Bits and pieces'
                    bottomText='Python, VBA'
                />
            </div>
        </div>
    );
}
