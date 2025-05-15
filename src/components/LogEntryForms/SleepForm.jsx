import { sleepTypes } from '../../helpers/constants';
import { shouldUpdateEndTime } from '../../helpers/datetime';
import DateInput from '../DateInput';

export default function SleepForm({ updateField, updateDateField, data }) {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-6">
          <label>Start time</label>
          <DateInput
            showTime
            value={data.start_time}
            onChange={(date) => {
              updateDateField('start_time', date);
              if (shouldUpdateEndTime) updateDateField('end_time', date);
            }}
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
        <div className="col-sm-6">
          <label>Sleep type</label>
          <select
            name="sleep_type"
            value={data.sleep_type}
            onChange={(e) => updateField(e)}
            className="form-select"
            required
          >
            <option value="">Select...</option>
            {sleepTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
        {data.sleep_type === 'other_sleep' && (
          <div className="col-sm-6">
            <label>Other</label>
            <input
              className="form-control"
              name="other_sleep_type"
              value={data.other_sleep_type}
              onChange={(e) => updateField(e)}
              required={data.sleep_type === 'other_sleep'}
            />
          </div>
        )}
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
