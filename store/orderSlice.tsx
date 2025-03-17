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
      
       return {
          orderList:[...state.orderList, action.payload]    
       }
    }
  },
})

export const { saveOrderProduct } = orderSlice.actions
