import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class UserDeteilsForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }

    }

   
    
    
    contin = e => {
        e.preventDefault()
        this.props.nextStep();
        console.log(this.props.values.firstname)
        console.log(this.props.values.lastname)
        console.log(this.props.values.email)
        // console.log(this.props.values)
        
    }

    
    // handleChange(e) {
    //     const { firstname, lastname, email } = this.state
    //     const userform = new UserForm()
    //     userform.gifToState(firstname, lastname, email)

       
    // //    UserForm.props.setState({ [e.target.name]: e.target.value })
    //     // this.props.handleChange()
    // }

    render() {
    //    const { firstname, lastname, email } = this.state
       const { values, handleChange } = this.props 
 
    //    console.log(firstname)
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar  title = "Enter User Detiels" />
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