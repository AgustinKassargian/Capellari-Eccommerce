'use client'
import React,{useState} from 'react'
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

function Counter({stock}) {
    const [counter, setCounter] = useState(1)

    const handlerCounter = (operation) =>{
        if(operation === 'add' && counter < stock){
            setCounter(counter+1)
        }
        else if(operation === 'remove' && counter > 1){
            setCounter(counter-1)
        }
    }
    return (
        <div className='flex mt-4 mb-4 gap-2 items-center'>
            <div className='flex rounded-lg gap-2 items-center'>
                <label className='font-main text-lg'>
                    Cantidad
                    <span className='text-slate-400 text-md italic'>({stock} unidades disponibles)</span>:
                </label>
            </div>
            <div className='flex rounded-lg gap-2 items-center'>
                <IoRemove className='cursor-pointer bg-blue-500 text-2xl text-white rounded-l-lg' onClick={()=>handlerCounter('remove')}/>
                    <label className='text-end text-lg'>{counter}</label>    
                <IoAdd className='cursor-pointer bg-blue-500 text-2xl text-white rounded-r-lg' onClick={()=>handlerCounter('add')}/>
            </div>
        </div>
    )
}

export default Counter
