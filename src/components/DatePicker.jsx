import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import format from "date-fns/format";
import './DatePickerStyles.css'
// import "react-multi-date-picker/styles/colors/teal.css"

function DateRangePicker(props) {
  const { onSelect } = props;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    //close picker if end date is selected
    if (end) {
      dates[0] = format(dates[0], "yyyy-MM-dd")
      dates[1] = format(dates[1], "yyyy-MM-dd")
      onSelect?.({ "startDate": dates[0], "endDate": dates[1] });
      setIsOpen(!isOpen);
      setSelected(`${format(start, "MMM dd")} - ${format(end, "MMM dd")}`)
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setSelected(null)
  };

  return (
    <div
      // use: outsideClick={() => setIsOpen(false)}
      class="items-center gap-2 relative w-full inline-block"
    >

      <button className="bg-white p-4 pr-8 w-full rounded-[50px] md:rounded-xl font-semibold relative text-xs sm:text-sm h-12 md:h-20" onClick={handleClick}
      >
        <svg
          class="inline-block pr-2 w-6 h-6 absolute right-0 top-[50%] transform translate-y-[-50%]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        {/* {startDate && endDate ? `${format(startDate, "MMM dd")} - ${format(endDate, "MMM dd")}` : "Staying From - To"} */}
        {selected ? selected : "Dates"}
      </button>
      {isOpen && (
        <div className='absolute w-full pt-1 text-center z-10'>
        <DatePicker
          wrapperClassName="w-full"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          selectsRange
          inline
        />
        </div>
      )}

    </div>

  );
}



export default DateRangePicker;