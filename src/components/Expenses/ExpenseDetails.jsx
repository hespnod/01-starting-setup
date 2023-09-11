import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react';

const ExpenseDeatils = (props)=>{

    const[amount,setAmount] = useState(props.amount);
    const handleClick = ()=>{
        setAmount(100);
    }

    return(
        <Card className="expense-item">
            <div className="expense-item__location">{props.location}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{amount} Rs</div>
            </div> 
            <button onClick={handleClick}>Make 100</button>
        </Card>
    );
}
export default ExpenseDeatils;