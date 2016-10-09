const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.div

// COMPOSITE COMPONENT
const MyTitle = React.createClass({
  // every component must have a render method
  render () {
    // every render method must return a component
    // must be a pure function
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})
module.exports = MyTitle
