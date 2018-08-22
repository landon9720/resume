import React from 'react'
import _ from 'lodash'

const functionSource = `
  // view
  var left = -2
  var top = +1.5
  var right = +1
  var bottom = -1.5
  // map x and y to mandelbrot space
  x = x * (right - left) + left
  y = y * (top - bottom) + bottom
  var iterations = 255
  var zx = 0
  var zy = 0
  var iter = iterations
  while (zx * zx + zy * zy < 4 && iter > 0) {
    let tmp = zx * zx - zy * zy + x
    zy = 2 * zx * zy + y
    zx = tmp
    iter -= 1
  }
  var min = 0
  var max = 255
  var v = ((max - min) + min) * (iter - min)
  v = Math.min(Math.max(v, 0), 1)
  v *= 255
  return [v, v, v, 255]
`

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
        const f = new Function('x', 'y', this.state.functionSource)
        for (let pixelY = 0; pixelY < h; pixelY++) {
            for (let pixelX = 0; pixelX < w; pixelX++) {
                const x = (pixelX / w)
                const y = (pixelY / h)
                const [r, g, b, a] = f(x, y)
                bitmap.data[(w * pixelY + pixelX) * 4 + 0] = r
                bitmap.data[(w * pixelY + pixelX) * 4 + 1] = g
                bitmap.data[(w * pixelY + pixelX) * 4 + 2] = b
                bitmap.data[(w * pixelY + pixelX) * 4 + 3] = a
            }
        }
        context.putImageData(bitmap, 0, 0)
    }
    onChange(functionSource) {
      console.log(functionSource)
      this.setState({ functionSource });
      this.renderMandelbrot()
    }
    render() {
        return (
            <div>
                <h1>Mandelbrot Set</h1>
                <textarea
                    value={this.state.functionSource}
                    onChange={e => this.onChange(e.target.value)}
                    style={{
                      width: '500px',
                    }}
                    rows={this.state.functionSource.split('\n').length + 1}
                />
                <canvas id="myCanvas" width="500" height="500" ref={c => (this.canvas = c)} />
            </div>
        )
    }
}
