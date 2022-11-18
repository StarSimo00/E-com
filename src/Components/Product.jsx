import { useState } from "react";
import { Check, Plus } from "react-bootstrap-icons";

const Product = ({data , handleAdd}) => {
    const [ Clicked , setClicked ] = useState(false)
    return ( 
        <>
            <div className="animate__animated animate__backInRight card col-xl-4 col-md-6 col-sm-12">
            <img src={data.image} height={350} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text text">{data.description}</p>
                <p className="card-text">${data.price}</p>
                <button onClick={ () => {handleAdd() ; setClicked(true)} }   className="btn btn-success ms-1 ">{ Clicked ? <span className="animate__animated animate__bounce" > <Check/> Added </span> :  <span className="animate__animated animate__bounce"> <Plus/> Add To Cart</span> } </button>
                <button  className="btn btn-success ms-1 "> Detail </button>
            </div>
            </div>
        </>
     );
}
 
export default Product;