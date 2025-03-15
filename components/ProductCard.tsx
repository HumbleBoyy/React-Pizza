"use client"
import { PlusIcon } from '@/assets'
import { ProductType } from '@/types/ProductType'
import ButtonUi from '@/ui/ButtonUi'
import Image from 'next/image'
import React, { FC } from 'react'

const ProductCard:FC<{item:ProductType}> = ({item}) => {
  return (
    <div className='w-[280px] flex flex-col gap-2'>
       <Image className='w-[220px] h-[220px] mb-[11px] mx-auto' src={item.img} priority alt={item.title} width={220} height={220}/>
       <strong className=' font-bold text-[20px] text-center mx-auto block'>{item.title}</strong>
       <div className='w-[280px] h-[85px] bg-[#F3F3F3] flex items-center justify-center'>
           <strong className='text-[20px]'><span className='text-red-600'>!</span>Cooming Soon</strong>
       </div>
       <div className='flex items-center justify-between'>
         <strong className='font-bold text-[22px]'>от {item.price} ₽</strong>
         <ButtonUi extraClass='!text-[16px] !rounded-[30px] !p-[10px] !bg-[#EB5A1E] border-2 border-[#EB5A1E]' bgColor={false} icon={<PlusIcon/>} iconPosition={"left"}>Добавить</ButtonUi>
       </div>
    </div>
  )
}

export default ProductCard
