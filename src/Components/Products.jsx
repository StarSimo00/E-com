import Product from "./Product";

const Products = ({data  , handleAdd}) => {
    if( data === null ){
        return ''
      }
    return ( 
        <>
            <div className=" animate__fadeInDown">
                <h1 className="animate__animated animate__fadeInDown display-5" > PRODUCTS </h1>
                <div className="container">
                    <div className="row">
                        { data.map( ( product ) => {
                            return <Product handleAdd={ () => handleAdd(product)} key={product.id} data={product} />
                        } ) }
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Products;