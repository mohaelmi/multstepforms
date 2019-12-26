import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";


class Confirm extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }

    }

    contin = e => {
        e.preventDefault()
        //passing data to the backend or api
        this.props.nextStep();
        
    }

    prevStep  = (e) => {
        e.preventDefault()
        this.props.prevStep();
    }

    render() {
       const { firstname, lastname, email, occupation, city, bio } = this.props.values

 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar  title = "Enter User Detiels" />
              <div style = { style.textStyle }>      
                <List>
                    <ListItem 
                     primaryText = "first name"
                     secondaryText = { firstname }
                    />
                    <ListItem 
                     primaryText = "last name"
                     secondaryText = { lastname }
                    />
                    <ListItem 
                     primaryText = "email"
                     secondaryText = { email }
                    />
                    <ListItem 
                     primaryText = "occupation"
                     secondaryText = { occupation }
                    />
                    <ListItem 
                     primaryText = "city"
                     secondaryText = { city }
                    />
                    <ListItem 
                     primaryText = "Bio"
                     secondaryText = { bio }
                    />
                </List>
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

export default Confirm