import React from "react";
import DatePicker from "react-datepicker";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="date-picker">
        Go to this date:
        <DatePicker
          disabled={props.nasa.loading ? "disabled" : null}
          dateFormat="yyyy-MM-dd"
          selected={props.nasa.date}
          onChange={props.handleDateChange}
        />
      </div>
      <div className="next-prev">
        <button
          type="button"
          disabled={props.nasa.loading ? "disabled" : null}
          onClick={() => props.handleDateChange(props.nasa.date, "daybefore")}
        >
          &larr; Previous Day
        </button>
        <button
          type="button"
          disabled={props.nasa.loading ? "disabled" : null}
          onClick={() => props.handleDateChange(props.nasa.date, "dayafter")}
        >
          Next Day &rarr;
        </button>
      </div>
    </div>
  );
};

export default Navigation;
