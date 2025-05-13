import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ value, onChange, showTime, allowFuture }) => {
  return (
    <div className="datepicker">
      <DatePicker
        selected={value}
        onChange={onChange}
        className="form-control"
        wrapperClassName="w-full"
        popperPlacement="bottom-start"
        dateFormat={showTime ? 'dd/MM/YYYY h:mm aa' : 'dd/MM/YYYY'}
        isClearable
        placeholderText={showTime ? '"dd/mm/yyyy" h:mm aa' : '"dd/mm/yyyy"'}
        maxDate={allowFuture ? null : new Date()}
        showTimeInput={!!showTime}
      />
    </div>
  );
};

export default DateInput;
