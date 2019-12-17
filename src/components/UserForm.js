import React, { Component } from 'react'
import UserDeteilsForm from './UserDeteilsForm'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
            step: 1
        }
    }

    nextStep = () =>{
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    prevStep = () =>{
        const { step } = this.state
        this.setState({ step: step - 1 })
    }

    handlChange  = input => e => {
        this.setState({ [input]: e.target.value  })
    }

    render() {
        const { nextStep } = this.state
        const { firstname, lastname, email, occupation, city, bio } = this.state
        const values = { firstname, lastname, email, occupation, city, bio }
        return (
            <div>
                <UserDeteilsForm  nextStep={ nextStep }  handlChange = {this.handlChange} values = {values}  />
            </div>
        )
    }
}

export default UserForm