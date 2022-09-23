import * as React from 'react';
import '../css/TabContent.css';

export interface PropTypes {
    image: string;
    itemName: string;
    bodyText: string;
    bottomText: string;
    onClickHandler: () => void;
}

export function ItemCard(props: PropTypes) {
    return (
        <div
            id={props.itemName}
            className='item-card'
            onClick={props.onClickHandler}
        >
            <img className='card-image' src={props.image} />
            <h2 className='card-title'>{props.itemName}</h2>
            <h4 className='card-description'>{props.bodyText}</h4>
            <h4 className='card-footer'>{props.bottomText}</h4>
        </div>
    );
}
