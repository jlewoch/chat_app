import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({users}) => {

    return (
        <aside>
            <ul>
            {Object.keys(users).map((user)=> <li key={user}>{users[user].name}</li>)}
            </ul>
        </aside>
    );
};

Sidebar.propTypes = {
    users: PropTypes.object.isRequired
};

export default Sidebar;