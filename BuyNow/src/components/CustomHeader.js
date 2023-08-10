import React from "react";
import { useEffect, useState } from "react";

const CustomHeader = ({
  selectedDate,
  decreaseMonth,
  increaseMonth,
  onChangeYear,
  minDate,
  maxDate,
}) => {
  const [yearInput, setYearInput] = useState(
    selectedDate ? selectedDate.getFullYear() : ""
  );

  // Update the yearInput whenever the selectedDate prop changes
  useEffect(() => {
    setYearInput(selectedDate ? selectedDate.getFullYear() : "");
  }, [selectedDate]);

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    setYearInput(newYear);
    onChangeYear(newYear); // Update the selectedDate state in the parent component
  };

  const getMonthName = (date) => {
    if (date) {
      return date.toLocaleString("default", { month: "long" });
    } else {
      // If no date is selected, use increaseMonth to get the next month from the current month
      const nextMonth = new Date(); // Call increaseMonth without any arguments to get the next month
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth.toLocaleString("default", { month: "long" });
    }
  };

  // checks if 'selectedDate' exists? ()
  const formattedDate = selectedDate
    ? selectedDate.toLocaleString("default", { month: "long", year: "numeric" })
    : getMonthName(new Date());

  const currentYear = new Date().getFullYear();

  // Generate a list of selectable years
  const years = [];
  const minYear = minDate ? minDate.getFullYear() : currentYear - 100;
  const maxYear = maxDate ? maxDate.getFullYear() : currentYear;
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }

  return (
    <div className="custom-header">
      <button onClick={decreaseMonth}>Previous Month</button>
      <span>
        {formattedDate}
        {/* {yearInput} */}
      </span>
      <button onClick={increaseMonth}>Next Month</button>
      <input
        type="number"
        value={yearInput}
        onChange={handleYearChange}
        // style={{ width: "60px" }}
      />
    </div>
  );
};

export default CustomHeader;
