import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
//import './index.css';


//state & 生命周期
//State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

// function Clock(props){
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date = {new Date()}/>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:new Date(),
    };
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);