import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../component/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { signUp, errorEmail, errorPassword, errorUserName, user } = UserAuth();
  useEffect(() => {
    if (user.loggedIn) {
      navigate("/");
    }
  }, [user.username]);
  return (
    <section className="w-full h-[72vh] flex items-center justify-center">
      <div className="w-[90%] max-w-[1200px] mx-auto flex md:flex-row items-center justify-center">
        <div className="py-10 px-14 rounded-md shadow-2xl">
          <h1 className="font-bold text-2xl pb-5">Sign up</h1>
          <form
            onSubmit={(e) => signUp(e, userName, fullName, email, password)}
            className="flex flex-col items-start gap-2 "
          >
            <label className="font-bold" htmlFor="username">
              User Name
            </label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              className="p-2 border-2 border-black rounded-md focus:bg-yellow-300 focus:border-transparent focus:outline-none"
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
            <span className="text-red-500 text-sm">{errorUserName}</span>
            <label className="font-bold" htmlFor="fullname">
              Full Name
            </label>
            <input
              onChange={(e) => setFullName(e.target.value)}
              className="p-2 border-2 border-black rounded-md focus:bg-yellow-300 focus:border-transparent focus:outline-none"
              type="text"
              id="fullname"
              placeholder="Enter your name"
              required
            />

            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border-2 border-black rounded-md focus:bg-yellow-300 focus:border-transparent focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <span className="text-red-500 text-sm">{errorEmail}</span>
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border-2 border-black rounded-md focus:bg-yellow-300 focus:border-transparent focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <span className="text-red-500 text-sm">{errorPassword}</span>
            <button className="font-bold bg-yellow-300 w-full py-2 rounded-md mt-10 hover:rounded-full hover:text-red-400 focus:rounded-full focus:text-red-400 focus:outline-none">
              Sign up
            </button>
          </form>
          <p className="font-semibold pt-5">
            Already have an account?{" "}
            <Link to="/signup">
              <span className="text-red-400 underline">Log in</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
