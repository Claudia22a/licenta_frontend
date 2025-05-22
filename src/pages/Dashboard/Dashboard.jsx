import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BabiesContext } from '../../context/Babies/BabiesContext';
import LogCalendar from '../../components/LogCalendar/LogCalendar';
import BabyDetails from '../../components/BabyDetails/BabyDetails';
import { ListGroup, Card } from 'react-bootstrap';
import './Dashboard.scss';
import Resources from '../../components/Resources/Resources';

export default function Dashboard() {
  const {
    selectedBaby,
    babyAlert,
    loadingBabies,
    loadBabies,
    setLoadingBabies,
  } = useContext(BabiesContext);
  const [activeOption, setActiveOption] = useState('baby'); // Default to 'baby'

  useEffect(() => {
    setLoadingBabies();
    loadBabies();
  }, []);

  const handleOptionSelect = (option) => {
    setActiveOption(option);
  };

  if (loadingBabies) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      {!!babyAlert && <div className="alert alert-success">{babyAlert}</div>}

      {!selectedBaby && (
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">👶 Your Baby Dashboard</h2>
        </div>
      )}

      {!selectedBaby && (
        <div>Welcome! Add your first baby to start tracking progress.</div>
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
              {activeOption === 'baby' && <BabyDetails baby={selectedBaby} />}
              {activeOption === 'calendar' && <LogCalendar />}
            </Card>
          </div>
        </div>
      )}

      <Resources />
    </div>
  );
}
