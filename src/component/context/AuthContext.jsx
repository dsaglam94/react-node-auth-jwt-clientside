import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  // const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  // log in user on page load
  async function fetchUserCredentials() {
    try {
      const res = await fetch("http://localhost:3001/login", {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUser({ ...data });
    } catch (error) {
      console.log("something happened while fetching login credentials");
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUserCredentials();
  }, [user?.email]);

  console.log(user);
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
      if (data.loggedIn) {
        setUser({ ...data });
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

      if (data.loggedIn) {
        setUser({ ...data });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // log out the user
  const logOut = async () => {
    try {
      const res = await fetch("http://localhost:3001/logout", {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (data.loggedIn === false) {
        setUser({ ...data });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        logOut,
        user,
        errorEmail,
        errorPassword,
        errorUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
