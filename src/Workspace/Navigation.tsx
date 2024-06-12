import { Link, useNavigate } from "react-router-dom";
import Button from "../SharedComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Workspace() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    return (
       <div className="bg-green-900 text-gray-100 w-screen h-10 flex flex-row justify-between items-center">
        <div className="techFont ml-4 text-xl cursor-none">Task Management - A ReactJs Showcase</div>
        <div onClick={handleLogout}
             className="mr-4 cursor-pointer">
                    <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
                </div>
        </div>
       
    );
  }
  
  export default Workspace;