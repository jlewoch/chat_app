import * as types from '../constants/ActionTypes'

let nextMessageId = 0

export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
})

export const addUser = user => ({
    type:types.ADD_USER,
    user
})

export const messageRecieved = (message, author) => ({
    type:types.MESSAGE_RECIEVED,
    id: nextMessageId++,
    message,
    author
})

export const populateUsersList = users => ({
    type:types.USERS_LIST,
    users
})