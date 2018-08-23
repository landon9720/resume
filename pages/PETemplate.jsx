import React from 'react'
import _ from 'lodash'

export default class PETemplate extends React.Component {
    constructor(props, no, functionSource) {
        super(props)
        this.no = no
        this.state = { functionSource, output: [] }
        this.execute = _.debounce(this.execute, 1000)
    }
    componentDidMount() {
        this.execute()
    }
    execute() {
        try {
            const f = new Function('print', this.state.functionSource)
            const output = []
            f(line => output.push(_.toString(line)))
            this.setState({ output })
        } catch (ex) {
            this.setState({ output: [ex.toString()] })
        }
    }
    onChange(functionSource) {
        this.setState({ functionSource })
        this.execute()
    }
    render() {
        const { output } = this.state
        return (
            <div>
                <h1>PE # {this.no}</h1>
                <textarea
                    value={this.state.functionSource}
                    onChange={e => this.onChange(e.target.value)}
                    style={{
                        width: '600px',
                    }}
                    rows={this.state.functionSource.split('\n').length + 1}
                />
                {output.map((o, i) => (
                    <div style={{ fontFamily: 'monospace', fontStyle: 'italic' }} key={i}>{o}</div>
                ))}
            </div>
        )
    }
}
