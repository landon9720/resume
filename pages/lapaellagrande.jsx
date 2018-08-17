import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    |: dcA B2 BAB | [M:3/4] de fA eA | [M:4/4] dcA B2 BAB | DEED FGFD |
    dcA B2 BAB | [M:3/4] de fA eA | [M:4/4] age f2 ded | cABA E4 :|
    |: ABBA c2 Bc- | cBcA GA E2 | ABBA c2 Bc- | cdef gfed |
    ABBA c2 Bc- | cBcA GA E2 | DEED E2 DE- | EDDE FG F2 :|
`

export default () => (
    <div>
        <h1>La Paella Grande</h1>
        <ABC abc={abc} />
    </div>
)