import React from 'react';
import ReactDOM from 'react-dom';
//import { format } from 'url';
//import './index.css';


//组合 VS 继承
function FancyBorder(props) {
  return (
    <div className = {'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color = "blue">
      <h1 className = "Dialog-title">
        Welcome
      </h1>
      <p className = "Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
)

