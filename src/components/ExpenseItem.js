// import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDeatils from './ExpenseDetails';

function ExpenseItem(props) {
    return (
        <div className='expenses'>
            <ExpenseDate date={props.date} />
            <ExpenseDeatils location={props.location} title={props.title} amount={props.amount} />
        </div>
    );
}
export default ExpenseItem;