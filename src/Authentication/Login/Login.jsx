import { useRef, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { InputForm } from "../../Components";

import { UserContext } from "../../Contexts";

import { useLocalStorage } from "../../Hooks";

import { authenticate } from '../../Helpers'


const Login = () => {
  const navigate = useNavigate();
  const userEmailRef = useRef();
  const userPassRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      authenticate();
    } catch (error) {
      setErrorMsg(error.message);
      console.error(error);

      const errorTimeout = setTimeout(() => setErrorMsg(null), 5000);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center p-4">
      <form
        onSubmit={handleLogin}
        className="w-full sm:w-96 flex flex-col gap-4 p-12 rounded-xl bg-white shadow-lg "
      >
        <div className="flex flex-col gap-1">
          <label className="text-2xl font-semibold text-left text-center">
            Sign in
          </label>
          <label className="text-sm text-slate-500 text-center mb-4 ">
            Enter your credentials
          </label>
        </div>

        {errorMsg && (
          <p className="bg-red-600/10 rounded-xl p-4 border border-red-500 text-red-600">
            {errorMsg}
          </p>
        )}

        <InputForm
          label="Email"
          type="email"
          placeHolder="e.g example123@example.com"
          inputRef={userEmailRef}
        />
        <InputForm
          label="Password"
          type="password"
          placeHolder="*********"
          inputRef={userPassRef}
        />
        <div className="flex flex-wrap gap-2 items-center">
          <input className="w-4" type="checkbox" />
          <label htmlFor="check-remember" className=" text-slate-500">
            Remember me
          </label>
          <a href="#" className="ml-0 md:ml-auto text-blue-500 ">
            Forgot password?
          </a>
        </div>

        <button className="bg-blue-500 hover:bg-blue-400 duration-300 rounded-xl p-2 px-4 text-white">
          Sign in
        </button>
        <p className="text-slate-600 text-sm">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-400 duration-300 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
