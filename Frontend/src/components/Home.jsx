import React, { Component } from 'react'
import Signup from './Signup'
import Signin from './Signin'
import Main from './Main'
import Navbar from './Homepage'

export default class Home extends Component {
    handleSignin =  () => {
        window.location = '/Signin'
    }
    handleSignup =  () => {
        window.location = '/Signup'
    }
    render() {
        return (
            <div>
                <h1 className='heading'>College Question Hub</h1>
                <h5 className='sub-heading'>Get Answers to all your Questions</h5>
            </div>
        )
    }
}
