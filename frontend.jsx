import React from 'react'
import ReactDOM from 'react-dom'
import data from './data.json'

class Root extends React.Component {
  render () {
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{__html: data.name}} />
        <p>
          <span dangerouslySetInnerHTML={{__html: data.city}} /><br/>
          <span dangerouslySetInnerHTML={{__html: data.phone}} /><br/>
          <span dangerouslySetInnerHTML={{__html: data.email}} /><br/>
          <span dangerouslySetInnerHTML={{__html: data.resumeLink}} /><br/>
        </p>
        
        <p dangerouslySetInnerHTML={{__html: data.status}}/>
        
        <h2>Summary</h2>
        {data.summaryStatements.map((s, i) => <p key={i} dangerouslySetInnerHTML={{__html: s}} />)}
        
        <h2>Experience</h2>
        {data.experience.map((e, i) => <div key={i}>
          <h4>{e.name}</h4>
          <em>{e.title} - {e.location} - {e.time}</em>
          <blockquote dangerouslySetInnerHTML={{__html: e.companySummary}} />
          {e.narrative.map((n, i) => <p key={i} dangerouslySetInnerHTML={{__html: n}} />)}
        </div>)}
      </div>
    )
  }
}



ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
