import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import LogoDesktop from "./LogoDesktop.png";
import LogoMobile from "./LogoMobile.png";
import { AppContext, DeviceType } from "./Models/AppContext";

function renderLogo(deviceContext: DeviceType) {
    switch(deviceContext)
    {case "Mobile": return LogoMobile
    case "Tablet": return LogoDesktop
    case "Deskop": return LogoDesktop
}
}

function LandingPage( props: {appContext: AppContext}) {
  return (
    <div className="flex flex-col h-full">
    <div className="w-auto pt-20 flex flex-row justify-center">
        <img src={renderLogo(props.appContext.deviceContext)} alt="Project Logo"></img>
    </div>
      <FontAwesomeIcon icon={faReact}/>
    </div>
  );
}

export default LandingPage;
