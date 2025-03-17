"use client"
import Image from 'next/image'
import MainLogo from "../public/mainLogo.svg"
import ButtonUi from '@/ui/ButtonUi'
import { Cart } from '@/assets'
import { useSelector } from 'react-redux'
import { ProductType } from '@/types/ProductType'

const Header = () => {
  const orderCount = useSelector(state => state)
  return (
    <div className='w-full flex justify-between items-center py-5'>
      <Image src={MainLogo} alt='ReactPzza'/>
      <ButtonUi extraClass='bg-[#FE5F1E] rounded-[30px] w-[150px] h-[50px] text-white hover:bg-[#FE5F1E]'>
          <strong className='text-[16px] font-bold flex items-center gap-1'>0 ₽</strong>
          <div className='h-[25px] w-[1px] bg-[#FFFFFF40]'/>
          <strong className='text-[16px] font-bold flex items-center gap-1'><Cart/>{0}</strong>
      </ButtonUi>
    </div>
  )
}

export default Header
