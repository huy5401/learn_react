import React from 'react'

export default function CartModal(props) {
    const showCart = () => {
        if(props.data.length > 0){
            return props.data.map((cartItem, index) => {
                return (
                    <tr key={index}>
                        <th className='text-center align-middle' scope="row">{index + 1}</th>
                        <td className='text-center' style={{width: '30%'}}><img src={cartItem.imgUrl} alt='huyhuy' style={{ width: '30%' }}></img></td>
                        <td className='align-middle text-center'>{cartItem.name}</td>
                        <td className='align-middle text-center'>{cartItem.price}</td>
                    </tr>
                )
            })
        }else{
            return (
                <div> Cart is empty</div>
            )
        }
        
    }
    return (
        <div>

            <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{ minWidth: '900px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cartModalLabel">Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body" >
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className='text-center' scope="col">#</th>
                                            <th className='text-center' scope="col">Image</th>
                                            <th className='text-center' scope="col">Name</th>
                                            <th className='text-center' scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {showCart()}
                                    </tbody>
                                </table>


                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
