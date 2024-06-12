import { Link } from "react-router-dom";
import { AppContext, DeviceType } from "../Context/AppContext";
import LogoDesktop from "../resources/LogoDesktop.png";
import LogoMobile from "../resources/LogoMobile.png";

function renderLogo(deviceContext: DeviceType) {
    switch(deviceContext)
    {case "Mobile": return LogoMobile 
    case "Tablet": return LogoDesktop
    case "Deskop": return LogoDesktop
}
}

function LogoEntry( props: {appContext: AppContext}) {
    return (
        <Link to="/">  
            <div className="w-auto pt-20 flex flex-row justify-center">
                <img src={renderLogo(props.appContext.deviceContext)} alt="Project Logo"></img>
            </div>
        </Link>
      
    );
  }
  
  export default LogoEntry;