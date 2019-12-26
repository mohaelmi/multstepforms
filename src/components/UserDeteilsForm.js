import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class UserDeteilsForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           newUser: {
           firstname: '',
           lastname: '',
           email: ''
          }

        }

    }

 
    
    
    contin = e => {
        e.preventDefault()
        const { firstname, lastname, email } = this.props.values
        // this.props.nextStep();
        // posting data
        // this.setState({ firstname, lastname, email })
        const newUser = {
            firstname,
            lastname,
            email
        }
            
        console.log(newUser)
            fetch('/members',  {
                method: 'POST',
                headers: {
                'content-type': 'application/json'
                },
                body:   JSON.stringify(newUser)
                
            })
              .then(res => res.json())
              .then(result =>  this.setState({ msg: result }))
              .catch(err => console.log(err))
        
        // console.log(this.props.values.firstname)
        // console.log(this.props.values.lastname)
        // console.log(this.props.values.email)
        
    }

    

    render() {
       const { values, handleChange } = this.props 
        return (
            <MuiThemeProvider>
                <React.Fragment>
               
              <div style = { style.textStyle }>      
                <TextField
                    type = "text"
                    label="first name"
                    name = "firstname"
                    onChange = {handleChange}
                    defaultValue = { values.firstname }
                />
                <br/>
                 <TextField
                    label="last name"
                    name = "lastname"
                    onChange = {handleChange}
                    defaultValue = {values.lastname}
                />
                <br/>
                 <TextField
                    label="email"
                    name = "email"
                    onChange = {handleChange}
                    defaultValue = { values.email }
                />
                <br/>
                <RaisedButton
                label = "continue"
                primary = {true}
                onClick = { this.contin }
                />
                </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style = {
    textStyle : {
        margin: 50,
        textAlign: 'center'
    }
}

export default UserDeteilsForm