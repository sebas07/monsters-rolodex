import React from 'react';
import './Card.styles.css';

const Card = ({ monster }) => {
    return (
        <div className='monster-card'>
            <img 
                className='monster-picture' 
                src={ `https://robohash.org/${ monster.id }?set=set2` } 
                alt="monster" 
            />
            <h2>{ monster.name }</h2>
            <h3>{ monster.email }</h3>
        </div>
    );
}

export default Card;
