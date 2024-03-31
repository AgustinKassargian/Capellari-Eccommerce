import React from 'react'
import { useRouter } from 'next/router'
import List from '@/components/Home/List'
import FilterBar from '@/components/Home/FilterBar'
import mockData from '../../utils/mockData'

function ProductsPage() {
    const router = useRouter()
    const filterList = []
    if(router.query){
        Object.keys(router.query).forEach(element=>{
            mockData.forEach(product=> {
                if(product.categories.includes(element)) filterList.push(product)

            })
        })
    }
    return (
        <div className='bg-slate-50 min-h-[80vh] font-main container max-w-screen-2xl text-black'>
            <FilterBar/>
            <List array={ filterList.length > 0 ? filterList : mockData}/>
        </div>

    )
}

export default ProductsPage
