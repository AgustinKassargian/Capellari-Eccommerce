import React from 'react'
import CartCard from '@/components/Cart/cartCard';
import { FaShoppingCart } from "react-icons/fa";


function Cart() {
    const productos = [
        {
            name:'Producto 1',
            price: 1000,
            stock:25,
            img:'/logo.png',
            cantidad: 3
        },
        {
            name:'Producto 2',
            price: 1250,
            stock:2,
            img:'/logo.png',
            cantidad: 2

        },
        {
            name:'Producto 3',
            price: 3000,
            stock:1,
            img:'/logo.png',
            cantidad: 1

        },
        {
            name:'Producto 4',
            price: 4500,
            stock:11,
            img:'/logo.png',
            cantidad: 4
        },
        {
            name:'Producto 5',
            price: 990,
            stock:5,
            img:'/logo.png',
            cantidad: 1

        }
    ]

    const handlerTotal = (products) =>{
        let total = 0;
        products.forEach(element => {
            let subtotal = element.price * element.cantidad
            total+=subtotal
        });
        return total;
    }

    return (
        <div className='bg-slate-50 min-h-[80vh] font-main container max-w-screen-2xl text-black p-8'>
        <div className="flex flex-col md:flex-row justify-between gap-14">
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className='flex gap-2 items-center'>
                    <h2 className='font-main text-2xl'>Mi carrito</h2>
                    <FaShoppingCart className='text-xl'/>
                </div>
            {productos.map((product, index)=>(
                <CartCard product={product} index={index}/>
            ))}
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-xl mb-2">Resumen</h2>
              <div className="border-t border-gray-300 pt-2">
                {productos.map((product,index)=>(
                    <div className='flex justify-between' key={product?.name + index}>
                        <p className='my-1'>{product?.name} <span className='text-slate-400 text-md italic'>({product?.cantidad}/u)</span>:</p>
                        <p className='my-1'>${product?.price * product?.cantidad}</p>
                    </div>
                ))}
                <div className='flex justify-between mt-4'>
                    <p className="font-semibold">Total:</p>
                    <p className="font-semibold">${handlerTotal(productos)}</p>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 mt-4 w-full">
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Cart;