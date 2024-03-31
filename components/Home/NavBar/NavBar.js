import Image from 'next/image';
import Tabs from './Tabs/Tabs.js';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () =>{

return(
    <div className='flex justify-betweem p-8 items-center bg-white'>
        <Image
            src={'/logo.png'}
            alt='logo'
            width={50}  
            height={50}
        />
        <Tabs/>

        <a href='/cart' className='cursor-pointer hover:animate-shake'>
            <FaShoppingCart 
            className='text-2xl text-black'/>
        </a>
    </div>
)
}


export default NavBar;