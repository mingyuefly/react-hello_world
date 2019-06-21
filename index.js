import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

//为了便于阅读，我们会将 JSX 拆分为多行。同时，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// 包含更多子元素
// const element = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here!</h2>
//   </div>
// );

// const element = (
//   <h1 className = "greeting">
//     Hello, world!
//   </h1>
// );

const element = React.createElement(
  'h1',
  {className : 'greeting'},
  'Hello, world!'
)


ReactDOM.render(
  element,
  document.getElementById('root')   
);