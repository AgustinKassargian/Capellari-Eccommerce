
import { IoSearch } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";


export default function FilterBar(){
    
    return(
        <div className="flex justify-center items-center bg-slate-50 pt-8 rounded-md px-14"> 
            <div className="flex items-center border-2 rounded-xl w-full">
                <select>
                    <option> Lo mas reciente</option>
                    <option> Lo menos reciente</option>
                    <option> A-Z</option>
                    <option> Z-A</option>
                    <option>Mayor Precio</option>
                    <option>Menor Precio</option>
            </select>
                <input 
                    type="text"
                    placeholder="Search..."
                    className="p-1 focus:outline-none w-full"
                />
                <div className="gap-2 flex">
                    <IoSearch className="text-2xl"/>
                    <IoFilter className="text-2xl"/>
                </div>
            </div>

        </div>
    )
}