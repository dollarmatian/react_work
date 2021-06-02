import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){
  return <h4>This is Nathan and this is a React Component</h4>
}

ReactDom.render(<Greeting />, document.getElementById('root'))