import { BabiesContext } from '../context/Babies/BabiesContext';
import { useContext, useState } from 'react';
import EntryForm from '../components/LogEntryForms/LogEntryForm';
import EntryTypeSelector from '../components/LogEntryForms/EntryTypeSelector';

export default function AddLogEntry() {
  const baseFormData = {
    title: '',
    logged_at: Date.now(),
    notes: '',
    amount: 0,
    start_time: Date.now(),
    end_time: Date.now(),
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

  const updateField = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const updateDateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  //   const { selectedBabyId } = useContext(BabiesContext);
  const onSubmit = () => {};
  //   const onSubmit = async (data) => {
  //     const response = await fetch(`/api/v1/babies/${selectedBabyId}/log_entries`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ log_entry: data })
  //     });

  //     if (response.ok) {
  //       reset();
  //       router.push(`/babies/${selectedBabyId}/log`);
  //     } else {
  //       const { errors } = await response.json();
  //       alert(errors.join('\n'));
  //     }
  //   };

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
