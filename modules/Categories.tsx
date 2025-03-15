"use client"

import { getRequest } from '@/service/getRequest'
import { CategoryType } from '@/types/CategoriesType'
import ButtonUi from '@/ui/ButtonUi'
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const {data, isLoading} = getRequest("/categories", "category")
  const [categories, setCategories] = useState(data)

  console.log(categories)

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
    </div>
  )
}

export default Categories
