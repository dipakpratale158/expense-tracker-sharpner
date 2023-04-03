import ExpenseDate from './ExpenseDate'
import './Expenseitem.css'
import Card from '../ui/Card'
import ExpenseDetails from './ExpenseDetails'


const Expenseitem = (props) => {
 
  return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amounth={props.amounth}  location={props.location}   title={props.title} />
        <button className='btn'> X</button>
    </Card>
  )
}

export default Expenseitem
