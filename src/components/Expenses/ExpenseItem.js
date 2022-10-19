import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

function ExpenseItem(props){
   
    const [title, setTitle] = useState(props.title)
    //title = празна стойност , setTitle(стойността с която искаме да се замени)
    const clickHandler = () => {
        setTitle('Update!')
        console.log(title)
        //след click стойността на title = setTitle
    }
    return(
       <Card className='expense-item'>
       <ExpenseDate date={props.date}/> {/*date = {props.date} via props from ExpenseDate.js */}
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
       </Card>    
       )
}

export default ExpenseItem;
