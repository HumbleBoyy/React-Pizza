"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"


export const getRequest = (api:string, queryKey:string) => {
       const {data, isLoading} = useQuery({
         queryKey:[queryKey],
         queryFn:() => instance().get(api).then(res => res.data)
       })

    return {data, isLoading}
}