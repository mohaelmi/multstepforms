import React, { Component } from 'react'
import UserDeteilsForm from './UserDeteilsForm'
import PersonalFormDetials from './personalFormDetials'
import Confirm from './confirm';
import Success from './success';
import Displayinfo from './displayinfo'
import Navbar from './navbar'
import Getoneuser from './get-user'

class UserForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
            step: 1,
            msg: null,
            dispUser: { }
            
        }
    }

 
    nextStep = () =>{
        const { step } = this.state
        this.setState({ step: step + 1 })
    }

    goGetUser = () =>{
        this.setState({ step: 6 })
    }

    prevStep = () =>{
        const { step } = this.state
        this.setState({ step: step - 1 })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    goAllUsers = () => {
        this.setState({ step: 5 })
    }

    getUser = (id) => {
        // const dispUser = []
        //const { id } = this.state.id
        fetch(`/members/${id}`)
        .then(res => res.json())
        .then( user =>  this.setState({ dispUser: user[0]}))
        .catch( err => console.log('wrong', err))
      
    }
    

    render() {
        const { step, dispUser } = this.state
        // console.log( this.state.dispUser )
        const { firstname, lastname, email, id, occupation, city, bio } = this.state
        const values = { firstname, lastname, email, id, occupation, city, bio }
        switch (step) {
            case  1:
            return (
             <div>
                 <Navbar goAllUsers = {this.goAllUsers}  goGetUser = {this.goGetUser} />
                 {this.state.msg}
                   
            <UserDeteilsForm  nextStep={ this.nextStep }  values = {values}  handleChange = {(e)=> this.handleChange(e) } />
            </div>
            )
          
            case  2:
            return (
                    <PersonalFormDetials   nextStep={ this.nextStep } prevStep = {this.prevStep} values = {values}  handleChange = {(e)=> this.handleChange(e) } />
            )
            case  3:
            return (
                <Confirm  prevStep = { this.prevStep } nextStep = {this.nextStep} values = {values} />
            )
            case 4: 
            return (
                <Success />
            )

            case 5:
                return (
                    <Displayinfo  /> 
                )
            case 6:
                return (
                    <div>
                    <Getoneuser  dispUser = {dispUser} handleChange = {(e)=> this.handleChange(e) } getUser = {this.getUser} values = {values} /> 
                    </div>
                )    
        }

    }
}

export default UserForm