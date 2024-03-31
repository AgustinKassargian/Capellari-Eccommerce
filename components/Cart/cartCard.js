import React from 'react'
import Image from 'next/image';
import Counter from '../Detail/Counter';

function CartCard({product, index}) {
    return (
        <div key={index} className='w-full'>
            <hr/>
            <div className='flex mt-4 mb-4 gap-2'>
                <Image
                    src={product.img}
                    width={75}
                    height={75}
                    alt='product'
                />
                <div className='flex-col w-full'>
                    <div className='flex justify-between items-center'>
                        <p className='font-main text-lg'>{product?.name}</p>
                        <Counter stock={product?.stock}/>
                        <p className='font-main text-lg'>${product?.price}</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='font-bold text-blue-500 text-sm'>Comprar ahora</button>
                        <button className='font-bold text-blue-500 text-sm'>Eliminar</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex'>

                </div>
            </div>
        </div>
    )
}

export default CartCard
