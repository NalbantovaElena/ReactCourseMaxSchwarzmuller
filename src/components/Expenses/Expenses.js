import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  console.log(props.items)
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
   console.log(filteredYear)
 //създаваме нова променлива в която чрез вградената функционалност 
 //на JS - filter - филтрираме като датата(годината) от ExpenseItem
 //трябва да  е равна на стойността от годината която е селектирана
   const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
   })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} />
      {/* Имаме достъп до props.items  и използваме вградения
       метод за обхождане на масив в JS - map*/}
       
       {filteredExpenses.map((expenses)=>(
        //тук след expenses може да се зададе index, (expenses, index)
        
      <ExpenseItem
      //добавяме ключ във всеки елемент, за да е уникален
      //В react това е концепция създадена , за да се рендерира 
      //и актуализират ефективно подобни списъци
      key ={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
       />

       ))}
    </Card>
    </div>
  );
};

export default Expenses;
