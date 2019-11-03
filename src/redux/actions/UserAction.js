export const setName = (name) => {
    return {
        type: 'USER_SET_NAME',
        payload: name
    }
}

export const setAge = (age) => {
    return {
        type: 'USER_SET_AGE',
        payload: age
    }
}