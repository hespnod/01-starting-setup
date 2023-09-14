import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props)=> {
    const[enterTitle, setEnterTitle] = useState('')
    const[enterAmount, setEnterAmount] = useState('')
    const[enterDate, setEnterDate] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const expenseData = {
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate)
        };
        props.onFormSubmit(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }


    const handleTitle = (event)=>{
        setEnterTitle(event.target.value);
    }
    const handleAmount = (event)=>{
        setEnterAmount(event.target.value);
    }
    const handleDate = (event)=>{
        setEnterDate(event.target.value);
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title:</label>
                <input type="text" value={enterTitle} onChange={handleTitle}/>
            </div>
            <div className="new-expense__control">
                <label> Amount:</label>
                <input type="number" value={enterAmount} onChange={handleAmount}/>
            </div>
            <div className="new-expense__control">
                <label> Date:</label>
                <input type="date" value={enterDate} onChange={handleDate} />
            </div>
        </div>
        <div className="new-expense__actions">
             <button type='button' onClick={props.onCancel}>Cancel</button>
             <button type='submit'>Add Expense</button>
        </div>

    </form>
  )
}

export default ExpenseForm