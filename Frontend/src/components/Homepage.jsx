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

export default class Homepage extends React.Component {
    render() {
        return (<>
            <div className='center'>
                <h1 className='heading'>College Question Hub</h1>
                <h5 className='sub-heading'>Get Answers to all your Questions</h5>
            </div>
            {/* <h5>Menu: </h5> */}
            <div className="navbar">
                <ul>
                    {/* <li><Link to="/Home">Home</Link></li> */}
                    <li><Link to="/Signin">Sign in</Link></li>
                    <li><Link to="/Signup">Sign up</Link></li>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </>
        )
    }
}
