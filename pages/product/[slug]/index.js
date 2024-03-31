'use client'
import React, {useEffect, useState} from 'react'
import { Carousel } from 'react-bootstrap';
import Counter from '@/components/Detail/Counter';
import { useRouter } from 'next/router';
import mockData from '../../../utils/mockData'
import LogoCardsBox from '@/components/Detail/LogoCardsBox';
import NotFound from './[404]';


function ProductDetail() {
    const router = useRouter()
    const [product, setProduct] = useState()
    
    useEffect(()=>{
        mockData.forEach(element => {
            if(element.slug === router.query.slug) setProduct(element)
        });
    },[mockData])
    useEffect(()=>{
        console.log(product)
    },[product])
    if(product){
        
    
    return (
        <div className='bg-slate-50 min-h-[80vh] font-main container max-w-screen-2xl text-black p-8'>
            <div className='flex'>
                <div className='flex flex-col w-1/2 justify-center'>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x900"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 "
                                src="https://via.placeholder.com/800x900"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x900"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='flex flex-col w-1/2 text-center'> {/* Establecer el ancho de la caja izquierda */}
                    <div className='flex flex-col w-fit border-black border rounded-lg ml-8 p-4'>
                        <h1 className="text-2xl font-bold mb-2 font-main text-start">{product?.title}</h1>
                        <h2 className="text-2xl font-bold mb-2 font-main text-start">${product?.price}</h2>
                        <ul className='flex mb-4 gap-2 p-0'>
                            {product?.categories && product?.categories.map((category)=>(
                                <li className='text-white bg-blue-500 rounded-2xl p-1 italic'>{category}</li>
                            ))}
                        </ul>
                        <p className='text-justify'>{product?.description}</p>
                        <hr className='my-4'/>
                        <LogoCardsBox/>
                        <Counter stock={product?.stock}/>
                        <div className='flex flex-col gap-2 justify-center w-full items-center mt-4'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'>Comprar ahora</button>
                            <button className='bg-slate-200 hover:bg-slate-300 text-blue-700 font-bold py-2 px-4 rounded w-full'>Agregar al carrito</button>
                        </div>
                        <hr className='my-4'/>
                    </div>
                </div>
            </div>            
        </div>
    );
}
else{
    return(
        <NotFound/>
    )
}
}

export default ProductDetail;


