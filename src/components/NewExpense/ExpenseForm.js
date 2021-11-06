import { useState } from 'react'

import './ExpenseForm.css'

/* 
!Two way binding: 
    ? We don't just listen to changes, but we can also pass a new value back into the input so that we can set or change the input programatically

    ? We don't just listen to changes in input to update our state, we also feed the state back into the input so that when we change the state, we also change the input. 
*/

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState()

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // })

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // })
    //? in order to do the above safely, we must pass in a function that takes the previous state as an argument, so we have that snapshot. Since we are using just one state, we heavily rely on the snapshot of that previous state:
    //? We do it this way because: React schedules state updates, it doesn't preform them instantly and therefore if you schedule a lot of state update at the same time you could be depending on an outdated or incorrect state snapshot if you use the above approach

    //? Using this approach ensures that react always has the latest state update.
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value }
    // })

    setEnteredTitle(event.target.value)
    
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
   setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = { 
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
     }

    console.log(expenseData.date);
   
    props.onSaveExpenseData(expenseData)
    expenseData.title= ''
    expenseData.date = ''
    expenseData.amount = ''
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
