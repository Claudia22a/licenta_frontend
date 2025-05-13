import { walkTypes } from '../../helpers/constants';
import DateInput from '../DateInput';

export default function WalkForm({ updateField, updateDateField, data }) {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label>Walk type</label>
          <select
            name="walk_type"
            value={data.walk_type}
            onChange={(e) => updateField(e)}
            className="form-select"
            required
          >
            <option value="">Select...</option>
            {walkTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <label>Location</label>
          <input
            className="form-control"
            name="location"
            value={data.location}
            onChange={(e) => updateField(e)}
          />
        </div>
      </div>

      {data.walk_type === 'other_walk' && (
        <div className="row">
          <div className="col-sm-12">
            <label>Other</label>
            <input
              className="form-control"
              name="other_walk_type"
              value={data.other_walk_type}
              onChange={(e) => updateField(e)}
              required={data.walk_type === 'other_walk'}
            />
          </div>
        </div>
      )}

      <div className="row">
        <div className="col-sm-6">
          <label>Start time</label>
          <DateInput
            showTime
            value={data.start_time}
            onChange={(date) => updateDateField('start_time', date)}
          />
        </div>
        <div className="col-sm-6">
          <label>End time</label>
          <DateInput
            showTime
            value={data.end_time}
            onChange={(date) => updateDateField('end_time', date)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <label>Notes</label>
          <textarea
            name="notes"
            className="form-control"
            value={data.notes}
            onChange={(e) => updateField(e)}
          />
        </div>
      </div>
    </div>
  );
}
