import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import firebase from 'firebase'
import _ from 'lodash'
import ReactAutolinker from 'react-autolinker'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

const firebase_options = {
    apiKey: 'AIzaSyCPyL7e6YqFNGVL-03g7iSvTPjND87eBzA',
    authDomain: 'landon-test-1.firebaseapp.com',
    databaseURL: 'https://landon-test-1.firebaseio.com',
    storageBucket: 'landon-test-1.appspot.com',
}

firebase.initializeApp(firebase_options)

export default class Iamapear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            k: '',
            v: '',
            nodes: [],
            error: {
                k: null,
                v: null,
            },
        }
        this.handleChangeK = this.handleChangeK.bind(this)
        this.handleChangeV = this.handleChangeV.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.copy = this.copy.bind(this)
        this.maintainQuery = _.debounce(this.maintainQuery, 1000)
    }

    handleChangeK(event) {
        this.setState({ k: event.target.value })
    }

    handleChangeV(event) {
        this.setState({ v: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        if (_.isEmpty(this.state.k)) {
            this.setState({ error: { k: 'required' } })
            return
        }
        if (_.isEmpty(this.state.v)) {
            this.setState({ error: { v: 'required' } })
            return
        }
        this.setState({ k: '', v: '', error: { k: null, v: null } })
        this.kEl.focus()
        firebase
            .database()
            .ref('node')
            .push({
                created_at: new Date().toISOString(),
                key: this.state.k,
                value: this.state.v,
            })
    }

    componentDidMount() {
        this.maintainQuery()
    }

    componentDidUpdate() {
        if (this.state.error.k) {
            this.kEl.focus()
        } else if (this.state.error.v) {
            this.vEl.focus()
        }
        this.maintainQuery()
    }

    maintainQuery() {
        if (this.state.k !== this.pendingK) {
            this.pendingK = this.state.k
            if (this.pendingF) {
                this.pendingRef.off('value', this.pendingF)
                delete this.pendingF
                delete this.pendingRef
            }
            this.pendingF = snapshot => this.setState({ nodes: snapshot.val() })
            const nodeRef = firebase.database().ref('node')
            this.pendingRef = _.isEmpty(this.state.k)
                ? nodeRef.orderByKey()
                : nodeRef.orderByChild('key').equalTo(this.state.k)
            this.pendingRef.limitToLast(100).on('value', this.pendingF)
        }
    }

    copy(node) {
        this.setState({
            k: node.key,
            v: node.value,
        })
        this.vEl.focus()
    }

    render() {
        const k = (
            <TextField
                name="key"
                floatingLabelText="Key"
                value={this.state.k}
                onChange={this.handleChangeK}
                fullWidth={true}
                errorText={this.state.error.k}
                ref={el => (this.kEl = el)}
                onKeyPress={e => (e.key === 'Enter' && !_.isEmpty(this.state.k) ? this.vEl.focus() : undefined)}
                autoFocus
            />
        )
        const v = (
            <TextField
                name="value"
                floatingLabelText="Value"
                multiLine={true}
                value={this.state.v}
                onChange={this.handleChangeV}
                fullWidth={true}
                errorText={this.state.error.v}
                ref={el => (this.vEl = el)}
            />
        )
        const b = <RaisedButton label="Say" onClick={this.handleSubmit} primary={true} fullWidth={true} />
        return (
            <MuiThemeProvider>
                <div>
                    <h1 onClick={() => this.setState({ k: '', v: ''})} style={{cursor: 'pointer'}}> 🍐</h1>
                    <Table multiSelectable={false} adjustForCheckbox={false}>
                        <TableBody displayRowCheckbox={false}>
                            <TableRow key="input" selectable={false}>
                                <TableHeaderColumn>{k}</TableHeaderColumn>
                                <TableHeaderColumn>{v}</TableHeaderColumn>
                                <TableHeaderColumn>{b}</TableHeaderColumn>
                                <TableHeaderColumn />
                            </TableRow>
                            {_.map(this.state.nodes, (node, id) => (
                                <TableRow key={id}>
                                    <TableRowColumn>
                                        <ReactAutolinker text={node.key} />
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        <ReactMarkdown source={node.value} />
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {moment.duration(moment(node.created_at || 0).diff()).humanize()} ago
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        <FlatButton
                                            onClick={e => {
                                                e.stopPropagation()
                                                this.copy(node)
                                            }}>
                                            ☺
                                        </FlatButton>
                                    </TableRowColumn>
                                </TableRow>
                            )).reverse()}
                        </TableBody>
                    </Table>
                </div>
            </MuiThemeProvider>
        )
    }
}
