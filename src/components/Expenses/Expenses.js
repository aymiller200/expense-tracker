import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'
import ExpensesFilter from './ExpenseFilter'
import { useState } from 'react'

//? Whenever you combine components, you are using composition. Important part of composition is props.children feature which allows you to also create wrapper components which is a special type of component.

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const saveSelectedYear = (year) => {
    setFilteredYear(year)
  }

  const filteredItems = items
  .filter (
    (expense) => expense
    .date
    .getFullYear()
    .toString() === filteredYear,
  )

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveSelectedYear={saveSelectedYear}
        />
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList items={filteredItems}/>
      </Card>
    </div>
  )
}
export default Expenses
