import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext';
import { BabiesContext } from '../context/Babies/BabiesContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { babies, selectedBabyId, selectBaby } = useContext(BabiesContext);
  const navigate = useNavigate();

  const onSelectBaby = (id) => {
    selectBaby(id);
    localStorage.setItem('selectedBabyId', id);
    navigate('/dashboard');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">
        BabyAssistant
      </Link>

      {/* Add the toggler button for smaller screens */}
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

      {/* Add ID to the collapse div and ensure proper classes */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {user && babies.length > 0 && (
            <div className="dropdown me-3">
              <button
                className="btn btn-outline-accent dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {babies.find((b) => b.id === selectedBabyId)?.name ||
                  'Select Baby'}
              </button>
              <ul className="dropdown-menu">
                {babies.map((baby) => (
                  <li key={baby.id}>
                    <button
                      className={`dropdown-item ${
                        baby.id === selectedBabyId ? 'active' : ''
                      }`}
                      onClick={() => onSelectBaby(baby.id)}
                    >
                      {baby.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-secondary">
                  Log In
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
