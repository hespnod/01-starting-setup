import { useState } from "react";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSE = [
  { id: 'e1', title: 'Water Bottle', amount: 25, date: new Date(2023, 9, 9)},
  { id: 'e2', title: 'Bike Insurance', amount: 4000, date: new Date(2023, 1, 5)},
  { id: 'e3', title: 'New Phone', amount: 23000, date: new Date(2023, 5, 23) }
]

const App = () => {
 

  const[expenses,setExpenses] = useState(DUMMY_EXPENSE);

  const handleAddExpense=(expenseData)=>{
    setExpenses((previous)=>{
      return ([expenseData, ...previous])
    });
  }


  return (
    <div>
      <NewExpenses onAddExpense={handleAddExpense} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
