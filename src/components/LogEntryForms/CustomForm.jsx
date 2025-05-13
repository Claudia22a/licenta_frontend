import { tagTypes } from '../../helpers/constants';
import DateInput from '../DateInput';

export default function CustomForm({ updateField, updateDateField, data }) {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-12">
          <label>Title</label>
          <input
            className="form-control"
            name="title"
            value={data.title}
            onChange={(e) => updateField(e)}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <label>Tag</label>
          <select
            name="tag_type"
            value={data.tag_type}
            onChange={(e) => updateField(e)}
            className="form-select"
            required
          >
            <option value="">Select...</option>
            {tagTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-6">
          <label>When</label>
          <DateInput
            name="logged_at"
            allowFuture
            showTime
            value={data.logged_at}
            onChange={(date) => updateDateField('logged_at', date)}
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
