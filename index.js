import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
import './index.css';


//组合 VS 继承
//特例关系

function FancyBorder(props) {
  return (
    <div className = {'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color = "blue">
      <h1 className = "Dialog-title">
        {props.title}
      </h1>
      <p className = "Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title = "Welcome" message = "Thank you for visting our spacecrift" />
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
)

