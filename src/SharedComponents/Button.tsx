import {  IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonSize =  "sm" | "md" | "lg"

interface ButtonProps {
    icon: IconDefinition| null
    , label: String | null
    , onClick : () => void
    , size: ButtonSize
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
    }
}

const Button: React.FC<ButtonProps> = ( {icon, onClick, label, size})  => 
    {
    return <button onClick={onClick} 
    className={"bg-green-900 shadow-md border-2 border-gray-950 p-2 rounded-md text-white hover:bg-gray-200 hover:text-green-900 " + textSize(size) + " " + buttonSize(size)}>
             {icon && <FontAwesomeIcon icon={icon} />}
             <span className="ml-2">{label}</span>
           </button>
          
    ;
  }
  
  export default Button;