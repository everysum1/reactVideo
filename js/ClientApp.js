var div = React.DOM.div
var h1 = React.DOM.div

var MyFirstComponent = (
  div(null, 
    h1(null, "You can do it!")
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))