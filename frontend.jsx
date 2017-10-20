import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Link } from 'react-router-dom';
import Resume from './pages/resume.jsx';

import './styles';

const App = () => (
    <div>
        <Route exact path="/" component={Resume} />
        <Route path="/:id" component={Page} />
    </div>
)

const componentFor = id => {
    try {
        const h = require('./pages/' + id + '.md')
        return () => <div dangerouslySetInnerHTML={{ __html: h }} />
    } catch (e) {
        try {
            return require('./pages/' + id + '.jsx').default
        } catch (f) {
            return () => <div>404</div>
        }
    }
}

const Page = props => {
    const PageComponent = componentFor(props.match.params.id)
    return (
        <div>
            <PageComponent />
            <p className="nav">
                <span>← <a onClick={() => props.history.goBack()} href="#">back</a><br /></span>
                {window.location.hash !== '#helloworld' ? (
                        <span>🏠 <Link to="/helloworld" style={{cursor: 'pointer'}}>home</Link></span>
                ) : null}
            </p>
        </div>
    )
}

ReactDOM.render(
    <HashRouter hashType="noslash">
        <App />
    </HashRouter>,
    document.getElementById('root')
)
