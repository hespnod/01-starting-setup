import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');


  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filterExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div>
      <Card className="expenses1">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses}></ExpenseList>
      </Card>
    </div>
  )
}

export default Expenses