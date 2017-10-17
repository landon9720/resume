const Autolinker = require('autolinker')

module.exports = function f(source) {
  return JSON.stringify(recursiveAutolink(JSON.parse(source), 'html'))
}

  // recursively mutate data with 'Autolinker'
const recursiveAutolink = (data, options) => {
  const f = data => {
    for (const key in data) {
      if (typeof data[key] === 'string') {
        data[key] = Autolinker.link(data[key], options)
      } else if (Array.isArray(data[key])) {
        data[key].forEach(f)
      } else if (typeof data[key] === 'object') {
        f(data[key])
      }
    }
    return data
  }
  return f(data)
}
