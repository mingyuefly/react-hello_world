import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//状态提升
//通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。
//摄氏温度和华氏温度转化
const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
};

class TemperatureInput extends React.Component {
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
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value = {this.state.temperature} onChange = {this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale = "c" />
        <TemperatureInput scale = "f" />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
