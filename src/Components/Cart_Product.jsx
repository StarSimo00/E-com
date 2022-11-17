import Cart_Handlers from "./Cart_Handlers";

const Cart_Product = ({ data }) => {
    return ( 
        <>
        <div className="animate__animated animate__backInRight card col-4 m-1">
            <img src={data.image} height={350} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">${data.price}</p>
                <Cart_Handlers/>
            </div>
            </div>
        </>
     );
}
 
export default Cart_Product;

