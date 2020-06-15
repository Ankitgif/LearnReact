import React, { Component } from 'react'

import LifecycleC from './LifecycleC'
class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Ankit'
        }
        console.log('LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    render() {
        console.log('LifecycleB render')
        return (
            <div>
            <div>Lifecycle B</div>
            <LifecycleC />
            </div>
        )
    }
}

export default LifecycleB
