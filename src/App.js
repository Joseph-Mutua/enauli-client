import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
