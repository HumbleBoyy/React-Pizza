import { Button } from "@/components/ui/button"
import { ButtonUiType } from "@/types/ButtonUiType"
import { FC } from "react"
 
 const  ButtonUi:FC<ButtonUiType> = ({children, size, variant, iconPosition, icon, bgColor, extraClass}) => {
  return (
    <div>
      <Button size={size} variant={variant} className={`${extraClass} cursor-pointer  flex items-center justify-center`}>
        {iconPosition === "left" && icon}
         {children}
        {iconPosition === "right" && icon} 
      </Button>
    </div>
  )
}
export default ButtonUi