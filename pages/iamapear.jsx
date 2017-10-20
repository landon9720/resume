import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase'
import _ from 'lodash'

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
        }
        this.handleChangeK = this.handleChangeK.bind(this)
        this.handleChangeV = this.handleChangeV.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeK(event) {
        this.setState({ k: event.target.value })
    }

    handleChangeV(event) {
        this.setState({ v: event.target.value })
    }

    handleSubmit(event) {
        firebase
            .database()
            .ref('node')
            .push({
                created_at: new Date(),
                key: this.state.k || new Date().toISOString(),
                value: this.state.v || '',
            })
        event.preventDefault()
    }

    componentDidMount() {
        firebase
            .database()
            .ref('node')
            .orderByKey()
            .limitToLast(100)
            .on('value', snapshot => this.setState({ nodes: snapshot.val() }))
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <TextField
                        name="key"
                        hintText="say something, URL, etc"
                        floatingLabelText="Key"
                        value={this.state.k}
                        onChange={this.handleChangeK}
                        fullWidth={true}
                    />
                    <br />
                    <TextField
                        name="value"
                        hintText="anything at all"
                        floatingLabelText="Value"
                        multiLine={true}
                        rows={1}
                        rowsMax={10}
                        value={this.state.v}
                        onChange={this.handleChangeV}
                        fullWidth={true} 
                    />
                    <br />
                    <RaisedButton label="Say" fullWidth={true} onClick={this.handleSubmit} primary={true} />
                    {_.map(this.state.nodes, (node, id) => (
                        <div key={id}>
                            key: {node.key} value: {node.value}
                        </div>
                    )).reverse()}
                </div>
            </MuiThemeProvider>
        )
    }
}
