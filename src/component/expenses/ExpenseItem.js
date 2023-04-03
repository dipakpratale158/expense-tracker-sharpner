import ExpenseDate from './ExpenseDate'
import './Expenseitem.css'
import Card from '../ui/Card'
const Expenseitem = (props) => {
 
  return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
      
      <div className='expense-item__description'>
       <h2>{props.title}</h2>
      
      <div className='expense-item__price'>${props.amounth}</div>
     <div>{"local of expendature"}</div>
      </div>
    </Card>
  )
}

export default Expenseitem
