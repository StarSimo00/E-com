import { Cart2 } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Navbar = ({cart}) => {
    return ( 
        <>
            <nav className=" animate__animated animate__fadeInDown navbar bg-success">
            <div className="container-fluid">
                <NavLink to="/E-com" className="navbar-brand text-white display-3 title"> E-commerce React App </NavLink>

                <div>
                    <NavLink to='/Cart'>
                        <button type="button" className="btn btn-success position-relative">
                            <Cart2 size={30} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
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