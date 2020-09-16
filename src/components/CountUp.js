import React from 'react';

class CountUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleCount = this.handleCount.bind(this);
  }
  handleCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <p>カウント：{this.state.count}</p>
        <button onClick={this.handleCount}>ボタン</button>
      </div>
    );
  }
}

export default CountUp;
