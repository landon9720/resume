import React from "react"
import ReactDOM from "react-dom"

import "./reset"
import "./styles"

const App = () => {
  var resume = require("./resume.md")
  return <div dangerouslySetInnerHTML={{ __html: resume }} />
}

ReactDOM.render(<App />, document.getElementById("root"))
