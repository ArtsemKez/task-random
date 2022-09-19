import React, {useEffect, useState} from 'react';
import styles from './task.module.css'

const TaskOnHooks = () => {

    const [userNumber, setUserNumber] = useState('')
    const [randomNumber, setRandomNumber] = useState(-1)
    const [isFinding, setIsFinding] = useState(false)

    const changeInput = (event) => {
        if (randomNumber >= 0) {
            setRandomNumber(-1)
        }
        setUserNumber(event.currentTarget.value)
    }

    const onKeyEnter = (event) => {
        const generateRandomNumber = () => {
            return Math.floor(Math.random() * 10)
        }
        if (event.key === 'Enter' && userNumber) {
            setRandomNumber(generateRandomNumber)
        }

    }

    useEffect(() => {
        if (randomNumber >= 0) {
            const numbersArray = userNumber.toString()
            if (numbersArray.includes(randomNumber.toString())) {
                setIsFinding(true)
            } else if (!numbersArray.includes(randomNumber.toString())) {
                setIsFinding(false)
            }
        }
    }, [randomNumber])

    return (
        <div className={styles.Body}>
            <div className={styles.Hint}>
                {!userNumber ? 'Введите число' : 'А теперь нажмите "Enter"'}
            </div>
            <input autoFocus
                   value={userNumber}
                   className={styles.Input}
                   type={"number"} onChange={changeInput}
                   placeholder={'Введите число'}
                   onKeyDown={onKeyEnter}
            />
            <div className={styles.Info}>
                {userNumber ? `Вы ввели: ${userNumber} ` : null}
                {randomNumber >= 0 ? `\n Рандомная цифра: ${randomNumber} ` : null}
                {randomNumber >= 0 ? `и она ${isFinding ? '' : 'не'} встречается в числе` : null}
            </div>
        </div>
    )
}

export default TaskOnHooks