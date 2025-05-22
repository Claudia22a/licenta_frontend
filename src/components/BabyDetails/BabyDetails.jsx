import moment from 'moment';
import { Link } from 'react-router-dom';
import './BabyDetails.scss';
import { useEffect, useState } from 'react';

export default function BabyDetails({ baby }) {
  const [showCurrentWeight, setShowCurrentWeight] = useState(false);
  const [showCurrentHeight, setShowCurrentHeight] = useState(false);

  const sortedMeasurements = baby?.measurements?.sort((a, b) =>
    moment(b.created_at).diff(moment(a.created_at))
  );
  const latestWeight = sortedMeasurements.find(
    (m) => m && Number(m.weight)
  );
  const latestHeight = sortedMeasurements.find(
    (m) => m && Number(m.height)
  );

  useEffect(() => {
    setShowCurrentWeight(!!latestWeight);
    setShowCurrentHeight(!!latestHeight);
  }, []);



  const calculateAge = (birthDate) => {
    if (!birthDate) return 'Unknown';
    const birth = moment(birthDate);
    const now = moment();
    const days = now.diff(birth, 'days');
    const months = now.diff(birth, 'months');
    const years = now.diff(birth, 'years');

    if (days < 30) return `${days} day${days !== 1 ? 's' : ''}`;
    if (months < 12) {
      const weeks = Math.round(days / 7);
      return `${weeks} week${weeks !== 1 ? 's' : ''}`;
    }
    if (years < 2) return `${months} month${months !== 1 ? 's' : ''}`;
    return `${years} year${years !== 1 ? 's' : ''}`;
  };



  const onClickWeight = () => {
    if (latestWeight) setShowCurrentWeight((prev) => !prev);
  };
  const onClickHeight = () => {
    if (latestHeight) setShowCurrentHeight((prev) => !prev);
  };

  return (
    <div className="baby-details-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="baby-name">
          <span className="emoji">👶</span> {baby.name || 'Unknown'}
        </h4>
        <div className="d-flex gap-2">
          <Link
            to={`/add-measurement`}
            className="btn btn-sm btn-outline-secondary"
          >
            📏
          </Link>
          <Link
            to={`/edit-baby/${baby.id}`}
            className="btn btn-sm btn-outline-primary"
          >
            ✏️
          </Link>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-card">
          <div className="emoji">📅</div>
          <div>
            <strong>Birth Date</strong>
            <p>
              {baby.birth_date
                ? moment(baby.birth_date).format('MMMM D, YYYY')
                : 'N/A'}
            </p>
          </div>
        </div>
        <div className="detail-card">
          <div className="emoji">⏳</div>
          <div>
            <strong>Age</strong>
            <p>{calculateAge(baby.birth_date)}</p>
          </div>
        </div>
        <div className="detail-card">
          <div className="emoji">⚧️</div>
          <div>
            <strong>Gender</strong>
            <p>{baby.gender || 'N/A'}</p>
          </div>
        </div>
        <div
          className={`detail-card ${latestWeight && 'clickable'}`}
          onClick={onClickWeight}
        >
          <div className="emoji">⚖️</div>
          {showCurrentWeight && (
            <div>
              <strong>Current Weight</strong>
              <p>{latestWeight.weight} kg</p>
            </div>
          )}
          {!showCurrentWeight && (
            <div>
              <strong>Weight at Birth</strong>
              <p>
                {baby.weight_at_birth ? `${baby.weight_at_birth} kg` : 'N/A'}
              </p>
            </div>
          )}
        </div>
        <div
          className={`detail-card ${latestHeight && 'clickable'}`}
          onClick={onClickHeight}
        >
          <div className="emoji">📏</div>
          {showCurrentHeight && (
            <div>
              <strong>Current Height</strong>
              <p>
                <p>{latestHeight.height} cm</p>
              </p>
            </div>
          )}
          {!showCurrentHeight && (
            <div>
              <strong>Height at Birth</strong>
              <p>
                {baby.height_at_birth ? `${baby.height_at_birth} cm` : 'N/A'}
              </p>
            </div>
          )}
        </div>
        <div className="detail-card">
          <div className="emoji">🩺</div>
          <div>
            <strong>Blood Type</strong>
            <p>{baby.blood_type || 'N/A'}</p>
          </div>
        </div>
        <div className="detail-card full-width">
          <div className="emoji">🚫</div>
          <div>
            <strong>Allergies</strong>
            <p>{baby.allergies || 'None'}</p>
          </div>
        </div>
        <div className="detail-card full-width">
          <div className="emoji">📝</div>
          <div>
            <strong>Notes</strong>
            <p>{baby.notes || 'No notes'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
