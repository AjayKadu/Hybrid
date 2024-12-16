import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function Launcher() {
    return (
        <>

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute Component={Home} />} />
                <Route path="/home" element={<ProtectedRoute Component={Home} />} />
                <Route path="/about" element={<ProtectedRoute Component={About} />} />
                <Route path="/profile" element={<ProtectedRoute Component={Profile} />} />
                <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            
        </>
    );
}

export default Launcher;
