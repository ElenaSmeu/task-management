import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
function LandingPage() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
     Welcome on the landing page
      <FontAwesomeIcon icon={faReact}/>
    </div>
  );
}

export default LandingPage;
