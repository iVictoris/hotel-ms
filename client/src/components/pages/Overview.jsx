import React from 'react';
import { rooms } from '../../data/rooms';
import { RoomIcon } from '../';

const Overview = () => {
    const roomIcons = Object.keys(rooms).map((roomId) => {
        const { number, status } = rooms[roomId];
        const roomProps = {
            number,
            status,
            key: roomId,
        };
        return <RoomIcon {...roomProps} />;
    });
    return <div className="rooms">{roomIcons}</div>;
};

export default Overview;
