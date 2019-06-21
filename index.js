import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
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


// 组件名称必须以大写字母开头
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// const element = <Welcome name = "Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// )


// 组合组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App(){
//   return (
//     <div>
//       <Welcome name = "Sara" />
//       <Welcome name = "Cahal" />
//       <Welcome name = "Edite" />
//     </div>
//   )
// }

// ReactDOM.render(
//   App(),
//   document.getElementById('root')
// )

// 提取组件
// function formatDate(date){
//   return date.toLocaleDateString();
// }

// function Comment(props){
//   return (
//     <div className = "Comment">
//       <div className = "UserInfo">
//         <img className = "Avatar"
//          src = {props.author.avataUrl}
//          alt = {props.author.name} 
//         />
//         <div className = "UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className = "Comment-text">
//         {props.text}
//       </div>
//       <div className = "Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date:new Date(),
//   text:"I hope you enjoy learning react!",
//   author:{
//     name:"Hello Kitty",
//     avataUrl:"https://placekitten.com/g/64/64"
//   }
// }

// // ReactDOM.render(
// //   Comment(comment),
// //   document.getElementById('root')
// // );

// ReactDOM.render(
//   <Comment 
//     date = {comment.date}
//     text = {comment.text}
//     author = {comment.author}
//   />,
//   document.getElementById('root')
// )

function formatDate(date){
  return date.toLocaleDateString();
}

function Avatar(props){
  return (
    <img 
      className = "Avatar"
      src = {props.user.avataUrl}
      alt = {props.user.name}
    />
  );
}

function UserInfo(props){
  return (
    <div className = "UserInfo">
      <Avatar user = {props.user} />
      <div className = "UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props){
  return (
    <div className = "Comment">
      <UserInfo user = {props.author} />
      <div className = "Comment-text">
        {props.text}
      </div>
      <div className = "Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date:new Date(),
  text:"I hope you enjoy learning react!",
  author:{
    name:"Hello Kitty",
    avataUrl:"https://placekitten.com/g/64/64"
  }
}

// ReactDOM.render(
//   Comment(comment),
//   document.getElementById('root')
// );

ReactDOM.render(
  <Comment 
    date = {comment.date}
    text = {comment.text}
    author = {comment.author}
  />,
  document.getElementById('root')
)











