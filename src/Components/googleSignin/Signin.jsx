import { useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
import "./Signin.css";
import {FcGoogle} from 'react-icons/fc';
import {FaApple} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Signin = () => {
  
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("profilePic", data.user.photoURL);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="container">
      <div className="left">
        <h1 className="logo">Board.</h1>
      </div>
      <div className="right">
        <div className="login">
          <h1 className="big">Sign In</h1>
          <h6>Sign in to your account</h6>
          <div className="items">
            <div className="google">
              {value ? (
                  navigate("/dashboard")
              ) : (
                <button onClick={handleClick}><FcGoogle className="gg"/>SignIn with Google </button>
              )}
            </div>
            <div className="apple">
              <button><FaApple className="aa"/>SignIn with Apple</button>
            </div>
          </div>
          <br/>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
            <div>
              <button
                type="submit"
                className="flex w-80 justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
          <p style={{marginLeft: '20px', marginTop: '20px'}}>Don't have an account? <span style={{color: 'blue'}}>Register here</span></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
