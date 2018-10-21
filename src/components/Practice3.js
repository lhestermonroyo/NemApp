import React from "react";

class Practice3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
    this.newNumber = this.newNumber.bind(this);
  }
  newNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.newNumber}>Click</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}
class Content extends React.Component {
  componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  componentDidMount() {
    console.log("Component DID MOUNT!");
  }
  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECIEVE PROPS!");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component DID UPDATE!");
  }
  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!");
  }
  render() {
    return (
      <div>
        <p>Numbers: {this.props.myNumber}</p>
      </div>
    );
  }
}

export default Practice3;
