import React from "react"

export default class Mandelbrot extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.renderMandelbrot()
  }
  renderMandelbrot() {
    console.assert(this.canvas)
    const context = this.canvas.getContext("2d")
    const w = this.canvas.width
    const h = this.canvas.height
    const bitmap = context.createImageData(w, h)
    function f(x, y) {
      const left = -2
      const top = 1.5
      const right = 1
      const bottom = -1.5
      x = x * (right - left) + left
      y = y * (top - bottom) + bottom
      const iterations = 200
      var zx = 0
      var zy = 0
      var v = 0
      while (zx * zx + zy * zy < 4 && v < iterations) {
        let tmp = zx * zx - zy * zy + x
        zy = 2 * zx * zy + y
        zx = tmp
        v++
      }
      return (1 - Math.pow(v / iterations - 1, 4)) * 255
    }
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
  }
  render() {
    return (
      <canvas
        ref={(c) => (this.canvas = c)}
      />
    )
  }
}
