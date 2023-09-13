// import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDeatils from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseDate date={props.date} />
            <ExpenseDeatils location={props.location} title={props.title} amount={props.amount} />
        </Card>
    );
}
export default ExpenseItem;