const fs = require('fs')
const Mustache = require('mustache')

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'))
const viewMarkdown = fs.readFileSync('./view_markdown.mustache', 'utf8')
const output = Mustache.render(viewMarkdown, data)

console.log(output)
