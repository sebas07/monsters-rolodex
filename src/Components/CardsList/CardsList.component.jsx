import React from 'react';
import Card from '../Card/Card.component';
import './CardsList.styles.css';

const CardsList = ({ monstersList }) => {
    return (
        <div>
            <div className='monsters-container'>
            {
                monstersList.map((tmpMonster) => {
                    return <Card key={ tmpMonster.id } monster={ tmpMonster } />
                })
            }
            </div>
        </div>
    );
}

export default CardsList;
