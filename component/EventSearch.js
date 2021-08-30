import React, { useRef } from "react";
import classes from "./eventSearch.module.css";

const EventSearch = ({ onSearch }) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_container}>
          <div>
            <label htmlFor="year">year: </label>
            <select id="year" ref={yearInputRef}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div>
            <label htmlFor="month">month: </label>
            <select id="month" ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default EventSearch;
