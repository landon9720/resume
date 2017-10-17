import React from 'react'
import ReactDOM from 'react-dom'
import data from './data.json'

class Root extends React.Component {
  render () {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>
          {data.city}<br/>
          {data.phone}<br/>
          {data.email}<br/>
          {data.resumeLink}<br/>
        </p>
        <p>{data.status}</p>
        
        <h2>Summary</h2>
        {data.summaryStatements.map((s, i) => <p key={i}>{s}</p>)}
        
        <h2>Experience</h2>
        {data.experience.map((e, i) => <div key={i}>
          <h4>{e.name}</h4>
          <em>{e.title} - {e.location} - {e.time}</em>
          <blockquote>{e.companySummary}</blockquote>
          {e.narrative.map((n, i) => <p key={i}>{n}</p>)}
        </div>)}
      </div>
    )
  }
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
