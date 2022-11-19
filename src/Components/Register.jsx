import { useContext ,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import CCV from "./CCV";

const Register = () => {

    const [ userDetails  , setUserDetails ] = useContext(UserContext)
    const [ Fn , setFn ] = useState('')
    const [ Ln , setLn ] = useState('')
    const [ Email , setEmail ] = useState('')
    const [ Pass , setPass ] = useState('')
    const [ Gender , setGender ] = useState('')

    const goto = useNavigate()

    if(Object.keys(userDetails).length > 0){
        return <>
            <div className="container"> 
                <h1 className="container display-3 text-success animate__animated animate__fadeInDown"> Enter Your Card Info </h1>
                <CCV/>    
             </div>
        </>
    }

    

    const getAll = () => {
        let userInfo = {}
        userInfo.FirstName = Fn
        userInfo.LastName = Ln
        userInfo.Email = Email
        userInfo.Pass = Pass
        userInfo.Gender = Gender
        setUserDetails([userInfo])
        goto( '/E-com' )
    }

    


    return ( 
        <div className="container p-2 animate__animated animate__fadeInDown">
            <div className="container p-2">
            <form >
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label"> FirstName </label>
                    <input onChange={ (e) => setFn( e.currentTarget.value ) } type="text" className="form-control"  aria-describedby="emailHelp"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label"> LastName </label>
                    <input onChange={ (e) => setLn( e.currentTarget.value ) } type="text" className="form-control"  aria-describedby="emailHelp"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={ (e) => setEmail( e.currentTarget.value ) } type="email" className="form-control"  aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={ (e) => setPass( e.currentTarget.value ) } type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-4 form-check">
                <select onChange={ (e) => setGender(e.currentTarget.value) } className="form-select" aria-label="Default select example">
                <option defaultValue={''}>Select Ur gender </option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                </select>
                </div>
                <button onClick={ () => getAll() } type='button' className="btn btn-success">Submit Ur Info</button>
            </form>
            </div>
        </div>
     );
}
 
export default Register;