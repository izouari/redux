import React from 'react'

const initialStateUser = {
    name: 'AAA',
    age: 30
}

export const UserReducer = (state = initialStateUser, action) => {
    
    switch(action.type) {
        case 'USER_SET_NAME': 
        return {
            ...state,
            name: action.payload
        }

        case 'USER_SET_AGE': 
        return {
            ...state,
            age: action.payload
        }
        default: return state;
    }
}