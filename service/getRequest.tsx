"use client"

import { instance } from "@/hooks/instance"
import { useEffect, useState } from "react"


export const getRequest = (api:string):any => {
    const [data, setData] = useState<[]>([])

    useEffect(()=>{
        instance().get(api).then(res => setData(res.data))
    })

    return data
}