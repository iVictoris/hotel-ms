import React from 'react';

const RoomIcon = ({ status, number }) => {
    return <div className={`room icon ${status}`.trim()}>{number}</div>;
};

export default RoomIcon;
