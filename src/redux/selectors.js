import {createSelector} from "reselect";

const getUserNumber = (state) => {
    return state.taskReducer.userNumber
}
export const getUserNumberSelector = createSelector(getUserNumber, (userNumber) => {
    return userNumber
})

const getRandomNumber = (state) => {
    return state.taskReducer.randomNumber
}
export const getRandomNumberSelector = createSelector(getRandomNumber, (randomNumber) => {
    return randomNumber
})

const getIsFinding = (state) => {
    return state.taskReducer.isFinding
}
export const getIsFindingSelector = createSelector(getIsFinding, (isFinding) => {
    return isFinding
})