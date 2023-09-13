import React, {useState} from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

const Expenses = (props)=> {
  const[filteredYear, setFilteredYear] = useState('2023');
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filterExpenses = props.items.filter(expenses=>{
    return expenses.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div>
        <Card className="expenses1">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
         {filterExpenses.map((ele)=>{
          return(<ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)
          })}
        </Card>
    </div>
  )
}

export default Expenses