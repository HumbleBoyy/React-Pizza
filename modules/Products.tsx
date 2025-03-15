"use client"
import ProductCard from '@/components/ProductCard'
import { getRequest } from '@/service/getRequest'
import { ProductType } from '@/types/ProductType'


const Products = () => {
    const {data:products, isLoading} = getRequest("/products", "products")
    console.log(products)
  return (
    <div className='flex flex-col gap-10'>
      <h2 className='text-[32px] font-bold'>Все пиццы</h2>
      <div className='flex flex-wrap gap-5 w-full'>{isLoading ? "Loading" : products.map((item:ProductType)=> <ProductCard key={item.id} item={item}/>)}</div>
    </div>
  )
}

export default Products
