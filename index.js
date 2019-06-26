import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
//import './index.css';


//条件渲染
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn = {true} />,
  document.getElementById('root')
);
