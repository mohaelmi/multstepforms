import React, { Component } from 'react'

class Displayinfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            members: []
        }
    }

   componentDidMount(){
    fetch('/members')
    .then(res => res.json())
    .then( data => this.setState({ members: data.members }))
    .catch( err => console.log(err))
   }



    render() {
        const { members } = this.state
        return (
           <div>
               { members.map(member => (
                 <ul key={member.id}>
                     <li> first name: { member.firstname } </li>
                     <li> last name: { member.lastname } </li>
                     <li> email: { member.email } </li>
                     <li> occupation: { member.occupation } </li>
                     <li> city: { member.city } </li>
                     <li> Bio: { member.bio } </li>
                 </ul>  
               )) }
           </div> 
        )
    }
}

export default Displayinfo