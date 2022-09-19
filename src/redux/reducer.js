let initialState = {
    userNumber: null,
    randomNumber: -1,
    isFinding: false,
}

const TaskReducer = (state = initialState, actions) => {
    switch (actions.type) {

        case 'CHANGE_USER_NUMBER':
            let randomNumber
            if (state.randomNumber >= 0) {
                randomNumber = -1
            } else {
                randomNumber = state.randomNumber
            }
            return {...state, userNumber: actions.newUserNumber, randomNumber: randomNumber}

        case 'CHANGE_RANDOM_NUMBER':
            return {...state, randomNumber: Math.floor(Math.random() * 10)}

        case 'CHANGE_IS_FINDING':
            let isFinding
            const findMatches = () => {
                let numbersArray = state.userNumber.toString().split('')
                if (numbersArray.includes(state.randomNumber.toString())) {
                    isFinding = true
                } else if (!numbersArray.includes(state.randomNumber.toString())) {
                    isFinding = false
                }
            }
            findMatches()
            return {...state, isFinding: isFinding}

        default:
            return state
    }
}

export const actions = {
    changeUserNumber: (newUserNumber) => ({type: 'CHANGE_USER_NUMBER', newUserNumber}),
    changeRandomNumber: () => ({type: 'CHANGE_RANDOM_NUMBER'}),
    toggleIsFinding: () => ({type: 'CHANGE_IS_FINDING'})
}

export default TaskReducer