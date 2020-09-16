import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CountUp from './components/CountUp';

function HelloName(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <HelloName name={this.state.name} />
        <input type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Message />
    <CountUp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
