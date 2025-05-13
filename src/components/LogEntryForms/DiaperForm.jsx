import { diaperTypes } from '../../helpers/constants';
import DateInput from '../DateInput';

export default function DiaperForm({ updateField, updateDateField, data }) {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label>Type</label>
          <select
            name="diaper_type"
            className="form-select"
            onChange={(e) => updateField(e)}
            value={data.diaper_type}
            required
          >
            <option value="">Select...</option>
            {diaperTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <label>Logged at</label>
          <DateInput
            showTime
            value={data.logged_at}
            onChange={(date) => updateDateField('logged_at', date)}
          />
        </div>
      </div>

      {data.diaper_type === 'other_diaper' && (
        <div className="row">
          <div className="col-sm-12">
            <label>Other</label>
            <input
              className="form-control"
              name="other_diaper_type"
              value={data.other_diaper_type}
              onChange={(e) => updateField(e)}
              required={data.diaper_type === 'other_diaper'}
            />
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-sm-12">
          <label>Notes</label>
          <textarea name="notes"
            className="form-control"
            value={data.notes}
            onChange={(e) => updateField(e)} />
        </div>
      </div>
    </div>
  );
}
