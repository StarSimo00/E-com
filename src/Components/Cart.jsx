import Cart_Product from "./Cart_Product";

const Cart = ({cart , increment , decrement , Delete , totale }) => {

    if(Object.keys(cart).length === 0){
        return <div className="alert alert-success" role="alert">
               No Items Has Been Added Yet .....
            </div>
            
    }


        return ( 
            <>
                <div className="container p-3 animate__animated animate__fadeInDown">
                    <div className="container row g-2">
                        { cart.map( (e) => {
                            return <Cart_Product key={e.id} data={e} Delete={() => Delete(e)} decrement={ () => decrement(e) } increment={() => increment(e)} />
                        } ) }
                    </div>
                </div>

                <nav className="sticky-bottom animate__animated animate__fadeInDown navbar bg-success">
                        <p className="h2 text-white"> Your Totale is : {totale()} </p>
                </nav>
            </>
         );
    }

    
export default Cart;