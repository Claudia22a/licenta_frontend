import { BabiesContext } from '../context/Babies/BabiesContext';
import { useContext, useState } from 'react';
import EntryForm from '../components/LogEntryForms/LogEntryForm';
import EntryTypeSelector from '../components/LogEntryForms/EntryTypeSelector';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

export default function AddLogEntry() {
  const baseFormData = {
    title: '',
    logged_at: moment(),
    notes: '',
    amount: 0,
    start_time: null,
    end_time: null,
    unit: '',
    location: '',
    mood: '',
    diaper_type: '',
    feeding_type: '',
    sleep_type: '',
    walk_type: '',
    symptom_type: '',
    tag_type: '',
    other_diaper_type: '',
    other_feeding_type: '',
    other_sleep_type: '',
    other_walk_type: '',
    other_symptom_type: '',
    other_tag_type: '',
  };
  const [entryType, setEntryType] = useState('');
  const [formData, setFormData] = useState(baseFormData);
  const [error, setError] = useState('');
  const { selectedBabyId, setBabyAlert } = useContext(BabiesContext);
  const navigate = useNavigate();

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const updateDateField = (name, value) => {
    const dateTime = moment(value);
    setFormData((prev) => ({ ...prev, [name]: dateTime }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      entry_type: entryType,
      logged_at: formData.logged_at.toISOString(),
      start_time: formData.start_time?.toISOString(),
      end_time: formData.end_time?.toISOString(),
    };
    console.log(data);

    try {
      const token = localStorage.getItem('token');
      const res = await api.post(
        `/api/v1/babies/${selectedBabyId}/log_entries`,
        {
          log_entry: data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res) {
        setError('Something went wrong. Please try again.');
        return;
      } else {
        setError('');
        setFormData(baseFormData);
        setEntryType('');
        setBabyAlert('Log was saved successfully');
        navigate('/dashboard');
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.errors?.join(', ') || 'Something went wrong. Please try again.';
      setError(errorMsg);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <div className="form-card">
        <h2 style={{ color: '#023047' }}>Add Daily Detail</h2>
        <form onSubmit={onSubmit}>
          <EntryTypeSelector
            entryType={entryType}
            setEntryType={setEntryType}
            setFormData={setFormData}
            baseFormData={baseFormData}
          />

          {error && <div className="alert alert-danger">{error}</div>}
          <EntryForm
            data={formData}
            updateField={updateField}
            updateDateField={updateDateField}
            entryType={entryType}
          />
          {!!entryType && (
            <div className="row">
              <div className="col-sm-12">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{ backgroundColor: '#fb8500', border: 'none' }}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
