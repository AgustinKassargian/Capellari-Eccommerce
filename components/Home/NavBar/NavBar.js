import Image from 'next/image';
import Tabs from './Tabs/Tabs.js';
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link.js';

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
        <Link href="/cart">
            <div className='cursor-pointer hover:animate-shake'>
                <FaShoppingCart className='text-2xl text-black'/>
            </div>
        </Link>
    </div>
)
}


export default NavBar;