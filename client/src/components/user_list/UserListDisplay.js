import React from 'react';

const UserListDisplay = ({ users }) => {
  return (
    <div className="list">
      {Object.keys(users).map(key => (
        <div className="card" key={key} data={key}>
          <i className="fas fa-user-circle" />
          {users[key].name}
        </div>
      ))}
    </div>
  );
};

export default UserListDisplay;
