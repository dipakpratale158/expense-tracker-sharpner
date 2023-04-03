import './App.css';
import ExpenseItem from './component/expenses/ExpenseItem.js';
import expenses from './expenses';
import "./component/expenses/Expenses.css"
import Card from './component/ui/Card';

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


  return (
    <Card className="expenses">
       {expenses.map(createexpense)}

    </Card>
  );
}

export default App;
