import { Check2Circle } from "react-bootstrap-icons";

const ConfirmPurchase = () => {
    return ( 
        <>
                <div className="m-3 p-3">
                    <div className="container card">
                        <div className="display-1 d-flex justify-content-center">
                            <Check2Circle/>
                        </div>
                        <h1 className="display-3 d-flex justify-content-center">
                            Done Your Purchase Done
                        </h1>
                        <h2 className="display-3 d-flex justify-content-center">
                            Check Your Email For More Details
                        </h2>
                    </div>
                </div>
        </>
     );
}
 
export default ConfirmPurchase;