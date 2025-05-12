import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; // Import the default styles

const DateInput = ({ value, onChange }) => {
  // Example of how to apply a custom class based on the highlightColor prop
  // You would define CSS rules for `.react-datepicker-wrapper .${highlightColor}-datepicker`

  return (
    <div className='datepicker'> {/* Container for positioning the calendar */}
      <DatePicker
        selected={value} // The currently selected date
        onChange={onChange} // Function called when a date is selected
        className="form-control"
        wrapperClassName="w-full" // Ensure the wrapper takes full width
        popperPlacement="bottom-start" // Position the calendar popup
        dateFormat="dd/MM/YYYY" // Format of the date in the input field
        // You can add more props here for customization, e.g.:
        // showYearDropdown
        // showMonthDropdown
        // dropdownMode="select"
        isClearable
        placeholderText="dd/mm/yyyy"
        // minDate={new Date()} // Example: Prevent selecting past dates
        maxDate={new Date()} // Example: Only allow selecting up to 5 days in the future
      />
      {/* Note: To deeply customize the calendar's appearance (header, days, etc.),
           you typically need to override the default CSS classes provided by
           react-datepicker in your own stylesheet. */}
    </div>
  );
};

export default DateInput;
