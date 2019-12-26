import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class getUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    getid = e => {
        e.preventDefault()
        console.log(this.props.values.id)
        const {id } = this.props.values
       this.props.getUser(id)
        
    }
   

    render() {
        console.log(this.props.values.id)
        const { values, handleChange, dispUser } = this.props 
        console.log(dispUser)
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar  title = "Enter User Detiels" />
                <TextField
                type = "text"
                label="id"
                name = "id"
                onChange = {handleChange}
            
            />
            <RaisedButton
            label = "get user"
            primary = {true}
            onClick = { this.getid }
            /> 
            {  dispUser ? <div> 
                <h5>Firs Name</h5> 
                {dispUser.firstname} 
                <h5> Last Name </h5> 
                {dispUser.lastname} 
                <h5> Email </h5> 
                {dispUser.email} 
                </div> : null
            }
              </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default getUser