import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useRouteMatch,
    // useParams
} from "react-router-dom";

import Questions from './Mainpage/Questions';
import Askquestion from './Mainpage/Askquestion';
import Answersquest from './Mainpage/Answerquest';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValidToken: 0,
            userSigninData: {},
            questions: 0,
            askQuestion: 0,
            answers: 0
        }
    }
    componentDidMount() {
        this.setState({ userValidToken: this.props.userValidToken || 0 })
        this.setState({ userSigninData: this.props.userSigninData || {} })
    }
    goToQuestions = () => {
        this.setState({
            questions: 1,
            askQuestion: 0,
            answers: 0
        })
    }
    goToAskQuestions = () => {
        this.setState({
            questions: 0,
            askQuestion: 1,
            answers: 0
        })
    }
    goToAnswers = () => {
        this.setState({
            questions: 0,
            askQuestion: 0,
            answers: 1
        })
    }
    render() {
        if (!this.state.questions && !this.state.answers && !this.state.askQuestion) {
            return (
                <div>
                    <div className='center'>
                        <h1 className='heading'>College Question Hub</h1>
                        <h5 className='sub-heading'>Get Answers to all your Questions</h5>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><Link to="/Signin">Home</Link></li>
                            <li><Link to="/Signin" onClick={this.goToQuestions}>Questions</Link></li>
                            <li><Link to="/Signin" onClick={this.goToAskQuestions}>Ask Question</Link></li>
                            <li><Link to="/Signin" onClick={this.goToAnswers}>Answer Questions</Link></li>
                        </ul>
                        <div className="right">
                            <p>Full Name: {this.state.userSigninData.fullname}</p>
                            <p>User Name: {this.state.userSigninData.username}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.questions) {
            return (
                <div>
                    <Questions userValidToken={this.state.userValidToken}
                        userSigninData={this.state.userSigninData} />
                </div>
            )
        }
        else if (this.state.answers) {
            return (
                <div>
                    <Answersquest userValidToken={this.state.userValidToken}
                        userSigninData={this.state.userSigninData} />
                </div>
            )
        }
        else if (this.state.askQuestion) {
            return (
                <div>
                    <Askquestion userValidToken={this.state.userValidToken}
                        userSigninData={this.state.userSigninData} />
                </div>
            )
        }
    }
}
