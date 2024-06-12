import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppContext } from "./Context/AppContext";
import Button from "./SharedComponents/Button";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import LogoEntry from "./SharedComponents/EntryPageLogo";


function LandingPage( props: {appContext: AppContext}) {
  const navigate = useNavigate();
  const navigateToLogin = () => {navigate("/login")}
  const navigateToSignUp = () => {navigate("/signup")}
  return (
    <div className="flex flex-col h-screen techFont bg-gray-100">
    <LogoEntry appContext={props.appContext}></LogoEntry>
    <div className="w-auto pt-20 flex flex-row justify-center">
        <div className="flex flex-col justify-center items-center">
            <Button label={"Login"} icon={null} onClick={navigateToLogin} size="lg"/>
                <div className="text-green-900 font-bold py-10">Or</div>
            <Button label={"SignUp"} icon={null} onClick={navigateToSignUp} size="lg"/>
        </div>
    </div>
    <div className="flex flex-col text-green-900 justify-center items-center">
    <div className="text-2xl pt-20">About</div>
    <div className="text-sm pt-3">Techstack Process Insights</div>
        <FontAwesomeIcon className="animate-bounce pt-10 text-3xl" icon={faArrowDownLong}></FontAwesomeIcon>
    </div>
    </div>
  );
}

export default LandingPage;
