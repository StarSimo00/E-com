import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";



const CheckOut = ({cart , total}) => {

    const [ userDetails ] = useContext(UserContext)

    console.log(userDetails)

        
    const send = () => {
        window.Email.send({
            Host : "smtp.elasticemail.com",
            Username : "sasimo2003@gmail.com",
            Password : "73FF60BCEA73111C21D3D3FECBA55C2016DE",
            To : userDetails[0].Email ,
            From : "sasimo2003@gmail.com",
            Subject : " Your Purchases From Our Site Just Testing ",
            Body : `<div className="display-5 text-center">
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
                        ${
                            cart.map( (item) => {
                                return <tr key={item.id}>
                                    <th scope="row "><img className="img-checkout ms-4" src={item.image} alt={item.title} /></th>
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
                </div>`
        }).then(
          message => alert(message)
        );
    }

    

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
                    <div className="card ms-5 p-2 "> Your Total is {total()} $ </div>
                    <NavLink onClick={ () => send() } to='/ConfirmPurchase' className="btn btn-success ms-3"> Confirm Your Purchases </NavLink>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default CheckOut;