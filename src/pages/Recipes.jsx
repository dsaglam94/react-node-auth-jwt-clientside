import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Recipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getRecipes = async () => {
    try {
      const res = await fetch("http://localhost:3001/recipes", {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (data.loggedIn === false) {
        navigate("/login");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRecipes();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="w-full h-[72vh] flex items-center justify-center">
          <div className="w-[90%] max-w-[1200px] mx-auto flex items-center justify-center text-center gap-5">
            <h1>Loading...</h1>
          </div>
        </div>
      ) : (
        <section className="w-full h-[72vh] flex items-center justify-center">
          <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-5">
            <h1>Recipes</h1>
          </div>
        </section>
      )}
    </>
  );
};

export default Recipes;
