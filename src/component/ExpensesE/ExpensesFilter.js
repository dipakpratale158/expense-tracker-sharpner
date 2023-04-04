import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  
  const dropdownchangehandler = (event) => {
    props.onChangefilter(event.target.value)
  }
  

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownchangehandler}>
          <option value='2022'>2023</option>
          <option value='2021'>2022</option>
          <option value='2020'>2021</option>
          <option value='2019'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;