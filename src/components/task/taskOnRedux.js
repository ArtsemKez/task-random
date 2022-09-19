import React, {useEffect} from 'react';
import styles from './task.module.css'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../redux/reducer";
import {getIsFindingSelector, getRandomNumberSelector, getUserNumberSelector} from "../../redux/selectors";

const TaskOnRedux = () => {

    const dispatch = useDispatch()

    const userNumber = useSelector(getUserNumberSelector)
    const randomNumber = useSelector(getRandomNumberSelector)
    const isFinding = useSelector(getIsFindingSelector)

    const chaneInput = (event) => {
        dispatch(actions.changeUserNumber(event.currentTarget.value))
    }

    const onKeyEnter = (event) => {
        if (event.key === 'Enter' && userNumber) {
            dispatch(actions.changeRandomNumber())
        }
    }

    useEffect(() => {
        if (randomNumber >= 0) {
            dispatch(actions.toggleIsFinding())
        }
    }, [randomNumber])

    return (
        <div className={styles.Body}>
            <div className={styles.Hint}>
                {!userNumber ? 'Введите число' : 'А теперь нажмите "Enter"'}
            </div>
            <input autoFocus
                   className={styles.Input}
                   type={"number"} onChange={chaneInput}
                   placeholder={'Введите число'}
                   onKeyDown={onKeyEnter}
            />
            <div className={styles.Info}>
                {userNumber ? `Вы ввели: ${userNumber} ` : null}
                {randomNumber >= 0 ? `\n Рандомная цифра: ${randomNumber} ` : null}
                {randomNumber >= 0 ? `и она ${isFinding ? '' : 'не'} встречается в числе` : null}
            </div>
        </div>
    );
};

export default TaskOnRedux;