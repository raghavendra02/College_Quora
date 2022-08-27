import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import axios from 'axios';



class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
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
        this.resData = postResponse.data.serverValidation;
        console.log(this.resData);
        console.log('end');


        this.setState({
            email: '',
            password: ''
        })
        // window.location = '/'
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>

                            <input type="text"
                                placeholder='E-mail'
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className='form-control form-group' />
                            <input type="password"
                                placeholder='Password'
                                onChange={this.changePassword}
                                value={this.state.password}
                                className='form-control form-group' />

                            <input type="submit" className='btn btn-danger btn-block' value='Submit' />

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;

