var React = require('react')

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

module.exports = MyTitle
