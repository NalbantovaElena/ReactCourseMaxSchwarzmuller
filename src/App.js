import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
 const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

function App() {
  // Tова че сме променили стойността на дадена променлива,
  // React не обновява компонента. За да се случи това използваме state

 const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense =>{
    // expense - тук получаваме разходите(expense) като параметри
    
    //setExpenses([expense,...expenses]) - този начин за обновяване на състояние не е правилен
    
    //Това е правилният начин за update на state
    //получаваме автоматично от React предишното състояние на масива
   //актуализираме масива expenses по този начин като добавяме 
   //новия expense на първо място в масива
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    })
    
    // console.log('in App.js')
    console.log(expenses)
  }
  return (
 <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
  
     <Expenses items={expenses}/>
     
 </div>

  );
}

export default App;
