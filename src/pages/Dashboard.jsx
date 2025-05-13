import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BabiesContext } from '../context/Babies/BabiesContext';

export default function Dashboard() {
  const { selectedBaby, babyAlert } = useContext(BabiesContext);

  return (
    <div className="container my-5">
      {!!babyAlert && <div className="alert alert-created">{babyAlert}</div>}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">👶 Your Baby Dashboard</h2>
        <Link to="/add-baby" className="btn btn-secondary">
          + Add Baby
        </Link>
      </div>

      {!selectedBaby && (
        <div className="alert alert-info">
          Welcome! Add your first baby to start tracking progress.
        </div>
      )}

      {selectedBaby && (
        <div
          className="form-card p-4"
          style={{ borderLeft: '6px solid var(--color-primary)' }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">{selectedBaby.name}</h4>
            <Link
              to={`/edit-baby/${selectedBaby.id}`}
              className="btn btn-sm btn-outline-primary"
            >
              Edit
            </Link>
            <Link to={`/add-log-entry`} className="btn btn-sm btn-primary">
              Add Log Entry
            </Link>
          </div>
          <p className="mb-1">
            <strong>Birth Date:</strong> {selectedBaby.birth_date}
          </p>
          <p className="mb-1">
            <strong>Gender:</strong> {selectedBaby.gender}
          </p>
          <p className="mb-1">
            <strong>Weight at Birth:</strong> {selectedBaby.weight_at_birth} kg
          </p>
          <p className="mb-3">
            <strong>Height at Birth:</strong> {selectedBaby.height_at_birth} cm
          </p>

          <div className="text-muted">
            More features like feeding, sleep, and vaccines coming soon!
          </div>
        </div>
      )}
    </div>
  );
}
