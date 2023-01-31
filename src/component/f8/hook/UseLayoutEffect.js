import React, { useLayoutEffect, useState } from 'react'

// 1. cap nhat lai state.
// 2. cap nhat lai DOM (mutated)
// 3. goi cleanup neu deps thay doi (sync)
// 4. doi useLayoutEffect callback (sync)
// 5. render lai UI

// useLayoutEffect goi callback truoc khi re-render (useEffect goi callback sau khi re-render); 

export default function UseLayoutEffect() {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if(count > 3) setCount(0)
    }, [count]);
    const handleEnhance = () => {
        setCount(pre => pre + 1);
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={handleEnhance}>Click</button>
        </div>
    )
}
