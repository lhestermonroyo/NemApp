import React from "react";

class Practice1 extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     header: "Hello World",
  //     subheader: "Welcome to React101"
  //   };
  // }
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
        <p>{this.props.subheader}</p>
      </div>
    );
  }
}
Practice1.defaultProps = {
  header: "Hello World",
  subheader: "Welcome to React101"
};

export default Practice1;
