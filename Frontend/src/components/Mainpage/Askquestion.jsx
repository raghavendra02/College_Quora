import React, { Component } from 'react'
import Main from '../Main'
import axios from 'axios'

export default class Askquestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValidToken: 0,
            userSigninData: {},
            backHome: 0,
            question: "",
            answer: "",
            askers: ""
        }
    }
    componentDidMount() {
        this.setState({ userValidToken: this.props.userValidToken || 0 });
        this.setState({ userSigninData: this.props.userSigninData || 0 });
    }
    handleQues = (event)=>{
        this.setState({question: event.target.value});

    }
    
    goGackHome = () => {
        this.setState({ backHome: 1 })
    }

    onSubmit = async (event) => {
        event.preventDefault();
        console.log('Question onSubmit being called');

        const questionData = {
            question: this.state.question,
            asker: this.state.userSigninData.fullname,
            answer: event.target.value
        }

        const postResponse = await axios.post('http://localhost:4000/app/questions', questionData);

        console.log(postResponse);
        console.log('end');

        this.setState({
            question: "",
            answer: "",
            askers: ""
        })
    }
    render() {
        if (this.state.backHome) {
            return (
                <div>
                    <Main userValidToken={this.resData} 
                userSigninData = {this.state.userSigninData}/>
                </div>
            )
        }
        else{
            return (
                <>
                    <input type="button" id='back-home' value='Back to Home' onClick={this.goGackHome} />
                <div>
                    <h2 className="heading">Ask Questions</h2>
                    <label htmlFor="new-ques">Type your question here: </label>
                    <br/>
                    <input type="text" 
                    id="textboxid"
                    className="input-ques" 
                    value={this.state.question}
                    onChange={this.handleQues}/>
                    <br/>
                    <input type="submit" 
                    value="Submit"
                    onClick={this.onSubmit}/>
                </div>
                </>
            )
        }
        
    }
}
