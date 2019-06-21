import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';


//组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。
//函数组件和class组件

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name = "Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
)

