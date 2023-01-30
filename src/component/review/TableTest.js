import React from 'react'

export default function TableTest(props) {
    const showName = () => {
        return props.data.map((product, index) => {
            return (
                <div key={index}>
                    {product.name}
                </div>
            )

        })
    }
    return (
        <div>
            {showName()};
        </div>
    )
}
