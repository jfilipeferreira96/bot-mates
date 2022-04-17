import React from 'react';
import Card from './Card';

const CardList = ({ bots }) => {
    return (
        <div>
            {
                bots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={bots[i].id}
                            name={bots[i].name}
                            email={bots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;