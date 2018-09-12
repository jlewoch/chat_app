import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = props => {
    let input;
    return (
        <div>
           <input onKeyPress={(e)=> {
               if (e.key === 'Enter') {
                   props.dispatch(input.value,'me')
                   input.value = ''
               }
           }} type="text" ref={node=> input = node}/>
        </div>
    );
};

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default AddMessage;