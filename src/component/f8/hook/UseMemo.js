import React, { useMemo, useRef, useState } from 'react'
// useMemo(callback , dependencies)
// tranh thuc hien logic khong can thiet
// tranh thuc hien tinh toan lai khi chua them san pham vao list products
export default function UseMemo() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    const handleAdd = () => {
        setProducts(prev => {
            const newProducts = [...prev, { name, price: Number(price) }] // price : +price (convert to number)
            return newProducts
        })
        setName("");
        setPrice("");
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        console.log("tinh toan lai");
        const result = products.reduce((res, prod) => {
            return res + prod.price;
        }, 0)
        return result;
    }, [products])

    return (
        <div>
            <input ref={nameRef} value={name} onChange={e => setName(e.target.value)} />
            <input value={price} onChange={e => setPrice(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <div>
                Total: {total}
                <ul>
                    {products.map((product, index) => (
                        <li key={index}>
                            <div>{product.name} - {product.price}</div>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}
