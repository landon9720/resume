import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    |:E2BA FAA2|B2AB dBAF|E2BA FAA2|BdAF FEE2:|
    |:FABc d2BA|Beef g2fe|dBAF G2FG|1BdAF FEE2:|2Bdce dBAF|
`

export default () => (
    <div>
        <h1>The Maids of Mitchelstown</h1>
        <ABC abc={abc} />
    </div>
)
