import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     },() => {
    //         console.log('Callback value',this.state.count)
    //     }
    // )
        this.setState((prevState) => ({    //when you have to update a state based on previous state make sure to passing a function as an argument instead of an regular object
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick= {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter



// Always make use of setState and never modify the state directly.
//Code has to be executed after the state has been updated ? Place that code in the callback function
//which is the second argument to the setState method.
// when you have to update state based on the previous state value, pass in a function as an argument instead of regular object 

