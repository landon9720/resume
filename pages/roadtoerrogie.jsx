import React from 'react'
import { Link } from 'react-router-dom'
import ABC from '../abc'

const abc = `
    AF | EA A/A/A BABc | eA A/A/A cefa | f2 fa ecAc | BABc BAFA |
    EA A/A/A BABc | eA A/A/A cefa | f2 fa ecAc | BABc A2 :|
    |: ce | a3 a- aaba | c'3 b a2 ae | f2 ea- aef2- | feae fece |
    a3 a- aaba | c'3 b a2 ae | fa a/a/a ecAc | BABc A2 :|
`

export default () => (
    <div>
        <h1>The Road To Errogie</h1>
        <ABC abc={abc} />
    </div>
)
