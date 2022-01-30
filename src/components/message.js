import React, { Component } from 'react'

export class message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'welcome visitor'
        }
    }

    handleMSG() {
        this.setState({
            message: 'thank you for registrantion'
        })
    }

    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={() => this.handleMSG()}>Click me</button>
            </div>
        )
    }
}

export default message
