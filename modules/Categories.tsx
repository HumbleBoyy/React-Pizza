"use client"

import { getRequest } from '@/service/getRequest'
import { CategoryType } from '@/types/CategoriesType'
import ButtonUi from '@/ui/ButtonUi'
import React from 'react'

const Categories = () => {
  const {data:categories, isLoading} = getRequest("/categories", "category")
 
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[10px]'>
           {isLoading ? "Loading...." : categories.map((item:CategoryType)=> <ButtonUi key={item.id} extraClass={`rounded-[50px] hover:bg-transparent ${item.isActive ? "!bg-black" : "bg-[#F9F9F9] text-black"}`}>{item.name}</ButtonUi>)}
        </div>
    </div>
  )
}

export default Categories
