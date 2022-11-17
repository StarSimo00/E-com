import Categories from "./Categories";
import Products from "./Products";

const Content = ({data , get_data , handleAdd }) => {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-xl-3 col-lg-12 col-sm-12">
                    <Categories get_data={get_data}/>
                </div>
                <div className="col-xl-9 col-lg-12 col-sm-12">
                    <Products handleAdd={handleAdd} data={data}/>
                </div>
            </div>
        </div>
     );
}
 
export default Content;