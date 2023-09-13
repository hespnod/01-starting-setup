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

  let expenseContent = <p style={{color:'white'}}>No expense found</p>
  if(filterExpenses.length > 1){
    expenseContent = filterExpenses.map((ele)=>{
      return(<ExpenseItem key={ele.id} title={ele.title} amount={ele.amount} date={ele.date} />)
      })
  }
  if(filterExpenses.length===1){
    expenseContent = <p style={{color:'white'}}>Only single element present here. Please add more</p>
  }
  return (
    <div>
        <Card className="expenses1">
          <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
         {expenseContent}
        </Card>
    </div>
  )
}

export default Expenses