"use client"
import { ProductType } from '@/types/ProductType'
import Image from 'next/image'
import React, { FC } from 'react'

const ProductCard:FC<{item:ProductType}> = ({item}) => {
  return (
    <div className='w-[280px]'>
       <Image className='w-[260px] h-[260px] mb-[11px]' src={item.img[0]} priority alt={item.title} width={260} height={260}/>
       <strong className=' font-bold text-[20px] text-center'>{item.title}</strong>
    </div>
  )
}

export default ProductCard
