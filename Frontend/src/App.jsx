import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";
// import axios from 'axios';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Home from './components/Home'
import Main from './components/Main'
import Homepage from './components/Homepage'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userValidToken: 0
        }
    }
    userValidSuccess = () => {
        this.setState({userValidToken : 1})
        console.log(this.state.userValidToken)
    }
    userValidFail = () => {
        this.setState({userValidToken : 0})
    }
    handleSignin = () => {
        window.location = '/Signin'
    }
    handleSignup = () => {
        window.location = '/Signup'
    }
    removeNavbar = () => {

    }
    render() {
        var x = 1;
        return (
            <div>
                <Router>
                    <div>
                        {/* <Switch>
                            <Route exact path="/Signup" component={Homepage} />
                            <Route exact path="/Home" component={Home} />
                            {
                                x ?
                                <Route exact path="/" component={Signup} /> :
                                <Route exact path="/" component={() => (<Signin validate={this.userValidSuccess} />)}/>


                            }
                            {/* <Route exact path="/Maiin" component={Main} /> */}
                        {/*</Switch> */}
                    </div>
                </Router>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/Home" component={Home} />
                            <Route exact path="/Signup" component={Signup} />
                            <Route exact path="/Signin" component={() => (<Signin validate={this.userValidSuccess} />)}/>
                            <Route exact path="/Maiin" component={Main} />
                        </Switch>
                    </div>
                </Router>
                {/* <Router>
                    <div>
                        <Switch>
                            {this.resData ? (
                                <Route path="/" exact component={Main} />
                            ) : (
                                <Route path="/" exact component={Signin} />
                            )}
                        </Switch>
                    </div>
                </Router> */}

            </div>
        )
    }
}

export default App;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
// } from "react-router-dom";
// import axios from 'axios';
// import Signup from './components/Signup'
// import Main from './components/Main'
// import Home from './components/Home'

// function EmptyComp(){
//     return(
//         <div>

//         </div>
//     )
// }
// // Sign-in Basically
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: '',
//             password: ''
//         }
//     }
//     resData = 0;
//     // on writing anything in the input box, the corresponding state and hence the value of input box gets updated
//     changeEmail = (event) => {
//         this.setState({
//             email: event.target.value
//         })
//     }
//     changePassword = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }
//     onSubmit = async (event) => {
//         event.preventDefault();
//         console.log('Signin onSubmit being called');

//         const loginUserData = {
//             email: this.state.email,
//             password: this.state.password
//         }

//         // Validating
//         const postResponse = await axios.post('http://localhost:4000/app/signin', loginUserData);
//         console.log(postResponse);
//         this.resData = postResponse.data.serverValidation
//         console.log(postResponse.data.serverValidation);
//         console.log(this.resData);
//         console.log('end');


//         this.setState({
//             email: '',
//             password: ''
//         })
//         // window.location = '/'
//     }
//     render() {
//         return (
//             <div>
//                 <div className='container'>
//                     <div className='form-div'>
//                         <form onSubmit={this.onSubmit}>

//                             <input type="text"
//                                 placeholder='E-mail'
//                                 onChange={this.changeEmail}
//                                 value={this.state.email}
//                                 className='form-control form-group' />
//                             <input type="password"
//                                 placeholder='Password'
//                                 onChange={this.changePassword}
//                                 value={this.state.password}
//                                 className='form-control form-group' />

//                             <input type="submit" className='btn btn-danger btn-block' value='Submit' />

//                         </form>
//                     </div>
//                 </div>
//                 <Router>
//                     <div>
//                         <Switch>
//                             {this.resData ? (
//                                 <Route path="/" exact component={Main} />
//                             ) : (
//                                 <Route path="/" exact component={EmptyComp} />
//                             )}
//                             {this.resData = 0}
//                             <Route path="/" exact component={Home} />
//                         </Switch>
//                     </div>
//                 </Router>
//             </div>
//         )
//     }
// }

// export default App;



// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Signup/>
//                 <Signin/>
//             </div>

//         )
//     }
// }


// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             fullname: '',
//             username: '',
//             email: '',
//             password: ''
//         }
//     }
//     // on writing anything in the input box, the corresponding state and hence the value of input box gets updated
//     changeFullname = (event) => {
//         this.setState({
//             fullname: event.target.value
//         })
//     }
//     changeUsername = (event) => {
//         this.setState({
//             username: event.target.value
//         })
//     }
//     changeEmail = (event) => {
//         this.setState({
//             email: event.target.value
//         })
//     }
//     changePassword = (event) => {
//         this.setState({
//             password: event.target.value
//         })
//     }
//     onSubmit = (event) => {
//         event.preventDefault();
//         console.log('onSubmit being called');

//         const newUserData = {
//             fullname: this.state.fullname,
//             username: this.state.username,
//             email: this.state.email,
//             password: this.state.password
//         }

//         axios.post('http://localhost:4000/app/signup', newUserData)
//             .then((res) => console.log(res.data))
//             .catch((err) => console.error(err))

//         this.setState({
//             fullname: '',
//             username: '',
//             email: '',
//             password: ''
//         })
//         // window.location = '/'
//     }
//     render() {
//         return (
//             <div>
//                 <div className='container'>
//                     <div className='form-div'>
//                         <form onSubmit={this.onSubmit}>
//                             <input type="text"
//                                 placeholder='Full Name'
//                                 onChange={this.changeFullname}
//                                 value={this.state.fullname}
//                                 className='form-control form-group' />

//                             <input type="text"
//                                 placeholder='User Name'
//                                 onChange={this.changeUsername}
//                                 value={this.state.username}
//                                 className='form-control form-group' />

//                             <input type="text"
//                                 placeholder='E-mail'
//                                 onChange={this.changeEmail}
//                                 value={this.state.email}
//                                 className='form-control form-group' />

//                             <input type="password"
//                                 placeholder='Password'
//                                 onChange={this.changePassword}
//                                 value={this.state.password}
//                                 className='form-control form-group' />

//                             <input type="submit" className='btn btn-danger btn-block' value='Submit' />
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;

