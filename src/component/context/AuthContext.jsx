import { useContext, createContext, useState } from "react";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");

  //   Sign up the user
  const signUp = async (e, userName, fullName, email, password) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/signup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
          user_name: userName,
        }),
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
