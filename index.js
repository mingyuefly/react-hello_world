import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';


// JSX 标签
//const element = <h1>Hello, world!</h1>

const name = "Josh Perez";
const element = <h1>hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);