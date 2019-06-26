import React from 'react';
import ReactDOM from 'react-dom';
import { format } from 'url';
//import './index.css';


//条件渲染
//阻止组件渲染
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className = "Warning">
      Warning!
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning:true};
    this.handToggleClick = this.handToggleClick.bind(this);
  }

  handToggleClick () {
    this.setState(state=>({
      showWarning:!state.showWarning
    }));
  }  

  render() {
    return (
      <div>
        <WarningBanner warn = {this.state.showWarning} />
        <button onClick = {this.handToggleClick}>
          {this.state.showWarning?'Hide':'Show'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
)

