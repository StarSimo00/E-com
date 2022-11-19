

const CheckOut = ({cart , total}) => {
    return ( 
        <>
            <div className="container my-4 card animate__animated animate__fadeInDown">
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
                                return <tr key={item.id}>
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
                    <div className="card ms-3 p-1 "> Ur Total : {total()} $ </div>
                    <button className="btn btn-success ms-3"> Proceed </button>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default CheckOut;