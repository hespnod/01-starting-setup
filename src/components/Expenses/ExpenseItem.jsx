// import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDeatils from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <li>
        <Card className='expenses2'>
            <ExpenseDate date={props.date} />
            <ExpenseDeatils title={props.title} amount={props.amount} />
        </Card>
        </li>
    );
}
export default ExpenseItem;