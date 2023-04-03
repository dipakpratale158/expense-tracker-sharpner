import React from 'react'
import "./Expenseitem.css"
const ExpenseDetails = (props) => {
  return (
    <div className='expense-item__description'>
             <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amounth}</div>
     <div className='expense-item__location'>{props.location}</div>
     

     </div>
  )
}

export default ExpenseDetails
