import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props)=> {
  const handleFormSubmit=(expenseData)=>{
    const newExpenseData={
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpenseData)
  }


  return (
    <div className='new-expense'>
        <ExpenseForm onFormSubmit={handleFormSubmit}/>
    </div>
  )
}

export default NewExpenses