import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">BabyAssistant</Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Log In</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
