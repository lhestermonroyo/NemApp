import React from "react";

class Practice2 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.displayBelow = this.displayBelow.bind(this);
  }
  displayBelow() {
    let item = "1";
    let myArr = this.state.data.slice();
    myArr.push(item);
    this.setState({ data: myArr });
  }
  render() {
    return (
      <div>
        <button onClick={this.displayBelow}>Click Me!</button>
        <p>
          <strong>Display here:</strong>
        </p>
        <p>Data Array: {this.state.data}</p>
      </div>
    );
  }
}

export default Practice2;
