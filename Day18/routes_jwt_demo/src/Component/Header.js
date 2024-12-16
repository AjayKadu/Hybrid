import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './common.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            {/* Header Content */}
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h1>Unlock Your Potential with Online Learning | Upskill with Top-notch Courses</h1>
                        <p>
                            Empowering Your Future through Online Learning. Explore our comprehensive curriculum, expert
                            instructors, and flexible learning options.
                        </p>
                        <ul>
                            <li>✅ Learn from Google, Facebook, and IIT professionals</li>
                            <li>✅ Get a high-paying US-based remote job in just 6 months</li>
                            <li>✅ 1500+ Placements | 800+ companies</li>
                        </ul>
                        <button className="btn btn-small btn-danger">Apply</button>
                    </div>
                </div>
            </div>


             {/* Navigation Bar */}
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
