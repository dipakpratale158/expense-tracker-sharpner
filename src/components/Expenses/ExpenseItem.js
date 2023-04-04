import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  console.log("expensese evaluated by react")
const handlechangebutton = () => {
  
  setTitle("update!")
  console.log(title)
}


  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount}  location={props.location}   title={title} />
        <button onClick={handlechangebutton} className='btn'>changes expense</button>
        <button  className='btnchange'> X</button>
    </Card>
    </li>
  );
}


export default ExpenseItem;