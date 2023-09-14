import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props)=> {
  const [checkForm, setCheckForm] = useState(false);
  const handleFormSubmit=(expenseData)=>{
    const newExpenseData={
      ...expenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(newExpenseData)
    setShowForm(<button onClick={handleShowForm}>Add Expense</button>);
    setCheckForm(!checkForm);
  }

 
  const handleCancel = ()=>{
    setShowForm(<button onClick={handleShowForm}>Add Expense</button>);
    setCheckForm(!checkForm);
  }


  const handleShowForm = ()=>{
    if(!checkForm){
      setShowForm(<ExpenseForm onCancel = {handleCancel} onFormSubmit={handleFormSubmit}/>);
    }else{
      setShowForm(<button onClick={handleShowForm}>Add Expense</button>);
    }
    setCheckForm(!checkForm);
  }
  const[showForm,setShowForm] = useState(<button onClick={handleShowForm}>Add Expense</button>);

  

  return (
    <div className='new-expense'>
        {showForm}
    </div>
  )
}

export default NewExpenses