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

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Questions">Questions</Link></li>
                    <li><Link to="/Askquestion">Ask Question</Link></li>
                    {/* <li><Link to="/Answers">Answers</Link></li> */}
                </ul>
            </div>
        )
    }
}
