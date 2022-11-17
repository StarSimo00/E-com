import Cart_Handlers from "./Cart_Handlers";

const Cart_Product = ({ data , increment , decrement , Delete }) => {
    return ( 
        <>
        <div className="animate__animated animate__backInRight card col-4">
            <img src={data.image} height={350} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">${data.price}  <small>*{data.quantity} = { parseFloat(data.price) * parseFloat(data.quantity) } </small>  </p>
                <Cart_Handlers decrement={decrement} Delete={Delete} increment={increment} quantity={data.quantity} />
            </div>
            </div>
        </>
     );
}
 
export default Cart_Product;

