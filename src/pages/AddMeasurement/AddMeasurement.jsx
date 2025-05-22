import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMeasurement.scss';
import { BabiesContext } from '../../context/Babies/BabiesContext';
import api from '../../api/axios';

export default function AddMeasurement() {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    head_circumference: '',
    notes: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { setBabyAlert, selectedBabyId } = useContext(BabiesContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Authentication token missing');
        return;
      }

      api.post(
        `/api/v1/babies/${selectedBabyId}/measurements`,
        { measurement: formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess('Measurement added successfully!');
      setError('');
      setFormData({
        weight: '',
        height: '',
        head_circumference: '',
        notes: '',
      });
      setBabyAlert('Measurement added successfully');
      navigate('/dashboard');
    } catch (err) {
      const errorMsg =
        err.response?.data?.errors?.join(', ') || 'Something went wrong.';
      setError(errorMsg);
      setSuccess('');
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <div className="form-card">
        <h2 style={{ color: '#023047' }}>Add Measurement</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-4">
              <div className="mb-3">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="mb-3">
                <label>Height (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="mb-3">
                <label>Head Circumference (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="head_circumference"
                  value={formData.head_circumference}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="mb-3">
                <label>Notes</label>
                <textarea
                  className="form-control"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: '#fb8500', border: 'none' }}
              >
                Save Measurement
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
