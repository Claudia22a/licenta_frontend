import { feedingTypes } from '../../helpers/constants';
import DateInput from '../DateInput';

export default function FeedForm({ updateField, updateDateField, data }) {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-sm-3">
          <label>Amount</label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={data.amount}
            onChange={(e) => updateField(e)}
          />
        </div>
        <div className="col-sm-4">
          <label>Unit</label>
          <select
            name="unit"
            value={data.unit}
            onChange={(e) => updateField(e)}
            className="form-select"
          >
            <option value="">Select...</option>
            <option value="ml">ml</option>
            <option value="g">g</option>
            <option value="oz">oz</option>
          </select>
        </div>
        <div className="col-sm-5">
          <label>Method</label>
          <select
            name="method"
            value={data.method}
            onChange={(e) => updateField(e)}
            className="form-select"
            required
          >
            <option value="">Select...</option>
            {feedingTypes.map((type) => (
              <option key={type.name} value={type.name}>
                {type.description}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <label>Logged at</label>
          <DateInput
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
