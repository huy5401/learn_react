import React, { memo } from 'react'

// 1. memo() -> higher order component (HOC)
// re render khi props thay doi

// 2. useCallback() 
function UseCallBackMemo({onStart}) {
    console.log('re-render');
    return (
        <>
            <div>UseCallBackMemo </div>
            <button onClick={onStart}>start</button>
        </>
    )
}
export default memo(UseCallBackMemo)
