import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");

  const navigate = useNavigate();

  //   Sign up the user
  const signUp = async (e, userName, fullName, email, password) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    setErrorUserName("");

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
      if (data.errors) {
        setErrorEmail(data.errors.email);
        setErrorUserName(data.errors.username);
        setErrorPassword(data.errors.password);
      }
      if (data.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // login the user
  const logIn = async (e, email, password) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPassword("");

    try {
      let res = await fetch("http://localhost:3001/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.errors) {
        setErrorEmail(data.errors.email);
        setErrorPassword(data.errors.password);
      }

      if (data.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, errorEmail, errorPassword, errorUserName }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
