import { useState } from "react";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Water Bottle', amount: 25, date: new Date(2023, 9, 9)},
    { id: 'e2', title: 'Bike Insurance', amount: 4000, date: new Date(2023, 1, 5)},
    { id: 'e3', title: 'New Phone', amount: 23000, date: new Date(2023, 5, 23) }
  ]

  const[dataOnScreen,setDataOnScreen] = useState(expenses);
  console.log(dataOnScreen);
  const handleAddExpense=(expenseData)=>{
    const newExpenseData=[...dataOnScreen,
      {
      ...expenseData
    }]
    console.log(newExpenseData);
    setDataOnScreen(newExpenseData);
  }


  return (
    <div>
      <NewExpenses onAddExpense={handleAddExpense} />
      {/* {dataOnScreen.map((ele) => {
        return (<ExpenseItem title={ele.title} amount={ele.amount} date={ele.date}></ExpenseItem>)
      })} */}
      <Expenses items={dataOnScreen}></Expenses>
    </div>
  );
}

export default App;
