import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DateInput = ({ value, onChange, showTime }) => {
  return (
    <div className="datepicker">
      <DatePicker
        selected={value ? moment(value).toDate() : null}
        onChange={onChange}
        className="form-control"
        wrapperClassName="w-full"
        popperPlacement="bottom-start"
        dateFormat={showTime ? 'dd/MM/YYYY h:mm aa' : 'dd/MM/YYYY'}
        isClearable
        placeholderText={showTime ? '"dd/mm/yyyy" h:mm aa' : '"dd/mm/yyyy"'}
        showTimeInput={!!showTime}
      />
    </div>
  );
};

export default DateInput;
