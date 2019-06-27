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

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number)=>
//     <li key = {number.toString()}>
//       {number}
//     </li>
//   )
//   return (<ul>{listItems}</ul>);
// }

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const ListItems = numbers.map((number)=>
//     <ListItem key = {number.toString()} value = {number} />
//   );
//   return (
//     <ul>
//       {ListItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers = {numbers} />,
//   document.getElementById('root')
// )

function Blog(props) {
  const sidebar = (
    <ul>
    {props.posts.map((post)=>
      <li key = {post.id}>
        {post.title}
      </li>
    )}
    </ul>
  );
  const content = (
    props.posts.map((post)=>
      <div key = {post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    )
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts = {posts} />,
  document.getElementById('root')
)


