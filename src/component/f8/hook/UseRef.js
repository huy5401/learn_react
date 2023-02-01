import React, { useCallback, useRef, useState } from 'react'
import UseCallBackMemo from './UseCallBackMemo';

// luu cac gia tri qua mot tham chieu o ben ngoai function component
// = let timerId 
// ref element : tra ve element 
export default function UseRef() {
    const [count, setCount] = useState(60);
    let timerId = useRef()
    const handleStart = useCallback(() => {
        timerId.current = setInterval(() => {
            setCount(pre => pre - 1);
        }, 1000);
    },[])

    const handleStop = () => {
        clearInterval(timerId.current);
    }
    return (
        <div>
            <div>{count}</div>
            <UseCallBackMemo  onStart = {handleStart}></UseCallBackMemo>
            <div className='d-flex' style={{width: '100px'}}>
                {/* <button onClick={handleStart}>start</button> */}
                <button onClick={handleStop}>stop</button>
            </div>
        </div>
    )
}
