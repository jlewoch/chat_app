import React from 'react';
import moment from 'moment';

const Message = ({ message, type, from, sent }) => {
  return (
    <div className={`flex message ${from === '' && 'system'} `}>
      <i className="fas fa-user-circle" />
      <div>
        <h5 className="header">
          {from || 'System'}
          <span className="time">{moment(sent).format('LT')}</span>
        </h5>

        <p className="text">{message}</p>
      </div>
    </div>
  );
};

export default Message;
