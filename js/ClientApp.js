var div = React.DOM.div
var h1 = React.DOM.div

// COMPOSITE COMPONENT
var myTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, 'You can do it!')
      )
    )
  }
})

var MyTitleFactory = React.createFactory(myTitle)
ce = React.createElement

var MyFirstComponent = (
  div(null, 
    MyTitleFactory(null),
    React.createElement(myTitle, null),
    ce(myTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))