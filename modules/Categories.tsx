"use client"

import { ArrowIcon } from '@/assets'
import { getRequest } from '@/service/getRequest'
import { CategoryType } from '@/types/CategoriesType'
import ButtonUi from '@/ui/ButtonUi'
import React, { useEffect, useState } from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const Categories = () => {
  const {data, isLoading} = getRequest("/categories", "category")
  const [sortTitle, setSortTitle] = useState<"популярности" | "по цене" | "по алфавиту">("популярности")
  const [categories, setCategories] = useState(data)


  const handleCategories = (obj:CategoryType) => {
     setCategories(categories?.map((item:CategoryType)=> item.id === obj.id ? {...obj, isActive:true} : {...item, isActive:false}))
  }
  useEffect(()=> {
    setCategories(data)
  }, [data])
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
           {isLoading ? "Loading...." : categories?.map((item:CategoryType)=> <ButtonUi key={item.id} onClick={()=> handleCategories(item)} extraClass={`rounded-[50px] hover:bg-transparent ${item.isActive ? "!bg-black" : "bg-[#F9F9F9] text-black"}`}>{item.name}</ButtonUi>)}
        </div>
       <Popover>
       <div className='flex items-center gap-1'>
            <div className='flex items-center gap-2'>
              <ArrowIcon/>
              <p className='font-bold text-[14px]'>Сортировка по:</p>
            </div>
            <PopoverTrigger>
               <strong className='font-semibold text-[14px] text-[#FE5F1E] border-b-2 border-dotted border-[#FE5F1E] leading-[100%]'>{sortTitle}</strong>
            </PopoverTrigger>
            <PopoverContent className='flex flex-col !p-0 items-center justify-center w-[150px] '>
                <button onClick={() => setSortTitle("популярности")} className='w-full hover:bg-[#FE5F1E0D] hover:text-[#FE5F1E] p-[10px] text-start cursor-pointer text-[14px]'>популярности</button>
                <button onClick={() => setSortTitle("по цене")} className='w-full hover:bg-[#FE5F1E0D] hover:text-[#FE5F1E] p-[10px] text-start cursor-pointer text-[14px]'>по цене</button>
                <button onClick={() => setSortTitle("по алфавиту")} className='w-full hover:bg-[#FE5F1E0D] hover:text-[#FE5F1E] p-[10px] text-start cursor-pointer text-[14px]'>по алфавиту</button>
            </PopoverContent>
        </div>
       </Popover>
    </div>
  )
}

export default Categories
