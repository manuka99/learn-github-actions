import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleICR() {
    // this.state.count = this.state.count + 1;
      
    //   all are sent as a single call
    //   this.setState({
    //       count: this.state.count + 1
    //   }, () => {
    //           console.log(this.state.count, 'callbakc')
    //   })
    // console.log(this.state.count);
      
    //   get the previous state (update based on the previous state)
    //   this.setState((prvStte) => ({
    //       count: prvStte.count + 1
    //   }))
      
            this.setState((prvStte, props) => ({
              count: prvStte.count + 1
            }));
    }
    
    INC_five() {
        this.handleICR()
        this.handleICR()
        this.handleICR()
        this.handleICR()
        this.handleICR()
    }

  render() {
    return (
      <div>
        Count {this.state.count}
        <button onClick={() => this.INC_five()}>click me</button>
      </div>
    );
  }
}

export default counter;