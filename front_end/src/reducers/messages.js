import * as types from '../constants/ActionTypes'

const messages = (state = [], action) => {
    switch (action.type) {
        case types.MESSAGE_RECIEVED:
        console.log('add');
        
            return [...state, {
                message: action.message,
                author: action.author,
                id: action.id
            }]
        default:
            return state;
    }
}
export default messages