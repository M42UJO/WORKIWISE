import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Auth from "../../../Auth";
import { Authenticate } from "../../../auhv.json";
import { useNavigate } from 'react-router-dom';

interface SigninProps {
  switchView: (view: "signin" | "signup" | "verification") => void;
}

const Signin: React.FC<SigninProps> = ({ switchView }) => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    Auth.Login(
      Authenticate,
      Username,
      Password
    ).then((res) => {
      setLoading(false);
      if (res.Status === "Success") {
        console.log("Login Success");
        navigate("/Home");

      } else {
        setError("Invalid username or password");
        setPassword(""); 
      }
    }).catch((err) => {
      setLoading(false);
      setError("Something went wrong. Please try again.");
    });
  };

  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">Welcome, Planners</h2>
      <p className="mb-6 text-sm text-gray-500">Sign in to use</p>
      <form className="w-80 space-y-6" onSubmit={handleLogin}>
        <div>
          <label htmlFor="username" className="block mb-1 text-sm font-semibold text-gray-600">
            Username
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-gray-800">
            <input
              id="username"
              type="text"
              placeholder="Please enter Username"
              value={Username}
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
              value={Password}
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
            onClick={() => switchView("signup")} // Switch to signup view
          >
            Sign up
          </a>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
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
        <button
          className="border w-80 py-3 rounded-lg text-sm"
          onClick={() => switchView("verification")} // Switch to verification view
        >
          Sign in with sub account &gt;
        </button>
      </div>
    </>
  );
};

export default Signin;
