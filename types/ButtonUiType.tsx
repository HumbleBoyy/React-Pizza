import { ReactNode } from "react"

 export interface ButtonUiType {
    icon?:ReactNode,
    size?:"sm" | "default" | "lg" | "icon",
    variant?:"link" | "ghost" | "secondary" | "default" | "outline" | "destructive"
    iconPosition?:"left" | "right"
    children:ReactNode,
    bgColor?:boolean,
    extraClass?:string
 }