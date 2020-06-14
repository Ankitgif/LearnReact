import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return(
        this.state.isLoggedIn ? (
            <div>Welcome Ankit</div> 
         ) : (
            <div>Welcome Guest</div>
        ))
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Ankit</div>
        // }else {
        //     message = <div>welcome Guest</div>
        // }
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Ankit</div>
        // }else {
        //     return <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>
        // return (
        //     <div>
        //        <div>Welcome Ankit</div>
        //        <div>Welcome Guest</div> 
        //     </div>
        // )
    }
}

export default UserGreeting
