import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full h-[72vh] flex items-center justify-center">
      <div className="w-[90%] max-w-[1200px] mx-auto flex md:flex-row items-center justify-center">
        <div className="p-10 rounded-md shadow-2xl">
          <h1 className="font-bold text-2xl pb-5">Log in</h1>

          <form className="flex flex-col items-start gap-2 ">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 border-2 border-black rounded-md focus:bg-yellow-300 focus:border-transparent focus:outline-none"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="p-2 border-2 border-black rounded-md focus:bg-yellow-300 focus:border-transparent focus:outline-none"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
            <button className="font-bold bg-yellow-300 w-full py-2 rounded-md mt-10 hover:rounded-full hover:text-red-400 focus:rounded-full focus:text-red-400 focus:outline-none">
              Log in
            </button>
          </form>
          <p className="font-semibold pt-5">
            Don't have an account?{" "}
            <Link to="/signup">
              <span className="text-red-400 underline">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
