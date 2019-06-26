import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//类别&Key

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number)=>number*2);
// console.log(doubled)


// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number)=>
//   <li>{number}</li>
// )

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number)=>
    <li key = {number.toString()}>
      {number}
    </li>
  )
  return (<ul>{listItems}</ul>);
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers = {numbers} />,
  document.getElementById('root')
)

