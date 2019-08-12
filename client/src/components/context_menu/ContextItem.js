import React from 'react';

const ContextItem = (title, func) => {
  return <div onClick={func}>{title}</div>;
};

export default ContextItem;
