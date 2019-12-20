import React, { Component } from 'react'
import UserDeteilsForm from './UserDeteilsForm'
import PersonalFormDetials from './personalFormDetials'
import Confirm from './confirm';

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

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    

    render() {
        const { step } = this.state
        const { firstname, lastname, email, occupation, city, bio } = this.state
        const values = { firstname, lastname, email, occupation, city, bio }
        switch (step) {
            case  1:
            return (
            <UserDeteilsForm  nextStep={ this.nextStep }  values = {values}  handleChange = {(e)=> this.handleChange(e) } />
            )
          
            case  2:
            return (
                    <PersonalFormDetials   nextStep={ this.nextStep } prevStep = {this.prevStep} values = {values}  handleChange = {(e)=> this.handleChange(e) } />
            )
            case  3:

            return (
                <Confirm  prevStep = { this.prevStep } />
            )
        }

    }
}

export default UserForm