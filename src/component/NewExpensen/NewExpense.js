import React from 'react'
import Expenseform from "./Expenseform"
import "./NewExpense.css"
const NewExpense = (props) => {
  
 
  
  const handalesaveexpensedata = (enterexpensedata) => {
    const expenseData={
      ...enterexpensedata,
      id:Math.random().toString()
    }
    props.onaddexpense(expenseData)
    }
  

  return (
    <div className='new-expense'>
      <Expenseform onsaveexpensedata={handalesaveexpensedata}/>
    </div>
  );
};

export default NewExpense
