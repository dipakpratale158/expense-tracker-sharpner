import './App.css';
import ExpenseItem from './component/ExpensesE/ExpenseItem.js';
import DUMMY_EXPENSES from './DUMMY_EXPENSES';
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

//dropdoun
const [filterdyear,setFilterYear]=useState("2021")
const handlefilterchange=selectYear=>{
  setFilterYear(selectYear)
}


////expenseformdetail
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
const handleaddexpense = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};

  return (
<div>
    <NewExpense  onaddexpense={handleaddexpense}
    
    />

    <Card className="expenses">
<ExpensesFilter selected={filterdyear} onChangefilter={handlefilterchange}/>
       {expenses.map(createexpense)}

    </Card>
    </div>
  );
}

export default App;
