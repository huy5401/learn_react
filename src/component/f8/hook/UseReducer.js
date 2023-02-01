import { useReducer, useState } from 'react'

// Dung cho cac state phuc tap : trong mang co nhieu object, co nhieu mang con

// su dung useState
// 1. Xac dinh gia tri khoi tao cho state = 0
// 2. Xu ly tinh toan

// su dung useReducer
// 1. Khoi tao gia tri cho state = 0
// 2. Xu ly tinh toan
// 3. Tao reducer
// 4. Dispatch (Kich hoat action)

// tao init state
const initState = 0;
// tao action 
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// tao reducer (la 1 function)
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action')
    }
}


export default function UseReducer() {
    //const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initState); // nhan return ve array [initialState, dispatch]

    return (
        <>
            <div style={{ fontSize: '1.6rem', padding: '10px' }}>{count}</div>
            <div>
                <button onClick={() => {
                    dispatch(UP_ACTION);
                }}>Up</button>
                <button onClick={() => {
                    dispatch(DOWN_ACTION);
                }}>Down</button>
            </div>
        </>

    )
}
