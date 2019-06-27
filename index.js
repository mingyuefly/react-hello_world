import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//文件 input 标签
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isGoing:true, numberOfGuests:2};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'?target.checked:target.value;
    const name = target.name;
    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与：
          <input name = "isGoing" type = "checkbox" checked = {this.state.isGoing} onChange = {this.handleChange} />
        </label>
        <br />
        <label>
          来宾人数：
          <input name = "numberOfGuests" type = "number" value = {this.state.numberOfGuests} onChange = {this.handleChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
)

