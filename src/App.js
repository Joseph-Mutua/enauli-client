import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Homepage from "./pages/Homepage";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
        <Route path="homepage"element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
