import { useContext, useState } from 'react';
import DateInput from '../components/DateInput';
import api from '../api/axios';
import { BabiesContext } from '../context/Babies/BabiesContext';
import { useNavigate } from 'react-router-dom';
import { bloodTypes } from '../helpers/constants';

export default function AddBaby() {
  const [formData, setFormData] = useState({
    name: '',
    birth_date: '',
    gender: '',
    weight_at_birth: '',
    height_at_birth: '',
    blood_type: '',
    allergies: '',
    notes: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const { addBaby } = useContext(BabiesContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const res = await api.post(
        '/api/v1/babies',
        { baby: formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess('Baby added successfully!');
      setError('');
      setFormData({
        name: '',
        birth_date: '',
        gender: '',
        weight_at_birth: '',
        height_at_birth: '',
        blood_type: '',
        allergies: '',
        notes: '',
      });
      addBaby(res.data);
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
        <h2 style={{ color: '#023047' }}>Add Your Baby</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12">
              <div className="mb-3">
                <label>Baby Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="mb-3">
                <label>Date of Birth</label>
                <DateInput
                  value={formData.birth_date}
                  onChange={(date) =>
                    setFormData((prev) => ({ ...prev, birth_date: date }))
                  }
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-3">
                <label>Gender</label>
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="girl">Girl</option>
                  <option value="boy">Boy</option>
                </select>
              </div>
            </div>
          </div>

          {/* Optional fields: add more below if needed */}
          <div className="row">
            <div className="col-sm-4">
              <div className="mb-3">
                <label>Weight at Birth (kg)</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  name="weight_at_birth"
                  value={formData.weight_at_birth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="mb-3">
                <label>Height at Birth (cm)</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-control"
                  name="height_at_birth"
                  value={formData.height_at_birth}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="col-sm-4">
              <div className="mb-3">
                <label>Blood Type</label>

                <select
                  className="form-select"
                  name="blood_type"
                  value={formData.blood_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select...</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="mb-3">
                <label>Allergies</label>
                <textarea
                  className="form-control"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                ></textarea>
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
                Save Baby
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
