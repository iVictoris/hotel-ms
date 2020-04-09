import React from 'react';
import { rooms } from '../data/rooms';

function App() {
    const roomIcons = Object.keys(rooms).map((roomId) => {
        const { number, status } = rooms[roomId];
        return (
            <div className={`room icon ${status}`.trim()} key={roomId}>
                {number}
            </div>
        );
    });
    return (
        <div className="app">
            <div className="rooms">{roomIcons}</div>
        </div>
    );
}

export default App;
