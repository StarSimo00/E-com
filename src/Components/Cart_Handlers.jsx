const Cart_Handlers = ({quantity , increment , decrement , Delete}) => {
    return ( 
        <>
            <button onClick={decrement} className={ quantity < 1 ? "btn btn-outline-success disabled" : 'btn btn-outline-success' }> - </button>
            <span> {quantity} </span>
            <button  onClick={increment} className="btn btn-outline-success"> + </button>
            <button  onClick={Delete}  className="btn btn-outline-danger ms-2" > Delete </button>
        </>
     );
}
 
export default Cart_Handlers;