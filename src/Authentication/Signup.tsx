import { useState } from "react";
import { AppContext } from "../Models/AppContext";
import LogoEntry from "../SharedComponents/EntryPageLogo";
import Button from "../SharedComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";



function SignUp( props: {appContext: AppContext}) {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignUp = () => {
        // Add your sign-up logic here
        console.log("Username:", username);
        console.log("Password:", password);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="bg-gray-100 techFont">
            <div className="p-4">
                <Button icon={faChevronLeft} label={"Back"} onClick={() => navigate("/")} size="sm"/>
            </div><div className="flex flex-col items-center  min-h-screen">
        <LogoEntry appContext={props.appContext} />
        <div className="text-2xl pt-16 text-green-900">Signup</div>
        <div className="pt-10 max-w-md items-center justify-center">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div className="mb-4 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
            <Button
                icon={null}
                onClick={handleSignUp}
                label="Sign Up"
                size="lg"
            />
        </div>
    </div>
        </div>
        
    );
  }
  
  export default SignUp;
  