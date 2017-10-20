import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    |: AB B2 dB B2 | FBBc dBAF | AB B2 ABde | faef edBA |
    AB B2 dB B2 | FBBc dBAF | AB B2 ABde | faef edBA :|
    |: A2 ag fede | f2 af f2 af | fg g2 fede | faef edBA |
    A2 ag fede | f2 af f2 af | fg g2 fede | faef edBA :|
`

export default () => (
    <div>
        <h1>Up Da Stroods Da Sailor Goes</h1>
        <ABC abc={abc} />
    </div>
)
