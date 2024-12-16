import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function ProtectedRoute({ Component }) {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    return isLoggedIn ?  <> <Header /> <Component />  <Footer /></> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
