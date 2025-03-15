"use client"
import { PlusIcon } from '@/assets'
import { ProductType } from '@/types/ProductType'
import ButtonUi from '@/ui/ButtonUi'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProductCard:FC<{item:ProductType}> = ({item}) => {
  const [orderCount, setOrderCount] = useState<number>(0)

  const handleOrderBtnClick = (obj:ProductType) => {
    setOrderCount(orderCount + 1)
    console.log(obj)
  }
  return (
    <div className='w-[280px] flex flex-col gap-2'>
       <Image className='w-[220px] h-[220px] mb-[11px] mx-auto' src={item.img} priority alt={item.title} width={220} height={220}/>
       <strong className=' font-bold text-[20px] text-center mx-auto block'>{item.title}</strong>
       <div className='w-[280px] py-2 bg-[#F3F3F3]  rounded-md'>
       <Tabs defaultValue="тонкое" className="!w-[200px] !py-2">
        <TabsList>
          <TabsTrigger value="тонкое" className='!w-[130px]  text-[15px] font-bold cursor-pointer p-5'>тонкое</TabsTrigger>
          <TabsTrigger value="традиционное" className='!w-[130px] text-[15px] font-bold cursor-pointer p-5'>традиционное</TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="26 см." className="!w-[200px] !py-2">
        <TabsList>
          <TabsTrigger value="26 см." className='!w-[85px]  text-[15px] font-bold cursor-pointer p-5'>26 см.</TabsTrigger>
          <TabsTrigger value="30 см." className='!w-[85px] text-[15px] font-bold cursor-pointer p-5'>30 см.</TabsTrigger>
          <TabsTrigger value="40 см." className='!w-[85px] text-[15px] font-bold cursor-pointer p-5'>40 см.</TabsTrigger>
        </TabsList>
      </Tabs>
       </div>
       <div className='flex items-center justify-between'>
         <strong className='font-bold text-[22px]'>от {item.price} ₽</strong>
         <ButtonUi onClick={()=> handleOrderBtnClick(item)} extraClass={`!text-[16px] !rounded-[30px] !p-[10px] ${orderCount !== 0 ? "!bg-transparent text-[#EB5A1E] border-2 border-[#EB5A1E]" : "!bg-[#EB5A1E] border-2 border-[#EB5A1E]"}`} bgColor={false} icon={<PlusIcon/>} iconPosition={"left"}>Добавить {orderCount !== 0 && <span className='w-[22px] h-[22px] rounded-[50%] bg-[#EB5A1E] text-white'>{orderCount}</span>}</ButtonUi>
       </div>
    </div>
  )
}

export default ProductCard
