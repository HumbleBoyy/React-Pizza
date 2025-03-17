"use client"
import ProductCard from '@/components/ProductCard'
import { Context } from '@/context/context'
import { getRequest } from '@/service/getRequest'
import { ProductType } from '@/types/ProductType'
import { useContext } from 'react'


const Products = () => {
  const {categoryId} = useContext(Context)

  const {data:products, isLoading} = getRequest(`/products`, "products", categoryId)
  return (
    <div className='flex flex-col gap-10'>
      <h2 className='text-[32px] font-bold'>Все пиццы</h2>
      <div className='flex flex-wrap justify-between  gap-5 '>{isLoading ? "Loading" : products.map((item:ProductType)=> <ProductCard key={item.id} item={item}/>)}</div>
    </div>
  )
}

export default Products
