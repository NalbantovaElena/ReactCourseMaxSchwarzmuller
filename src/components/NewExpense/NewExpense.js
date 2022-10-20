import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false);
 
  const saveExpenseDataHandler = (enteredExpenseData)=>{
   //console.log(enteredExpenseData)
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
      
    }
  // console.log(`${expenseData} - newExpense- expenseData`)
  //console.log(expenseData)
  props.onAddExpense(expenseData);
setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
setIsEditing(false)
  }
  return (
    <div className='new-expense'>
      {/* чрез prop ще предадем данните от ExpenseForm.js , където
      е променливата(обектът) expenseData - в който се съдържа
      данните от input формата- входящите данните
      като този prop ще наречем onSaveExpenseData, като това
      име зависи изцяло от нас*/}
      {!isEditing && (
      <button onClick={startEditingHandler}>Add New Expense</button>)}
      {isEditing && (
      <ExpenseForm  
      onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEditingHandler}
      />
      )}
    </div>
  );
};

export default NewExpense;
