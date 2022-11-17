import Cart_Product from "./Cart_Product";

const Cart = ({cart}) => {
    if(Object.keys(cart).length === 0){
        return <div class="alert alert-success" role="alert">
               No Items Has Been Added Yet .....
            </div>
    }

        return ( 
            <>
                <div className="container p-3 animate__animated animate__fadeInDown">
                    <div className="row g-1 ms-1">
                        { cart.map( (e) => {
                            return <Cart_Product key={e.id} data={e} />
                        } ) }
                    </div>
                    
                </div>
            </>
         );
    }

    
export default Cart;