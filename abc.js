import React from 'react'
import ABCJS from 'exports-loader?ABCJS!script-loader!./node_modules/abcjs/bin/abcjs_basic_3.1.2-min.js'

const parserParams = {
}
const engraverParams = {
}
const renderParams = {
}
export default ({ abc }) => (
    <div ref={el => ABCJS.renderAbc(el, abc, parserParams, engraverParams, renderParams)} className="abc" />
)
