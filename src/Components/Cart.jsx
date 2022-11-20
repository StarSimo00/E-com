import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";
import Cart_Product from "./Cart_Product";

const Cart = ({cart , increment , decrement , Delete , totale }) => {

    const [ userDetails ] = useContext(UserContext)
    
    
    if(Object.keys(cart).length === 0){
        return <div className="fixed-bottom alert alert-success" role="alert">
               No Items Has Been Added Yet .....
            </div>
            
    }

    // const send = () => {
    //     window.Email.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "sasimo2003@gmail.com",
    //         Password : "73FF60BCEA73111C21D3D3FECBA55C2016DE",
    //         To : 'rachidi.mohamedtr@gmail.com',
    //         From : "sasimo2003@gmail.com",
    //         Subject : "This is the subject",
    //         Body : "And this is the body"
    //     }).then(
    //       message => alert(message)
    //     );
    // }



        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-8 p-3 animate__animated animate__fadeInDown">
                        <div className="row g-1">
                            { cart.map( (e) => {
                                return <Cart_Product key={e.id} data={e} Delete={() => Delete(e)} decrement={ () => decrement(e) } increment={() => increment(e)} />
                            } ) }
                        </div>
                    </div>
                    <div className="col-xl-4 my-2 animate__animated animate__fadeInDown">
                    <div className="card p-4 m-2">
                            <div className="card-body">
                                {/* <p className="display-5"> Your Cart : </p> */}
                                <p className="display-6"> Your Totale is : {totale()} $ </p>
                                <NavLink to={ Object.keys(userDetails).length === 0 ? '/Register' : '/CCV' } /*{onClick={ () => send() }}*/  className='btn btn-danger'>  { Object.keys(userDetails).length === 0 ? "You Need To Be Logged To Proceed To Checkout" : 'Procced To Checkout' }   </NavLink>
                            </div>
                            </div>
                            <div>
                            </div>
                    </div>
                </div>
            </div>
         );
    }

    
export default Cart;