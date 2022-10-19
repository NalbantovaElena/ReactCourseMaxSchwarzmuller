import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
 
  const saveExpenseDataHandler = (enteredExpenseData)=>{
   console.log(enteredExpenseData)
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
      
    }
  // console.log(`${expenseData} - newExpense- expenseData`)
  //console.log(expenseData)
  props.onAddExpense(expenseData);

  }
  return (
    <div className='new-expense'>
      {/* чрез prop ще предадем данните от ExpenseForm.js , където
      е променливата(обектът) expenseData - в който се съдържа
      данните от input формата- входящите данните
      като този prop ще наречем onSaveExpenseData, като това
      име зависи изцяло от нас*/}
      <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
