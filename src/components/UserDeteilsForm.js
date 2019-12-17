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
            const { nextStep, values } = this.props
            e.preventDefault()

            //console.log(nextStep)
            console.log(values)
        }

    render() {
        //const { handleChange } = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar  title = "Enter User Detiels" />
              <div style = { style.textStyle }>      
                <TextField
                    type = "text"
                    label="first name"
                    name = "firstname"
                    onChange = { this.props.handleChange('firstname') }
                />
                <br/>
                 <TextField
                    label="last name"
                    name = "lastname"
                    onChange = {this.props.handleChange('lastname') }
                />
                <br/>
                 <TextField
                    label="email"
                    name = "email"
                    onChange = {this.props.handleChange('email') }
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