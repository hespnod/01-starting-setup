import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=> {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("I'm inside");
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title:</label>
                <input type="text" />
            </div>
            <div className="new-expense__control">
                <label> Amount:</label>
                <input type="number" />
            </div>
            <div className="new-expense__control">
                <label> Date:</label>
                <input type="date" />
            </div>
        </div>
        <div className="new-expense__actions">
             <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm