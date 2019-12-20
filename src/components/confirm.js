import React, { Component } from 'react'

class Confirm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    prevStep = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        return (
            <div>
                 <h1> confirm component is here </h1>
                 <button onClick={this.prevStep} >Back</button>
            </div>
        )
    }
}

export default Confirm