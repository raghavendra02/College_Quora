import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
import Main from './Main'
import axios from 'axios';



class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            userSigninData:
            {
                _id: '',
                fullname: '',
                username: '',
                email:'',
                password:'',
                date:'',
                __v:''
            }

        }
    }
    resData = 0;
    // on writing anything in the input box, the corresponding state and hence the value of input box gets updated
    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit = async (event) => {
        event.preventDefault();
        console.log('Signin onSubmit being called');

        const loginUserData = {
            email: this.state.email,
            password: this.state.password
        }

        const postResponse = await axios.post('http://localhost:4000/app/signin', loginUserData);
        console.log(postResponse);
        this.setState(
            {
                userSigninData: postResponse.data.userSigninData
            }
        )
        this.resData = postResponse.data.serverValidation;
        console.log(this.resData);
        console.log('end');
        if (this.resData == 1) {
            console.log('Success')
            window.alert('User Signed in successfully')
            // window.location = '/'
        }
        else if(this.resData === 444){
            window.alert('Please fill in your credentials')
        }
        else {
            window.alert('Invalid Credentials')
        }

        this.setState({
            email: '',
            password: ''
        })
    }
    render() {
        if (this.resData === 0 || this.resData === 444) {
            return (
                <div className='sign-in'>
                    <div className='container'>
                        <h2 className="heading">Sign in</h2>
                        <div className='form-div'>
                            <form onSubmit={this.onSubmit}>

                                <input type="text"
                                    placeholder='E-mail'
                                    onChange={this.changeEmail}
                                    value={this.state.email}
                                    className='form-control form-group' />
                                    <br/>
                                <input type="password"
                                    placeholder='Password'
                                    onChange={this.changePassword}
                                    value={this.state.password}
                                    className='form-control form-group' />
                                    <br/>

                                <input type="submit" className='btn btn-danger btn-block' value='Submit' />

                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.resData === 1) {
            return (
                <Main userValidToken={this.resData} 
                userSigninData = {this.state.userSigninData}/>
            )
        }
    }
}

export default Signin;