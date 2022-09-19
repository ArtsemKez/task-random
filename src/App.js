import './App.css';
import TaskOnRedux from "./components/task/taskOnRedux";
import TaskOnHooks from "./components/task/taskOnHooks";
import {useState} from "react";

function App() {

    const [isMethod, setIsMethod] = useState('withHooks')

    return (
        <div>
            {
                isMethod === 'withHooks' ?
                    <div>
                        <TaskOnHooks/>
                        <div style={{width: '500px', marginInline: 'auto', marginTop: '20px'}}>
                            Реализованно не React Hooks
                            <button onClick={() => {
                                setIsMethod('withRedux')
                            }}>Посмотреть на Redux</button>
                        </div>
                    </div>
                    : isMethod === 'withRedux' ?
                        <div>
                            <TaskOnRedux/>
                            <div style={{width: '500px', marginInline: 'auto', marginTop: '20px'}}>
                                Реализованно не Redux
                                <button onClick={() => {
                                    setIsMethod('withHooks')
                                }}>Посмотреть на React Hooks </button>
                            </div>
                        </div> : null
            }
        </div>
    );
}

export default App;
