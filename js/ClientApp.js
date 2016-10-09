var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)
var createEl = React.createElement
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: React.DOM.span(null, 'Props are great!'), color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    createEl(MyTitle, {title: 'I\'m a random title', color: 'peru'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
// MAIN FILE DOESN'T HAVE AN EXPORT COMMAND
