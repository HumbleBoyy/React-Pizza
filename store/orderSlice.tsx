import { ProductType } from '@/types/ProductType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderType {
    orderList:ProductType[]
}
const initialState:OrderType = {
    orderList: [],
}

export const orderSlice = createSlice({
  name: 'order_list',
  initialState,
  reducers: {
    saveOrderProduct: (state:OrderType, action:PayloadAction<ProductType>):OrderType | any => {
      const isThere = state.orderList.some(item => item.id === action.payload.id && item.sizeId === action.payload.sizeId && item.typeId === action.payload.typeId)
      if(isThere){
        const result = state.orderList.map((item:ProductType)=> item.id === action.payload.id ? action.payload : item)
        return{
          orderList:result
        }
      }else{
        return {
          orderList:[...state.orderList, action.payload]    
       }
      }
       
    }
  },
})

export const { saveOrderProduct } = orderSlice.actions
