import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//select 标签
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:'coconut'};
    this.handChange = this.handChange.bind(this);
    this.handSubmit = this.handSubmit.bind(this);
  }
  
  handChange(event) {
    this.setState({value:event.target.value});
  }

  handSubmit(event) {
    alert('Your favorate flavor is :' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit = {this.handSubmit}>
        <label>
          选择您喜欢的口味：
          <select value = {this.state.value} onChange = {this.handChange}>
            <option value = "grapefruit">葡萄柚</option>
            <option value = "lime">酸橙</option>
            <option value = "coconut">椰子</option>
            <option value = "mango">芒果</option>
          </select>
        </label>
        <input type = "submit" value = "提交" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);