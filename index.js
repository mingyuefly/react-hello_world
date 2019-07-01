import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
import './index.css';


//组合 VS 继承
//预留空间

function Contacts() {
  return <div className = "Contacts" />;
}

function Chat() {
  return <div className = "Chat" />;
}

function SplitPane(props) {
  return (
    <div className = "SplitPane">
      <div className = "SplitPane-left">
        {props.left}
      </div>
      <div className = "SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane left = {<Contacts />} right = {<Chat />} />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
