import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: ''
        }
    }
    // on writing anything in the input box, the corresponding state and hence the value of input box gets updated
    changeFullname = (event) => {
        this.setState({
            fullname: event.target.value
        })
    }
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
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
    onSubmit = (event) => {
        event.preventDefault();
        console.log('Signup onSubmit being called');

        const newUserData = {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/app/signup', newUserData)
            .then((res) => {
                console.log(res.data);
                if(res.data.__v === 222){
                    window.alert('Email already exists');
                }
                if(res.data.__v === 333){
                    window.alert('Username already exists');
                }
            })
            .catch((err) => console.error(err))

        this.setState({
            fullname: '',
            username: '',
            email: '',
            password: ''
        })
        // window.location = '/'
    }
    render() {
        return (
            <>
                <div className="sign-up">
                    <div className='container'>
                        <h2 className="heading">Sign up</h2>
                        <div className='form-div'>
                            <form onSubmit={this.onSubmit}>
                                <input type="text"
                                    placeholder='Full Name'
                                    onChange={this.changeFullname}
                                    value={this.state.fullname}
                                    className='form-control form-group' />
                                <br/>
                                <input type="text"
                                    placeholder='User Name'
                                    onChange={this.changeUsername}
                                    value={this.state.username}
                                    className='form-control form-group' />
                                    <br/>

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
            </>
        )
    }
}

export default Signup;

