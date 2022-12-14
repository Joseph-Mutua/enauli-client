import { Navigate } from "react-router-dom";
import { isAuth } from "../helpers/auth";

const PrivateRoute = ({ children}) => {
  if (!isAuth()) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/" />;
  }

  // authorized so return child components
  return children;
};

export default PrivateRoute;
