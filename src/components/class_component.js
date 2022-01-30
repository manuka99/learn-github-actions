import React, { Component } from "react";

// class Welcome extends Component{
//     render() {
//         return <h1>hi from class component {this.props.name}</h1>
//     }
// }

class Welcome extends Component {
  render() {
    const { name } = this.props;
    // const {state1, state2} = this.State;
    return <h1>hi from class component {name}</h1>;
  }
}

export default Welcome;
