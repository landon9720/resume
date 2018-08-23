import React from 'react'
import _ from 'lodash'

const functionSource = `var left = -2
var top = 1.5
var right = 1
var bottom = -1.5
x = x * (right - left) + left
y = y * (top - bottom) + bottom
var iterations = 255
var zx = 0
var zy = 0
var v = 0
while (zx * zx + zy * zy < 4 && v < iterations) {
  let tmp = zx * zx - zy * zy + x
  zy = 2 * zx * zy + y
  zx = tmp
  v++
}
return (1 - Math.pow((v / iterations) - 1, 4)) * 255`

export default class Mandelbrot extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            functionSource,
        }
        this.renderMandelbrot = _.debounce(this.renderMandelbrot, 1000)
    }
    componentDidMount() {
        this.renderMandelbrot()
    }
    renderMandelbrot() {
        console.assert(this.canvas)
        const canvas = document.getElementById('myCanvas')
        const context = canvas.getContext('2d')
        const w = (canvas.width = Math.min(canvas.width, window.innerWidth))
        const h = (canvas.height = Math.min(canvas.height, window.innerHeight))
        const bitmap = context.createImageData(w, h)
        try {
            const f = new Function('x', 'y', this.state.functionSource)
            for (let pixelY = 0; pixelY < h; pixelY++) {
                for (let pixelX = 0; pixelX < w; pixelX++) {
                    const x = pixelX / w
                    const y = pixelY / h
                    const v = f(x, y)
                    const [r, g, b, a] = [v, v, v, 255]
                    bitmap.data[(w * pixelY + pixelX) * 4 + 0] = r
                    bitmap.data[(w * pixelY + pixelX) * 4 + 1] = g
                    bitmap.data[(w * pixelY + pixelX) * 4 + 2] = b
                    bitmap.data[(w * pixelY + pixelX) * 4 + 3] = a
                }
            }
            context.putImageData(bitmap, 0, 0)
            this.setState({ error: null })
        } catch (ex) {
            this.setState({ error: ex.toString() })
        }
    }
    onChange(functionSource) {
        this.setState({ functionSource })
        this.renderMandelbrot()
    }
    render() {
        return (
            <div>
                <h1>Mandelbrot Set</h1>
                {this.state.error ? (
                    <p
                        style={{
                            fontFamily: 'monospace',
                            width: '600px',
                            height: '600px',
                        }}>
                        {this.state.error}
                    </p>
                ) : null}
                <canvas
                    id="myCanvas"
                    width="600"
                    height="600"
                    ref={c => (this.canvas = c)}
                    style={{
                        margin: '20px 0 20px 0',
                        display: this.state.error ? 'none' : 'unset',
                    }}
                />
                <textarea
                    value={this.state.functionSource}
                    onChange={e => this.onChange(e.target.value)}
                    style={{
                        width: '600px',
                    }}
                    rows={this.state.functionSource.split('\n').length + 1}
                />
            </div>
        )
    }
}
