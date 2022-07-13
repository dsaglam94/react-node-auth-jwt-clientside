import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./component/context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
}

export default App;
