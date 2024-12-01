import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useAuthStore } from "./store/useAuthStore"; 

const Signin: React.FC<{ switchView: (view: "signup" | "signin" | "verification") => void }> = ({ switchView }) => {
    const [username, setUsername] = useState(""); // State username
    const [password, setPassword] = useState(""); // State password
    const [error, setError] = useState(""); 

    const setLoggedIn = useAuthStore((state) => state.setLoggedIn); // Zustand action loggedIn
    const navigate = useNavigate(); // Hook 

    // funcion Login
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (username === "Admin1234" && password === "Admin1234") {
            setLoggedIn(true); 
            navigate("/dashboard"); 
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">Welcome, Planners</h2>
            <p className="mb-6 text-sm text-gray-500">Sign in to use</p>
            {/* Login Form */}
            <form className="w-80 space-y-6" onSubmit={handleLogin}>
                {/* Username Field */}
                <div>
                    <label htmlFor="username" className="block mb-1 text-sm font-semibold text-gray-600">
                        Username
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
                        <input
                            id="username"
                            type="text"
                            placeholder="Please enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none rounded-l-lg"
                        />
                        <span className="px-3 text-gray-500">
                            <FontAwesomeIcon icon={faUser} />
                        </span>
                    </div>
                </div>
                
                <div>
                    <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-600">
                        Password
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
                        <input
                            id="password"
                            type="password"
                            placeholder="Please enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            className="w-full px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none rounded-l-lg"
                        />
                        <span className="px-3 text-gray-500">
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </span>
                    </div>
                </div>
                
                {error && <p className="text-sm text-red-500">{error}</p>}
                
                <div className="flex items-center justify-between my-4">
                    <a href="#" className="text-sm text-blue-500 hover:underline focus:outline-none">
                        Forgot your password?
                    </a>
                    <a
                        href="#"
                        className="text-sm text-blue-500 hover:underline focus:outline-none"
                        onClick={() => switchView("signup")}
                    >
                        Sign up
                    </a>
                </div>
                
                <button
                    type="submit"
                    className="w-full px-4 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none"
                >
                    Sign in
                </button>
            </form>
           
            <div className="mt-6">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-full h-px bg-gray-300"></div>
                    <p className="relative px-4 text-xs text-gray-300 bg-white">OR</p>
                </div>
                <div className="flex items-center justify-between mt-6 space-x-4 w-80">
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 border rounded-lg focus:outline-none"
                    >
                        Facebook
                    </button>
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 border rounded-lg focus:outline-none"
                    >
                        Google
                    </button>
                </div>
            </div>
            
            <div className="mt-6 w-80 text-center">
                <button className="border w-80 py-3 rounded-lg text-sm">
                    Sign in with sub account &gt;
                </button>
            </div>
        </>
    );
};

export default Signin;
