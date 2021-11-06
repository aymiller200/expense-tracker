import React from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem({title, amount, date, getExpenseYear}) {

  /* 
  !useState()
  ? react hook, hooks always start with use and can only be called inside of a react component(function)

  ? With useState() we basically create a special kind of variable. A variable where changes will lead this component function to be called again.

  ? We can assign a special first-render initial value to this useState()

  ? Use state also returns something. It gives us access to this scial variable. Also returns a function that we can call to assign a new value to that variable

  ? Returns an array where the first value is the current state value, and the second value is that updating function

      ? We set a new title by calling the second value, the setter function
      ? By calling this function we are telling react that you want to assign a new value to the state, and that then also tells react that the component in which this state was registered (per component instance basis) with useState should be reevaluated. And therefor react will execute the component function again and evaluate the JSX code again, and then it will draw any changes it detects compared to the last time it did this and draw them to the screen.

  ! If you have data that might change, and those changes affect the UI, you must use useState
  ! State is separated in a per component instance basis
  ! you could also be updating state because a timer (set with setTimeout()) expired for example.


  */

  return (
    <li>
    <Card className="expense-item">
     <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
    </Card>
    </li>
  )
}

export default ExpenseItem
