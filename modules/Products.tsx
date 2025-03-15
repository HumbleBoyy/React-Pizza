"use client"
import { getRequest } from '@/service/getRequest'


const Products = () => {
    const {data:products, isLoading} = getRequest("/products", "products")
    console.log(products)
  return (
    <div>
      <h2 className='text-[32px] font-bold'>Все пиццы</h2>
    </div>
  )
}

export default Products
