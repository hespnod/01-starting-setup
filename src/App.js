import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Water Bottle', amount: 25, date: new Date(2023, 9, 9), location: 'New Delhi' },
    { id: 'e2', title: 'Bike Insurance', amount: 4000, date: new Date(2023, 1, 5), location: 'Mumbai' },
    { id: 'e3', title: 'New Phone', amount: 23000, date: new Date(2023, 5, 23), location: 'Chandigarh' }
  ]
  return (
    <div>
      <NewExpenses />
      {expenses.map((ele) => {
        return (<ExpenseItem title={ele.title} amount={ele.amount} date={ele.date} location={ele.location}></ExpenseItem>)
      })}
    </div>
  );
}

export default App;
