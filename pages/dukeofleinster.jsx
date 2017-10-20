import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    |:G2BG dGBc|dBeB dBAB|G2BG dGBc|dBAB GEDE|
    G2BG dGBc|dBeB dBAB|GB B2 dB B2|1dBAB GEDE:|2dBAB GEDB||
    |:dega bg g2|agbg ageg|dega bage|dBAB GEDB|
    dega bg g2|agbg agef|g2fg efge|1dBAB GEDB:|2dBAB GEDE||
`

export default () => (
    <div>
        <h1>The Duke of Leinster</h1>
        <ABC abc={abc} />
    </div>
)
