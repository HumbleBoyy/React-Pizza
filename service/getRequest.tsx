"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"


export const getRequest = (api:string, queryKey:string, categoryId?:any) => {
       const {data, isLoading} = useQuery({
         queryKey:[queryKey, categoryId],
         queryFn:() => instance().get(api, {
          params:{
            categoryId
          }
         }).then(res => res.data)
       })

    return {data, isLoading}
}