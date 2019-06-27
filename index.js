import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//textarea 标签
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value:event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字'+this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          文章:
          <textarea type = "text" value = {this.state.value} onChange = {this.handleChange} />
        </label>
        <input type = "submit" value = "提交" />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);