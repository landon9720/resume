import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    f2e dBA|BAB dBA|f2e dBA|Bdf e2d|
    f2e dBA|BAB dBA|f2e dBA|Bdf e2g|
    faa gbb|faa afe|faa b3|afd e2d|
    faa gbb|faa afe|f2e dBA|Bdf e3||
`

export default () => (
    <div>
        <h1>Up Leitrim</h1>
        <ABC abc={abc} />
    </div>
)
