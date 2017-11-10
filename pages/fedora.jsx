import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    |:GBEG B2AF|GFGA BdAG|FADF ADFA|d2cd BAGF|
    GBEG B2AF|GFGA B3c|dedB AGFA|1 GEFD E3F:|2 GEFD ~E3A||
    |:Beed e2ef|g2fg edBA|FABc d2(3ABc|dfaf gfed|
    |Beed e2ef|g2fg edBc|dedB AGFA|1GEFD E3A:|2 GEFD E4||
`

export default () => (
    <div>
        <h1>Mayor Harrison's Fedora</h1>
        <ABC abc={abc} />
    </div>
)
