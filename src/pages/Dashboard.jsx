import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4" style={{ color: '#023047' }}>
        Your Baby Dashboard
      </h2>
      <p>
        Welcome! Here you will see logs, graphs, and suggestions once you add
        your baby.
      </p>

      <Link to="/add-baby" className="btn btn-secondary">
        + Add Baby
      </Link>
    </div>
  );
}
