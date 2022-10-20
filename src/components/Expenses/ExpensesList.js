import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props)=>{
    if(props.items.length===0){
        return (<h2 className='expenses-list__fallback'>Found no expenses.</h2>)
    }
   
       return(
        <ul className='expenses-list'>
        {props.items.map((expenses)=>(
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
        </ul>
       )
}

export default ExpensesList;
