import { useEffect, useState } from "react";

const Categories = ({get_data}) => {

    const [ Categories , setCategories ] = useState(null)

    const fetch_Categories = async () => {
        const fetch_Categories = await fetch('https://fakestoreapi.com/products/categories')
        const data = await fetch_Categories.json()
        setCategories(data)
    }
    

    useEffect( ()=>{
        fetch_Categories()
    } ,  )


    if( Categories === null ){
        return ''
    }


    return ( 
        <>
            <div className="animate__animated animate__fadeInDown">
                <h1 className="animate__animated animate__fadeInDown display-4"> CATEGORIES </h1>
                <select placeholder="33" onChange={( e ) => get_data(e.currentTarget.value) } className="form-select" aria-label="Default select example">
                    <option className="h3" value={'Nothing'} > Select Categorie </option>
                    {
                        Categories.map( (e) => {
                            return <option className="h4" key={[e]} value={e}> {e}</option>
                        } )
                    }
                </select>
            </div>
        </>
     );
}
 
export default Categories;