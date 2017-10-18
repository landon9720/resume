import React from 'react'
import ReactDOM from 'react-dom'
import data from './data.json'
import { Route, HashRouter, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const App = () => (
  <div>
      <Route exact path="/" component={Resume} />
      <Route path="/:id" component={Page} />
  </div>
)

const Resume = () => (
    <div>
        <h1 dangerouslySetInnerHTML={{ __html: data.name }} />
        <p>
            <span dangerouslySetInnerHTML={{ __html: data.city }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: data.phone }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: data.email }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: data.resumeLink }} />
            <br />
        </p>

        <p dangerouslySetInnerHTML={{ __html: data.status }} />

        <h2>Summary</h2>
        {data.summaryStatements.map((s, i) => <p key={i} dangerouslySetInnerHTML={{ __html: s }} />)}

        <h2>Experience</h2>
        {data.experience.map((e, i) => (
            <div key={i}>
                <h4>{e.name}</h4>
                <em>
                    {e.title} - {e.location} - {e.time}
                </em>
                <blockquote dangerouslySetInnerHTML={{ __html: e.companySummary }} />
                {e.narrative.map((n, i) => <p key={i} dangerouslySetInnerHTML={{ __html: n }} />)}
            </div>
        ))}

        <h2>Education</h2>
        <em>
            <span dangerouslySetInnerHTML={{ __html: data.education.where }} /> - {data.education.what}  -{' '}
            {data.education.when}
        </em>
        <p dangerouslySetInnerHTML={{ __html: data.education.statement }} />
    </div>
)

const markdownFor = id => {
    try {
        return require('./pages/' + id + '.md')
    } catch (e) {
        return '404'
    }
}

const Page = props => (
  <div>
    <ReactMarkdown source={markdownFor(props.match.params.id)} />
    <Link to="/">home</Link>
  </div>
)

ReactDOM.render(
    <HashRouter hashType="noslash">
        <App />
    </HashRouter>,
    document.getElementById('root')
)
