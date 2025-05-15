import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BabiesContext } from '../../context/Babies/BabiesContext';
import LogCalendar from '../../components/LogCalendar/LogCalendar';
import { ListGroup, Card } from 'react-bootstrap';
import './Dashboard.scss';

export default function Dashboard() {
  const { selectedBaby, babyAlert } = useContext(BabiesContext);
  const [activeOption, setActiveOption] = useState('baby'); // Default to 'baby'

  const handleOptionSelect = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="container my-5">
      {!!babyAlert && <div className="alert alert-success">{babyAlert}</div>}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">{selectedBaby.name}</h2>
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
        <div className="row">
          {/* Left/Top Panel: Options */}
          <div className="col-md-1 mb-3 mb-md-0">
            <ListGroup className="dashboard-options d-flex flex-md-column flex-row justify-content-center justify-content-md-start gap-2">
              <ListGroup.Item
                action
                active={activeOption === 'baby'}
                onClick={() => handleOptionSelect('baby')}
                className="emoji-button"
              >
                👶
              </ListGroup.Item>
              <ListGroup.Item
                action
                active={activeOption === 'calendar'}
                onClick={() => handleOptionSelect('calendar')}
                className="emoji-button"
              >
                📅
              </ListGroup.Item>
            </ListGroup>
          </div>

          {/* Right/Bottom Panel: Content */}
          <div className="col-md-11">
            <Card className="form-card p-4">
              {activeOption === 'baby' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <Link
                        to={`/edit-baby/${selectedBaby.id}`}
                        className="btn btn-sm btn-outline-primary me-2"
                      >
                        Edit
                      </Link>
                      <Link
                        to={`/add-log-entry`}
                        className="btn btn-sm btn-primary"
                      >
                        Add Log Entry
                      </Link>
                    </div>
                  </div>
                  <p className="mb-1">
                    <strong>Birth Date:</strong> {selectedBaby.birth_date}
                  </p>
                  <p className="mb-1">
                    <strong>Gender:</strong> {selectedBaby.gender}
                  </p>
                  <p className="mb-1">
                    <strong>Weight at Birth:</strong>{' '}
                    {selectedBaby.weight_at_birth} kg
                  </p>
                  <p className="mb-3">
                    <strong>Height at Birth:</strong>{' '}
                    {selectedBaby.height_at_birth} cm
                  </p>
                  <div className="text-muted">
                    More features like feeding, sleep, and vaccines coming soon!
                  </div>
                </div>
              )}
              {activeOption === 'calendar' && <LogCalendar />}
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
