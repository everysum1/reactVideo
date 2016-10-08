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
        h1(null, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)
ce = React.createElement

var MyFirstComponent = (
  div(null, 
    MyTitleFactory({title: 'Props are great!'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!'}),
    ce(MyTitle, {title: 'Props are the best!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))