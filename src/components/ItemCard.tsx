import * as React from 'react';
import '../css/TabContent.css';

export interface PropTypes {
    image: string;
    itemName: string;
    bodyText: string;
    bottomText: string;
}

export function ItemCard(props: PropTypes) {
    const onClickHandler = () => {
        alert('Test! :)');
    };

    return (
        <div id={props.itemName} className='item-card' onClick={onClickHandler}>
            <img className='card-image' src={props.image} />
            <h2 className='card-title'>{props.itemName}</h2>
            <h4 className='card-description'>{props.bodyText}</h4>
            <h4 className='card-footer'>{props.bottomText}</h4>
        </div>
    );
}
