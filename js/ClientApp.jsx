var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = () => (
    <div>
      <MyTitle title='There we were...' color='peru' />
      <MyTitle title="And this is where we're going" color='#f06d06' />
      <MyTitle title='Here we are!' color='rebeccapurple' />
    </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
// MAIN FILE DOESN'T HAVE AN EXPORT COMMAND
