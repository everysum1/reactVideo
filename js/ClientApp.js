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

var MyFirstComponent = (
  div(null, 
    React.createElement(myTitle, null),
    React.createElement(myTitle, null),
    React.createElement(myTitle, null),
    React.createElement(myTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))