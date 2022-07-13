import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Home = () => {
  return (
    <section className="w-full h-[72vh] flex items-center justify-center">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-5">
        <div className="max-w-[35vh] w-[40%] group">
          <img
            className="max-w-full group-hover:animate-bounce"
            src={logo}
            alt="smoothie blender"
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl md:text-4xl pb-6">
            Best Smoothie Recipes
          </h1>
          <p className="w-[80%] mx-auto md:mx-0 text-xl md:text-2xl pb-4 md:pb-10">
            Join us to get the best smoothie recipes in the market!
          </p>
          <Link to="/recipes">
            <span className="inline-block bg-yellow-300 px-6 py-2 rounded-full font-bold text-lg">
              View Recipes
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
