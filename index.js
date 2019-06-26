import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
//import './index.css';


//条件渲染
//与运算符 &&
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
  <div>
    <h1>Hello!</h1>
    {
      unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>
    }
  </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages = {messages} />,
  document.getElementById('root')
)