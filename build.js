const fs = require('fs')
const Mustache = require('mustache')
const autolinks = require('autolinks')

// recursively mutate data with 'autolinks'
const recursiveAutolink = data => {
  for (const key in data) {
    if (typeof data[key] === 'string') {
      data[key] = autolinks(data[key], 'markdown')
    } else if (Array.isArray(data[key])) {
      data[key].forEach(recursiveAutolink)
    } else if (typeof data[key] === 'object') {
      recursiveAutolink(data[key])
    }
  }
  return data
}

const data = recursiveAutolink(JSON.parse(fs.readFileSync('./data.json', 'utf8')))
const viewMarkdown = fs.readFileSync('./view_markdown.mustache', 'utf8')
const output = Mustache.render(viewMarkdown, data)
console.log(output)
