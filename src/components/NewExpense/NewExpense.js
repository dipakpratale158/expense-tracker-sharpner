import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [buttonn,setbuttonn]=useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setbuttonn(false)

  };

  
  const handlebuttton = () => {
    setbuttonn(true)
  }

const handlebuttonstop=()=>{
  setbuttonn(false)

}

  return (
    <div className='new-expense'>
      {!buttonn && <button style={{backgroundColor:"black"}} onClick={handlebuttton}>Add New Expanses</button>}
      {buttonn && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler} 
      oncancel={handlebuttonstop}
      />}
    </div>
  );
};

export default NewExpense;