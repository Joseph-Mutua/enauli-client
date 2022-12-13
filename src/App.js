import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
