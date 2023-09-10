import './ExpenseItem.css'

const ExpenseDeatils = (props)=>{
    return(
        <div className="expense-item">
            <div className="expense-item__location">{props.location}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} Rs</div>
            </div> 
        </div>
    );
}
export default ExpenseDeatils;