const CheckOut = ({cart}) => {
    console.log(cart)
    return ( 
        <>
            <div className="container my-4 card">
            <div className="card-body">
                <div className="display-5 text-center">
                    Your Purchases
                </div>
                <div className="text-black">
                <hr/>
                </div>
                <div>
                <table className="table">
                    <thead className="text-center">
                        <tr>
                        <th scope="col display-6">Product</th>
                        <th scope="col display-6">Price</th>
                        <th scope="col display-6">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map( (item) => {
                                return <tr>
                                    <th scope="row "><img className="img-checkout ms-4" src={item.image} /></th>
                                    <td className="h3 text-center">{item.price} $</td>
                                    <td className="h3 text-center">{item.quantity}</td>
                                    </tr>
                            } )
                        }
                        
                    </tbody>
                    </table>
                </div>
                <div className="text-black">
                <hr/>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary"> Proccede </button>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default CheckOut;