import React, { useState } from 'react'
import TodoUseEffect from '../f8/hook/TodoUseEffect';
import UseEffect from '../f8/hook/UseEffect';
import RandomGift from '../f8/RandomGift';
import Banner from '../Header/Banner'
import CartModal from './CartModal';
import data from './data.json'
import Modal from './Modal';
import Product from './Product';
import TableTest from './TableTest';

export default function Review() {

    const dataProd = data;
    const [productDetail, setProductDetail] = useState({
        "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110
    })

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product])
    };
    const showDetail = (currentProduct) => { setProductDetail(currentProduct) };
    return (
        // useEffect(callback) - re-render sau khi compenent mounted
        // useEffect(callback, []) - render once sau khi component mounted
        <div>
            <Banner></Banner>
            {/* <Modal content={productDetail}></Modal>
            <CartModal data={cart}></CartModal>
            <div className='container'>
                <div className='row'>
                    {dataProd.map((prod, index) => {
                        return (
                            <div className='col-3' key={index} style={{ margin: '10px 0' }}>
                                <Product data={prod} showDetail={showDetail} addToCart={addToCart}></Product>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='text-center'>
                <RandomGift></RandomGift>
            </div> */}
            <UseEffect></UseEffect>
            <TodoUseEffect></TodoUseEffect>
        </div>
    )
}
