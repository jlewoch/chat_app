import React from 'react';
import { Link } from 'react-router-dom';
const RoomsDisplay = ({ setRoom, rooms }) => {
  console.log(rooms);
  return (
    <div>
      {rooms.map(room => (
        <div onClick={() => setRoom(room._id)}>{room.name}</div>
      ))}
    </div>
  );
};

export default RoomsDisplay;
