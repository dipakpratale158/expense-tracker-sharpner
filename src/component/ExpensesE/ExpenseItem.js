import ExpenseDate from './ExpenseDate'
import './Expenseitem.css'
import Card from '../Ui/Card'
import ExpenseDetails from './ExpenseDetails'
import { useState } from 'react'


const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title)
  console.log("expensese evaluated by react")
  //beacise using expenses 5 times so 5 seprate istanses created
  //when click on update so only that specific instatce updated
  //state is separated
  // every time graps latest state is initial value when component function executed first time
  const handlechangebutton = () => {
    
    setTitle("update!")
    console.log(title)
    
  }
  
  
  return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
       <ExpenseDetails amounth={props.amounth}  location={props.location}   title={title} />
        <button onClick={handlechangebutton} className='btn'>changes expense</button>
        <button  className='btn'> X</button>
    </Card>
  )
}

export default Expenseitem
