import React, {useState, useEffect, useReducer} from 'react';
import './App.css'



// const Test = () => {
//     useEffect(() => {
//         console.log('mount');
//
//
//         return () => {
//             console.log('unmount');
//         }
//     }, []);
//     return (
//         <h1>Will be unmounted</h1>
//     )
// }


const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TODO_ITEM' : {
            return action.payload;
        }
        case 'RESET_TODO' : {
            return null;
        }
        case 'TOGGLE_TODO_COMPLETED' : {
            return {
                ...state,
                completed: !state.completed
            };
        }
        case 'CHANGE_TODO_TITLE' : {
            return {
                ...state,
                title: action.payload
            };
        }
        default: {
            console.error('not valid action', action.type);
            return state;
        }
    }
}
const initialState = null;


export default function App() {

    const [counter, setCounter] = useState(1);
    // const [user, setUser] = useState(null);
    // const [todo, setTodo] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialState);

    const [inputValue, inputChange] = useState('');



    // const fetchData = async () => {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`).then(value => value.json());
    //     setTodo(response);
    // }

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`).then(value => value.json());
        dispatch({type: 'SET_TODO_ITEM', payload: response});
    }

    useEffect(() => {
        fetchData();
    }, [counter]);





    const handleInc = () => {
        setCounter((prevState) => prevState + 1);
    }
    // const handleReset = () => {
    //     setCounter(1);
    // }
    // const handleSetUser = () => {
    //     setUser({
    //         name: 'test',
    //         age: 23
    //     });
    // }
    // const handleResetUser = () => {
    //     setUser(null);
    // }

    // const handleResetTodo = () => {
    //     setTodo(null);
    // }

    const handleResetTodo = () => {
        dispatch({type: 'RESET_TODO'});
    }

    const handleTodoCompleted = () => {
        dispatch({type: 'TOGGLE_TODO_COMPLETED'});
    }

    const handleTodoTitle = () => {
        dispatch({type: 'CHANGE_TODO_TITLE', payload: inputValue});
    }




    return (
        <div className={'app'}>
            <h1>Counter: {counter}</h1>

            {
                // counter !== 2 && <Test/>
            }

            <button onClick={handleInc}>inc</button>
            {/*<button onClick={handleReset}>reset</button>*/}

            {/*<button onClick={handleSetUser}>set user</button>*/}
            {/*<button onClick={handleResetUser}>reset user</button>*/}
            {/*{*/}
            {/*    user && <h2>{user.name} - {user.age}</h2>*/}
            {/*}*/}


            {/*<button onClick={handleResetTodo}>reset todo</button>*/}
            {/*{*/}
            {/*    todo && <h2>{todo.id} - {todo.title} - {todo.completed.toString()}</h2>*/}
            {/*}*/}
            <button onClick={handleResetTodo}>reset todo</button>
            <button onClick={handleTodoCompleted}>toggle</button>

            <input type="text" value={inputValue} onChange={({target: {value}}) => inputChange(value)}/>
            <button onClick={handleTodoTitle}>change title</button>

            {
                state && <h2>{state.id} - {state.title} - {state.completed.toString()}</h2>
            }
        </div>
    )
}