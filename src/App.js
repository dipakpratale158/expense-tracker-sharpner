import './App.css';
import ExpenseItem from './component/expenses/ExpenseItem.js';
import expenses from './expenses';
import "./component/expenses/Expenses.css"
import Card from './component/ui/Card';

function createexpense(exp){
  return (
    <ExpenseItem
  title={exp.title}
  amounth={exp.amounth}
  date={exp.date}

/>
  )
}

function App() {


  return (
    <Card className="expenses">
       {expenses.map(createexpense)}

    </Card>
  );
}

export default App;
