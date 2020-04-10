import React from 'react';
import { rooms } from '../data/rooms';
import { RoomIcon } from './';

/**
 * * MVP
 * * see available rooms at a glance,
 * ! see detailed view of room
 *      ! should be able:
 *          ! to book room here
 *          ! schedule cleaning
 *          ! block room for any issue
 * ! book rooms
 *      ! should:
 *          ! look up customer by email/phone
 *          ! proceed without customer sign up
 * ! add rooms,
 * ! checkout guests of room
 * ! hotel auth - login/register
 *      ! Write tests
 * ! customer auth - login/register
 *      ! Write tests
 *
 * * Optional Features:
 * ? payment system
 *
 */

function App() {
    const roomIcons = Object.keys(rooms).map((roomId) => {
        const { number, status } = rooms[roomId];
        const roomProps = {
            number,
            status,
            key: roomId,
        };
        return <RoomIcon {...roomProps} />;
    });
    return (
        <div className="app">
            <div className="rooms">{roomIcons}</div>
        </div>
    );
}

export default App;
