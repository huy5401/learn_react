export default function Product(props) {
    let { imgUrl, name, price } = props.data;

    return (
        <div>

            <div className="card" style={{ width: '100%', margin: '0' }}>
                <img src={imgUrl} className="card-img-top" alt="img prod" />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '1rem' }}>{name}</h5>
                    <p className="card-text">{price}</p>
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { props.showDetail(props.data) }}>
                            View more
                        </button>
                        <button type="button" className="btn btn-success" onClick={() => { props.addToCart(props.data); alert("Add to cart successfully !!!")}}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
