const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory: hh } =  ReactRouter 

// equivalent to line 5 pulling in ReactRouter
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = () => (
  <Router history ={hh}>
    <Route path='/' component={Landing} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
// MAIN FILE DOESN'T HAVE AN EXPORT COMMAND
