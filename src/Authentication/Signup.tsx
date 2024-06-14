import { useState } from "react";
import { AppContext } from "../Context/AppContext";
import LogoEntry from "../SharedComponents/EntryPageLogo";
import Button from "../SharedComponents/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp( props: {appContext: AppContext}) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    const handleSignUp =  async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/login")
        } catch (error) {
            setIsError(true);
            console.error("Error signing up:", error);
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const borderErrorClass = (hasError: boolean) => {
       return  hasError ? "border-red-700" : "border-gray-300"
    }
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
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className= {"w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 " + borderErrorClass(isError) }
                    />
                </div>
            <div className="mb-4 relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className= { "w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 " + borderErrorClass(isError) }
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                </div>
            <div className="flex flex-col items-center">
            <Button
                icon={null}
                onClick={handleSignUp}
                label="Sign Up"
                size="lg"
            />
            <Link to={"/login"} className="underline pt-4">Login</Link>
            <div className="text-sm pt-10 w-80">*As this is a hobby project, please use any fake email for registration. For example, "testEmail@gmail.com".</div>
            </div>
        </div>
    </div>
        </div>
        
    );
  }
  
  export default SignUp;
  