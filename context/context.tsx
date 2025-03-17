import { createContext, FC, ReactNode, SetStateAction, useState } from "react";

interface ContextType {
    categoryId:string | number | null,
    setCategoryId:React.Dispatch<SetStateAction<number | string | null>>
}

export const Context = createContext<ContextType>({
     categoryId:null,
     setCategoryId:()=> null
})

export const ContextProvider:FC<{children:ReactNode}> = ({children}) => {
    const [categoryId, setCategoryId] = useState<number | string | null>(null)
      return(
        <Context.Provider value={{categoryId, setCategoryId}}>
        {children}
      </Context.Provider>
      )
}