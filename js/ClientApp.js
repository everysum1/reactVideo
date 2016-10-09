/* global React ReactDOM */

var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: React.DOM.span(null, 'Props are great!'), color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
