import {  IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonSize =  "sm" | "md" | "lg" | "none"
type ButtonType = "primary" | "secondary" | "onbackground"


interface ButtonProps {
    icon: IconDefinition| null
    , label: String | null
    , onClick : () => void
    , size: ButtonSize
    , buttonType: ButtonType
    , customClass: string
}

function textSize (size: ButtonSize) {
    switch(size) {
        case "sm": return "text-sm"
        case "md": return ""
        case "lg": return "text-xl"
    }
}

function buttonSize (size: ButtonSize) {
    switch(size) {
        case "sm": return "w-40"
        case "md": return "w-64"
        case "lg": return "w-80"
        default: return "w-auto"
    }
}

function buttonTypeStyle (buttonType: ButtonType) {
    switch(buttonType) {
        case "primary": return "bg-green-900 shadow-md border-2 border-gray-950 p-2 rounded-md text-white hover:bg-gray-200 hover:text-green-900 "
        case "secondary": return "bg-gray-100 shadow-sm border-2 border-green-950 p-2 rounded-md hover:bg-green-900 hover:text-white "
        case "onbackground": return "bg-trasparent shadow-sm border-2 border-gray-300 p-2 rounded-md hover:bg-gray-200 hover:text-green-950 "
    }
}

const Button: React.FC<Partial<ButtonProps>> = ( buttonProps)  => 
    {
    const buttonSizeValue = buttonProps.size ? buttonProps.size : "none"
    const buttonTypeStyleValue = buttonProps.buttonType ? buttonProps.buttonType : "primary"
    return <button onClick={buttonProps.onClick} 
    className={ buttonTypeStyle(buttonTypeStyleValue)
    +  textSize(buttonSizeValue) + " " 
    +  buttonSize(buttonSizeValue) + ""
    + buttonProps.customClass}>
             {buttonProps.icon && <FontAwesomeIcon icon={buttonProps.icon} />}
             <span className="ml-2">{buttonProps.label}</span>
           </button>
          
    ;
  }
  
  export default Button;