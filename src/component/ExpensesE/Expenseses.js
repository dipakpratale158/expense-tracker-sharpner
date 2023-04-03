import React from 'react'
import "./Expenses.css"
import Expenseitem from './ExpenseItem'
import Card from '../Ui/Card'
const Expenseses = (props) => {
  return (
    <Card className='expenses'>
     <Expenseitem 
     date={props.item[0].date}
  amounth={props.item[0].amounth}
  location={props.item[0].location}
  title={props.item[0].title}
     />
        <Expenseitem 
     date={props.item[1].date}
  amounth={props.item[1].amounth}
  location={props.item[1].location}
  title={props.item[1].title}
     />
        <Expenseitem 
     date={props.item[2].date}
  amounth={props.item[2].amounth}
  location={props.item[2].location}
  title={props.item[2].title}
     />
        <Expenseitem 
     date={props.item[3].date}
  amounth={props.item[3].amounth}
  location={props.item[3].location}
  title={props.item[3].title}
     />
      <Expenseitem 
     date={props.item[4].date}
  amounth={props.item[4].amounth}
  location={props.item[4].location}
  title={props.item[4].title}
     />

    </Card>
  )
}

export default Expenseses