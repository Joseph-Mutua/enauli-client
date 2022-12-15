import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Homepage from "./pages/Homepage";
import PrivateRoute from "./pages/PrivateRoute";
import ChangePassword from "./pages/ChangePassword";
import CreateSacco from "./components/sacco/CreateSacco";
import UpdateSacco from "./components/sacco/UpdateSacco";
import CreateOfficial from "./components/official/CreateOfficial";
import UpdateOfficial from "./components/official/UpdateOfficial";
import CreateOperator from "./components/operator/CreateOperator";
import UpdateOperator from './components/operator/UpdateOperator';
import CreateStation from "./components/station/CreateStation";
import UpdateStation from "./components/station/UpdateStation";
import CreateVehicle from "./components/vehicle/CreateVehicle";
import UpdateVehicle from "./components/vehicle/UpdateVehicle";
import CreateCharge from "./components/charge/CreateCharge";
import Balance from "./components/balance";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="sign-up" element={<SignUp />} />

        <Route
          path="homepage"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        >
          <Route index element={<CreateSacco />} />
          <Route path="sacco" element={<CreateSacco />} />
          <Route path="sacco/:slug" element={<UpdateSacco />} />

          <Route path="officials" element={<CreateOfficial />} />
          <Route path="officials/:slug" element={<UpdateOfficial />} />

          <Route path="operators" element={<CreateOperator />} />
          <Route path="operators/:slug" element={<UpdateOperator />} />

          <Route path="stations" element={<CreateStation />} />
          <Route path="stations/:slug" element={<UpdateStation />} />

          <Route path="vehicles" element={<CreateVehicle />} />
          <Route path="vehicles/:slug" element={<UpdateVehicle />} />

          <Route path="charge" element={<CreateCharge />} />

          <Route path="balance" element={<Balance />} />
        </Route>

        <Route path="change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
}

export default App;
