import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
//import './index.css';


//事件处理

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn:true
    }
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handclick = this.handclick.bind(this)
  }
  
  // handclick() {
  //   this.setState({
  //     isToggleOn:!this.state.isToggleOn
  //   });
  // }

  handclick() {
    this.setState(state=>({
      isToggleOn:!state.isToggleOn
    }));
  }

  render() {
    return (
    <button onClick = {this.handclick}>
      {this.state.isToggleOn?'ON':'OFF'}
    </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)