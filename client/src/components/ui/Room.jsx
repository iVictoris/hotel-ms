import React from 'react';
import { rooms } from '../../data/rooms';

const Room = ({
    className = '',
    match: {
        params: { id },
    },
}) => {
    const { bed, bath, number } = rooms[id];
    return (
        <div className={className}>
            <h3>
                <span>Room:</span> <span>{number}</span>
            </h3>
            <section>
                <div className="field">
                    <p>Beds:</p>
                    <p>{bed}</p>
                </div>
                <div className="field">
                    <p>Baths:</p>
                    <p>{bath}</p>
                </div>
            </section>
        </div>
    );
};

export default Room;
