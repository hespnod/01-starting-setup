import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react';

const ExpenseDeatils = (props)=>{

    const[amount,setAmount] = useState(props.amount);
    const[btn,setBtn] = useState('Make 100');
    const [isCheck, setIsCheck] = useState(false);
    const handleClick = ()=>{
        if(!isCheck){
            setAmount(100);
            let amt = 'Make ' + props.amount;
            setBtn(amt);
        }else{
            setAmount(props.amount);
            setBtn('Make 100');
        }
        console.log(isCheck);
        setIsCheck(!isCheck);
    }

    return(
        <Card className="expense-item">
            {/* <div className="expense-item__location">{props.location}</div> */}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{amount} Rs</div>
            </div> 
            <button onClick={handleClick}>{btn}</button>
        </Card>
    );
}
export default ExpenseDeatils;