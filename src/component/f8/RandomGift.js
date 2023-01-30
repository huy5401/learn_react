import React, { useState } from 'react'
const totalGifts = ['Iphone-4', 'a hot dog', 'a book'];

export default function RandomGift() {
    const [gift, setGift] = useState("haven't gift yet");
    const recieveGift = () => {
        setGift(totalGifts[Number(Math.floor(Math.random()*totalGifts.length))]);
    }
    return (
        <div>
            <h5>{gift}</h5>
            <button className='btn btn-primary' onClick={recieveGift}>Click</button>
        </div>
    )
}
