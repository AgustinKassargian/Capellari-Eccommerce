import FilterBar from "./FilterBar";
import List from "./List"
import product from '../../public/product.png'


export default function ProductsList(){
    const array = [
        {
            name:'Producto 1',
            price: 100,
            img:product
        },
        {
            name:'Producto 2',
            price: 100,
            img:product

        },
        {
            name:'Producto 3',
            price: 100,
            img:product

        },
        {
            name:'Producto 4',
            price: 100,
            img:product

        },
        {
            name:'Producto 5',
            price: 100,
            img:product

        },
        {
            name:'Producto 6',
            price: 100,
            img:product

        },
    ]
    
    return(
        <div className="mt-4">
            <FilterBar/>
            <List array={array}/>
        </div>
    )
}