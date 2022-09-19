import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
   
    return(
       <div className='expense-item'>
       <ExpenseDate date={props.date}/> {/*date = {props.date} via props from ExpenseDate.js */}
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
       </div>    
       )
}

export default ExpenseItem;
