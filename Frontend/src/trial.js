<Router>
        <div>
          <Switch>
            {this.resData ? (
              <Route path="/" exact component={Main} />
            ) : (
              <Route path="/" exact component={Signin} />
            )}
          </Switch>
        </div>
</Router>







// #################################################################
// App.js OLD VER
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
// // import axios from 'axios';
// import Signup from './components/Signup'
// import Signin from './components/Signin'
// import Home from './components/Home'


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//             <Router>
//                 <div>
//                     <div><Link to="/">Home</Link></div>
//                     <div><Link to="/Signup">New User? Sign up</Link></div>
//                     <div><Link to="/Signin">Sign in</Link></div>
//                     <Switch>
//                         <Route exact path="/" component={Home}/>
//                         <Route exact path="/Signup" component={Signup} />
//                         <Route exact path="/Signin" component={Signin} />
//                     </Switch>
//                 </div>
//             </Router>
//             </div>
//         )
//     }
// }

// export default App;




// import React from "react";
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";


// import Signup from'./components/Signup';
// import Signin from'./components/Signin';



// function App() {
//   return (
//   <BrowserRouter>
//     <div>
//       <h2>Home Page</h2>
//         <div><Link to="/">Home</Link></div>
//         <div><Link to="/Signup">New User? Sign up</Link></div>
//         <div><Link to="/Signin">Sign in</Link></div>
//     <Switch>
//       <Route exact path="/"> <Home/> </Route>
//       <Route exact path="/Signup"> <Signup/> </Route>
//       <Route exact path="/Signin"> <Signin/> </Route>
//     </Switch>
//     </div>
//   </BrowserRouter>
//   )
// }

// export default App;

// {/* <Route exact path="/components/Signup" component={Signup} /> */}
// {/* <Route exact path="/components/Signin" component={Signin} /> */}

// TRASH:
// const tokenIsValid = axios.post('http://localhost:4000/app/signin', loginUserData)
//     .then((res) => {
//         window.location = '/'
//     })
//     .catch((err) => {
//         console.error(err)
//     })