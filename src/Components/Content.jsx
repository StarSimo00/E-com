import Categories from "./Categories";
import Products from "./Products";

const Content = ({data , get_data , handleAdd }) => {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-3">
                    <Categories get_data={get_data}/>
                </div>
                <div className="col-9">
                    <Products handleAdd={handleAdd} data={data}/>
                </div>
            </div>
        </div>
     );
}
 
export default Content;