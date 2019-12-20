import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


class PersonalFormDetials extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }

    }

   
    
    
    contin = e => {
        e.preventDefault()
        this.props.nextStep();
        // console.log(this.props.values.firstname)
        // console.log(this.props.values.lastname)
        // console.log(this.props.values.email)
        
    }

    prevStep  = (e) => {
        e.preventDefault()
        this.props.prevStep();
    }

    
    

    render() {
       const { values, handleChange } = this.props 
 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar  title = "Enter User Detiels" />
              <div style = { style.textStyle }>      
                <TextField
                    type = "text"
                    label="occupation"
                    name = "occupation"
                    onChange = {handleChange}
                    defaultValue = { values.occupation }
                />
                <br/>
                 <TextField
                    label="city"
                    name = "city"
                    onChange = {handleChange}
                    defaultValue = {values.city}
                />
                <br/>
                 <TextField
                    label="bio"
                    name = "bio"
                    onChange = {handleChange}
                    defaultValue = { values.bio }
                />
                <br/>
                <RaisedButton
                label = "continue"
                primary = {true}
                onClick = { this.contin }
                />
                 <RaisedButton
                label = "back"
                primary = {false}
                onClick = { this.prevStep }
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

export default PersonalFormDetials