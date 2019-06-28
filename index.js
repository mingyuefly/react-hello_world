import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//状态提升
//通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>
} 

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature:''};
  }

  handleChange(e) {
    this.setState({temperature:e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value = {temperature} onChange = {this.handleChange} />
        <BoilingVerdict celsius = {this.state.temperature} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)