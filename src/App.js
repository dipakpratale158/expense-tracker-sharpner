import './App.css';
import ExpenseItem from './component/ExpensesE/ExpenseItem.js';
import expenses from './expenses';
import "./component/ExpensesE/Expenses.css"
import Card from './component/Ui/Card';
import NewExpense from './component/NewExpensen/NewExpense';
import ExpensesFilter from './component/ExpensesE/ExpensesFilter';
import { useState } from 'react';
function createexpense(exp){

  return (
     
    <ExpenseItem
  date={exp.date}
  amounth={exp.amounth}
  location={exp.location}
  title={exp.title}

/>
  )
}

function App() {


const [filterdyear,setFilterYear]=useState("2020")
const handlefilterchange=selectYear=>{
  setFilterYear(selectYear)
}
const handleaddexpense=expenseparent=>{
  console.log("in app.js")
  console.log(expenseparent)
}

  return (
<div>
    <NewExpense onaddexpense={handleaddexpense}/>
    <Card className="expenses">
<ExpensesFilter selected={filterdyear} onChangefilter={handlefilterchange}/>
       {expenses.map(createexpense)}

    </Card>
    </div>
  );
}

export default App;
