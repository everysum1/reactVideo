/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.div

// COMPOSITE COMPONENT
var MyTitle = React.createClass({
  // every component must have a render method
  render () {
    // every render method must return a component
    // must be a pure function
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

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
