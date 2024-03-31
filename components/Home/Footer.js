import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";



export default function Footer(){
    return (
        <footer className="bg-gray-800 text-white p-4">
          <div className="flex justify-center items-center gap-4 mb-4">
            <FaInstagram className='text-xl cursor-pointer'/>
            <FaXTwitter className='text-xl cursor-pointer'/>
            <FaFacebookSquare className='text-xl cursor-pointer'/>
          </div>
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Electrodomesticos Capellari. Todos los derechos reservados.</p>
          </div>
        </footer>
      );
}