import React from 'react';

import './Card.css';

function Card(props){
    console.log(`${props.className} - props card`)
    const classes = 'card ' + props.className;
    console.log(`${props.children}`)
return(
   
    <div className={classes}>{props.children}</div>
)
}

export default Card;
