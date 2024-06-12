import { useNavigate } from "react-router-dom";
import Button from "../SharedComponents/Button";
import {auth} from "../firebase";
import { signOut } from "firebase/auth";


function Workspace() {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await signOut( auth);
            navigate("/login");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };
    return (
       <div><div>Workspace works</div>
        <Button
                    icon={null}
                    onClick={handleLogout}
                    label="Logout"
                    size="lg"
                />
        </div>
       
    );
  }
  
  export default Workspace;