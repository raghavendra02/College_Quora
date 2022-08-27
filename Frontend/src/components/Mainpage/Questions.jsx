import React, { Component } from 'react'
import Main from '../Main'
import axios from 'axios'

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValidToken: 1,
            backHome: 0,
            question: '',
            answer: '',
            asker: '',
            likes:0
        }
    }
    render(){
        return(
            <>
            <p>Ans: {this.props.obj.answer}</p>
            <h6>Answered by: {this.props.obj.answerer}</h6>
            {/* <p>Likes: {this.state.likes} </p> */}
            {/* <input type="button" value="Like" onClick = {this.onLike}></input> */}
            </>
        )
    }
}
class Question extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userValidToken: 0,
            userSigninData: {},
            backHome: 0,
            question: '',
            answer: '',
            asker: '',
            allowanswers: 0
        }
    }
    componentDidMount() {
        this.setState({ userValidToken: this.props.userValidToken || 0 });
        this.setState({ userSigninData: this.props.userSigninData || 0 });
    }

    answerList() {
        return this.props.obj.answers.map((data, i) => {
            console.log('data: ',data);
            return <Answer obj={data} key={i} />;
        });
    }
    handleAnswer = (event) => {
        this.setState({answer: event.target.value});
    }
    onSubmit = async (event) => {
        event.preventDefault();
        const answerdata = {
            id: this.props.obj._id,
            answerer: this.state.userSigninData.fullname,
            answer: this.state.answer
        }
        var ansurl = 'http://localhost:4000/app/addans' 
        axios.put(ansurl, answerdata)
            .then((res)=>{
                console.log(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        this.setState({answer: ''});
        this.props.updatefunc();
    }

    render(){
        return(
        <div className="question-container">
            <h5 className="question">Q: {this.props.obj.question}</h5>
            <h6 className="question_asker">Question by: {this.props.obj.asker}</h6>
            <div className="answer-list">{this.answerList()}</div>
            {/* <p>date: {this.props.obj.date}</p> */}
            {
            !this.state.allowanswers ?  <span></span> : 
            <div> 
            <label htmlFor="answer"></label>
            <input className="answer-input" type="text" id="answer" value = {this.state.answer} onChange={this.handleAnswer}/>
            <input className="sub,it-btn" type="submit" value="Submit your Answer" onClick={this.onSubmit}/>
            </div>
            }
        </div>)
    }
}

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValidToken: 0,
            userSigninData: {},
            backHome: 0,
            datanum:0,
            questionsCollection: [],
            questions: [],
            answers: [],
            askers: []
        }
    }
    componentDidMount() {
        this.setState({ userValidToken: this.props.userValidToken || 0 });
        this.setState({ userSigninData: this.props.userSigninData || 0 });

        axios.get('http://localhost:4000/app/questionquery')
            .then(res => {
                this.setState({ questionsCollection: res.data });                
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    updateAnswers = () => {
        axios.get('http://localhost:4000/app/questionquery')
            .then(res => {
                this.setState({ questionsCollection: res.data });                
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    questionList() {
        return this.state.questionsCollection.map((data, i) => {
            console.log('data: ',data);
            return <Question obj={data} key={i} userValidToken={this.state.userValidToken} 
            userSigninData = {this.state.userSigninData} updatefunc = {this.updateAnswers}/>;
        });
    }

    goGackHome = () => {
        this.setState({ backHome: 1 })
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
        else {
            return (
                <>
                    <input type="button" id='back-home' value='Back to Home' onClick={this.goGackHome} />
                    <div>
                        <h2 className="heading">Questions and Answers</h2>
                        <div>
                            {this.questionList()}
                        </div>
                    </div>
                </>
            )
        }
    }
}


// WHEN U JUMP TO CODE WITHOUT DOING ANY RESEARCH
// console.log(this.state.questionsCollection);
// console.log(this.state.questionsCollection.length);
// this.setState({ datanum: this.state.questionsCollection.length})
// var questionArray = [];
// var answerArray = [];
// var aakserArray = [];
// for(let i = 0;i< this.state.datanum;i++){
//     questionArray[i] = <li key={i}>{this.state.questionsCollection[i].question}</li>;
// }
// for(let i = 0;i< this.state.datanum;i++){
//     answerArray[i] = this.state.questionsCollection[i].answers[0];
// }
// for(let i = 0;i< this.state.datanum;i++){
//     aakserArray[i] = this.state.questionsCollection[i].asker;
// }

// this.setState({ questions: questionArray})
// this.setState({ answers: answerArray})
// this.setState({ askers: aakserArray})
                