import React, { useState } from 'react'
import './Expenseform.css'
const Expenseform = (props) => {
const [enterTitle, setEnterTitle]=useState("")
const [enterAmounth, setenterAmounth]=useState("")
const [enterdtate, setenterdtate]=useState("")
  // const [userInput, setUserInput]=useState({
  //   enterTitle:"",
  //   enterAmounth:"",
  //   enterdtate:""
  // })


const handlechangetitle = (event) => {
  setEnterTitle(event.target.value)
  // setUserInput((prev)=>{
  //   return{

  //   ...prev,
  //   enterTitle:event.target.value
  //   }
  // })
}
const handlechangeamount = (event) => {
  setenterAmounth(event.target.value)
  // setUserInput((prev)=>{
  //   return{

  //   ...prev,
  //   enterAmounth:event.target.value
  //   }
  // })
}
const handlechangedate = (event) => {
  
  setenterdtate(event.target.value)
  // setUserInput((prev)=>{
  //   return{

  //   ...prev,
  //   enterdtate:event.target.value
  //   }
  // })
}
 
 
const handlesubmit = (event) => {
  event.preventDefault()
    
  const expenseData ={
    title:enterTitle,
    amounth:enterAmounth,
    date:new Date(enterdtate)

  }
  props.onsaveexpensedata(expenseData)
    setEnterTitle("")
  setenterAmounth("")
  setenterdtate("")
}



  return (
    <form onSubmit={handlesubmit}>
    <div className='new-expense__controls'>
      <div className='new-expense__controls'>
        <label>Title</label>
        <input 
        onChange={handlechangetitle}
         type="text"
         value={enterTitle}
          />
      </div>
      <div className='new-expense__controls'>
        <label>Amounth</label>
        <input
         type="number"
        onChange={handlechangeamount}
         min="0.01" step="0.01"
         value={enterAmounth}
         />
      </div>
      <div className='new-expense__controls'>
        <label>Date</label>
        <input
         type="date"
                onChange={handlechangedate}
         min="2018-01-01" max="2023-12-31" 
         value={enterdtate}
         />
      </div>
      <div className='new-expense__actions'>
        <button  type='submit'>+</button>
      </div>
    </div>
    </form>
  )
}

export default Expenseform
