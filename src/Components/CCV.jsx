import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";

const CCV = () => {

    const [ userDetails , setUserDetails ] = useContext(UserContext)
    const [ cardNumber , setCardNumber ] = useState(0)
    const [ expDate , setExpDate ] = useState(0)
    const [ ccv , setCcv ] = useState(0)


    const saveInfo = () => {
        userDetails[0].CardNumber = cardNumber
        userDetails[0].expDate = expDate
        userDetails[0].ccv = ccv
        return setUserDetails( userDetails )
    }

    return ( 
        <>
        <div className="container-fluid animate__animated animate__fadeInDown">
	<div className="row justify-content-center">
					<div className="col-md-7 col-sm-12 p-0 box">
						<div className="card rounded-0 border-0 card2" id="paypage">
							<div className="form-card">
			                    <h2 id="heading2" className="text-success">Payment Method</h2>
			                    <div className="radio-group">
			                        <div className='radio' data-value="credit"><img src="https://i.imgur.com/28akQFX.jpg" width="200px" height="60px"/></div>
			                        <br/>
			                    </div>
			                    <label className="pay">Name on Card</label>
			                    <input type="text" disabled name="holdername" placeholder={ `${userDetails[0].FirstName} ${userDetails[0].LastName}` }/>
			                    <div className="row">
			                        <div className="col-8 col-md-6">
			                            <label className="pay">Card Number</label>
			                            <input onChange={ (e) => setCardNumber(e.currentTarget.value) } type="text" name="cardno" id="cr_no" placeholder="0000-0000-0000-0000" minlength="19" maxlength="19"/>
			                        </div>
			                        <div className="col-4 col-md-6">
			                            <label className="pay">CVV</label>
			                            <input onChange={ (e) => setCcv(e.currentTarget.value) } type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" className="placeicon" minlength="3" maxlength="3"/>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-12">
			                            <label className="pay">Expiration Date</label>
			                        </div>
			                        <div className="col-md-12">
			                            <input onChange={ (e) => setExpDate(e.currentTarget.value) } type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5"/>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-6">
			                            <NavLink to='/CheckOut' onClick={ () => saveInfo() } > <input type="submit" value="Confirm Payement" className="btn btn-info "/></NavLink>
			                        </div>
			                    </div>
			                </div>
						</div>
					</div>
				</div>
			</div>

        </>
     );
}
 
export default CCV;