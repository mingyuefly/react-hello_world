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


//构造函数是唯一可以给 this.state 赋值的地方

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date:new Date(),
    };
  }
  
  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillReceiveProps() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date:new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date = {this.state.date} />
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)
