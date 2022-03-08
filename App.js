import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 300,
    date: new Date(2021, 5, 12)
  },
  {
   id: 'e2',
   title: 'Books',
   amount: 250,
   date: new Date(2021, 2, 22)
 },
 {
   id: 'e1',
   title: 'House Rent',
   amount: 700,
   date: new Date(2021, 4, 2)
 },
 {
   id: 'e1',
   title: 'Food',
   amount: 540,
   date: new Date(2021, 5, 5)
 }
];

const App = () => {

const [expenses, setExpense] = useState(DUMMY_EXPENSE);
 
 const addExpenseHandler = (expense) => {
      const updatedExpense = [expense, ...expenses];
      setExpense(updatedExpense);
 };

  return(
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>
          <Expenses item={expenses} />
      </div>
  ) ;
}

export default App; 