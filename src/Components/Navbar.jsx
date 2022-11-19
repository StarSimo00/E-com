import { useContext } from "react";
import { Cart2, PersonBadge } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = ({cart}) => {

    const [ userDetails ] = useContext(UserContext)

    let gender = ''
    console.log(userDetails);

    if(Object.keys(userDetails).length > 0){
        if( userDetails[0].Gender === 'Men' ){
            gender = 'Mr.'
        }else{
            gender = 'Miss.'
        }
    }


    return ( 
        <>
            <nav className=" animate__animated animate__fadeInDown navbar bg-success">
            <div className="container-fluid">
                <NavLink to="/E-com" className="navbar-brand text-white display-3 title"> E-commerce React App </NavLink>
                
                <div>
                     { Object.keys(userDetails).length > 0 ? <p className="display-6 text-white my-2"> Hi {gender} {userDetails[0].FisrtName}  {userDetails[0].LastName}</p> : '' } 
                </div>

                <div>
                    
                    <NavLink to='/Register'>
                        <button className="btn btn-success position-relative">
                            <PersonBadge size={30}/>
                        </button>
                    </NavLink>

                    <NavLink to='/Cart'>
                        <button type="button" className="btn btn-success position-relative">
                            <Cart2 size={30} />
                            <span className="position-absolute top-0 start-30 translate-middle badge rounded-pill bg-danger">
                                {Object.keys(cart).length === 0 ? '' : Object.keys(cart).length }
                            </span>
                            </button>
                    </NavLink>
                </div>
            </div>
            </nav>
        </>
     );
}
 
export default Navbar;