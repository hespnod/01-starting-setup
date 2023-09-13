import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=> {

    const[userDetails, setUserDetails] = useState({
        enterTitle:'',
        enterAmount:'',
        enterDate:''
    })

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUserDetails({
            ...userDetails,
            enterTitle:e.target[0].value,
            enterAmount:e.target[1].value,
            enterDate:e.target[2].value
        })
        console.log(userDetails);
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