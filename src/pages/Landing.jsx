import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Landing() {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4">Welcome to BabyAssistant 👶</h1>
      <p className="lead">Track your baby's daily routines and health in one place.</p>

      {!user && (
        <div className="mt-4">
          <Link to="/signup" className="btn btn-primary me-2">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Log In</Link>
        </div>
      )}
    </div>
  );
}
